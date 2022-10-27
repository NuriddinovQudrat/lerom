import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi'
import { MdArrowRight } from 'react-icons/md'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './home.css'

import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import onePng from '../../assets/images/one.png'
import twoPng from '../../assets/images/two.png'
import threePng from '../../assets/images/three.png'
import img1 from '../../assets/images/img1.png'
import img2 from '../../assets/images/img2.png'
import img3 from '../../assets/images/img3.png'
import img4 from '../../assets/images/img4.png'
import img5 from '../../assets/images/img5.png'
import img6 from '../../assets/images/img6.png'
import img7 from '../../assets/images/img7.png'
import img8 from '../../assets/images/img8.png'
import img9 from '../../assets/images/img9.png'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home-page'>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide className='swiper-slide'>
                    <h1>Производим мебель с 1997 года</h1>
                    <div>
                        <p>Мы готовы принять и передать ваш  заказ на мебель региональному представительству.</p>
                        <p>Для этого пришлите ваши пожелания и контактную информацию нам на почту <a href='mailto:zakaz@lerom.ru'>zakaz@lerom.ru</a></p>
                    </div>
                    <div className='wrapper'>
                        <div className='one'>
                            <img src={onePng} alt='' />
                            <div>
                                <h6>&gt; 100 000 <span>м2</span></h6>
                                <p>Производственная <br />площадь.</p>
                            </div>
                        </div>
                        <div className='one'>
                            <img src={twoPng} alt='' />
                            <div>
                                <h6>&gt; 1 100 <span>чел</span></h6>
                                <p>Рабочий <br />коллектив..</p>
                            </div>
                        </div>
                        <div className='one'>
                            <img src={threePng} alt='' />
                            <div>
                                <h6>Официально</h6>
                                <p>Мы находимся в национальном реестре промышленных предприятий.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <h1>Производим мебель с 1997 года</h1>
                    <div>
                        <p>Мы готовы принять и передать ваш  заказ на мебель региональному представительству.</p>
                        <p>Для этого пришлите ваши пожелания и контактную информацию нам на почту <a href='mailto:zakaz@lerom.ru'>zakaz@lerom.ru</a></p>
                    </div>
                    <div className='wrapper'>
                        <div className='one'>
                            <img src={onePng} alt='' />
                            <div>
                                <h6>&gt; 100 000 <span>м2</span></h6>
                                <p>Производственная <br />площадь.</p>
                            </div>
                        </div>
                        <div className='one'>
                            <img src={twoPng} alt='' />
                            <div>
                                <h6>&gt; 1 100 <span>чел</span></h6>
                                <p>Рабочий <br />коллектив..</p>
                            </div>
                        </div>
                        <div className='one'>
                            <img src={threePng} alt='' />
                            <div>
                                <h6>Официально</h6>
                                <p>Мы находимся в национальном реестре промышленных предприятий.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className='all-wrapper'>
                <div className='qator'>
                    <div className='ust'>
                        <div className='bg' style={{backgroundImage: `url(${img1})`}}></div>
                        <div className='text-wrap'>
                            <div className='left'></div>
                            <h2>Гостиные</h2>
                            <p>Мини текст описания и преимущества покупки данного направления.</p>
                            <p><span>Товары под заказ в наличии: 2030шт</span></p>
                            <p>Цены от: 42.000р</p>
                            <div className='icon-wrap'>
                                <HiOutlineArrowLeft className='icon' />
                            </div>
                        </div>
                    </div>
                    <div className='ust ust1'>
                        <div className='bg' style={{backgroundImage: `url(${img2})`}}></div>
                        <div className='text-wrap'>
                            <div className='left'></div>
                            <h2>Спальни</h2>
                            <p>Мини текст описания и преимущества покупки данного направления.</p>
                            <p><span>Товары под заказ в наличии: 2030шт</span></p>
                            <p>Цены от: 42.000р</p>
                            <div className='icon-wrap'>
                                <HiOutlineArrowLeft className='icon' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='qator'>
                    <div className='ust ust1'>
                        <div className='text-wrap'>
                            <div className='right'></div>
                            <h2>Детские</h2>
                            <p>Мини текст описания и преимущества покупки данного направления.</p>
                            <p><span>Товары под заказ в наличии: 2030шт</span></p>
                            <p>Цены от: 42.000р</p>
                            <div className='icon-wrap'>
                                <HiOutlineArrowRight className='icon' />
                            </div>
                        </div>
                        <div className='bg' style={{backgroundImage: `url(${img3})`}}></div>
                    </div>
                    <div className='ust'>
                        <div className='text-wrap'>
                            <div className='right'></div>
                            <h2>Прихожие</h2>
                            <p>Мини текст описания и преимущества покупки данного направления.</p>
                            <p><span>Товары под заказ в наличии: 2030шт</span></p>
                            <p>Цены от: 42.000р</p>
                            <div className='icon-wrap'>
                                <HiOutlineArrowRight className='icon' />
                            </div>
                        </div>
                        <div className='bg' style={{backgroundImage: `url(${img4})`}}></div>
                    </div>
                </div>

                <div className='qator qator1'>
                    <div className='bg bg1' style={{backgroundImage: `url(${img5})`}}></div>
                    <div className='text-wrap text-wrap1'>
                        <div className='left'></div>
                        <h2>Кровати</h2>
                        <p>Мини текст описания и преимущества покупки данного направления.</p>
                        <p><span>Товары под заказ в наличии: 2030шт</span></p>
                        <p>Цены от: 42.000р</p>
                        <div className='icon-wrap'>
                            <HiOutlineArrowLeft className='icon' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='video-wrapper'>
                <h1>Видеопрезентация <br /> «Лером»</h1>
                <div className='icon-wrap'>
                    <div className='inner-wrap'>
                        <MdArrowRight className='icon' />
                    </div>
                </div>
                <Link to='/'>
                    <button>Читать о компании</button>
                </Link>
            </div>

            <div className='h2-wrap'>
                <div>
                    <h2>Информация</h2>
                </div>
                <div>
                    <h2>Интересное</h2>
                </div>
            </div>

            <div className='all-wrapper'>
                <div className='qator'>
                    <div className='ust'>
                        <div className='bg mini-bg' style={{backgroundImage: `url(${img6})`}}></div>
                        <div className='text-wrap'>
                            <div className='left'></div>
                            <h2>Доставка по всей России</h2>
                            <p>Мини текст описания и преимущества покупки данного направления.</p>
                            <div className='icon-wrap'>
                                <HiOutlineArrowLeft className='icon' />
                            </div>
                        </div>
                    </div>
                    <div className='ust ust1'>
                        <div className='bg mini-bg' style={{backgroundImage: `url(${img7})`}}></div>
                        <div className='text-wrap'>
                            <div className='left'></div>
                            <h2>Как выбрать матрас</h2>
                            <p>Мини текст описания и преимущества покупки данного направления.</p>
                            <div className='icon-wrap'>
                                <HiOutlineArrowLeft className='icon' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='qator'>
                    <div className='ust ust1'>
                        <div className='text-wrap'>
                            <div className='right'></div>
                            <h2><span>Бесплатная</span> <br /> сборка</h2>
                            <p>Мини текст описания и преимущества покупки данного направления.</p>
                            <div className='icon-wrap'>
                                <HiOutlineArrowRight className='icon' />
                            </div>
                        </div>
                        <div className='bg mini-bg' style={{backgroundImage: `url(${img8})`}}></div>
                    </div>
                    <div className='ust'>
                        <div className='text-wrap'>
                            <div className='right'></div>
                            <h2>Какой шкаф выбрать в 2022 году</h2>
                            <p>Мини текст описания и преимущества покупки данного направления.</p>
                            <div className='icon-wrap'>
                                <HiOutlineArrowRight className='icon' />
                            </div>
                        </div>
                        <div className='bg mini-bg' style={{backgroundImage: `url(${img9})`}}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home