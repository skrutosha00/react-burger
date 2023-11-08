import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import fetchJson from "utils/fetchJson";

type TForm = { [key: string]: string };

type TSubmitParams = {
  event: FormEvent;
  url: string;
  body: { [key: string]: string };
  toLink?: string;
};

export default function useForm(formFields: string[]) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isFormPending, setIsFormPending] = useState(false);
  const [formState, setFormState] = useState<TForm>(
    formFields.reduce((state, field) => ({ ...state, [field]: "" }), {})
  );
  const navigate = useNavigate();

  const isFormCompleted = Object.values(formState).every((value) => value !== "");
  const isSubmitButtonActive = isFormCompleted && !isFormPending;

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  }

  function changePasswordVisability() {
    setIsPasswordVisible(!isPasswordVisible);
  }

  async function submitHandler({ event, url, body, toLink }: TSubmitParams) {
    event.preventDefault();

    try {
      setIsFormPending(true);
      await fetchJson(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(body)
      });

      if (toLink) {
        navigate(toLink);
      }
    } catch (err) {
      setIsFormPending(false);
      console.log((err as Error)?.message);
    }
  }

  return {
    isPasswordVisible,
    changePasswordVisability,
    formState,
    onChange,
    submitHandler,
    isSubmitButtonActive,
    isFormCompleted
  };
}
