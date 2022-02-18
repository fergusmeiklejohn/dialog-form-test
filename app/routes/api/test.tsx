import { ActionFunction, LoaderFunction, redirect } from "remix";

export const action: ActionFunction = async ({ request }) => {
  console.log("called api/test.tsx: action");

  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(redirect(`/`));
    }, 2000)
  );
};

export const loader: LoaderFunction = async () => {
  console.log("called api/test.tsx: loader");
  return redirect(`/`);
};
