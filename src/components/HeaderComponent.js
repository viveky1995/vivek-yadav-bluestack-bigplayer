import logo from '../images/logo.png';
import { useTranslation } from "react-i18next";

export default function HeaderComponent() {
const { t, i18n } = useTranslation();

 const changeLanguage = (lng,e) => {
    i18n.changeLanguage(lng);
 };
  return (
    <div className = "app-header">
     <img  className = "logo-img" src={logo} />
      <div>
         <button className = "lang-btn" onClick = {(e) => changeLanguage("en", e)}>en</button>
        <button className = "lang-btn" onClick = {(e) => changeLanguage("ger", e)}>ger</button>
      </div>
    </div>
  );
}


