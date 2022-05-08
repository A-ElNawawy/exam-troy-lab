import Categories from "./../../components/Categories/Categories";
import Layout from "./../../components/Layout/Layout";
import Products from "./../../components/Products/Products";

const Home = () => {
  return (
    <Layout
      aside={"aside"}
      content={
        <>
          <Categories />
          <Products />
        </>
      }
    />
  );
};

export default Home;
