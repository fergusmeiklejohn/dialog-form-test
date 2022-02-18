import { useEffect, useRef } from "react";
import { Form, useTransition } from "remix";

export default function FormTest() {
  const transition = useTransition();
  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => {
    if (transition.state === "idle") formRef.current?.reset();
  }, [transition]);

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
              Dialog Form Test
            </h2>
          </div>
          <Form className="mt-8" method="post" action="/api/test" ref={formRef}>
            <fieldset
              disabled={transition.state === "submitting"}
              className="space-y-6"
            >
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {transition.state === "submitting" ? "Submitting" : "Submit"}
                </button>
              </div>
            </fieldset>
          </Form>
        </div>
      </div>
    </>
  );
}
