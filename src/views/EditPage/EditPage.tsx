import { useNavigate, useParams } from "react-router-dom"
import { Product } from "../../Product"
import { useState } from "react";
import { StyledEditPage } from "./styles/StyledEditPage";


interface EditPageProps {
    products: Product[],
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>
}

export const EditPage = ({products, setProducts}: EditPageProps) => {
    const navigate = useNavigate();
    const handleBack = () => navigate("/");
    const params = useParams();
    const id = parseInt(params.id!);
    const product = products.find(product => product.id === id);

    const [name, setName] = useState(product!.name);
    const [color, setColor] = useState(product!.color);
    const [price, setPrice] = useState(product!.price);
    const [quantity, setQuantity] = useState(product!.quantity);
    const [size, setSize] = useState(product!.size);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }
    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value); // refers tot the elem that triggered the event => 
                                // the input value of the label
    }
    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(parseInt(e.target.value));
    }
    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(parseInt(e.target.value));
    }
    const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSize(parseInt(e.target.value));
    }

    const editProduct = () => {
        if (!name || !color || !price || !quantity || !size){
            alert("Please enter all fields!");
            return;
        }
        const newProducts = products.map(product => {
            if (product.id === id){
                return {
                    ...product,
                    name: name,
                    color: color,
                    price: price,
                    quantity: quantity,
                    size: size
                }
            }
            return product;
        })
        setProducts(newProducts);
        navigate("/");
    }

    return (
        <StyledEditPage>
            <div id="tableContent">
                <div>
                    <label>Name: </label>
                    <input type="text" value={name} onChange = {handleNameChange}/>
                </div>
                <div>
                    <label>Color: </label>
                    <input type="text" value={color} onChange = {handleColorChange}/>
                </div>
                <div>
                    <label>Price: </label>
                    <input type="number" value={price} onChange={handlePriceChange}/>
                </div>
                <div>
                    <label>Quantity: </label>
                    <input type="number" value={quantity} onChange={handleQuantityChange}/>
                </div>
                <div>
                    <label>Size: </label>
                    <input type="number" value={size} onChange={handleSizeChange}/>
                </div>
                <button onClick={editProduct}>Edit yarn</button>
                <button onClick={handleBack}>Back</button>
            </div>
        </StyledEditPage>
    )
}