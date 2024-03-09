import { Card, Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { Link, useNavigate } from "react-router-dom"; // Importez le composant Link
import "./style.css";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const MovieNavigate = (id) => {
    navigate(`/movie-details/${id}`);
  };
  return (
    <div>
      <>
        <Card className="movie-card">
          <Card.Img variant="top" src={movie.posterurl} />
          <Card.Body className="custom-background">
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>{movie.description}</Card.Text>
            <div className="stars-container">
              <ReactStars
                count={5}
                value={movie.rating}
                //onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
                edit={false}
              />
            </div>
            {/* Utilisez le composant Link pour gérer la navigation */}
            {/* <Link to={`/movie-details/${movie.id}`}> */}

            <Button variant="primary" onClick={() => MovieNavigate(movie.id)}>
              Movie Trailer
            </Button>
            {/* </Link> */}
          </Card.Body>
        </Card>
      </>
    </div>
  );
};
export default MovieCard;
