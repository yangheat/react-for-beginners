import { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const id = useParams().id;

  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return <div>Detail Page</div>;
}

export default Detail;
