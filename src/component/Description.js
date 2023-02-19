import React from "react";
import { moviesData } from "./moviesData";
import { useParams, useNavigate } from "react-router-dom";
import ReactPlayer from 'react-player';

function Description() {
  const { idmovie } = useParams();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const movie = moviesData.find((el) => el.id === Number(idmovie));

  return (
    <div>
      <h6>{movie.description}</h6>
      <div className="video-container">
        <ReactPlayer
          url={movie.TrailerLink}
          controls
          width="100%"
          height="100%"
        />
      </div>
      <button className="back-button" onClick={goBack}>
        Back
      </button>
    </div>
  );
}

export default Description;


