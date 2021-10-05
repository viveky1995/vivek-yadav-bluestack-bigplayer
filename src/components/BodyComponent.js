import TabsComponent from './TabsComponent';
import CampaignList from './CampaignList';
import { useState } from 'react/cjs/react.development';
import { useTranslation } from "react-i18next";


export default function BodyComponent() {
const { t, i18n } = useTranslation();
const currentLang = localStorage.getItem('i18nextLng');
const [currentActiveTab, updateTabValue] = useState("Upcoming");
 
const bodyCallback = (activeTab) => {
  updateTabValue(activeTab)
}

  return (
    <div>
        
        <div className="body-layout">
            <div className = "body-heading"><h1>{t("Main_Heading")}</h1></div>
            <div className = "body-tabs"><TabsComponent activeTab = {currentActiveTab} bodyCallback = {bodyCallback}></TabsComponent></div>
            <div className = "body-content"><CampaignList currentActiveTab = {currentActiveTab} bodyCallback = {bodyCallback}></CampaignList></div>      
        </div>
   </div>
  );
}


