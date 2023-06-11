import FlashDeals from "./Deals/FlashDeals";
import Discount from "./Discount/Discount";
import Home from "./Home";
import NewArrivals from "./NewArrivals/NewArrivals";
import Shop from "./Shop/Shop";
import TopCategory from "./TopCategory/TopCategory";
function HomePage() {
  return (
    <>
      <Home />
      <FlashDeals />
      <TopCategory />
      <NewArrivals />
      <Discount />
      <Shop />
    </>
  );
}

export default HomePage;
