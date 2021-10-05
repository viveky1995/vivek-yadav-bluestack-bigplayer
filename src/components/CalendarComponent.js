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
  if(data && data.campaign && data.campaign[0].body ){
     data.campaign[0].body.map((obj) => {
     if(obj && obj.createdOn === campaign.createdOn){
        campaign.createdOn = value
     }
   })
   fetch("http://localhost:8000/campaign/987654321", {
     method : 'PUT',
     headers : {
    "Accept" : "application/json",
     "Content-Type" : "application/json"
     },
     body : JSON.stringify(data.campaign[0])
   }).then((resp) => {
    console.log(resp)

   }).catch((err) =>{
    console.log(err)
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


