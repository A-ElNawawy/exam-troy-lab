import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import PreOrders from "./pages/PreOrders/PreOrders";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/preOrders' element={<PreOrders />} />

        <Route path='/' element={<Home />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
