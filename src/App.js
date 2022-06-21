import { Route } from 'react-router-dom'
import Header from './component/Header'
import Footer from './component/Footer'
import Home from './pages/Home'
import Movies from './pages/Movies'
import TvShows from './pages/TV-Shows'
import Categories from './pages/Categories'
import LoginPage from './pages/Login'
import './App.scss'

function App() {
  return (
    <div className="App">
      <Header/>

      <div className='main'>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/tv-shows">
          <TvShows />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
      </div>

      <Footer />
    </div>
  );
}

export default App;
