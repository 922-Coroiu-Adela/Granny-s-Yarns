import { useNavigate } from "react-router-dom";
import { Product } from "../../../../Product";
import { StyledProductTable } from "./styles/StyledProductTable";

interface ProductTableProps {
    products: Product[]
}

export const ProductTable = ({products}: ProductTableProps) => {
    const navigate = useNavigate();
    const handleBack = () => navigate("/");
    return (
        <StyledProductTable>
            <div id="tableContent">
                <thead>
                    <tr>
                        <th>Products</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr>
                            <td>{"Name: " + product.name + " | Color: " + product.color + " | Price: " + product.price + " | Quantity: " +
                             product.quantity + " | Size: " + product.size}</td>
                        </tr>
                    ))}
                </tbody>
            </div>
            <button id="backButton" onClick={handleBack}>Back</button>
        </StyledProductTable>
    )

}