import Categories from "./components/Categories/Categories";
import Layout from "./components/Layout/Layout";
import Products from "./components/Products/Products";

function App() {
  return (
    <div className='App'>
      <Layout
        aside={"aside"}
        content={
          <>
            <Categories />
            <Products />
          </>
        }
      />
    </div>
  );
}

export default App;
