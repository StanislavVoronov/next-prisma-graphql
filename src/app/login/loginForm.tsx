"use client";

import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import Input from "../components/input";
import * as yup from "yup";

interface Values {
  phone: string;
  password: string;
}

const LoginForm = () => {
  const router = useRouter();

  const initialValues: Values = {
    phone: "",
    password: "",
  };

  const validationSchema: yup.ObjectSchema<Values> = yup.object({
    phone: yup.string().min(3).max(100).required(),
    password: yup.string().required(),
    qwe: yup.string(),
  });

  const handleSubmit = (values: Values) => {
    console.log("🚀 ~ file: loginForm.tsx:7 ~ handleSubmit ~ values:", values);
    router.push("/dashboard");
  };

  return (
    <Formik<Values>
      {...{ initialValues, onSubmit: handleSubmit, validationSchema }}
    >
      <Form className="w-full max-w-sm">
        <div className="mb-6">
          <Input name="phone" label="Телефон" />
        </div>
        <div className="mb-6">
          <Input name="password" label="Пароль" />
        </div>
        <button
          type="submit"
          className="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-slate-900 text-white hover:bg-slate-700 w-full"
        >
          <span>Войти</span>
        </button>
        <input type="hidden" name="remember" value="true" />
      </Form>
    </Formik>
  );
};

export default LoginForm;
