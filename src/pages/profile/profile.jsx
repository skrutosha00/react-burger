import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EmailInput, Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./profile.module.css";
import formStyles from "styles/form.module.css";
import ProfileSidebar from "components/profile-sidebar/profile-sidebar";
import { updateUser } from "services/actions/updateUser";
import { getToken } from "services/actions/token";

const footerText = "В этом разделе вы можете просмотреть свою историю заказов";

export default function ProfilePage() {
  const dispatch = useDispatch();
  const { user, accessToken, refreshToken } = useSelector((store) => store.auth);
  const { updateUserRequest, updateUserFailed } = useSelector((store) => store.updateUser);

  const initialFormState = {
    name: { value: user.name, isActive: false },
    email: { value: user.email, isActive: false },
    password: { value: "", isActive: false }
  };
  const [formState, setFormState] = useState(initialFormState);

  const formChanged = Object.keys(formState).some((key) => initialFormState[key].value !== formState[key].value);
  const isButtonActive = formChanged && !updateUserRequest;

  useEffect(() => {
    if (!updateUserFailed || !accessToken) return;
    submitForm();
  }, [accessToken]);

  useEffect(() => {
    if (!updateUserFailed) return;
    dispatch(getToken(JSON.stringify({ token: refreshToken })));
  }, [updateUserFailed]);

  function onIconClick(e) {
    const inputElem = e.target.closest(".input").querySelector("input");

    setFormState({
      ...formState,
      [inputElem.name]: {
        ...formState[inputElem.name],
        isActive: true
      }
    });

    setTimeout(() => {
      inputElem.focus();
    }, 0);
  }

  function onBlur(e) {
    const inputElem = e.target;

    setFormState({
      ...formState,
      [inputElem.name]: {
        ...formState[inputElem.name],
        isActive: false
      }
    });
  }

  function onChange(e) {
    const inputElem = e.target;

    setFormState({
      ...formState,
      [inputElem.name]: {
        ...formState[inputElem.name],
        value: inputElem.value
      }
    });
  }

  function onCancelClick() {
    setFormState(initialFormState);
  }

  function submitForm() {
    dispatch(
      updateUser(
        JSON.stringify({
          name: formState.name.value,
          email: formState.email.value,
          password: formState.password.value
        })
      )
    );
  }

  function onSubmit(e) {
    e.preventDefault();
    submitForm();
  }

  return (
    <main className={styles.main}>
      <ProfileSidebar activeIndex={0} footerText={footerText} extraClass={styles.sidebar} />
      <form onSubmit={onSubmit} className={formStyles.formCont}>
        <Input
          placeholder="Имя"
          value={formState.name.value}
          name="name"
          icon={"EditIcon"}
          onIconClick={onIconClick}
          onBlur={onBlur}
          onChange={onChange}
          disabled={!formState.name.isActive}
          extraClass="mb-6"
        />
        <EmailInput
          placeholder="Логин"
          value={formState.email.value}
          name="email"
          icon={"EditIcon"}
          onIconClick={onIconClick}
          onBlur={onBlur}
          onChange={onChange}
          disabled={!formState.email.isActive}
          extraClass="mb-6"
        />
        <Input
          type="password"
          placeholder="Пароль"
          value={formState.password.value}
          name="password"
          icon={"EditIcon"}
          onIconClick={onIconClick}
          onBlur={onBlur}
          onChange={onChange}
          disabled={!formState.password.isActive}
          extraClass="mb-6"
        />
        <div className={styles.buttons}>
          <Button type="secondary" htmlType="button" onClick={onCancelClick}>
            Отмена
          </Button>
          <Button htmlType="submit" disabled={!isButtonActive}>
            Сохранить
          </Button>
        </div>
      </form>
    </main>
  );
}
