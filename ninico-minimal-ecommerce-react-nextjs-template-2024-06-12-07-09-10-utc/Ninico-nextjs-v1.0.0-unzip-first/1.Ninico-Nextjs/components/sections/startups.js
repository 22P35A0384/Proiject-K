'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        1400: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        },
        576: {
            slidesPerView: 1,
        },
        0: {
            slidesPerView: 1,
        },
    },
    // Navigation arrows
    navigation: {
        nextEl: '.tptestiarrow__nxt',
        prevEl: '.tptestiarrow__prv',
    },
}
export default function Startups() {
    return (
        <>
            <section className="testimonial-area pt-65 platinam-light pb-100"><br/><br/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="tpsection mb-35">
                                <h4 className="tpsection__title">Startup Inovations</h4><br/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="tptestiarrow tp-white-testimonial d-flex align-items-center justify-content-end">
                                <div className="tptestiarrow__prv"><i class="bi bi-arrow-left-circle"></i>Prev</div>
                                <div className="tptestiarrow__nxt">Next<i class="bi bi-arrow-right-circle"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-container testi-active tp-white-testimonial">
                        <Swiper {...swiperOptions}>
                            <SwiperSlide>
                                <div className="tptesti text-center">
                                    <div className="tptesti__icon mb-25">
                                        <img src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAQCAYAAAAS7Y8mAAABcElEQVQ4jbXUPWtVQRDG8V9uJr4mSBRM4RvYJEEMiqLYhWAjCFamEVut/A52IZAyjYXmA4igRcBYCIqNFoKFkhSCVUBQQVAQTbyyYS9clj2HiDiwnGXmmf/szu6egYhQ2F5cx1VMYA8uYLUU9tkUbmIaY3hQUlPgHg5gGffxCesNwB2Yxy28xaP8XZNWnMe1iOhGxFJEjPX5m8ZQRKxExLeImC01vcnJDJ3bBrA3FiPia0SM1+K9Hj/HT1xs6WO/ncNLXMLjmiCBJ/EOZ/B6m+DUy0M42yTo4DI+/AV0Zz7kO22i1IdTucDttIMi/hvfsYTP2bcfwxl+uML8gTeRoUk4U4C7GMmFn/SBO7ngCRyp5JzG08gP4AWuVKofx/ucUO70Bl5Vcu7iYCcnDTa0aleDvy2WinY7LYn/ZP8dnA6jZr9acjca/Fus3q3Yh6MV0bEWcLpqtZzRrYeX/1zn8axhR1+KlW/iIxbyvLTdePgHAXhADHlkJs8AAAAASUVORK5CYII=" alt="" className="fn__svg" />
                                    </div>
                                    <div className="tptesti__content pb-5">
                                        <p>“ AI-Powered Food Waste Management: Using artificial intelligence, this platform analyzes food inventory and predicts surplus to help grocery stores and restaurants reduce waste by efficiently donating or selling excess stock. ”
                                        </p>
                                    </div>
                                    <div className="tptesti__avata d-flex align-items-center justify-content-center">
                                        <div className="tptesti__avata-icon mr-20">
                                            <img src="https://tse1.mm.bing.net/th?id=OIP.7RlzBIuOt5peG66NhHLbPwHaHa&pid=Api&P=0&h=180" alt="avata" />
                                        </div>
                                        <div className="tptesti__avata-content text-start">
                                            <h5 className="tptesti__avata-content-title">Gangadhar Jami</h5>
                                            <p>sai8341j11@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="tptesti text-center">
                                    <div className="tptesti__icon mb-25">
                                        <img src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAQCAYAAAAS7Y8mAAABcElEQVQ4jbXUPWtVQRDG8V9uJr4mSBRM4RvYJEEMiqLYhWAjCFamEVut/A52IZAyjYXmA4igRcBYCIqNFoKFkhSCVUBQQVAQTbyyYS9clj2HiDiwnGXmmf/szu6egYhQ2F5cx1VMYA8uYLUU9tkUbmIaY3hQUlPgHg5gGffxCesNwB2Yxy28xaP8XZNWnMe1iOhGxFJEjPX5m8ZQRKxExLeImC01vcnJDJ3bBrA3FiPia0SM1+K9Hj/HT1xs6WO/ncNLXMLjmiCBJ/EOZ/B6m+DUy0M42yTo4DI+/AV0Zz7kO22i1IdTucDttIMi/hvfsYTP2bcfwxl+uML8gTeRoUk4U4C7GMmFn/SBO7ngCRyp5JzG08gP4AWuVKofx/ucUO70Bl5Vcu7iYCcnDTa0aleDvy2WinY7LYn/ZP8dnA6jZr9acjca/Fus3q3Yh6MV0bEWcLpqtZzRrYeX/1zn8axhR1+KlW/iIxbyvLTdePgHAXhADHlkJs8AAAAASUVORK5CYII=" alt="" className="fn__svg" />
                                    </div>
                                    <div className="tptesti__content pb-5">
                                        <p>“ Blockchain-Based Supply Chain Transparency: A blockchain-driven solution tracks food donations from donors to recipients, ensuring transparency, reducing fraud, and verifying that resources are reaching communities in need. ”
                                        </p>
                                    </div>
                                    <div className="tptesti__avata d-flex align-items-center justify-content-center">
                                        <div className="tptesti__avata-icon mr-20">
                                            <img src="https://tse1.mm.bing.net/th?id=OIP.7RlzBIuOt5peG66NhHLbPwHaHa&pid=Api&P=0&h=180" alt="avata" />
                                        </div>
                                        <div className="tptesti__avata-content text-start">
                                            <h5 className="tptesti__avata-content-title">Siri Valavala</h5>
                                            <p>sirivalavala@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="tptesti text-center">
                                    <div className="tptesti__icon mb-25">
                                        <img src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAQCAYAAAAS7Y8mAAABcElEQVQ4jbXUPWtVQRDG8V9uJr4mSBRM4RvYJEEMiqLYhWAjCFamEVut/A52IZAyjYXmA4igRcBYCIqNFoKFkhSCVUBQQVAQTbyyYS9clj2HiDiwnGXmmf/szu6egYhQ2F5cx1VMYA8uYLUU9tkUbmIaY3hQUlPgHg5gGffxCesNwB2Yxy28xaP8XZNWnMe1iOhGxFJEjPX5m8ZQRKxExLeImC01vcnJDJ3bBrA3FiPia0SM1+K9Hj/HT1xs6WO/ncNLXMLjmiCBJ/EOZ/B6m+DUy0M42yTo4DI+/AV0Zz7kO22i1IdTucDttIMi/hvfsYTP2bcfwxl+uML8gTeRoUk4U4C7GMmFn/SBO7ngCRyp5JzG08gP4AWuVKofx/ucUO70Bl5Vcu7iYCcnDTa0aleDvy2WinY7LYn/ZP8dnA6jZr9acjca/Fus3q3Yh6MV0bEWcLpqtZzRrYeX/1zn8axhR1+KlW/iIxbyvLTdePgHAXhADHlkJs8AAAAASUVORK5CYII=" alt="" className="fn__svg" />
                                    </div>
                                    <div className="tptesti__content pb-5">
                                        <p>“ IoT-Enabled Smart Farming Solutions: Leverage Internet of Things (IoT) sensors to optimize water usage, soil health, and crop yields, allowing farmers to grow more food sustainably and donate surplus to food banks. ”
                                        </p>
                                    </div>
                                    <div className="tptesti__avata d-flex align-items-center justify-content-center">
                                        <div className="tptesti__avata-icon mr-20">
                                            <img src="https://tse1.mm.bing.net/th?id=OIP.7RlzBIuOt5peG66NhHLbPwHaHa&pid=Api&P=0&h=180" alt="avata" />
                                        </div>
                                        <div className="tptesti__avata-content text-start">
                                            <h5 className="tptesti__avata-content-title">Eswari Nanduri</h5>
                                            <p>21p31a0225@acet.ac.in</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="tptesti text-center">
                                    <div className="tptesti__icon mb-25">
                                        <img src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAQCAYAAAAS7Y8mAAABcElEQVQ4jbXUPWtVQRDG8V9uJr4mSBRM4RvYJEEMiqLYhWAjCFamEVut/A52IZAyjYXmA4igRcBYCIqNFoKFkhSCVUBQQVAQTbyyYS9clj2HiDiwnGXmmf/szu6egYhQ2F5cx1VMYA8uYLUU9tkUbmIaY3hQUlPgHg5gGffxCesNwB2Yxy28xaP8XZNWnMe1iOhGxFJEjPX5m8ZQRKxExLeImC01vcnJDJ3bBrA3FiPia0SM1+K9Hj/HT1xs6WO/ncNLXMLjmiCBJ/EOZ/B6m+DUy0M42yTo4DI+/AV0Zz7kO22i1IdTucDttIMi/hvfsYTP2bcfwxl+uML8gTeRoUk4U4C7GMmFn/SBO7ngCRyp5JzG08gP4AWuVKofx/ucUO70Bl5Vcu7iYCcnDTa0aleDvy2WinY7LYn/ZP8dnA6jZr9acjca/Fus3q3Yh6MV0bEWcLpqtZzRrYeX/1zn8axhR1+KlW/iIxbyvLTdePgHAXhADHlkJs8AAAAASUVORK5CYII=" alt="" className="fn__svg" />
                                    </div>
                                    <div className="tptesti__content pb-5">
                                        <p>“ 3D Printing for Custom Food Packaging: This startup creates eco-friendly, biodegradable food packaging using 3D printing technology, reducing the environmental impact of food donations and ensuring food stays fresh longer. ”
                                        </p>
                                    </div>
                                    <div className="tptesti__avata d-flex align-items-center justify-content-center">
                                        <div className="tptesti__avata-icon mr-20">
                                            <img src="https://tse1.mm.bing.net/th?id=OIP.7RlzBIuOt5peG66NhHLbPwHaHa&pid=Api&P=0&h=180" alt="avata" />
                                        </div>
                                        <div className="tptesti__avata-content text-start">
                                            <h5 className="tptesti__avata-content-title">Teja Bavisetti</h5>
                                            <p>bavisettiteja@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="tptesti text-center">
                                    <div className="tptesti__icon mb-25">
                                        <img src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAQCAYAAAAS7Y8mAAABcElEQVQ4jbXUPWtVQRDG8V9uJr4mSBRM4RvYJEEMiqLYhWAjCFamEVut/A52IZAyjYXmA4igRcBYCIqNFoKFkhSCVUBQQVAQTbyyYS9clj2HiDiwnGXmmf/szu6egYhQ2F5cx1VMYA8uYLUU9tkUbmIaY3hQUlPgHg5gGffxCesNwB2Yxy28xaP8XZNWnMe1iOhGxFJEjPX5m8ZQRKxExLeImC01vcnJDJ3bBrA3FiPia0SM1+K9Hj/HT1xs6WO/ncNLXMLjmiCBJ/EOZ/B6m+DUy0M42yTo4DI+/AV0Zz7kO22i1IdTucDttIMi/hvfsYTP2bcfwxl+uML8gTeRoUk4U4C7GMmFn/SBO7ngCRyp5JzG08gP4AWuVKofx/ucUO70Bl5Vcu7iYCcnDTa0aleDvy2WinY7LYn/ZP8dnA6jZr9acjca/Fus3q3Yh6MV0bEWcLpqtZzRrYeX/1zn8axhR1+KlW/iIxbyvLTdePgHAXhADHlkJs8AAAAASUVORK5CYII=" alt="" className="fn__svg" />
                                    </div>
                                    <div className="tptesti__content pb-5">
                                        <p>“ Mobile App for Real-Time Food Rescue: A real-time app uses GPS and geolocation to connect food donors with nearby volunteers and nonprofits, enabling faster collection and distribution of excess food. ”
                                        </p>
                                    </div>
                                    <div className="tptesti__avata d-flex align-items-center justify-content-center">
                                        <div className="tptesti__avata-icon mr-20">
                                            <img src="https://tse1.mm.bing.net/th?id=OIP.7RlzBIuOt5peG66NhHLbPwHaHa&pid=Api&P=0&h=180" alt="avata" />
                                        </div>
                                        <div className="tptesti__avata-content text-start">
                                            <h5 className="tptesti__avata-content-title">Durga Sai</h5>
                                            <p>22p35a0342@acet.ac.in</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="tptesti text-center">
                                    <div className="tptesti__icon mb-25">
                                        <img src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAQCAYAAAAS7Y8mAAABcElEQVQ4jbXUPWtVQRDG8V9uJr4mSBRM4RvYJEEMiqLYhWAjCFamEVut/A52IZAyjYXmA4igRcBYCIqNFoKFkhSCVUBQQVAQTbyyYS9clj2HiDiwnGXmmf/szu6egYhQ2F5cx1VMYA8uYLUU9tkUbmIaY3hQUlPgHg5gGffxCesNwB2Yxy28xaP8XZNWnMe1iOhGxFJEjPX5m8ZQRKxExLeImC01vcnJDJ3bBrA3FiPia0SM1+K9Hj/HT1xs6WO/ncNLXMLjmiCBJ/EOZ/B6m+DUy0M42yTo4DI+/AV0Zz7kO22i1IdTucDttIMi/hvfsYTP2bcfwxl+uML8gTeRoUk4U4C7GMmFn/SBO7ngCRyp5JzG08gP4AWuVKofx/ucUO70Bl5Vcu7iYCcnDTa0aleDvy2WinY7LYn/ZP8dnA6jZr9acjca/Fus3q3Yh6MV0bEWcLpqtZzRrYeX/1zn8axhR1+KlW/iIxbyvLTdePgHAXhADHlkJs8AAAAASUVORK5CYII=" alt="" className="fn__svg" />
                                    </div>
                                    <div className="tptesti__content pb-5">
                                        <p>“ Machine Learning for Nutritional Analysis: A machine-learning-based platform that analyzes food donations to ensure a balanced distribution of nutrients to underserved populations, improving the health outcomes of recipients. ”
                                        </p>
                                    </div>
                                    <div className="tptesti__avata d-flex align-items-center justify-content-center">
                                        <div className="tptesti__avata-icon mr-20">
                                            <img src="https://tse1.mm.bing.net/th?id=OIP.7RlzBIuOt5peG66NhHLbPwHaHa&pid=Api&P=0&h=180" alt="avata" />
                                        </div>
                                        <div className="tptesti__avata-content text-start">
                                            <h5 className="tptesti__avata-content-title">Gowtham Kalla</h5>
                                            <p>21p31a0320@acet.ac.in</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="tptesti text-center">
                                    <div className="tptesti__icon mb-25">
                                        <img src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAQCAYAAAAS7Y8mAAABcElEQVQ4jbXUPWtVQRDG8V9uJr4mSBRM4RvYJEEMiqLYhWAjCFamEVut/A52IZAyjYXmA4igRcBYCIqNFoKFkhSCVUBQQVAQTbyyYS9clj2HiDiwnGXmmf/szu6egYhQ2F5cx1VMYA8uYLUU9tkUbmIaY3hQUlPgHg5gGffxCesNwB2Yxy28xaP8XZNWnMe1iOhGxFJEjPX5m8ZQRKxExLeImC01vcnJDJ3bBrA3FiPia0SM1+K9Hj/HT1xs6WO/ncNLXMLjmiCBJ/EOZ/B6m+DUy0M42yTo4DI+/AV0Zz7kO22i1IdTucDttIMi/hvfsYTP2bcfwxl+uML8gTeRoUk4U4C7GMmFn/SBO7ngCRyp5JzG08gP4AWuVKofx/ucUO70Bl5Vcu7iYCcnDTa0aleDvy2WinY7LYn/ZP8dnA6jZr9acjca/Fus3q3Yh6MV0bEWcLpqtZzRrYeX/1zn8axhR1+KlW/iIxbyvLTdePgHAXhADHlkJs8AAAAASUVORK5CYII=" alt="" className="fn__svg" />
                                    </div>
                                    <div className="tptesti__content pb-5">
                                        <p>“ Augmented Reality (AR) Food Education: AR-enabled interactive experiences teach families how to prepare nutritious meals using donated ingredients, combining education with food access to fight hunger at the community level. ”
                                        </p>
                                    </div>
                                    <div className="tptesti__avata d-flex align-items-center justify-content-center">
                                        <div className="tptesti__avata-icon mr-20">
                                            <img src="https://tse1.mm.bing.net/th?id=OIP.7RlzBIuOt5peG66NhHLbPwHaHa&pid=Api&P=0&h=180" alt="avata" />
                                        </div>
                                        <div className="tptesti__avata-content text-start">
                                            <h5 className="tptesti__avata-content-title">Lalitha Sahithi</h5>
                                            <p>22p31a0411@acet.ac.in</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="tptesti text-center">
                                    <div className="tptesti__icon mb-25">
                                        <img src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAQCAYAAAAS7Y8mAAABcElEQVQ4jbXUPWtVQRDG8V9uJr4mSBRM4RvYJEEMiqLYhWAjCFamEVut/A52IZAyjYXmA4igRcBYCIqNFoKFkhSCVUBQQVAQTbyyYS9clj2HiDiwnGXmmf/szu6egYhQ2F5cx1VMYA8uYLUU9tkUbmIaY3hQUlPgHg5gGffxCesNwB2Yxy28xaP8XZNWnMe1iOhGxFJEjPX5m8ZQRKxExLeImC01vcnJDJ3bBrA3FiPia0SM1+K9Hj/HT1xs6WO/ncNLXMLjmiCBJ/EOZ/B6m+DUy0M42yTo4DI+/AV0Zz7kO22i1IdTucDttIMi/hvfsYTP2bcfwxl+uML8gTeRoUk4U4C7GMmFn/SBO7ngCRyp5JzG08gP4AWuVKofx/ucUO70Bl5Vcu7iYCcnDTa0aleDvy2WinY7LYn/ZP8dnA6jZr9acjca/Fus3q3Yh6MV0bEWcLpqtZzRrYeX/1zn8axhR1+KlW/iIxbyvLTdePgHAXhADHlkJs8AAAAASUVORK5CYII=" alt="" className="fn__svg" />
                                    </div>
                                    <div className="tptesti__content pb-5">
                                        <p>“ Drones for Remote Food Delivery: Use drones to deliver food to hard-to-reach or disaster-stricken areas, ensuring timely access to essential supplies where traditional transport may be too slow or dangerous. ”
                                        </p>
                                    </div>
                                    <div className="tptesti__avata d-flex align-items-center justify-content-center">
                                        <div className="tptesti__avata-icon mr-20">
                                            <img src="https://tse1.mm.bing.net/th?id=OIP.7RlzBIuOt5peG66NhHLbPwHaHa&pid=Api&P=0&h=180" alt="avata" />
                                        </div>
                                        <div className="tptesti__avata-content text-start">
                                            <h5 className="tptesti__avata-content-title">Tulasi Machireddy</h5>
                                            <p>21p31a0223@acet.ac.in</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div><br/>
            </section>
        </>
    )
}
