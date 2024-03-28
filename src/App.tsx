import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HeroSectin from "./components/heroSection/HeroSectin";
import MatrixSection from "./components/matrixSection/MatrixSection";
import Movies from "./components/moviesSection/movies";
import PostSection from "./components/postSection/PostSection";

function App() {
  return (
    <div>
      <Header />
      <HeroSectin />
      <Movies />
      <MatrixSection />
      <PostSection />
      <Footer />
    </div>
  );
}

export default App;
