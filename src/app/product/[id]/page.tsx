import { products } from "@/lib/constants";
import Images from "../_components/images";
import ProductContent from "../_components/product-content";
import { notFound } from "next/navigation";
import Reviews from "../_components/reviews";
import AddReview from "../_components/add-review";

type ProductPageProps = {
  params: {
    id: string;
  };
};

export default function ProductPage({ params }: ProductPageProps) {
  const id = params.id;
  const product = products.find((product) => product.id === Number(id));

  if (!product) {
    notFound();
  }

  return (
    <main className="space-y-8">
      <section className="flex flex-col gap-y-10 lg:flex-row lg:gap-y-0 lg:justify-between">
        <Images img1={product.img1} img2={product.img2} />
        <ProductContent
          name={product.name}
          description={product.description}
          price={product.price}
          stock={product.stock}
        />
      </section>
      <Reviews
        id={product.id}
        avgRating={product.ratingTotal / product.reviewsCount}
      />
      <AddReview />
    </main>
  );
}
