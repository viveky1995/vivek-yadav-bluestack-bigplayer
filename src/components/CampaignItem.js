import { useState } from 'react';
import ReactDOM  from 'react-dom';
import ModalComponent from './ModalComponent';
import calendar from '../images/calendar.png';
import report from '../images/statistics-report.png'
import { useTranslation } from "react-i18next";

export default function CampaignItem(props) {
    const {campaign, updateFilterTab} = props; 
    const [showCalendarModal, setCalendar] = useState(false);
    const [showPricingModal ,setPopup] = useState(false)
    const { t } = useTranslation();

    const switchCalendarCheck = () => {
      setCalendar(!showCalendarModal)    
    }
    const switchPricingModalCheck = () => {
      setPopup(!showPricingModal)
    }
    const createdOn = new Date(campaign.createdOn).toDateString();
  
  var previosDate, currentDate, diffTime, diffDays;
    const findDateDifference = (createdOn) => {
       previosDate = new Date(createdOn).getTime()
       currentDate = new Date().getTime()
       diffTime = Math.abs(currentDate - previosDate);
       diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));  
    }
     
    findDateDifference(createdOn)

  return (
      <tr className="t-row campaign-item">   
        <td className = "t-data common-style" data-label="DATE">
             <p>{`${createdOn.split(' ')[1]} ${createdOn.split(' ')[3]}, ${createdOn.split(' ')[2]}`}</p>
             <p className = "sub-detail">{`${diffDays != 1 ? diffDays : ''} ${previosDate <= currentDate ? ( diffDays == 1? t("Msg_Three"): t("Msg_One")) : t("Msg_Two")}`}</p>
        </td>

        <td className = "t-data campaign-section common-style" data-label="CAMPAIGN">
            <img src={require(`../images/${campaign.image_url}`).default} className = "action-icons" alt=""/>
            <div>
                <p>{campaign.name}</p>
                <p className = "sub-detail">{campaign.region}</p>      
            </div>
        </td>

        <td  className = "t-data campaign-section common-style" data-label="VIEW" onClick = {switchPricingModalCheck}>
            <img  src={require(`${'../images/Price.png'}`).default} className = "action-icons" alt=""/>
            <p>{t("Msg_Four")}</p>
             { showPricingModal ? <ModalComponent showModal = {showPricingModal ? 'Pricing' : ''} switchModalCallback = {switchPricingModalCheck} campaign = {campaign}></ModalComponent>: ''}
        </td>

        <td className = "t-data campaign-actions" data-label="ACTIONS">     
            <div className = "campaign-section">
                <img  src={require(`${'../images/file.png'}`).default} className = "action-icons" alt=""/>
                 <p>CSV</p>
            </div>

            <div className = "campaign-section">
                <img  src={report} className = "action-icons"/>
                <p>{t("Msg_Five")}</p>
            </div>

            <div className = "campaign-section" onClick = {switchCalendarCheck}>
                <img  src={calendar} className = "action-icons" />
                <p>{t("Msg_Six")}</p>
                {showCalendarModal ? <ModalComponent showModal ={showCalendarModal ? 'Calendar' : ''} switchModalCallback = {switchCalendarCheck} campaign = {campaign} updateFilterTab = {updateFilterTab}></ModalComponent> : ''}
            </div>
        </td>
      </tr>
   
  )
}


