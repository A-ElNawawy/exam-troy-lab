import Categories from "./../../components/Categories/Categories";
import Layout from "./../../components/Layout/Layout";
import Products from "./../../components/Products/Products";

const PreOrders = () => {
  return (
    <Layout
      aside={"aside2"}
      content={
        <>
          <div>Preorders</div>
          <Categories />
          <Products />
        </>
      }
    />
  );
};

export default PreOrders;
