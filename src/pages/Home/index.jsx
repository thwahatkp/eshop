import FlashDeals from "./Deals/FlashDeals";
import Home from "./Home";
import NewArrivals from "./NewArrivals/NewArrivals";
import TopCategory from "./TopCategory/TopCategory";
function HomePage() {
  return (
    <>
      <Home />
      <FlashDeals />
      <TopCategory />
      <NewArrivals />
    </>
  );
}

export default HomePage;
