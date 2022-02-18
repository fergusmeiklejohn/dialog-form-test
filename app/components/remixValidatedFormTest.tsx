import { ValidatedForm } from "remix-validated-form";
import { EmailValidator } from "~/validators/loginValidator";

export default function RemixValidatedFormTest() {
  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Dialog Test
            </h2>
            <p className="mt-3 text-center text-lg text-gray-600">
              Remix Validated Form
            </p>
          </div>
          <ValidatedForm
            className="divide-light-stroke-divider dark:divide-dark-stroke-divider space-y-8 divide-y"
            action="/api/test"
            method="post"
            validator={EmailValidator}
          >
            <FormTextInput
              type="email"
              label="email"
              name="email"
              placeholder="yourname@email.com"
            />

            <FormSubmitButton className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" />
          </ValidatedForm>
        </div>
      </div>
    </>
  );
}

import { useField } from "remix-validated-form";

type InputProps = {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
};

export const FormTextInput = ({
  name,
  label,
  placeholder = "",
  type = "text",
}: InputProps) => {
  const { error, getInputProps } = useField(name);
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        {...getInputProps({ id: name })}
        placeholder={placeholder}
        type={type}
        className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
      />
      {error && <span className="mt-2 text-sm text-red-600">{error}</span>}
    </div>
  );
};

import { useIsSubmitting } from "remix-validated-form";

type ButtonProps = {
  className?: string;
};

export const FormSubmitButton = ({ className = "" }: ButtonProps) => {
  const isSubmitting = useIsSubmitting();
  return (
    <button type="submit" disabled={isSubmitting} className={className}>
      {isSubmitting ? "Submitting..." : "Submit"}
    </button>
  );
};
