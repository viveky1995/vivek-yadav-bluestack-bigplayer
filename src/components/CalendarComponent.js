import { useState, useContext } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import data from "../data/data.json"


export default function CalendarComponent(props) {
const {campaign} = props;
const [value, updateValue] = useState(new Date());

const  updateCalendar = (e) => {
  const value = e.getTime()
  const campaignData = localStorage.getItem('campaignData') ?  JSON.parse(localStorage.getItem('campaignData')) : data ;

  if(campaignData){
     campaignData.map((obj) => {
     if(obj && obj.createdOn === campaign.createdOn){
        campaign.createdOn = value ;
        obj.createdOn = value ;
     }
   })
   localStorage.setItem('campaignData', JSON.stringify(campaignData));
  }
  updateValue(value)
}
  return (
    <div className="">
      <Calendar
        onChange={updateCalendar}   
      />
    </div>
  );
}


