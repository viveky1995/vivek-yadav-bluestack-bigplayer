import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import CalendarComponent from './CalendarComponent';
import { useTranslation } from "react-i18next";


export default function ModalComponent(props){
    const {showModal, switchModalCallback, campaign, updateFilterTab} = props;
    const { t } = useTranslation();

    const closeBtnLabel = showModal === "Calendar" ? t("Msg_Six") : t("Msg_Eight") 
return (
    <Popup open = {showModal} modal nested>
    {close => (
      <div className="modal">
        <div className="header"></div> 
        {showModal === "Calendar" ? <CalendarComponent campaign = {campaign }></CalendarComponent>:
        (<div className="content">
              <div className = "popup-header">
              <img src={require(`../images/${campaign.image_url}`).default} className = "" alt=""/>
                   
              <div>
                <p>{campaign.name}</p>
                <p>{campaign.region}</p>      
              </div>
              </div>
            <div className = "popup-details">
                <h2 style ={{'color' :'#000000'}}>{t("Popup_Head")}</h2>
                <div className = "popup-panel"><p>{t("Week_Price")}</p><span>$ {campaign.price}</span></div>    
                <div className = "popup-panel"><p>{t("Month_Price")}</p><span>$ {campaign.price}</span></div>    
                <div className = "popup-panel"><p>{t("Year_Price")}</p><span>$ {campaign.price}</span></div>    
            </div>  
        </div>
        )}
        <div className="actions">
          <button
            className="button" style ={{'padding' : '8px 12px','border-radius' : '0px','border' : '1px solid #000000'}}
            onClick={() => {
              console.log('modal closed ');
              switchModalCallback() ;
             if(showModal === "Calendar"){
                 updateFilterTab()
             }
              close();
            }}
          >
           {closeBtnLabel}
          </button>
        </div>
      </div>
    )}
  </Popup>
);
}