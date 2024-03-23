import { useNavigate, useParams } from "react-router-dom"
import { StyledDetailsPage } from "./styles/StyledDetailsPage"
import { Product } from "../../Product";

interface DetailsPageProps {
    products: Product[]
}

export const DetailsPage = ({products}: DetailsPageProps) => {
    const string_id = useParams().id;
    const navigate = useNavigate();
    if (string_id === undefined)
    {
        navigate("/");
    }
    const id = parseInt(string_id!);
    const product = products[id];
    const handleBack = () => navigate("/");
    return (
        <StyledDetailsPage>
            <div id="tableContent">
                <h1>Product details</h1>
                <div>Name: {product.name}</div>
                <div>Color: {product.color}</div>
                <div>Price: {product.price}</div>
                <div>Quantity: {product.quantity}</div>
                <div>Size: {product.size}</div>
                <button id='backButton' onClick={() => handleBack()}>Back</button>
                
            </div>
            <img id="catGif" src="/catPlaying.gif"/>
        </StyledDetailsPage>
    )
}