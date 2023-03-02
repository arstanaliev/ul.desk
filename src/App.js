import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Dishes from "./components/Dishes";
import Clients from "./components/Clients";
import Subscribe from "./components/Subscribe";

function App() {
    return (
        <div className="App">
            <Header/>
            <Section/>
            <Hero/>
            <AboutUs/>
            <Dishes/>
            <Clients/>
            <Subscribe/>
            <Footer/>
        </div>
    );
}

export default App;
