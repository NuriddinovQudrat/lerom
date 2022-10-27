import React from 'react'
import { Link } from 'react-router-dom'
import './cart.css'
import OneProduct from './OneProduct'

const Cart = () => {
    return (
        <div className='cart-page'>
            <h1>Корзина</h1>
            <div className='all-products'>
                <OneProduct />
                <OneProduct />
                <OneProduct />
            </div>
            <div className='btn-wrap'>
                <p>Итого: <strong>434 658 ₽</strong></p>
                <Link to='ordering'>
                    <button>Оформить заказ</button>
                </Link>
            </div>
        </div>
    )
}

export default Cart