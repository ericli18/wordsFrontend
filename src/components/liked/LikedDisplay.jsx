import { useQuery } from "@tanstack/react-query";
import userService from "../../services/user";
import WordCard from "./WordCard";
import { useLikedDispatch } from "../../contexts/LikedContext";

const LikedDisplay = ({ user }) => {
  const likedDispatch = useLikedDispatch();

  if (!user) {
    return <h2 className="liked-header">please login</h2>;
  }
  const { isLoading, error, data } = useQuery({
    queryKey: ["user"],
    queryFn: () => userService.getUser(user.id),
    onSuccess: (data) => {
      likedDispatch({ type: "SET_LIKED", payload: data.words });
    },
  });

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  const words = data.words;
  return (
    <>
      <h2 className="liked-header">Liked words</h2>
      <div className="card-container">
        {words.map((word) => (
          <WordCard key={word.id} word={word} />
        ))}
      </div>
    </>
  );
};
export default LikedDisplay;
