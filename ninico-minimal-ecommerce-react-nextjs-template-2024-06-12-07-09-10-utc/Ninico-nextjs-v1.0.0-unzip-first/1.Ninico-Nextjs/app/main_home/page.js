
import Layout from "@/components/layout/Layout"
import Getajourneyfrd from "@/components/sections/getajourneyfrd"
import DealProduct4 from "@/components/sections/DealProduct4"
import Book_A_Slot from "@/components/sections/main_book_a_slot"
import Visiting_Places from "@/components/sections/visiting_places"
import Main_services from "@/components/sections/main_services"
import Main_slider from "@/components/sections/main_slider"
import Startups from "@/components/sections/startups"
import Link from "next/link"
export default function Main_Home() {

    return (
        <>
            <Layout headerStyle={6} footerStyle={1}>
                <Main_slider />
                <Book_A_Slot/>
                <Visiting_Places />
                <DealProduct4 /><br/>
                <Main_services />
                <Startups />
                <Getajourneyfrd />
            </Layout>
        </>
    )
}