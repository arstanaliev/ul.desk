import React from "react";
import objectImg1 from "../img/Image1.png"
import objectImg2 from "../img/image2.png"
import objectImg3 from "../img/image3.png"
import objectImg4 from "../img/image4.png"
import objectCheck from "../img/Group 48095966.png"
import {useState} from "react";
const btn = document.querySelector('.object-btn')


const Object = () => {
    const [Show, setShow] = useState(false)
    return (
        <section id="object">
            <div className="container">
                <div className="object">
                    <h1>Наши лучшие инвестиционные предложения </h1>
                    <h6>Мы отобрали, проверили и рассчитали прибыльность каждого объекта</h6>
                    <div className="object-div">
                        <div className="object-div-div">
                            <img src={objectImg1} alt=""/>
                            <h2>ЖК «Atlantis Deluxe»</h2>
                            <div className="object-div-div-div">
                                <div>
                                    <h4>Доходность</h4>
                                    <p>65,25%</p>
                                </div>
                                <div>
                                    <h4>Сроки</h4>
                                    <p>22 года</p>
                                </div>
                                <div>
                                    <h4>Риски</h4>
                                    <p>29%</p>
                                </div>
                            </div>
                            <h3>от 33 000 000 руб.</h3>
                            <h5>от 1 500 000 руб. за м2</h5>
                        </div>

                        <div className="object-div-div">
                            <img src={objectImg2} alt=""/>
                            <h2>ЖК «Алые Паруса»</h2>
                            <div className="object-div-div-div">
                                <div>
                                    <h4>Доходность</h4>
                                    <p>60,75%</p>
                                </div>
                                <div>
                                    <h4>Сроки</h4>
                                    <p>32 года</p>
                                </div>
                                <div>
                                    <h4>Риски</h4>
                                    <p>35,25%</p>
                                </div>
                            </div>
                            <h3>от 33 000 000 руб.</h3>
                            <h5>от 1 500 000 руб. за м2</h5>
                        </div>

                        <div className="object-div-div">
                            <img src={objectImg3} alt=""/>
                            <h2>ЖК «Снегири Эко»</h2>
                            <div className="object-div-div-div">
                                <div>
                                    <h4>Доходность</h4>
                                    <p>15%</p>
                                </div>
                                <div>
                                    <h4>Сроки</h4>
                                    <p>1 год</p>
                                </div>
                                <div>
                                    <h4>Риски</h4>
                                    <p>5%</p>
                                </div>
                            </div>
                            <h3>от 33 000 000 руб.</h3>
                            <h5>от 1 500 000 руб. за м2</h5>
                        </div>

                        <div className="object-div-div">
                            <img src={objectImg4} alt=""/>
                            <h2>ЖК «ART-Сити»</h2>
                            <div className="object-div-div-div">
                                <div>
                                    <h4>Доходность</h4>
                                    <p>35,25%</p>
                                </div>
                                <div>
                                    <h4>Сроки</h4>
                                    <p>32 года</p>
                                </div>
                                <div>
                                    <h4>Риски</h4>
                                    <p>35,25%</p>
                                </div>
                            </div>
                            <h3>от 33 000 000 руб.</h3>
                            <h5>от 1 500 000 руб. за м2</h5>
                        </div>
                    </div>
                    <div className="object-div"     style={{
                        display: Show ? "flex" : "none"
                    }}>
                        <div className="object-div-div">
                            <img src={objectImg1} alt=""/>
                            <h2>ЖК «Atlantis Deluxe»</h2>
                            <div className="object-div-div-div">
                                <div>
                                    <h4>Доходность</h4>
                                    <p>65,25%</p>
                                </div>
                                <div>
                                    <h4>Сроки</h4>
                                    <p>22 года</p>
                                </div>
                                <div>
                                    <h4>Риски</h4>
                                    <p>29%</p>
                                </div>
                            </div>
                            <h3>от 33 000 000 руб.</h3>
                            <h5>от 1 500 000 руб. за м2</h5>
                        </div>

                        <div className="object-div-div">
                            <img src={objectImg2} alt=""/>
                            <h2>ЖК «Алые Паруса»</h2>
                            <div className="object-div-div-div">
                                <div>
                                    <h4>Доходность</h4>
                                    <p>60,75%</p>
                                </div>
                                <div>
                                    <h4>Сроки</h4>
                                    <p>32 года</p>
                                </div>
                                <div>
                                    <h4>Риски</h4>
                                    <p>35,25%</p>
                                </div>
                            </div>
                            <h3>от 33 000 000 руб.</h3>
                            <h5>от 1 500 000 руб. за м2</h5>
                        </div>

                        <div className="object-div-div">
                            <img src={objectImg3} alt=""/>
                            <h2>ЖК «Снегири Эко»</h2>
                            <div className="object-div-div-div">
                                <div>
                                    <h4>Доходность</h4>
                                    <p>15%</p>
                                </div>
                                <div>
                                    <h4>Сроки</h4>
                                    <p>1 год</p>
                                </div>
                                <div>
                                    <h4>Риски</h4>
                                    <p>5%</p>
                                </div>
                            </div>
                            <h3>от 33 000 000 руб.</h3>
                            <h5>от 1 500 000 руб. за м2</h5>
                        </div>

                        <div className="object-div-div">
                            <img src={objectImg4} alt=""/>
                            <h2>ЖК «ART-Сити»</h2>
                            <div className="object-div-div-div">
                                <div>
                                    <h4>Доходность</h4>
                                    <p>35,25%</p>
                                </div>
                                <div>
                                    <h4>Сроки</h4>
                                    <p>32 года</p>
                                </div>
                                <div>
                                    <h4>Риски</h4>
                                    <p>35,25%</p>
                                </div>
                            </div>
                            <h3>от 33 000 000 руб.</h3>
                            <h5>от 1 500 000 руб. за м2</h5>
                        </div>
                    </div>
                    <div style={{
                        textAlign: "center",
                        padding: '20px 0 50px 0',
                        display: Show ? 'none' : "block"
                    }}>
                        <img src={objectCheck} alt=""/>
                    </div>
                    <div style={{
                        textAlign: "center"
                    }}>
                        <button onClick={() => setShow(!Show)} className="object-btn">Смотреть все объекты</button>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Object