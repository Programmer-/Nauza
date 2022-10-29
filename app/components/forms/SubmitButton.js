import React from "react";
import AppButton from "../AppButton";
import { useFormikContext } from "formik";

function SubmitButton({ title, color }) {
  const { handleSubmit } = useFormikContext();

  return <AppButton color={color} title={title} onPress={handleSubmit} />;
}

export default SubmitButton;
