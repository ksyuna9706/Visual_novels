import "./Header.css";
import logo from "./svg 2.webp";
import sh from "./svg 3.webp"

function Header() {
    return (
        <div className="header">
            <div className="logoHead"><img src={logo} alt="" className="logo" /><p>board</p></div>
            <ul className="artic">
               <li style={{fontWeight:"bold"}}> <a href="/">Мерч</a>  </li>
                <li> <a href="/">Игры</a></li>
                <li> <a href="/">Персонажи</a></li>
                <li> <a href="/">Поддержать нас</a></li>
             

            </ul>
            <div className="sh_cart">
               <a href=""><img src={sh} alt="" /></a>
            </div>
        </div>
    )
}
export default Header;