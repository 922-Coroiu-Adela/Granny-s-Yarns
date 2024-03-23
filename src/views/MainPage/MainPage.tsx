import { Product } from "../../Product";
import { StyledMainPage } from "./styles/StyledMainPage";
import { ProductTable } from "./components/ProductTable/ProductTable";
import { useNavigate } from "react-router-dom";

interface MainPageProps {
    products: Product[],
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>
}

export const MainPage = ({products, setProducts}: MainPageProps) => {
    const navigate = useNavigate();
    const handleAdd = () => navigate("yarn/add");
    const handleViewAll = () => navigate("yarn/list");

    return (
        <StyledMainPage>
            <div id="tableContainer">
                <h1 id="tableTitle">Products</h1>
                <ProductTable products={products} setProducts={setProducts}/>
            </div>
            <button id="addButton" onClick={handleAdd}>Add yarn</button>
            <button id="viewAllButton" onClick={handleViewAll}>View all yarns</button>

        </StyledMainPage>
        
    )
}
