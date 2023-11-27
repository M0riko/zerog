import './style.scss'

import Steve from '../../img/steve2.png'

const Promo = () => {
    return (
        <div className="header">
                <div className="header-content">
                    <div className="text-content">
                        <div className="title">
                        🔥 Открытие и <br /> безумные скидки!
                        </div>
                        <div className="text">
                            ⚡️ В честь открытия, мы запускаем вкусные <br />
                            скидки 30% для наших игроков по промо- <br />
                            коду: ZEROGG30
                        </div>
                    </div>
                    <div className="steve">
                        <img src={Steve} alt="Steve" />
                    </div>
                </div>
        </div>
    );
}

export default Promo;
