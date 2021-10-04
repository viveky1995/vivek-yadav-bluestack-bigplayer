import { useState, useContext } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import data from "../data/data.json"


export default function CalendarComponent(props) {
const {campaign} = props;
const [value, updateValue] = useState(new Date());

const  updateCalendar = (e) => {
  console.log("update calendar",e.getTime());
  const value = e.getTime()
  if(data){
     data.map((obj) => {
     if(obj && obj.createdOn === campaign.createdOn){
        campaign.createdOn = value
     }
   })
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


