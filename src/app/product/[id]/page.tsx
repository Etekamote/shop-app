import { products } from "@/lib/constants";
import Images from "../_components/images";
import ProductContent from "../_components/product-content";
import { notFound } from "next/navigation";
import Reviews from "../_components/reviews";
import AddReview from "../_components/add-review";
import { getImages, getProduct } from "@/lib/utils";

type ProductPageProps = {
  params: {
    id: string;
  };
};

export default async function ProductPage({ params }: ProductPageProps) {
  const id = params.id;
  const product = await getProduct(Number(id));
  const images = await getImages(Number(id));

  if (!product) {
    notFound();
  }

  return (
    <main className="space-y-8">
      <section className="flex flex-col gap-y-10 lg:flex-row lg:gap-y-0 lg:justify-between">
        <Images img1={images[0].image} img2={images[1].image} />
        <ProductContent
          name={product.name}
          description={product.description || ""}
          price={product.price}
          stock={product.stock}
        />
      </section>
      <Reviews
        id={product.id}
        rating={product.rating}
        reviews={product.reviews}
      />
      <AddReview />
    </main>
  );
}
