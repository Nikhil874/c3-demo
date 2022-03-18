import { Navbar } from "./Navbar";
import {Routes,Route} from "react-router-dom"
import { HomePage } from "./HomePage";
import { ProductsPage } from "./ProductsPage";
import { ProductsDetailsPage } from "./ProductsDetailsPage";
import { NotFoundPage } from "./NotFoundPage";

export const Routers = () => {
  return (
    <>
      <Navbar />
      {/* Add Routes here */}
     <Routes>
         <Route path="/" element={<HomePage/>}></Route>
         <Route path="/products" element={<ProductsPage/>}></Route>
         <Route path="/products/:id" element={<ProductsDetailsPage/>}></Route>
         <Route path="/notfound" element={<NotFoundPage/>}></Route>
     </Routes>
    </>
  );
};
