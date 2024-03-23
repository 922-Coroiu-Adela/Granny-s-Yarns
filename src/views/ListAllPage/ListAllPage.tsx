import { Product } from "../../Product"
import { ProductTable } from "./components/ProductTable/ProductTable"
import { StyledListAllPage } from "./styles/StyledListAllPage"


interface ListAllPageProps {
    products: Product[]
}

export const ListAllPage = ({products}: ListAllPageProps) => {
    return (
        <StyledListAllPage>
            <div id="tableContainer">
                <ProductTable products={products} />
            </div>
            <img id="catVsYarn" src="/catVsYarn.gif"/>
        </StyledListAllPage>
    )
}