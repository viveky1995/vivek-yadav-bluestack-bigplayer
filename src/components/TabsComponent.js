import { useState } from 'react';
import { useTranslation } from "react-i18next";


export default function TabsComponent(props) {
  const {bodyCallback} = props;
  const [activeTab, updateTab] = useState('Upcoming');
  const { t } = useTranslation();
  
  const switchTab = (e) => {
    updateTab(e.target.textContent.split(' ')[0])
    bodyCallback(e.target.textContent.split(' ')[0])
  }

  return (
    <div className="tabs-layout" onClick = {switchTab}>
        <div className = {`tab-item  ${activeTab === "Upcoming" ? 'active' : ''}`}><h4>{t("Tab_One")}</h4></div>
        <div className = {`tab-item  ${activeTab === "Live" ? 'active' : ''}`}><h4>{t("Tab_Two")}</h4></div>
        <div className = {`tab-item  ${activeTab === "Past" ? 'active' : ''}`}><h4>{t("Tab_Three")}</h4></div>   
    </div>
  );
}


