import { FormEventHandler } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Input
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "styles/form.module.css";
import useForm from "hooks/useForm";
import { register } from "services/actions/register";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";

const formFields = ["name", "email", "password"];

export default function RegisterPage() {
  const {
    isPasswordVisible,
    changePasswordVisability,
    formState,
    onChange,
    isFormCompleted
  } = useForm(formFields);
  const dispatch = useAppDispatch();
  const { registerRequest } = useAppSelector((store) => store.register);

  const isSubmitButtonActive = isFormCompleted && !registerRequest;

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    dispatch(
      register(
        JSON.stringify({
          name: formState.name,
          email: formState.email,
          password: formState.password
        })
      )
    );
  };

  return (
    <form onSubmit={onSubmit} className={styles.formCont}>
      <h1 className="text text_type_main-medium mb-6">Регистрация</h1>
      <Input
        placeholder="Имя"
        onChange={onChange}
        value={formState.name}
        name="name"
        extraClass="mb-6"
      />
      <Input
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
        disabled={!isSubmitButtonActive}
        size="medium"
        extraClass={styles.button}>
        Зарегистрироваться
      </Button>

      <div className={`${styles.linkText} text text_type_main-default mb-4`}>
        Уже зарегистрированы?{" "}
        <Link to="/login">
          <Button
            htmlType="button"
            type="secondary"
            size="medium"
            extraClass={styles.link}>
            Войти
          </Button>
        </Link>
      </div>
    </form>
  );
}
