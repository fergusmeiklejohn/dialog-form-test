import { withZod } from "@remix-validated-form/with-zod";
import { z } from "zod";

export const EmailValidator = withZod(
  z.object({
    email: z.string().email(),
  })
);
