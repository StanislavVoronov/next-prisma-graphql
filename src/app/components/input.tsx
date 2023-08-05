import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { Field, FieldHookConfig, FieldInputProps, useField } from "formik";
import React, { useRef } from "react";

type InputType = React.FC<
  FieldHookConfig<string> &
    Readonly<{
      label?: string;
      icon?: React.FC;
    }>
>;

const Input: InputType = ({ icon, label, ...props }) => {
  const ref = useRef<HTMLInputElement>(null);
  const [field, meta, helpers] = useField(props);
  console.log("🚀 ~ file: input.tsx:17 ~ meta, helpers:", meta, helpers);

  const handleIconClick = () => {
    if (ref.current) {
      ref.current.focus();
    }
  };

  return (
    <div className="inline-block w-full">
      {label && (
        <label
          htmlFor={props.name}
          className="block text-sm font-medium leading-6 text-gray-900 mb-2"
        >
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div
            className="absolute top-0 bottom-0 text-gray-600 dark:text-gray-400 flex items-center pl-4 h-full cursor-text"
            onClick={handleIconClick}
          >
            {React.createElement<any>(icon, { color: "#000", width: 18 })}
          </div>
        )}
        <input
          ref={ref}
          type="text"
          id={props.name}
          className={clsx(
            "appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-9 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-slate-200",
            icon && "pl-12"
          )}
          {...{
            placeholder: props.placeholder,
            autoComplete: props.autoComplete,
            required: props.required,
            ...(props as any),
          }}
          {...field}
        />
      </div>
      {meta.error && (
        <div className="text-xs pt-2">
          <div className="flex gap-2">
            <ExclamationTriangleIcon width={16} />
            <p>{meta.error}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Input;
