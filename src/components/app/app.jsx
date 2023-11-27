//style
import './style.scss'

//components
import  NavBar from '../navBar/navBar';
import Header from '../header/header';
import Tabs from '../tabs/tabs';

const App = () => {
    return (
        <div className="app">
            <NavBar/>
            <div className="container">
                <Header/>
                <Tabs/>
            </div>
        </div>
    );
}

export default App;
