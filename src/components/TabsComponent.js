import { useState } from 'react';
import { useTranslation } from "react-i18next";


export default function TabsComponent(props) {
  const { t } = useTranslation();
  const {activeTab, bodyCallback} = props;
    
  const switchTab = (e) => {
    bodyCallback(e.target.getAttribute('data-name'))
  }

  return (
    <div className="tabs-layout" onClick = {switchTab}>
        <div data-name = "Upcoming" className = {`tab-item  ${activeTab === "Upcoming" ? 'active' : ''}`}><h4 data-name = "Upcoming">{t("Tab_One")}</h4></div>
        <div data-name = "Live" className = {`tab-item  ${activeTab === "Live" ? 'active' : ''}`}><h4 data-name = "Live">{t("Tab_Two")}</h4></div>
        <div data-name = "Past" className = {`tab-item  ${activeTab === "Past" ? 'active' : ''}`}><h4 data-name = "Past">{t("Tab_Three")}</h4></div>   
    </div>
  );
}


