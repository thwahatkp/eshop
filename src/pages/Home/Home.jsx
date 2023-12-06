import Categories from "./Categories";
import SliderHome from "./SliderHome";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section>
        <div className="container max-w-[90%] flex flex-col lg:flex-row lg:justify-between m-auto">
          <Categories />
          <SliderHome />
        </div>
      </section>
    </>
  );
};

export default Home;
