import { ActionFunction, json, LoaderFunction, redirect } from "remix";

export const action: ActionFunction = async ({ request }) => {
  console.log("api/test.tsx: action");

  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(redirect(`/`));
    }, 2000)
  );
};

export const loader: LoaderFunction = async () => {
  console.log("api/test.tsx: loader");
  return redirect(`/`);
};
