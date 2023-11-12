import "./App.css";
import Hero from "./components/hero-section/hero";
import TravelBlog from "./components/travel-blog-sections/travelBlog";
import pages from "./components/travel-blog-sections/page";

function App() {
  const blog = pages.map((item) => {
    return (
      <TravelBlog
        key={item.id}
        heading={item.heading}
        image1={item.image1}
        image2={item.image2}
        image3={item.image3}
        desc={item.desc}
      />
    );
  });

  return (
    <div className="App">
      <Hero />

      <div className="blog-container">{blog}</div>
    </div>
  );
}

export default App;
