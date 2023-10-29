import { useState } from "react";
import { useNavigate } from "react-router-dom";

import fetchJson from "utils/fetchJson";

export default function useForm(formFields) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isFormPending, setIsFormPending] = useState(false);
  const [formState, setFormState] = useState(formFields.reduce((state, field) => ({ ...state, [field]: "" }), {}));
  const navigate = useNavigate();

  const isFormCompleted = Object.values(formState).every((value) => value !== "");
  const isSubmitButtonActive = isFormCompleted && !isFormPending;

  function onChange(e) {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  }

  function changePasswordVisability() {
    setIsPasswordVisible(!isPasswordVisible);
  }

  async function submitHandler({ event, url, body, toLink }) {
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
      console.log(err);
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
