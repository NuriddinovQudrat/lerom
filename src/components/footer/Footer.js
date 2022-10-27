import React from 'react'
import { Link } from 'react-router-dom'
import logoPng from '../../assets/images/logo.png'
import logo2Png from '../../assets/images/logo2.png'
import footer1 from '../../assets/images/footer1.png'
import footer2 from '../../assets/images/footer2.png'
import './footer.css'

const Footer = () => {
    return (
        <div className='footer-component'>
            <div className='top'>
                <p>©  ООО "Мебельная компания "Лером" 2021   </p>
                <Link to='/'>
                    <img src={logoPng} alt='' className='logo' />
                </Link>
                <div>
                    <p>Сайт разработан  - </p>
                    <Link to='/'>
                        <img src={logo2Png} alt='' className='logo2' />
                    </Link>
                </div>
            </div>
            <div className='links-wrap'>
                <div className='ustun'>
                    <Link to='/'><strong>О компании</strong></Link>
                    <Link to='/'>Производство</Link>
                    <Link to='/'>Награды</Link>
                    <Link to='/'>Сертификаты</Link>
                </div>
                <div className='ustun'>
                    <Link to='/'><strong>Покупателю</strong></Link>
                    <Link to='/'>Как сделать заказ</Link>
                    <Link to='/'>Рекомендации по сборке</Link>
                    <Link to='/'>Договор публичной оферты </Link>
                </div>
                <div className='ustun'>
                    <Link to='/'><strong>Полезная информация</strong></Link>
                    <Link to='/'>Всё о фасадах</Link>
                    <Link to='/'>Всё о фурнитуре</Link>
                    <Link to='/'>Всё о ЛДСП </Link>
                </div>
                <div className='ustun'>
                    <Link to='/'><strong>3D-моделирование</strong></Link>
                    <Link to='/'>Запустить онлайн, <br /> от 2 Мбит/с</Link>
                    <Link to='/'>Скачать на компьютер, <br /> 606 Мб</Link>
                </div>
                <div className='ustun ustun2'>
                    <Link to='/'>Рассрочка</Link>
                    <Link to='/'>Гарантия</Link>
                    <Link to='/'>Контакты</Link>
                </div>
                <div className='ustun ustun3'>
                    <img src={footer1} alt='' />
                    <img src={footer2} alt='' />
                </div>
            </div>
            <div className='bottom'>
                <span>Все права защищены. Любое копирование и использование материалов сайта разрешено только с письменного согласия правообладателя. Не является публичной офертой.</span>
            </div>
        </div>
    )
}

export default Footer