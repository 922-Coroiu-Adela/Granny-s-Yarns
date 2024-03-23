import React, { useState } from "react";
import { Product } from "../../Product";
import { useNavigate } from "react-router-dom";
import { StyledAddPage } from "./styles/StyledAddPage";

interface AddPageProps {
    products: Product[],
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>
}

export const AddPage = ({products, setProducts}: AddPageProps) => {
    const navigate = useNavigate();
    const handleBack = () => navigate("/");

    const [name, setName] = useState('');
    const [color, setColor] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [size, setSize] = useState('');

    // the function takes as a parameter an event of the specified type
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }
    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value); // refers tot the elem that triggered the event => 
                                // the input value of the label
    }
    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(e.target.value);
    }
    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(e.target.value);
    }
    const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSize(e.target.value);
    }
    const getID = () => {
        let maxID = 0;
        products.forEach((product) => {
            if (product.id > maxID){
                maxID = product.id;
            }
        });
        return maxID + 1;
    }

    const addProduct = () => {
        if (!name || !color || !price || !quantity || !size){
            alert("Please enter all fields!");
            return;
        }
        const newProducts = [
            ...products,
            {  
                id: getID(),
                name: name,
                color: color,
                price: parseInt(price),
                quantity: parseInt(quantity),
                size: parseInt(size)
            }
        ]

        setProducts(newProducts);
        navigate("/");
    }


    return (
        <StyledAddPage>
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
                <button onClick={addProduct}>Add yarn</button>
                <button onClick={handleBack}>Back</button>
            </div>
        </StyledAddPage>
    )
}