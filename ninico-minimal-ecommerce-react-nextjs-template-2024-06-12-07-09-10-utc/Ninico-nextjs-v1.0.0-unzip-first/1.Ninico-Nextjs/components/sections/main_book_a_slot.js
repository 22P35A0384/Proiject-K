
import Link from "next/link"

export default function Book_A_Slot() {
    const data = [
        {
            name:"Doctor Appointment",
            image:"/assets/img/categories/doctor.png",
            count:"20"
        },
        {
            name:"Restaurants",
            image:"https://png.pngtree.com/png-clipart/20200727/original/pngtree-restaurant-logo-design-vector-template-png-image_5441058.jpg",
            count:"15"
        },
        {
            name:"Hotels",
            image:"/assets/img/categories/hotel.png",
            count:"5"
        },
        {
            name:"Movie Tickets",
            image:"/assets/img/categories/movies.png",
            count:"13"
        },
        {
            name:"Bus Tickets",
            image:"/assets/img/categories/bus.png",
            count:"20"
        },
        {
            name:"Flight Tickets",
            image:"/assets/img/categories/flight.png",
            count:"20"
        },
        {
            name:"Doctor Appointment",
            image:"/assets/img/categories/doctor.png",
            count:"20"
        },
        {
            name:"Restaurants",
            image:"https://png.pngtree.com/png-clipart/20200727/original/pngtree-restaurant-logo-design-vector-template-png-image_5441058.jpg",
            count:"15"
        },
        {
            name:"Hotels",
            image:"/assets/img/categories/hotel.png",
            count:"5"
        },
        {
            name:"Movie Tickets",
            image:"/assets/img/categories/movies.png",
            count:"13"
        },
        {
            name:"Bus Tickets",
            image:"/assets/img/categories/bus.png",
            count:"20"
        },
        {
            name:"Flight Tickets",
            image:"/assets/img/categories/flight.png",
            count:"20"
        }
    ]
    return (
        <>
            <section className="category-area pt-70">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tpsection mb-40">
                                <h4 className="tpsection__title">Top <span> Categories <img src="/assets/img/icon/title-shape-01.jpg" alt="" /></span></h4>
                            </div>
                        </div>
                    </div>
                    <div className="custom-row category-border pb-45 row">
    {data.map((ele, i) => {
        return (
            <div key={i} className="col-2 col-sm-2 col-lg-2 tpcategory mb-40">
                <div className="tpcategory__icon">
                    <img src={`${ele.image}`} alt={ele.name} className="fn__svg img-fluid" />
                    <span>{ele.count}</span>
                </div>
                <div className="tpcategory__content">
                    <h5 className="tpcategory__title">
                        <Link href="/shop">{ele.name}</Link>
                    </h5>
                </div>
            </div>
        );
    })}
</div>

                </div>
            </section>
        </>
    )
}
