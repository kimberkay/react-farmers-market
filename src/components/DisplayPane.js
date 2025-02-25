import React from 'react';
import ProduceList from './ProduceList';
import {Row, Col} from 'react-bootstrap';
import Logo from '../img/logo.png';
const marketSchedule = [  
  {  
    day: "Sunday",
    location: "Lents International",
    hours: "9:00am - 2:00pm",
    booth: "4A"
  },
  {  
    day: "Monday",
    location: "Pioneer Courthouse Square",
    hours: "10:00am - 2:00pm",
    booth: "7C"
  },
  {  
    day: "Tuesday",
    location: "Hillsboro",
    hours: "5:00pm - 8:30pm",
    booth: "1F"
  },
  {  
    day: "Wednesday",
    location: "Shemanski Park",
    hours: "10:00am - 2:00pm",
    booth: "3E"
  },
  {  
    day: "Thursday",
    location: "Northwest Portland",
    hours: "2:00pm - 6:00pm",
    booth: "6D"
  },
  {
    day: "Friday",
    location: "Northwest Portland",
    hours: "2:00pm - 6:00pm",
    booth: "6D"
  },
  {  
    day: "Saturday",
    location: "Beaverton",
    hours: "10:00am - 1:30pm",
    booth: "9G"
  }
];

const availableProduce = [  
  {  
    month: "January",
    selection: ["Apples", "Hazelnuts", "Pears", "Garlic", "Mushrooms", "Onions", "Potatoes", "Turnips"]
  },
  {  
    month: "February",
    selection: ["Apples", "Hazelnuts", "Pears", "Garlic", "Mushrooms", "Onions", "Potatoes"]
  },
  {  
    month: "March",
    selection: ["Apples", "Hazelnuts", "Pears", "Rhubarb", "Garlic", "Mushrooms", "Onions", "Potatoes"]
  },
  {  
    month: "April",
    selection: ["Apples", "Hazelnuts", "Pears", "Rhubarb", "Asparagus", "Garlic", "Lettuce", "Mushrooms", "Onions", "Potatoes"]
  },
  {  
    month: "May",
    selection: ["Apples", "Hazelnuts", "Pears", "Rhubarb", "Asparagus", "Cauliflower", "Garlic", "Lettuce", "Potatoes", "Radishes"]
  },
  {  
    month: "June",
    selection: ["Apples", "Hazelnuts", "Pears", "Rhubarb", "Blackberries", "Cherries", "Raspberries", "Strawberries", "Asparagus", "Broccoli", "Cauliflower", "Kohlrabi", "Lettuce", "Mushrooms", "Potatoes", "Radishes", "Squash"]
  },
  {  
    month: "July",
    selection: ["Apples", "Hazelnuts", "Pears", "Rhubarb", "Apricots", "Blackberries", "Blueberries", "Cherries", "Melons", "Nectarines", "Peaches", "Raspberries", "Strawberries", "Tomatoes", "Beets", "Broccoli", "Brussel Sprouts", "Cabbage", "Carrots", "Cauliflower", "Cucumber", "Eggplant", "Garlic", "Green Beans", "Kohlrabi", "Lettuce", "Mushrooms", "Potatoes", "Radishes", "Squash", "Turnips"]
  },
  {  
    month: "August",
    selection: ["Apples", "Apricots", "Blackberries", "Blueberries", "Cherries", "Melons", "Nectarines", "Peaches", "Pears", "Plums", "Raspberries", "Rhubarb", "Strawberries", "Tomatoes", "Beets", "Broccoli", "Brussel Sprouts", "Cabbage", "Carrots", "Cauliflower", "Corn", "Cucumber", "Eggplant", "Garlic", "Green Beans", "Kohlrabi", "Lettuce", "Mushrooms", "Onions", "Peas", "Peppers", "Potatoes", "Radishes", "Squash", "Turnips"]
  },
  {  
    month: "September",
    selection: ["Apples", "Blueberries", "Grapes", "Melons", "Peaches", "Pears", "Plums", "Raspberries", "Tomatoes", "Broccoli", "Brussel Sprouts", "Cabbage", "Carrots", "Cauliflower", "Corn", "Cucumber", "Eggplant", "Garlic", "Green Beans", "Kohlrabi", "Lettuce", "Mushrooms", "Onions", "Peas", "Peppers", "Potatoes", "Radishes", "Squash", "Turnips"]
  },
  {  
    month: "October",
    selection: ["Apples", "Grapes", "Hazelnuts", "Melons", "Peaches", "Pears", "Tomatoes", "Broccoli", "Brussel Sprouts", "Cabbage", "Carrots", "Cauliflower", "Corn", "Cucumber", "Eggplant", "Garlic", "Green Beans", "Kohlrabi", "Lettuce", "Mushrooms", "Onions", "Peas", "Peppers", "Potatoes", "Pumpkins", "Radishes", "Squash", "Turnips"]
  },
  {  
    month: "November",
    selection: ["Apples", "Hazelnuts", "Pears", "Broccoli", "Carrots", "Cauliflower", "Garlic", "Mushrooms", "Onions", "Potatoes", "Squash", "Turnips"]
  },
  {  
    month: "December",
    selection: ["Apples", "Hazelnuts", "Pears", "Broccoli", "Carrots", "Cauliflower", "Garlic", "Mushrooms", "Onions", "Potatoes", "Turnips"]
  }
];

function DisplayPane(props) {
  let scheduleDay = marketSchedule.filter(d => d.day === props.selectedDay)[0];
  let monthProduce = availableProduce.filter(m => m.month === props.selectedMonth)[0].selection;
  return (
    <React.Fragment>
      <Row className="display-pane">
        <Col className="col-1"></Col>
        <Col className="col-4">
          <img className="logo" src={Logo} alt="" />
        </Col>
        <Col className="col-7 location">
          <div className="center-vertical">
            <h2>{scheduleDay.day}</h2>
            <h3>{scheduleDay.location} - Booth {scheduleDay.booth}</h3>
            <h3>({scheduleDay.hours})</h3>
          </div>
        </Col>
        <hr/>
        <ProduceList produceArray={monthProduce} />
      </Row>
    </React.Fragment>
  )
}

export default DisplayPane;