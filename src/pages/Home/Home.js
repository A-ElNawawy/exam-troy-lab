import Layout from "./../../components/Layout/Layout";
import Categories from "./../../components/Categories/Categories";
import Products from "./../../components/Products/Products";
import SearchResults from "./../../components/SearchResults/SearchResults";

const Home = () => {
  return (
    <Layout
      aside={<SearchResults />}
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
