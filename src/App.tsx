import { useState } from "react"
import { mockProducts } from "./Product"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./views/MainPage/MainPage";
import { DetailsPage } from "./views/DetailsPage/DetailsPage";
import { AddPage } from "./views/AddPage/AddPage";
import { ListAllPage } from "./views/ListAllPage/ListAllPage";
import { EditPage } from "./views/EditPage/EditPage";

export const App = () => {

    const [products, setProducts] = useState(mockProducts);
    console.log(products);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element= {<MainPage products={products} setProducts={setProducts}/>}/>
                <Route path="yarn/:id" element={<DetailsPage products={products}/>}/>
                <Route path="yarn/add" element={<AddPage products={products} setProducts={setProducts}/>}/>
                <Route path="yarn/list" element={<ListAllPage products={products} />}/>
                <Route path="yarn/edit/:id" element={<EditPage products={products} setProducts={setProducts}/>}/>
            </Routes>
        </BrowserRouter>
    )
}