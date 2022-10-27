import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logoPng from '../../assets/images/logo.png'
import timeSvg from '../../assets/images/time.svg'
import compasSvg from '../../assets/images/compas.svg'
import phoneSvg from '../../assets/images/phone.svg'
import { AiOutlineSearch } from 'react-icons/ai'
import { HiMenu } from 'react-icons/hi'
import './navbar.css'
import { MdClose, MdAddShoppingCart } from 'react-icons/md'

const Navbar = () => {

    const [ menu, setMenu ] = useState(false)
    
    return (
        <div className='navbar-component'>
            <Link to='/cart'>
                <div className='cart'>
                    <MdAddShoppingCart className='icon' />
                </div>
            </Link>
            <div className='top'>
                <div className='left'>
                    <div>
                        <img src={timeSvg} alt='' />
                        <p>Пн-Пт с 10:00 до 20:00 <br />Сб-Вс с 10:00 до 19:00</p>
                    </div>
                    <div>
                        <img src={compasSvg} alt='' />
                        <Link to=''>Наши салоны</Link>
                    </div>
                </div>
                <Link to='/'>
                    <img src={logoPng} alt='' className='logo' />
                </Link>
                <div className='right'>
                    <div>
                        <p>Отдел продаж:</p>
                        <img src={phoneSvg} alt='' />
                        <p><a href='tel:84956645457'>8 (495) 664-54-57</a><br /><a href='tel:89299288635'>8 (929) 928-86-35</a></p>
                    </div>
                    <div>
                        <p>Звонки по Росии:</p>
                        <img src={phoneSvg} alt='' />
                        <p><a href='tel:88000000000'>8-800-000-00-00</a><br /><span>Бесплатно</span></p>
                    </div>
                </div>
            </div>
            <div className='bottom'>
                <div className='links'>
                    <Link to=''>Каталог</Link>
                    <Link to=''>О нас</Link>
                    <Link to=''>3D-моделирование</Link>
                    <Link to=''>Покупателю</Link>
                    <Link to=''>Доставка и оплата</Link>
                </div>
                <div className='input-wrap'>
                    <input className='text' placeholder='Поиск по сайту...' />
                    <AiOutlineSearch className='icon' />
                </div>
            </div>

            <div className='mobile-navbar'>
                <div className='mobile-top'>
                    <div className='top-wrap'>
                        <div>
                            <img src={compasSvg} alt='' />
                            <Link to=''>Наши салоны</Link>
                        </div>
                        <Link to='/'>
                            <img src={logoPng} alt='' className='logo' />
                        </Link>
                        {
                            menu ? <MdClose className='icon' onClick={() => setMenu(!menu)} /> : <HiMenu className='icon' onClick={() => setMenu(!menu)} />
                        }
                    </div>
                    <div className={menu ? 'menu' : 'menu menu-false'}>
                        <div className='topp'>
                            <div>
                                <img src={timeSvg} alt='' />
                                <p>Пн-Пт с 10:00 до 20:00 <br />Сб-Вс с 10:00 до 19:00</p>
                            </div>
                            <div>
                                <img src={compasSvg} alt='' />
                                <Link to=''>Наши салоны</Link>
                            </div>
                        </div>
                        <div className='center'>
                            <Link to=''>Каталог</Link>
                            <Link to=''>О нас</Link>
                            <Link to=''>3D-моделирование</Link>
                            <Link to=''>Покупателю</Link>
                            <Link to=''>Доставка и оплата</Link>
                        </div>
                        <div className='bot'>
                            <span>Отдел продаж:</span>
                            <div>
                                <img src={phoneSvg} alt='' />
                                <a href='tel:84956645457'>8 (495) 664-54-57</a>
                            </div>
                            <div>
                                <img src={phoneSvg} alt='' />
                                <a href='tel:89299288635'>8 (929) 928-86-35</a>
                            </div>
                        </div>
                        <div className='bot bot2'>
                            <span>Звонки по Росии:</span>
                            <div>
                                <img src={phoneSvg} alt='' />
                                <a href='tel:88000000000'>8-800-000-00-00</a>
                            </div>
                            <div>
                                <p>Бесплатно</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mobile-bottom'>
                    <div className='left'>
                        <p>Каталог</p>
                    </div>
                    <div className='right'>
                        <input type='text' placeholder='Поиск по сайту...' />
                        <AiOutlineSearch className='icon' />
                    </div>
                </div>
                <div className='wrapper'></div>
            </div>
        </div>
    )
}

export default Navbar