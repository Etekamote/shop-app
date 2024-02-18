import { getReviews } from "@/lib/utils";
import Review from "./review";

type ReviewsProps = {
  id: number;
  rating: number;
  reviews: number;
};

export default async function Reviews({ id, rating, reviews }: ReviewsProps) {
  const productReviews = await getReviews(Number(id));

  if (productReviews.length === 0) {
    return <div>No reviews yet</div>;
  }

  return (
    <section>
      <div className="flex items-center gap-x-6 text-2xl border-b pb-2 ">
        <h2 className="font-bold">Reviews ({productReviews.length})</h2>
        <p>
          <span className="font-bold text-blue-500">
            {reviews == 0 ? 0 : rating / reviews}
          </span>
          /5.00
        </p>
      </div>
      <div className="space-y-8 mt-6">
        {productReviews?.map((review: any) => (
          <Review
            key={review.id}
            content={review.content}
            rating={review.rating}
            userName={review.userName}
            date={review.date}
          />
        ))}
      </div>
    </section>
  );
}
