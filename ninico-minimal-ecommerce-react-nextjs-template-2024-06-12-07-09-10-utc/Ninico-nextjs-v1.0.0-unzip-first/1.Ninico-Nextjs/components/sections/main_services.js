import Link from "next/link"


export default function Main_services() {
    const data = [
        {
            tittle: "Car Service",
            cards:[
                {
                    name: "Mechanic 1", 
                    price: "$31.00", 
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrpufpb5kotiA1-SxV0TilyD0JuQz-j5u08Q&s",
                    stars: 5
                },{
                    name: "Mechanic 2",
                    price: "$31.00",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrpufpb5kotiA1-SxV0TilyD0JuQz-j5u08Q&s",
                    stars: 1
                },{
                    name: "Mechanic 3",
                    price: "$31.00",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrpufpb5kotiA1-SxV0TilyD0JuQz-j5u08Q&s",
                    stars: 2
                },{
                    name: "Mechanic 4",
                    price: "$31.00",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrpufpb5kotiA1-SxV0TilyD0JuQz-j5u08Q&s",
                    stars: 4
                }
            ]
        },{
            tittle: "Plumber Service",
            cards:[
                {
                    name: "Plumber 1",
                    price: "$31.00",
                    img: "https://media.licdn.com/dms/image/C5103AQGbRXzUy57DNQ/profile-displayphoto-shrink_200_200/0/1572365989364?e=2147483647&v=beta&t=32uTDCFHX0blbzRv_uBz2a_R1gOqXas8GVojlRm7ENA",
                    stars: 3
                },{
                    name: "Plumber 2",
                    price: "$31.00",
                    img: "https://media.licdn.com/dms/image/C5103AQGbRXzUy57DNQ/profile-displayphoto-shrink_200_200/0/1572365989364?e=2147483647&v=beta&t=32uTDCFHX0blbzRv_uBz2a_R1gOqXas8GVojlRm7ENA",
                    stars: 5
                },{
                    name: "Plumber 3",
                    price: "$31.00",
                    img: "https://media.licdn.com/dms/image/C5103AQGbRXzUy57DNQ/profile-displayphoto-shrink_200_200/0/1572365989364?e=2147483647&v=beta&t=32uTDCFHX0blbzRv_uBz2a_R1gOqXas8GVojlRm7ENA",
                    stars: 4
                },{
                    name: "Plumber 4",
                    price: "$31.00",
                    img: "https://media.licdn.com/dms/image/C5103AQGbRXzUy57DNQ/profile-displayphoto-shrink_200_200/0/1572365989364?e=2147483647&v=beta&t=32uTDCFHX0blbzRv_uBz2a_R1gOqXas8GVojlRm7ENA",
                    stars: 2
                }
            ]
        },{
            tittle: "Electrician Service",
            cards:[
                {
                    name: "Electrician 1",
                    price: "$31.00",
                    img: "https://cdn.vectorstock.com/i/500p/19/53/cartoon-electrician-cable-man-vector-29651953.jpg",
                    stars: 1
                },{
                    name: "Electrician 2",
                    price: "$31.00",
                    img: "https://cdn.vectorstock.com/i/500p/19/53/cartoon-electrician-cable-man-vector-29651953.jpg",
                    stars: 3
                },{
                    name: "Electrician 3",
                    price: "$31.00",
                    img: "https://cdn.vectorstock.com/i/500p/19/53/cartoon-electrician-cable-man-vector-29651953.jpg",
                    stars: 5
                },{
                    name: "Electrician 4",
                    price: "$31.00",
                    img: "https://cdn.vectorstock.com/i/500p/19/53/cartoon-electrician-cable-man-vector-29651953.jpg",
                    stars: 4
                }
            ]
        },{
            tittle: "Carpenter Service",
            cards:[
                {
                    name: "Carpenter 1",
                    price: "$31.00",
                    img: "https://t3.ftcdn.net/jpg/01/52/72/80/360_F_152728021_uUCcnhwVt8F2uy4lcC5llRa1U6bbP3KA.jpg",
                    stars: 2
                },{
                    name: "Carpenter 2",
                    price: "$31.00",
                    img: "https://t3.ftcdn.net/jpg/01/52/72/80/360_F_152728021_uUCcnhwVt8F2uy4lcC5llRa1U6bbP3KA.jpg",
                    stars: 1
                },{
                    name: "Carpenter 3",
                    price: "$31.00",
                    img: "https://t3.ftcdn.net/jpg/01/52/72/80/360_F_152728021_uUCcnhwVt8F2uy4lcC5llRa1U6bbP3KA.jpg",
                    stars: 3
                },{
                    name: "Carpenter 4",
                    price: "$31.00",
                    img: "https://t3.ftcdn.net/jpg/01/52/72/80/360_F_152728021_uUCcnhwVt8F2uy4lcC5llRa1U6bbP3KA.jpg",
                    stars: 4
                }
            ]
        }
    ]
    return (
        <>
            <section className="selected-product-area pt-95 pb-100">
                <div className="container">
                    {/* <div className="row">
                        <div className="col-xxl-3 col-lg-6 col-md-6">
                            <div className="tpselectproduct">
                                <h4 className="tpselectproduct__heading mb-35">Biscuit  Snacks</h4>
                                <div className="tpselectproduct__item d-flex align-items-center mb-25">
                                    <div className="tpselectproduct__thumb mr-25">
                                        <img src="assets/img/product/home-five/product-1.jpg" alt="thumb" />
                                    </div>
                                    <div className="tpselectproduct__content">
                                        <div className="tpselectproduct__rating">
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link className="max-star" href="#"><i className="fas fa-star" /></Link>
                                        </div>
                                        <h4 className="tpselectproduct__title"><Link href="/shop-details-2">Miko Wooden Bluetooth Speaker</Link></h4>
                                        <h5 className="tpselectproduct__price">$31.00</h5>
                                    </div>
                                </div>
                                <div className="tpselectproduct__item d-flex align-items-center mb-25">
                                    <div className="tpselectproduct__thumb mr-25">
                                        <img src="assets/img/product/home-five/product-3.jpg" alt="thumb" />
                                    </div>
                                    <div className="tpselectproduct__content">
                                        <div className="tpselectproduct__rating">
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link className="max-star" href="#"><i className="fas fa-star" /></Link>
                                        </div>
                                        <h4 className="tpselectproduct__title"><Link href="/shop-details-2">Gorgeous Wooden Gloves</Link></h4>
                                        <h5 className="tpselectproduct__price">$31.00</h5>
                                    </div>
                                </div>
                                <div className="tpselectproduct__item d-flex align-items-center mb-25">
                                    <div className="tpselectproduct__thumb mr-25">
                                        <img src="assets/img/product/home-five/product-5.jpg" alt="thumb" />
                                    </div>
                                    <div className="tpselectproduct__content">
                                        <div className="tpselectproduct__rating">
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link className="max-star" href="#"><i className="fas fa-star" /></Link>
                                        </div>
                                        <h4 className="tpselectproduct__title"><Link href="/shop-details-2">Pinkol Enormous Granite Bottle</Link></h4>
                                        <h5 className="tpselectproduct__price">$31.00</h5>
                                    </div>
                                </div>
                                <div className="tpselectproduct__item d-flex align-items-center mb-25">
                                    <div className="tpselectproduct__thumb mr-25">
                                        <img src="assets/img/product/home-five/product-7.jpg" alt="thumb" />
                                    </div>
                                    <div className="tpselectproduct__content">
                                        <div className="tpselectproduct__rating">
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link className="max-star" href="#"><i className="fas fa-star" /></Link>
                                        </div>
                                        <h4 className="tpselectproduct__title"><Link href="/shop-details-2">Gorgeous Aluminum Table</Link></h4>
                                        <h5 className="tpselectproduct__price">$31.00</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-lg-6 col-md-6">
                            <div className="tpselectproduct">
                                <h4 className="tpselectproduct__heading mb-35">Chocolate</h4>
                                <div className="tpselectproduct__item d-flex align-items-center mb-25">
                                    <div className="tpselectproduct__thumb mr-25">
                                        <img src="assets/img/product/home-five/product-9.jpg" alt="thumb" />
                                    </div>
                                    <div className="tpselectproduct__content">
                                        <div className="tpselectproduct__rating">
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link className="max-star" href="#"><i className="fas fa-star" /></Link>
                                        </div>
                                        <h4 className="tpselectproduct__title"><Link href="/shop-details-2">Evo Lightweight Granite Shirt</Link></h4>
                                        <h5 className="tpselectproduct__price">$31.00</h5>
                                    </div>
                                </div>
                                <div className="tpselectproduct__item d-flex align-items-center mb-25">
                                    <div className="tpselectproduct__thumb mr-25">
                                        <img src="assets/img/product/home-five/product-11.jpg" alt="thumb" />
                                    </div>
                                    <div className="tpselectproduct__content">
                                        <div className="tpselectproduct__rating">
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link className="max-star" href="#"><i className="fas fa-star" /></Link>
                                        </div>
                                        <h4 className="tpselectproduct__title"><Link href="/shop-details-2">CLCo. Incredible Paper Car</Link></h4>
                                        <h5 className="tpselectproduct__price">$31.00</h5>
                                    </div>
                                </div>
                                <div className="tpselectproduct__item d-flex align-items-center mb-25">
                                    <div className="tpselectproduct__thumb mr-25">
                                        <img src="assets/img/product/home-five/product-13.jpg" alt="thumb" />
                                    </div>
                                    <div className="tpselectproduct__content">
                                        <div className="tpselectproduct__rating">
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link className="max-star" href="#"><i className="fas fa-star" /></Link>
                                        </div>
                                        <h4 className="tpselectproduct__title"><Link href="/shop-details-2">Miko Wooden Bluetooth Speaker</Link></h4>
                                        <h5 className="tpselectproduct__price">$31.00</h5>
                                    </div>
                                </div>
                                <div className="tpselectproduct__item d-flex align-items-center mb-25">
                                    <div className="tpselectproduct__thumb mr-25">
                                        <img src="assets/img/product/home-five/product-15.jpg" alt="thumb" />
                                    </div>
                                    <div className="tpselectproduct__content">
                                        <div className="tpselectproduct__rating">
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link className="max-star" href="#"><i className="fas fa-star" /></Link>
                                        </div>
                                        <h4 className="tpselectproduct__title"><Link href="/shop-details-2">Progash Durable Granite Hat</Link></h4>
                                        <h5 className="tpselectproduct__price">$31.00</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-lg-6 col-md-6">
                            <div className="tpselectproduct">
                                <h4 className="tpselectproduct__heading mb-35">Shakes  Biscuit</h4>
                                <div className="tpselectproduct__item d-flex align-items-center mb-25">
                                    <div className="tpselectproduct__thumb mr-25">
                                        <img src="assets/img/product/home-five/product-17.jpg" alt="thumb" />
                                    </div>
                                    <div className="tpselectproduct__content">
                                        <div className="tpselectproduct__rating">
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link className="max-star" href="#"><i className="fas fa-star" /></Link>
                                        </div>
                                        <h4 className="tpselectproduct__title"><Link href="/shop-details-2">Miko Wooden Bluetooth Speaker</Link></h4>
                                        <h5 className="tpselectproduct__price">$31.00</h5>
                                    </div>
                                </div>
                                <div className="tpselectproduct__item d-flex align-items-center mb-25">
                                    <div className="tpselectproduct__thumb mr-25">
                                        <img src="assets/img/product/home-five/product-19.jpg" alt="thumb" />
                                    </div>
                                    <div className="tpselectproduct__content">
                                        <div className="tpselectproduct__rating">
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link className="max-star" href="#"><i className="fas fa-star" /></Link>
                                        </div>
                                        <h4 className="tpselectproduct__title"><Link href="/shop-details-2">Pinkol Enormous Granite Bottle</Link></h4>
                                        <h5 className="tpselectproduct__price">$31.00</h5>
                                    </div>
                                </div>
                                <div className="tpselectproduct__item d-flex align-items-center mb-25">
                                    <div className="tpselectproduct__thumb mr-25">
                                        <img src="assets/img/product/home-five/product-21.jpg" alt="thumb" />
                                    </div>
                                    <div className="tpselectproduct__content">
                                        <div className="tpselectproduct__rating">
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link className="max-star" href="#"><i className="fas fa-star" /></Link>
                                        </div>
                                        <h4 className="tpselectproduct__title"><Link href="/shop-details-2">Progash Durable Granite Hat</Link></h4>
                                        <h5 className="tpselectproduct__price">$31.00</h5>
                                    </div>
                                </div>
                                <div className="tpselectproduct__item d-flex align-items-center mb-25">
                                    <div className="tpselectproduct__thumb mr-25">
                                        <img src="assets/img/product/home-five/product-22.jpg" alt="thumb" />
                                    </div>
                                    <div className="tpselectproduct__content">
                                        <div className="tpselectproduct__rating">
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link className="max-star" href="#"><i className="fas fa-star" /></Link>
                                        </div>
                                        <h4 className="tpselectproduct__title"><Link href="/shop-details-2">Miko Wooden Bluetooth Speaker</Link></h4>
                                        <h5 className="tpselectproduct__price">$31.00</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-lg-6 col-md-6">
                            <div className="tpselectproduct">
                                <h4 className="tpselectproduct__heading mb-35">Cake  Honey</h4>
                                <div className="tpselectproduct__item d-flex align-items-center mb-25">
                                    <div className="tpselectproduct__thumb mr-25">
                                        <img src="assets/img/product/home-five/product-23.jpg" alt="thumb" />
                                    </div>
                                    <div className="tpselectproduct__content">
                                        <div className="tpselectproduct__rating">
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link className="max-star" href="#"><i className="fas fa-star" /></Link>
                                        </div>
                                        <h4 className="tpselectproduct__title"><Link href="/shop-details-2">Miko Wooden Bluetooth Speaker</Link></h4>
                                        <h5 className="tpselectproduct__price">$31.00</h5>
                                    </div>
                                </div>
                                <div className="tpselectproduct__item d-flex align-items-center mb-25">
                                    <div className="tpselectproduct__thumb mr-25">
                                        <img src="assets/img/product/home-five/product-24.jpg" alt="thumb" />
                                    </div>
                                    <div className="tpselectproduct__content">
                                        <div className="tpselectproduct__rating">
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link className="max-star" href="#"><i className="fas fa-star" /></Link>
                                        </div>
                                        <h4 className="tpselectproduct__title"><Link href="/shop-details-2">Miko Wooden Bluetooth Speaker</Link></h4>
                                        <h5 className="tpselectproduct__price">$31.00</h5>
                                    </div>
                                </div>
                                <div className="tpselectproduct__item d-flex align-items-center mb-25">
                                    <div className="tpselectproduct__thumb mr-25">
                                        <img src="assets/img/product/home-five/product-25.jpg" alt="thumb" />
                                    </div>
                                    <div className="tpselectproduct__content">
                                        <div className="tpselectproduct__rating">
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link className="max-star" href="#"><i className="fas fa-star" /></Link>
                                        </div>
                                        <h4 className="tpselectproduct__title"><Link href="/shop-details-2">Gorgeous Wooden Gloves</Link></h4>
                                        <h5 className="tpselectproduct__price">$31.00</h5>
                                    </div>
                                </div>
                                <div className="tpselectproduct__item d-flex align-items-center mb-25">
                                    <div className="tpselectproduct__thumb mr-25">
                                        <img src="assets/img/product/home-five/product-9.jpg" alt="thumb" />
                                    </div>
                                    <div className="tpselectproduct__content">
                                        <div className="tpselectproduct__rating">
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link href="#"><i className="fas fa-star" /></Link>
                                            <Link className="max-star" href="#"><i className="fas fa-star" /></Link>
                                        </div>
                                        <h4 className="tpselectproduct__title"><Link href="/shop-details-2">Purab Enormous Miranda Bottle</Link></h4>
                                        <h5 className="tpselectproduct__price">$31.00</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="row">
                        {data.map((item, index) => (
                            <div key={index} className="col-xxl-3 col-lg-6 col-md-6">
                                <div className="tpselectproduct">
                                    <h4 className="tpselectproduct__heading mb-35">{item.tittle}</h4>
                                    {item.cards.map((card, index) => (
                                        <div key={index} className="tpselectproduct__item d-flex align-items-center mb-25">
                                            <div className="tpselectproduct__thumb mr-25">
                                                <img src={card.img} alt="thumb" />
                                            </div>
                                            <div className="tpselectproduct__content">
                                                <h5 className="tpselectproduct__price"><Link href="/shop-details-2">{card.name}</Link></h5>
                                                <h4 className="tpselectproduct__title">{card.price}</h4>
                                                <div className="tpselectproduct__rating">
                                                    {[...Array(card.stars)].map((star, index) => (
                                                        <Link key={index} href="#"><i className="fas fa-star" /></Link>
                                                    ))}
                                                    {[...Array(5 - card.stars)].map((star, index) => (
                                                        <Link key={index} className="max-star" href="#"><i className="fas fa-star" /></Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
