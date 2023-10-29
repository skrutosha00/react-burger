import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";

import { PASSWORD_FORGOT_URL } from "utils/globalVars";
import styles from "styles/form.module.css";
import useForm from "hooks/useForm";

const formFields = ["email"];

export default function ForgotPasswordPage() {
  const { formState, onChange, submitHandler, isSubmitButtonActive } = useForm(formFields);
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  const submitOptions = {
    url: PASSWORD_FORGOT_URL,
    toLink: "/reset-password",
    body: { email: formState.email }
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
      <Input placeholder="Укажите e-mail" onChange={onChange} value={formState.email} name="email" extraClass="mb-6" />

      <Button htmlType="submit" size="medium" extraClass={styles.button} disabled={!isSubmitButtonActive}>
        Восстановить
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
