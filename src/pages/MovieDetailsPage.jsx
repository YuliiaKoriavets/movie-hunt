import { useParams } from 'react-router-dom';

function MovieDetailsPage() {
  const { id } = useParams();

  return <h1>Movie Details for ID: {id}</h1>;
}

export default MovieDetailsPage;
