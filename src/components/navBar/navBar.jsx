//style
import './style.scss'

const NavBar = () => {
    return (
        <div className='navbar'>
            <div className="logo">
                <a href='#'>ZeroGrief</a>
            </div>
            <nav>
                <ul className='navigation'>
                    <li><a href="#">Группа в ВК</a></li>
                    <li><a href="#">Правила Сервера</a></li>
                    <li><a href="#">Контакты</a></li>
                    <li><a href="#">Описание Привилегий</a></li>
                </ul>
            </nav>
            <div className="online">
                <span>Онлайн</span> : {0} / {2023}
                <div className="lineForOnline"></div>
            </div>
            <div className="ip">
                <span>IP: mc.zerogrief.ua</span>
            </div>
        </div>
    );
}

export default NavBar;
