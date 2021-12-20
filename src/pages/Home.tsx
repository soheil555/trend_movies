import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadMovies } from "actions/moviesAction";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMovies());
  }, []);

  return <div></div>;
}
