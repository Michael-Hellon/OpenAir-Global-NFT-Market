import ArtList from "../components/ArtList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";

const Home = () => {
  return (
    <h1 style={{ /*backgroundColor: "lightblue",borderRadius:"5%",*/ maxWidth: "95%", margin: "1% 2.5% 1% 2.5%", padding: "1% 5% 1% 5%"}}>

    <div className="container">
      <CategoryMenu />
      <ArtList />
      <Cart />
    </div>
    </h1>
  );
};

export default Home;
