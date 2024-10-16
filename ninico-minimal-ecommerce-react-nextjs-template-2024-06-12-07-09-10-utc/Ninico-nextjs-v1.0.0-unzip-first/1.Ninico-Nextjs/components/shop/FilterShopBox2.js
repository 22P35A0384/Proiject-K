'use client'
import { addCart } from "@/features/shopSlice"
import { addWishlist } from "@/features/wishlistSlice"
import { Fragment } from "react"
import { useDispatch } from "react-redux"
import products from "../../data/products"
import ShopCard from "./ShopCard"

const FilterShopBox2 = ({ itemStart, itemEnd }) => {
    const dispatch = useDispatch()

    const addToCart = (id) => {
        const item = products?.find((item) => item.id === id)
        dispatch(addCart({ product: item }))
    }

    const addToWishlist = (id) => {
        const item = products?.find((item) => item.id === id)
        dispatch(addWishlist({ product: item }))
    }

    // Display all products without filtering
    let content = products.slice(itemStart, itemEnd)?.map((item, i) => (
        <Fragment key={i}>
            <ShopCard item={item} addToCart={addToCart} addToWishlist={addToWishlist} />
        </Fragment>
    ))

    return (
        <>
            {content}
        </>
    )
}

export default FilterShopBox2
