import React  from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
        return (
            <footer className="navbar fixed-bottom">
                <div>
                    <h3>ИНФОРМАЦИЯ &amp; УСЛОВИЯ</h3>
                    <div className="menu__list">
                        <NavLink className="menu__link" to="/help/faq" >Често задавани въпроси</NavLink>
                        <NavLink className="menu__link" to="/help/returnPolicy">Условия за връщане</NavLink>
                        <NavLink className="menu__link" to="/help/conditions">Общи условия</NavLink>
                        <NavLink className="menu__link" to="/help/forUs">За нас</NavLink>
                        <NavLink className="menu__link" to="/help/contact">Контакти</NavLink>
                    </div>
                </div>

                <div>
                    <h3>ОБСЛУЖВАНЕ НА КЛИЕНТИ</h3>
                    <ul>
                        <li>
                            0700 17 660 (на цената на един
                            <br/> градски разговор)
                        </li>
                        <li>
                            07:30 - 22:00 ч. в делнични дни
                        </li>
                        <li>
                            08:00 - 20:00 ч. през почивни дни
                        </li>
                        <li>
                            <a href="mailto:fashion@fashiondays.bg">Изпратете ни имейл</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3>МОБИЛНИ ПРИЛОЖЕНИЯ</h3>
                    <ul>
                        <li>
                            iPhone
                        </li>
                        <li>
                            iPad
                        </li>
                        <li>
                            Android
                        </li>
                    </ul>
                </div>

                <div id='socialMedias'>
                    <h3>СОЦИАЛНИ МЕДИИ</h3>
                    <br/>
                    <a href="https://www.facebook.com/fashiondays.bulgaria">
                        <img src="../assets/images/fbIcon.png" alt=""/>
                    </a>
                    <a href="https://plus.google.com/+fashiondaysbg/posts">
                        <img src="../assets/images/gPlus.png" alt=""/>
                    </a>
                    <a href="https://twitter.com/fashiondaysbg">
                        <img src="../assets/images/twitter.png" alt=""/>
                    </a>
                    <br/>
                    <a href="https://ro.pinterest.com/fashiondaysbg/">
                        <img src="../assets/images/pinterest.png" alt=""/>
                    </a>
                    <a href="https://www.youtube.com/user/FashionDaysBulgaria">
                        <img src="../assets/images/youtube.png" alt=""/>
                    </a>
                    <a href="https://www.instagram.com/fashiondays/">
                        <img src="../assets/images/instagram.png" alt=""/>
                    </a>
                </div>

                <div id='payInfo'>
                    <div>
                        <h3> &nbsp;МЕТОДИ ЗА ПЛАЩАНЕ</h3>
                        <br/>
                        <img src="../assets/images/payment.png" alt=""/>
                    </div>

                    <div>
                        <h3>&nbsp;ДОСТАВКА</h3>
                        <br/>
                        <img src="../assets/images/delivery.png" alt="delivery"/>
                    </div>

                    <div>
                        <h4>БЕЗПЛАТНА ДОСТАВКА ЗА ПОРЪЧКИ НАД 89 ЛВ.</h4>
                        <br/>
                        <h4>БЕЗПЛАТНО ВРЪЩАНЕ: ЗАЯВИ В ПЪРВИТЕ 30 ДНИ</h4>
                        <br/>
                        <h4>РАЗНООБРАЗНИ МОДНИ ОФЕРТИ</h4>

                    </div>


                </div>

                <div>
                    <p>© 2001 - 2018 Данте Интернешънъл СА</p>
                </div>


        </footer>
    );
}

export default Footer;