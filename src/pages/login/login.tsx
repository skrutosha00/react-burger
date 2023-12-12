import { FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  EmailInput,
  Input
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "styles/form.module.css";
import useForm from "hooks/useForm";
import { login } from "services/actions/login";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";

const formFields = ["email", "password"];

export default function LoginPage() {
  const {
    isPasswordVisible,
    changePasswordVisability,
    formState,
    onChange,
    isFormCompleted
  } = useForm(formFields);
  const dispatch = useAppDispatch();
  const { loginRequest } = useAppSelector((store) => store.login);

  const isSubmitButtonActive = isFormCompleted && !loginRequest;

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    dispatch(
      login(
        JSON.stringify({
          email: formState.email,
          password: formState.password
        })
      )
    );
  }

  return (
    <form className={styles.formCont} onSubmit={onSubmit}>
      <h1 className="text text_type_main-medium mb-6">Вход</h1>
      <EmailInput
        placeholder="E-mail"
        onChange={onChange}
        value={formState.email}
        name="email"
        extraClass="mb-6"
      />
      <Input
        type={isPasswordVisible ? "text" : "password"}
        placeholder="Пароль"
        onChange={onChange}
        value={formState.password}
        name="password"
        icon={isPasswordVisible ? "HideIcon" : "ShowIcon"}
        onIconClick={changePasswordVisability}
        extraClass="mb-6"
      />

      <Button
        htmlType="submit"
        size="medium"
        disabled={!isSubmitButtonActive}
        extraClass={styles.button}>
        Войти
      </Button>

      <div className={`${styles.linkText} text text_type_main-default mb-4`}>
        Вы — новый пользователь?{" "}
        <Link to="/register">
          <Button
            htmlType="button"
            type="secondary"
            size="medium"
            extraClass={styles.link}>
            Зарегистрироваться
          </Button>
        </Link>
      </div>
      <div className={`${styles.linkText} text text_type_main-default mb-4`}>
        Забыли пароль?{" "}
        <Link to="/forgot-password">
          <Button
            htmlType="button"
            type="secondary"
            size="medium"
            extraClass={styles.link}>
            Восстановить пароль
          </Button>
        </Link>
      </div>
    </form>
  );
}
