'use client'
import Link from "next/link"
import { useState } from "react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
    },

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.slider-pagination',
        clickable: true,
    },

}


export default function Main_slider() {
    const [isToggled, setToggled] = useState(true)
    const handleToggle = () => setToggled(!isToggled)
    return (
        <>
            <section className="slider-area slider-bg-overlay pb-30 pt-60 " data-background="assets/img/banner/banner-bg-05.jpg">
                <div className="container">
                    <div className="row justify-content-between gy-4">
                        <div className="col-xl-7 col-lg-12 justify-content-lg-center row-cols-xxl-1 row-cols-xl-1 row-cols-lg-12 row-cols-md-1 row-cols-sm-1 row-cols-1 align-items-center">
                            <div className="tp-slider-area p-relative row justify-content-xl-center">
                                <div className="swiper-container slider-active d-flex row justify-content-lg-center">
                                    <Swiper {...swiperOptions} className="d-flex justify-content-center align-items-center">
                                        <SwiperSlide>
                                            <div className="tp-slide-item tpslider-item-5">
                                                <div className="tp-slide-item__content">
                                                    <h4 className="tp-slide-item__sub-title">Quality  Fresh Products</h4>
                                                    <h3 className="tp-slide-item__title mb-25">Fresh Grocery <br /> Products.</h3>
                                                    <Link className="tp-slide-item__slide-btn tp-btn" href="/shop-2">Shop Now <i className="fal fa-long-arrow-right" /></Link>
                                                </div>
                                                <div className="tp-slide-item__img">
                                                    <img src="assets/img/slider/slider-05-bg-1.jpg" alt="" />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="tp-slide-item tpslider-item-5">
                                                <div className="tp-slide-item__content">
                                                    <h4 className="tp-slide-item__sub-title">Quality  Fresh Products</h4>
                                                    <h3 className="tp-slide-item__title mb-25">Fresh Grocery <br /> Products.</h3>
                                                    <Link className="tp-slide-item__slide-btn tp-btn" href="/shop-2">Shop Now <i className="fal fa-long-arrow-right" /></Link>
                                                </div>
                                                <div className="tp-slide-item__img">
                                                    <img src="assets/img/slider/slider-05-bg-2.jpg" alt="" />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="tp-slide-item tpslider-item-5">
                                                <div className="tp-slide-item__content">
                                                    <h4 className="tp-slide-item__sub-title">Quality  Fresh Products</h4>
                                                    <h3 className="tp-slide-item__title mb-25">Fresh Grocery <br /> Products.</h3>
                                                    <Link className="tp-slide-item__slide-btn tp-btn" href="/shop-2">Shop Now <i className="fal fa-long-arrow-right" /></Link>
                                                </div>
                                                <div className="tp-slide-item__img">
                                                    <img src="assets/img/slider/slider-05-bg-3.jpg" alt="" />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="tp-slide-item tpslider-item-5">
                                                <div className="tp-slide-item__content">
                                                    <h4 className="tp-slide-item__sub-title">Quality  Fresh Products</h4>
                                                    <h3 className="tp-slide-item__title mb-25">Fresh Grocery <br /> Products.</h3>
                                                    <Link className="tp-slide-item__slide-btn tp-btn" href="/shop-2">Shop Now <i className="fal fa-long-arrow-right" /></Link>
                                                </div>
                                                <div className="tp-slide-item__img">
                                                    <img src="assets/img/slider/slider-05-bg-4.jpg" alt="" />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                                <div className="slider-pagination" />
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-12 col align-items-center">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="tpslider-banner mb-30 tpbnner-height-5">
                                        <Link href="/shop-2">
                                            <div className="tpslider-banner__img tpbannerthumb-5">
                                                <img src="assets/img/slider/slider-05-banner-1.jpg" alt="" />
                                                <div className="tpslider-banner__content">
                                                    <span className="tpslider-banner__sub-title">Best Bakery Products</span>
                                                    <h4 className="tpslider-banner__title">100% Fresh Product <br /> Every Hour</h4>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="tpslider-banner white-banner">
                                        <Link href="/shop">
                                            <div className="tpslider-banner__img tpbannerthumb-5">
                                                <img src="assets/img/slider/slider-05-banner-2.jpg" alt="" />
                                                <div className="tpslider-banner__content">
                                                    <span className="tpslider-banner__sub-title">Best Bakery Products</span>
                                                    <h4 className="tpslider-banner__title">100% Fresh Product <br /> Every Hour</h4>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="tpslider-banner white-banner">
                                        <Link href="/shop">
                                            <div className="tpslider-banner__img tpbannerthumb-5">
                                                <img src="assets/img/slider/slider-05-banner-2.jpg" alt="" />
                                                <div className="tpslider-banner__content">
                                                    <span className="tpslider-banner__sub-title">Best Bakery Products</span>
                                                    <h4 className="tpslider-banner__title">100% Fresh Product <br /> Every Hour</h4>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="tpslider-banner mb-30 tpbnner-height-5">
                                        <Link href="/shop-2">
                                            <div className="tpslider-banner__img tpbannerthumb-5">
                                                <img src="assets/img/slider/slider-05-banner-1.jpg" alt="" />
                                                <div className="tpslider-banner__content">
                                                    <span className="tpslider-banner__sub-title">Best Bakery Products</span>
                                                    <h4 className="tpslider-banner__title">100% Fresh Product <br /> Every Hour</h4>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-60">
                        <div className="col-lg-3 col-sm-6">
                            <div className="tpservicesitem tpservices-border d-flex align-items-center mb-30">
                                <div className="tpservicesitem__icon mr-20">
                                    <img src="/assets/img/svg/services05.svg" alt="" className="fn__svg" />
                                </div>
                                <div className="tpservicesitem__content">
                                    <h4 className="tpservicesitem__title">Free shipping</h4>
                                    <p>Free shipping orders over $65.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="tpservicesitem tpservices-border d-flex align-items-center mb-30">
                                <div className="tpservicesitem__icon mr-20">
                                    <img src="/assets/img/svg/services06.svg" alt="" className="fn__svg" />
                                </div>
                                <div className="tpservicesitem__content">
                                    <h4 className="tpservicesitem__title">Free Returns</h4>
                                    <p>30-days free return policy</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="tpservicesitem tpservices-border d-flex align-items-center mb-30">
                                <div className="tpservicesitem__icon mr-20">
                                    <img src="/assets/img/svg/services07.svg" alt="" className="fn__svg" />
                                </div>
                                <div className="tpservicesitem__content">
                                    <h4 className="tpservicesitem__title">Secured Payments</h4>
                                    <p>We accept all major credit cards</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="tpservicesitem tpservices-border d-flex align-items-center mb-30">
                                <div className="tpservicesitem__icon mr-20">
                                    <img src="/assets/img/svg/services08.svg" alt="" className="fn__svg" />
                                </div>
                                <div className="tpservicesitem__content">
                                    <h4 className="tpservicesitem__title">Customer Service</h4>
                                    <p>Top notch customer setvice</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
