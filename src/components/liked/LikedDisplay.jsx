import { useQuery } from "@tanstack/react-query";
import userService from "../../services/user";
import WordCard from "./WordCard";

const LikedDisplay = ({ user }) => {
  if (!user) {
    return <div>please login</div>;
  }
  const { isLoading, error, data } = useQuery({
    queryKey: ["user"],
    queryFn: () => userService.getUser(user.id),
  });

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  const words = data.words;
  return (
    <div>
      <h2>Liked words</h2>
      <div className="card-container">
        {words.map((word) => (
          <WordCard key={word.id} word={word} />
        ))}
      </div>
    </div>
  );
};
export default LikedDisplay;
