import StarBorderIcon from "@mui/icons-material/StarBorder";

type ReviewProps = {
  rating: number;
  content: string;
  userName: string;
  date: string;
};

export default function Review({
  rating,
  content,
  userName,
  date,
}: ReviewProps) {
  return (
    <div className="bg-gray-100/80 rounded-lg p-4 space-y-4">
      <p>
        <span className="font-bold text-blue-500">{userName}</span>{" "}
        <span>
          <StarBorderIcon className="text-yellow-700" /> {rating}
        </span>
      </p>
      <p className="text-gray-600"> {content}</p>
      <p className="text-xs">{date}</p>
    </div>
  );
}
