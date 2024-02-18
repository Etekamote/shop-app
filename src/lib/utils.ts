import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import prisma from "./db";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const checkIfEmailExists = async (email: string) => {
  const count = await prisma.users.count({
    where: {
      email: email,
    },
  });
  return count;
};

export const getUser = async (email = "") => {
  const user = await prisma.users.findUnique({
    where: {
      email: email,
    },
  });
  return user;
};
