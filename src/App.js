import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import Movie from './components/Movie';

function App() {
  return (
    <>
      <NavBar />
      <Movie title={'Deadpool vs Wolverine'} img={'/images/movie1.jpeg'} id={1} />
    </>
  );
}

export default App;
