import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Movie = ({title, img, id}) => {
    return (
        <Card style={{width: '18rem'}}>
            <Card.Img variant='top' src={img}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Button variant="dark">Details</Button>
            </Card.Body>
        </Card>
    )
}

export default Movie
