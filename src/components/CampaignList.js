import {useState} from 'react';
import data from "../data/data.json"
import CampaignItem from './CampaignItem';
import { useTranslation } from "react-i18next";



export default function CampaignList(props) {
  const [renderFlag, updateFlag] = useState(false)
  const {currentActiveTab, bodyCallback} = props;
  const { t } = useTranslation();


  const updateFilterTab = () => {
    updateFlag(!renderFlag)
  }
  
  const filterCampaign = (campaign) => {
      const createdOn = campaign.createdOn ;
      const currentDate = new Date().getTime();
      const diffTime = Math.abs(currentDate - createdOn);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));  
      if(createdOn < currentDate && diffDays !=1){
        return "Past"
      }else if(createdOn > currentDate && diffDays !=1){
       return "Upcoming"
      }else{
        return "Live"
      }
  }
  
  const campaignData = localStorage.getItem('campaignData') ?  JSON.parse(localStorage.getItem('campaignData')) : data ;
  return (
    <table className = "body-panel">
    <thead>
      <tr class = "t-row campaign-heading">
        <th className = "t-head campaign-heading-tab">{t("Head_One")}</th>
        <th className = "t-head campaign-heading-tab">{t("Head_Two")}</th>
        <th className = "t-head campaign-heading-tab">{t("Head_Three")}</th>
        <th className = "t-head campaign-heading-tab" style = {{"margin-right" :"203px"}}>{t("Head_Four")}</th>
      </tr>
    </thead>
    <tbody class = "t-body campaign-list">
        {campaignData && campaignData.map((campaign) => (
          currentActiveTab === filterCampaign(campaign) ? <CampaignItem key={campaign.createdOn + Math.floor(1000 + Math.random() * 9000)} campaign = {campaign}  updateFilterTab = {updateFilterTab}></CampaignItem> : ''
        ))}
     </tbody>
  </table>
  );
}


