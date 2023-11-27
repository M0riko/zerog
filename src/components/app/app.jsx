//style
import './style.scss'

//components
import  NavBar from '../navBar/navBar';
import Header from '../header/header';
import Tabs from '../tabs/tabs';
import Footer from '../footer/footer';

const App = () => {
    return (
        <div className="app">
            <NavBar/>
            <div className="container">
                <Header/>
                <Tabs/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
