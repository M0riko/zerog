import { useState } from 'react';

import Almaz from '../../img/donateImg/almaz.png'

import './style.scss';

const Tabs = () => {
    const initialState = {
        data: {
            tab1:[
                {name: 'STAR', img: Almaz, price: '479RUB', id: 1},
                {name: 'EMERALD', img: Almaz, price: '229RUB', id: 2},
                {name: 'DIAMOND', img: Almaz, price: '99RUB', id: 3},
                {name: 'GOLD', img: Almaz, price: '69RUB', id: 4},
                {name: 'IRON', img: Almaz, price: '19RUB', id: 5},
            ],
            tab2:[
                {name: 'Ключ', img: Almaz, price: '79RUB', id: 6},
            ],
            tab3:[
                {name: '30 Credits', img: Almaz, price: '40RUB', id: 11},
                {name: '50 Credits', img: Almaz, price: '69RUB', id: 21},
                {name: '100 Credits', img: Almaz, price: '100RUB', id: 31},
                {name: '200 Credits', img: Almaz, price: '179RUB', id: 41},
                {name: '500 Credits', img: Almaz, price: '300RUB', id: 51},
                {name: '1000 Credits', img: Almaz, price: '500RUB', id: 61},
            ],
            tab4:[
                {name: 'Разбан', img: Almaz, price: '200RUB', id: 11},
                {name: 'Размут', img: Almaz, price: '100RUB', id: 21},
            ]
        }
    }
    const [tab, setTab] = useState('tab1');
    const handlerTabs = (e, tab) => {
        e.preventDefault();
        setTab(tab)
    };
    return (
        <div className="tabs-items">
            <div className="title">🔥 Покупка привилегий</div>
            <div className="tab-content">
                <div className="tab">
                    <ul>
                        <li className={`${tab === 'tab1' ? 'active-tab' : ''}`}><a href="#" onClick={(e) => handlerTabs(e, 'tab1')}>Привилегии</a></li>
                        <li className={`${tab === 'tab2' ? 'active-tab' : ''}`}><a href="#" onClick={(e) => handlerTabs(e, 'tab2')}>Ключи с донатом</a></li>
                        <li className={`${tab === 'tab3' ? 'active-tab' : ''}`}><a href="#" onClick={(e) => handlerTabs(e, 'tab3')}>Кредиты</a></li>
                        <li className={`${tab === 'tab4' ? 'active-tab' : ''}`}><a href="#" onClick={(e) => handlerTabs(e, 'tab4')}>Другое</a></li>
                    </ul>
                </div>   
                <div className="items">
                {initialState.data[tab].map(e => {
                    return (
                        <div className={`item`} key={e.id}>
                            <div className="avatar">
                                <img src={e.img} alt="" />
                            </div>
                            <div className="name">
                                {e.name}
                            </div>
                            <div className="price">
                                {e.price}
                            </div>
                            <button>Купить</button>
                        </div>
                    );
                })}      
                </div> 
            </div>
        </div>
    );
}

export default Tabs;