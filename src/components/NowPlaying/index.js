import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

const NowPlaying = ({ movies }) => {
    return (
        <section>
            <h1>Now Playing</h1>
            <Carousel className="border rounded bg-secondary p-5 shadow">
                {movies.map(movie => (
                    <Carousel.Item key={movie.id}>
                        <div className="d-flex align-items-center">
                            <img className="image-fluid rounded" style={{ maxWidth: '350px' }} width={'40%'} src={movie.img} alt={movie.title} />
                            <div className="text-center">
                            <h4
                            className="m-5 hide-on-small">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur</h4>
                            </div>
                        </div>
                        <Carousel.Caption>
                            <h3>{movie.title}</h3>
                            <h5>{movie.rating}</h5>
                            <Button className="btn-lg btn-dark">Details</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </section>
    );
};

export default NowPlaying;
