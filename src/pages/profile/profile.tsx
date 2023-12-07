import {
  useState,
  useEffect,
  FocusEvent,
  MouseEvent,
  ChangeEvent,
  FormEventHandler,
} from "react";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./profile.module.css";
import ProfileSidebar from "components/profile-sidebar/profile-sidebar";
import { updateUser } from "services/actions/updateUser";
import { getToken } from "services/actions/token";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";

type TFormField = {
  isActive: boolean;
  value: string;
};

type TForm = {
  name: TFormField;
  email: TFormField;
  password: TFormField;
};

const footerText = "В этом разделе вы можете изменить свои персональные данные";

export default function ProfilePage() {
  const dispatch = useAppDispatch();
  const { user, accessToken, refreshToken } = useAppSelector(
    (store) => store.auth
  );
  const { updateUserRequest, updateUserFailed } = useAppSelector(
    (store) => store.updateUser
  );

  const initialFormState: TForm = {
    name: { value: user!.name, isActive: false },
    email: { value: user!.email, isActive: false },
    password: { value: "", isActive: false },
  };
  const [formState, setFormState] = useState<TForm>(initialFormState);

  const formChanged = Object.keys(formState).some((key) => {
    const field = key as keyof TForm;
    return initialFormState[field].value !== formState[field].value;
  });
  const isButtonActive = formChanged && !updateUserRequest;

  useEffect(() => {
    if (!updateUserFailed || !accessToken) return;
    submitForm();
  }, [accessToken]);

  useEffect(() => {
    if (!updateUserFailed) return;
    dispatch(getToken(JSON.stringify({ token: refreshToken })));
  }, [updateUserFailed]);

  function onIconClick(e: MouseEvent<HTMLDivElement>) {
    const iconElem = e.target as HTMLDivElement;
    const inputElem = iconElem
      ?.closest(".input")
      ?.querySelector("input") as HTMLInputElement;

    setFormState({
      ...formState,
      [inputElem.name]: {
        ...formState[inputElem.name as keyof TForm],
        isActive: true,
      },
    });

    setTimeout(() => {
      inputElem.focus();
    }, 0);
  }

  function onBlur(e: FocusEvent<HTMLInputElement, Element>) {
    const inputElem = e.target;

    setFormState({
      ...formState,
      [inputElem.name]: {
        ...formState[inputElem.name as keyof TForm],
        isActive: false,
      },
    });
  }

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    const inputElem = e.target;

    setFormState({
      ...formState,
      [inputElem.name]: {
        ...formState[inputElem.name as keyof TForm],
        value: inputElem.value,
      },
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
          password: formState.password.value,
        })
      )
    );
  }

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    submitForm();
  };

  return (
    <main className={styles.main}>
      <ProfileSidebar
        activeIndex={0}
        footerText={footerText}
        extraClass={styles.sidebar}
      />
      <form onSubmit={onSubmit} className={""}>
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
        <Input
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
