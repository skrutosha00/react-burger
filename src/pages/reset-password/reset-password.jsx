import { Link, useNavigate } from "react-router-dom";
import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";

import { PASSWORD_RESET_URL } from "utils/globalVars";
import styles from "styles/form.module.css";
import useForm from "hooks/useForm";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const formFields = ["password", "code"];

export default function ResetPasswordPage() {
  const { user } = useSelector((store) => store.auth);
  const { isPasswordVisible, changePasswordVisability, formState, onChange, submitHandler, isSubmitButtonActive } =
    useForm(formFields);
  const navigate = useNavigate();

  const submitOptions = {
    url: PASSWORD_RESET_URL,
    toLink: "/login",
    body: {
      token: formState.code,
      password: formState.password
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  }, [user]);

  return (
    <form
      className={styles.formCont}
      onSubmit={(event) => {
        submitHandler({ event, ...submitOptions });
      }}>
      <h1 className="text text_type_main-medium mb-6">Восстановление пароля</h1>
      <Input
        type={isPasswordVisible ? "text" : "password"}
        placeholder="Введите новый пароль"
        onChange={onChange}
        value={formState.password}
        name="password"
        icon={isPasswordVisible ? "HideIcon" : "ShowIcon"}
        onIconClick={changePasswordVisability}
        extraClass="mb-6"
      />
      <Input
        type="text"
        placeholder="Введите код из письма"
        onChange={onChange}
        value={formState.code}
        name="code"
        extraClass="mb-6"
      />

      <Button htmlType="submit" size="medium" disabled={!isSubmitButtonActive} extraClass={styles.button}>
        Войти
      </Button>

      <div className={`${styles.linkText} text text_type_main-default mb-4`}>
        Вспомнили пароль?{" "}
        <Link to="/login">
          <Button htmlType="button" type="secondary" size="medium" extraClass={styles.link}>
            Войти
          </Button>
        </Link>
      </div>
    </form>
  );
}
