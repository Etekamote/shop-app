"use server";
import prisma from "../../prisma/db";

export const getTest = async () => {
  const data = await prisma.test.findMany();
  return data;
};
