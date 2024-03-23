import { StyledProductTable } from "./styles/StyledProductTable"
import { Product } from "../../../../Product"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons"

interface ProductTableProps {
    products: Product[],
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>
}

export const ProductTable = ({products, setProducts}: ProductTableProps) => {
    const navigate = useNavigate();
    const handleRowClick = (id: number) => navigate(`yarn/${id}`);
    const handleDeleteClick = (id: number) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this yarn?");
        console.log("Delete button clicked for", id);
        if(isConfirmed){
            deleteProduct(id);
        }
    }
    const deleteProduct = (id: number) => {
        const NewProducts = products.filter((product) => product.id !== id)
        setProducts(NewProducts);
    }
    const handleEditClick = (id: number) => navigate(`yarn/edit/${id}`);
    products.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA > nameB)
        {
            return 1;
        }
        else
        {
            return -1;
        }
        return 0;
    });
    return (
        <StyledProductTable>
            <thead>
                <tr>
                    <th>Product Name</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                    <tr key={product.name+product.color}>
                        <td onClick={() => handleRowClick(product.id)}>{product.name}</td>
                        <td id="deleteButton" onClick={() => handleDeleteClick(product.id)}>
                            <FontAwesomeIcon icon={faTrash} />
                        </td>
                        <td id="editButton" onClick={() => handleEditClick(product.id)}>
                            <FontAwesomeIcon icon={faPenToSquare}/>
                        </td>
                    </tr>
                ))}
            </tbody>
        </StyledProductTable>
    )
}