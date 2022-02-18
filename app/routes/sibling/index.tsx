import { useState } from "react";
import { Form } from "remix";
import BaseDialog from "~/components/baseDialog";
import FormTest from "~/components/formTest";

export default function Index() {
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <>
      <div className="flex min-h-screen flex-col items-center space-y-10 p-20">
        <h1>
          Test Form Component in sibling route path hitting api route action
        </h1>
        {/* <FormTest /> */}
        <button
          type="button"
          onClick={() => setOpenDialog(true)}
          className="mt-10 group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Open Dialog
        </button>
      </div>
      <BaseDialog open={openDialog} setOpen={setOpenDialog}>
        <div className="bg-gray-100 p-10">
          <h1>Test Form Component from HeadlessUI dialog</h1>
          <FormTest />
        </div>
      </BaseDialog>
    </>
  );
}
