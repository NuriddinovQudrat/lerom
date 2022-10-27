import React from 'react'
import ReactInputMask from 'react-input-mask'
import './ordering.css'

const Ordering = () => {
    return (
        <div className='ordering-page'>
            <h1>оформление заказа</h1>
            <form>
                <div className='user'>
                    <h6>Информация о покупателе</h6>
                    <div>
                        <input type='text' placeholder='Ф.И.О:' required />
                        <input type='email' placeholder='E-mail:' required />
                        <ReactInputMask 
                            type="text" 
                            required 
                            mask="+\9\9\8 (99) 999-99-99" 
                            placeholder='Номер телефона:' 
                        />
                    </div>
                    <textarea placeholder='Комментарий:' required></textarea>
                </div>

                <div className='qator'>
                    <div className='left'>
                        <h6>Информация о доставке:</h6>
                        <div>
                            <input type='radio' name='address' id='one' />
                            <label htmlFor='one'>Доставка по Москве и Московской области до подъезда</label>
                        </div>
                        <div>
                            <input type='radio' name='address' id='two' />
                            <label htmlFor='two'>Доставка транспортной компанией</label>
                        </div>
                        <div>
                            <input type='radio' name='address' id='three' />
                            <label htmlFor='three'>Самовывоз со склада в Москве</label>
                        </div>
                    </div>
                    <div className='right'>
                        <h6>Адрес доставки:</h6>
                        <div>
                            <input type='text' placeholder='Регион:' required />
                            <input type='text' placeholder='Город:' required />
                            <input type='text' placeholder='Улица:' required />
                        </div>
                        <div>
                            <input type='text' placeholder='Дом:' required />
                            <input type='text' placeholder='Корпус:' required />
                            <input type='text' placeholder='Подъезд:' required />
                        </div>
                        <div>
                            <input type='text' placeholder='Этаж:' required />
                            <input type='text' placeholder='Квартира:' required />
                            <input type='text' placeholder='Код домофона:' required />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Ordering