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

export const getProducts = async () => {
  const products = await prisma.products.findMany();
  return products;
};

export const getProduct = async (id: number) => {
  const product = await prisma.products.findUnique({
    where: {
      id: id,
    },
  });
  return product;
};

export const getImages = async (productId: number) => {
  const images = await prisma.productsImages.findMany({
    where: {
      productId: productId,
    },
  });
  return images;
};

export const getImage = async (productId: number) => {
  const image = await prisma.productsImages.findMany({
    where: {
      productId: productId,
    },
  });
  return image[0];
};

export const getReviews = async (productId: number) => {
  const reviews = await prisma.reviews.findMany({
    where: {
      productId: productId,
    },
  });
  return reviews;
};
