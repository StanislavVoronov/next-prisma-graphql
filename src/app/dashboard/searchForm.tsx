"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Form, Formik } from "formik";
import { usePathname, useRouter } from "next/navigation";
import * as yup from "yup";
import Input from "../components/input";

interface Values {
  search: string;
}

const SearchForm = () => {
  const router = useRouter();
  const pathname = usePathname();

  const initialValues = {
    search: "",
  };

  const validationSchema = yup.object({
    search: yup.string().min(3).max(100).required(),
  });

  const handleOnSubmit = (values: Values) => {
    if (values.search.length < 2) {
      return;
    }
    console.log("🚀 ~ file: page.tsx:25 ~ handleOnSubmit ~ values:", values);
    router.push(`${pathname}?search=${values.search}`);
  };

  return (
    <Formik<Values>
      {...{ initialValues, onSubmit: handleOnSubmit, validationSchema }}
      validateOnChange={false}
      validateOnBlur={false}
    >
      <Form className="flex items-start gap-4 mb-6">
        <Input
          type="text"
          name="search"
          icon={MagnifyingGlassIcon}
          placeholder="Поиск по имени"
          autoComplete="off"
        />

        <button
          className="rounded-lg text-sm font-medium px-3 py-2 bg-slate-900 text-white hover:bg-slate-700"
          type="submit"
        >
          Поиск
        </button>
      </Form>
    </Formik>
  );
};

export default SearchForm;
