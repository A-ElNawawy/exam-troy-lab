import Layout from "./components/Layout/Layout";
import Products from "./components/Products/Products";

function App() {
  return (
    <div className='App'>
      <Layout aside={"aside"} content={<Products />} />
    </div>
  );
}

export default App;
