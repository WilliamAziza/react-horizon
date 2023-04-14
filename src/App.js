import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Carousel from './Carousel';
import AlbumCat from './AlbumCat';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Carousel/>
      <AlbumCat/>
      <Footer/>
    </div>
  );
}

export default App;
