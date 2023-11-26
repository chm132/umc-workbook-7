import { BrowserRouter, Route, Routes} from "react-router-dom";
import Celebirity from "./pages/Celebirity";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";
import TV from "./pages/TV";
import Header from "./Components/Header";
import MovieDetail from "./pages/MovieDetail";
import LoginPage from "./pages/LoginPage";
import TvDetail from "./pages/TvDetail";


export default function App() {
  return (
    <BrowserRouter>
		  <Header></Header>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/TV" element={<TV/>} />
            <Route path="/Celebirity" element={<Celebirity/>} />
            <Route path="/Movies" element={<Movies/>} />
            <Route path="/*" element={<NotFound />} />    
            <Route path="/movie/:title" element={<MovieDetail />} />
            <Route path="/tv/:name" element={<TvDetail />} />
            <Route path="/LoginPage" element={<LoginPage/>} />
            </Routes>
     </BrowserRouter>
  );
}