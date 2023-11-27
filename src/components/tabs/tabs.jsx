import { useState } from 'react';

import './style.scss';

const Tabs = () => {
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
                        <li className={`${tab === 'tab3' ? 'active-tab' : ''}`}><a href="#" onClick={(e) => handlerTabs(e, 'tab3')}>Ключи с кредитами</a></li>
                        <li className={`${tab === 'tab4' ? 'active-tab' : ''}`}><a href="#" onClick={(e) => handlerTabs(e, 'tab4')}>Ключи с валютой</a></li>
                        <li className={`${tab === 'tab5' ? 'active-tab' : ''}`}><a href="#" onClick={(e) => handlerTabs(e, 'tab5')}>Ключи с префиксами</a></li>
                        <li className={`${tab === 'tab6' ? 'active-tab' : ''}`}><a href="#" onClick={(e) => handlerTabs(e, 'tab6')}>Кредиты</a></li>
                        <li className={`${tab === 'tab7' ? 'active-tab' : ''}`}><a href="#" onClick={(e) => handlerTabs(e, 'tab7')}>Другое</a></li>
                    </ul>
                </div>   
                <div className="items">
                    <div className={`${tab === 'tab1' ? 'active' : 'none'} item`}>
                        <div className="avatar">
                            <img src="" alt="" />
                        </div>
                        <div className="name">
                            Властелин
                        </div>
                        <div className="price">
                            20грн
                        </div>
                    </div>
                </div> 
            </div>_
        </div>
    );
}

export default Tabs;
