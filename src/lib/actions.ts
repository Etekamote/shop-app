"use server";
import { ZodError } from "zod";
import prisma from "./db";
import { RegisterStateT } from "./types";
import { registerFormSchema } from "./validation";
import { checkIfEmailExists } from "./utils";

export const createUser = async (
  prevState: RegisterStateT | null,
  data: FormData
): Promise<RegisterStateT> => {
  try {
    const { name, email, password, repeatPassword } =
      registerFormSchema.parse(data);

    const checkIfUserExists = await checkIfEmailExists(email);

    if (checkIfUserExists) {
      return {
        status: "error",
        message: "User with this email already exists.",
      };
    }

    const newUser = await prisma.users.create({
      data: {
        name: name,
        email: email,
        password: password,
        address1: "",
        city: "",
        state: "",
        zip: "",
      },
    });
    return {
      status: "success",
      message: `Welcome, ${name}!`,
    };
  } catch (e) {
    if (e instanceof ZodError) {
      return {
        status: "error",
        message:
          "Invalid form data. All fields are required, password must be at least 6 characters long and have minimum 1 special character, and passwords must match.",
        errors: (e as ZodError).issues.map((issue) => ({
          path: issue.path.join("."),
          message: `Server validation: ${issue.message}`,
        })),
      };
    }
    return {
      status: "error",
      message: "Something went wrong. Please try again.",
    };
  }
};
