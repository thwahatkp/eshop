// import Announcement from "./Announcement/Announcement";
import FlashDeals from "./Deals/FlashDeals";
import Discount from "./Discount/Discount";
import Home from "./Home";
import NewArrivals from "./NewArrivals/NewArrivals";
import Shop from "./Shop/Shop";
import TopCategory from "./TopCategory/TopCategory";
import Wrapper from "./Wrapper/Wrapper";
function HomePage() {
  return (
    <>
      <Home />
      <FlashDeals />
      <TopCategory />
      <NewArrivals />
      <Discount />
      <Shop />
      {/* <Announcement /> */}
      <Wrapper />
    </>
  );
}

export default HomePage;
