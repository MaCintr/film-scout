import './App.css';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import NavBar from './components/NavBar';
import Movie from './components/Movie';
import NowPlaying from './components/NowPlaying';
import HomePage from './components/HomePage';

function App() {
  const EmptyContainer = styled.div`
  height: 100px;
  `
  return (
    <>
      <NavBar />
      {/* <Movie title={'Deadpool vs Wolverine'} img={'/images/movie1.jpeg'} id={1} /> */}
      <EmptyContainer></EmptyContainer>
      <Container>
        <HomePage />
      </Container>
    </>
  );
}

export default App;
