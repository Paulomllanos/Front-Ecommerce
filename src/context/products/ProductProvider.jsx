import { useReducer } from 'react'

import axiosClient from "../../config/axiosClient"

import ProductContext from "./ProductContext"
import productReducers from "./ProductReducer"

const ProductProvider = ({children}) => {

    const initialState = {
        products: [],
        product: [{
            id_: "",
            nombre: "",
            color: "",
            precio: "",
            imagen: "",
            brand: "",
            stock: ""
        }]
    }

    const [productState, dispatch] = useReducer(productReducers, initialState)

    const getProduct = async (id) => {

        const result = await axiosClient.get(`/products/${id}`)

        const product = result.data.info

        dispatch({
            type: "GET_PRODUCT",
            payload: product
        })
        return product;
    }


    const getProducts = async () => {

        const result = await axiosClient.get("/products")

        dispatch({
            type: "GET_PRODUCTS",
            payload: result.data.info
        })

    }

    // const getPreferenceCheckoutMP = async (dataform) => {

    //     console.log("dataform:", dataform)

    //     const res = await axiosClient.post("/mercadopago", dataform)

    //     return res.data.checkoutId

    // }


    return (
        <ProductContext.Provider
            value={{
                products: productState.products,
                product: productState.product,
                getProduct,
                getProducts      
            }}
        >
            { children }
        </ProductContext.Provider>
    )

}


export default ProductProvider