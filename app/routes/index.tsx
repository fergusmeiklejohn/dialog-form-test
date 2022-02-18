import { useState } from "react";
import { ValidatedForm } from "remix-validated-form";

import BaseDialog from "~/components/baseDialog";
import FormTest from "~/components/formTest";
import RemixValidatedFormTest, {
  FormSubmitButton,
  FormTextInput,
} from "~/components/remixValidatedFormTest";
import { EmailValidator } from "~/validators/loginValidator";

export default function Index() {
  const [openFormDialog, setOpenFormDialog] = useState(false);
  const [openRVFormDialog, setOpenRVFormDialog] = useState(false);
  return (
    <>
      <div className="flex min-h-screen flex-col items-center space-y-10 p-20">
        <h1 className="text-xl">
          Form Tests in dialogs to action in other route
        </h1>
        {/* <FormTest /> */}
        <button
          type="button"
          onClick={() => setOpenFormDialog(true)}
          className="mt-10 group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Open Form Dialog
        </button>
        <button
          type="button"
          onClick={() => setOpenRVFormDialog(true)}
          className="mt-10 group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Open Remix-Validated-Form Dialog
        </button>
        <div className="mt-20">
          <h1 className="text-xl mb-2">
            Remix Validated Form test outside dialog
          </h1>
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
      <BaseDialog open={openRVFormDialog} setOpen={setOpenRVFormDialog}>
        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
          <RemixValidatedFormTest />
        </div>
      </BaseDialog>
      <BaseDialog open={openFormDialog} setOpen={setOpenFormDialog}>
        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
          <FormTest />
        </div>
      </BaseDialog>
    </>
  );
}
