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

                <div className='qator'>
                    <div className='left'>
                        <h6>Информация об оплате:</h6>
                        <div>
                            <input type='radio' name='payment' id='one1' />
                            <label htmlFor='one1'>Наличными при получении</label>
                        </div>
                        <div>
                            <input type='radio' name='payment' id='two2' />
                            <label htmlFor='two2'>Доставка транспортной компанией</label>
                        </div>
                        <div>
                            <input type='radio' name='payment' id='three3' />
                            <label htmlFor='three3'>Самовывоз со склада в Москве</label>
                        </div>
                    </div>
                    <div className='ustun'>
                        <div className='bir'>
                            <h6>Лифт:</h6>
                            <div>
                                <input type='radio' name='payment1' id='one2' />
                                <label htmlFor='one2'>Малый</label>
                            </div>
                            <div>
                                <input type='radio' name='payment1' id='one3' />
                                <label htmlFor='one3'>Грузовой</label>
                            </div>
                            <div>
                                <input type='radio' name='payment1' id='one4' />
                                <label htmlFor='one4'>Нет лифта</label>
                            </div>
                        </div>
                        <div className='ikki'>
                            <div className='top'>
                                <div className='ust'>
                                    <h6>Подъем:</h6>
                                    <div>
                                        <input type='radio' name='payment2' id='one21' />
                                        <label htmlFor='one21'>Да</label>
                                    </div>
                                    <div>
                                        <input type='radio' name='payment2' id='one31' />
                                        <label htmlFor='one31'>Нет</label>
                                    </div>
                                </div>
                                <div className='ust'>
                                    <h6>Сборка:</h6>
                                    <div>
                                        <input type='radio' name='payment22' id='one212' />
                                        <label htmlFor='one212'>Да</label>
                                    </div>
                                    <div>
                                        <input type='radio' name='payment22' id='one312' />
                                        <label htmlFor='one312'>Нет</label>
                                    </div>
                                </div>
                            </div>
                            <div className='bottom'>
                                <p>Итого:</p>
                                <span>434 658 ₽</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='btn-wrap'>
                    <button>Оформить</button>
                </div>
            </form>
        </div>
    )
}

export default Ordering