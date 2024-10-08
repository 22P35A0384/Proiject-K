
import Layout from "@/components/layout/Layout"
import Blog4 from "@/components/sections/Blog4"
import DealProduct4 from "@/components/sections/DealProduct4"
import Product4 from "@/components/sections/Product4"
import Main_services from "@/components/sections/main_services"
import Main_slider from "@/components/sections/main_slider"
import Testimonial2 from "@/components/sections/Testimonial2"
import Link from "next/link"
export default function Main_Home() {

    return (
        <>
            <Layout headerStyle={6} footerStyle={1}>
                <Main_slider />
                <Product4 />
                <DealProduct4 />
                <Main_services />
                <Testimonial2 />
                <Blog4 />
            </Layout>
        </>
    )
}