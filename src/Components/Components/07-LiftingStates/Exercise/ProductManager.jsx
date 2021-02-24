import { useState } from "react"
import Basket from "./Basket"
import Product from "./Product"

const ProductManager = () => {

    const[basket, setBasket] = useState([])

    const addToBasket = (data) => {
        setBasket(b=>[...b, data]);
    }

    return (
        <>
            <Product addToBasket={addToBasket} />
            <Basket info={basket} />
        </>
    )
}

export default ProductManager;