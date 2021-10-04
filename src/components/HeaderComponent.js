import logo from '../images/logo.png';
import { useTranslation } from "react-i18next";

export default function HeaderComponent() {
const { t, i18n } = useTranslation();

 const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
 };
  return (
    <div className = "app-header">
     <img  className = "logo-img" src={logo} />
      <div>
         <button className = "lang-btn" onClick = {() => changeLanguage("en")}>en</button>
        <button className = "lang-btn" onClick = {() => changeLanguage("ger")}>ger</button>
      </div>
    </div>
  );
}


