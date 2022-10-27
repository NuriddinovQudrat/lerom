import React, { useState } from 'react'
import { IoClose } from  'react-icons/io5'
import { BsCheck2 } from  'react-icons/bs'
import { IoMdArrowDropdown, IoMdArrowDropup } from  'react-icons/io'
import c1 from '../../assets/images/c1.png'
import c2 from '../../assets/images/c2.png'
import c3 from '../../assets/images/c3.png'
import c4 from '../../assets/images/c4.png'
import c5 from '../../assets/images/c5.png'
import c6 from '../../assets/images/c6.png'
import c7 from '../../assets/images/c7.png'
import c8 from '../../assets/images/c8.png'
import c9 from '../../assets/images/c9.png'
import { reFormat } from '../../utils/Utils'

const OneProduct = () => {

    const onePrice = 59658;
    const [ count, setCount ] = useState(1)
    const [ color, setColor ] = useState('c1')

    return (
        <>
            <div className='product'>
                <div className='bg-texts-wrap'>
                    <div className='bg'></div>
                    <div className='texts'>
                        <h3>Модуль ZXC346-3</h3>
                        <p>Pазмер: <strong>в 1462 </strong><strong>ш 360</strong> <strong>г 352</strong> </p>
                        <button>
                            <IoClose className='icon' />
                            <p>Удалить</p>
                        </button>
                    </div>
                </div>
                <div className='colors'>
                    <p>Цвет: <strong>дуб</strong></p>
                    <div className='all'>
                        <div className={color === 'c1' ? 'one one-active' : 'one'} onClick={() => setColor('c1')}>
                            <img src={c1} alt='' />
                            <div>
                                <BsCheck2 className='icon' />
                            </div>
                        </div>
                        <div className={color === 'c2' ? 'one one-active' : 'one'} onClick={() => setColor('c2')}>
                            <img src={c2} alt='' />
                            <div>
                                <BsCheck2 className='icon' />
                            </div>
                        </div>
                        <div className={color === 'c3' ? 'one one-active' : 'one'} onClick={() => setColor('c3')}>
                            <img src={c3} alt='' />
                            <div>
                                <BsCheck2 className='icon' />
                            </div>
                        </div>
                        <div className={color === 'c4' ? 'one one-active' : 'one'} onClick={() => setColor('c4')}>
                            <img src={c4} alt='' />
                            <div>
                                <BsCheck2 className='icon' />
                            </div>
                        </div>
                        <div className={color === 'c5' ? 'one one-active' : 'one'} onClick={() => setColor('c5')}>
                            <img src={c5} alt='' />
                            <div>
                                <BsCheck2 className='icon' />
                            </div>
                        </div>
                        <div className={color === 'c6' ? 'one one-active' : 'one'} onClick={() => setColor('c6')}>
                            <img src={c6} alt='' />
                            <div>
                                <BsCheck2 className='icon' />
                            </div>
                        </div>
                        <div className={color === 'c7' ? 'one one-active' : 'one'} onClick={() => setColor('c7')}>
                            <img src={c7} alt='' />
                            <div>
                                <BsCheck2 className='icon' />
                            </div>
                        </div>
                        <div className={color === 'c8' ? 'one one-active' : 'one'} onClick={() => setColor('c8')}>
                            <img src={c8} alt='' />
                            <div>
                                <BsCheck2 className='icon' />
                            </div>
                        </div>
                        <div className={color === 'c9' ? 'one one-active' : 'one'} onClick={() => setColor('c9')}>
                            <img src={c9} alt='' />
                            <div>
                                <BsCheck2 className='icon' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <div className='price'>
                        <p>{reFormat(onePrice)} ₽</p>
                        <span>цена за 1 шт</span>
                    </div>
                    <div className='nums'>
                        <div onClick={() => count > 0 ? setCount(count - 1) : null}>
                            <IoMdArrowDropdown className='icon' />
                        </div>
                        <h3>{count}</h3>
                        <div onClick={() => setCount(count + 1)}>
                            <IoMdArrowDropup className='icon' />
                        </div>
                    </div>
                    <h5>{reFormat(count * onePrice)} ₽</h5>
                </div>
            </div>
            <div className='mobile-product'>
                <div className='bg'></div>
                <div className='right'>
                    <div className='first'>
                        <h3>Модуль ZXC346-3</h3>
                        <p>Pазмер: <strong>в 1462 </strong><strong>ш 360</strong> <strong>г 352</strong> </p>
                        <p>Цвет: <strong>дуб</strong></p>
                        <div className='colors'>
                            <div className='all'>
                                <div className={color === 'c1' ? 'one one-active' : 'one'} onClick={() => setColor('c1')}>
                                    <img src={c1} alt='' />
                                    <div>
                                        <BsCheck2 className='icon' />
                                    </div>
                                </div>
                                <div className={color === 'c2' ? 'one one-active' : 'one'} onClick={() => setColor('c2')}>
                                    <img src={c2} alt='' />
                                    <div>
                                        <BsCheck2 className='icon' />
                                    </div>
                                </div>
                                <div className={color === 'c3' ? 'one one-active' : 'one'} onClick={() => setColor('c3')}>
                                    <img src={c3} alt='' />
                                    <div>
                                        <BsCheck2 className='icon' />
                                    </div>
                                </div>
                                <div className={color === 'c4' ? 'one one-active' : 'one'} onClick={() => setColor('c4')}>
                                    <img src={c4} alt='' />
                                    <div>
                                        <BsCheck2 className='icon' />
                                    </div>
                                </div>
                                <div className={color === 'c5' ? 'one one-active' : 'one'} onClick={() => setColor('c5')}>
                                    <img src={c5} alt='' />
                                    <div>
                                        <BsCheck2 className='icon' />
                                    </div>
                                </div>
                                <div className={color === 'c6' ? 'one one-active' : 'one'} onClick={() => setColor('c6')}>
                                    <img src={c6} alt='' />
                                    <div>
                                        <BsCheck2 className='icon' />
                                    </div>
                                </div>
                                <div className={color === 'c7' ? 'one one-active' : 'one'} onClick={() => setColor('c7')}>
                                    <img src={c7} alt='' />
                                    <div>
                                        <BsCheck2 className='icon' />
                                    </div>
                                </div>
                                <div className={color === 'c8' ? 'one one-active' : 'one'} onClick={() => setColor('c8')}>
                                    <img src={c8} alt='' />
                                    <div>
                                        <BsCheck2 className='icon' />
                                    </div>
                                </div>
                                <div className={color === 'c9' ? 'one one-active' : 'one'} onClick={() => setColor('c9')}>
                                    <img src={c9} alt='' />
                                    <div>
                                        <BsCheck2 className='icon' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='second'>
                        <div className='nums'>
                            <div onClick={() => count > 0 ? setCount(count - 1) : null}>
                                <IoMdArrowDropdown className='icon' />
                            </div>
                            <h3>{count}</h3>
                            <div onClick={() => setCount(count + 1)}>
                                <IoMdArrowDropup className='icon' />
                            </div>
                        </div>
                        <div className='price'>
                            <p>{reFormat(onePrice)} ₽</p>
                            <span>цена за 1 шт</span>
                        </div>
                    </div>
                    <div className='third'>
                        <h5>{reFormat(count * onePrice)} ₽</h5>
                        <div className='delete'>
                            <div>
                                <IoClose className='icon' />
                            </div>
                            <p>Удалить</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OneProduct