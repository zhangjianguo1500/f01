
import React, { Component,PropTypes } from 'react';
import '../../../styles/font.scss'
import './HomeView.scss'

import MoneyExchangeView from './MoneyExchangeView'
import PressView from './PressView'
import CenterEmail from './CenterEmail'
import TaskView from './TaskView'
import ScheduleView from '../../../components/Schedule'


import { Router, Route, IndexRoute, hashHistory ,Link} from 'react-router';
const HomeView = React.createClass({
  getInitialState() {

    var data = new Date();
    let str = data.getFullYear() +"/"+this.fromat(data.getMonth() +1)+"/"+ this.fromat(data.getDate());
    let house = this.fromat(data.getHours()) + ":" + this.fromat(data.getMinutes()) + ":" + this.fromat(data.getSeconds());
    return {
      time_str:str,
      house:house
    }
    
  },
  componentDidMount(){
    this.timeInterval();
  },
  timeInterval(){
     setInterval(()=>{
          var data = new Date();
          let str = data.getFullYear() +"/"+this.fromat(data.getMonth() +1)+"/"+ this.fromat(data.getDate());
          let house = this.fromat(data.getHours()) + ":" + this.fromat(data.getMinutes()) + ":" + this.fromat(data.getSeconds());
          this.setState({
            time_str:str,
            house:house
          });
     },1000);
  },
  fromat(strDate){
   if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    return strDate;
  },
  render() {
    return (    	
    	<div className = 'container_01'>

        <div className = 'col1'>
          <div className="index-bd-box hh-radius hh-pd10 shadow">
            <div className="Punch_l">
                <h1 id="time">{this.state.house}</h1>
                <span id="year"> {this.state.time_str}</span>
                <p>IP:192.168.3.98</p>
            </div>
            <div className="Punch_r">
                <button type="button" className="dk-btn hh-btn-primary hh-radius">打卡</button>
            </div>
          </div>
          <MoneyExchangeView />
          <PressView />
        </div>
        <div className ='col2'>
            <CenterEmail />
        </div>
        <div className = 'col3'>
          <TaskView />
          <ScheduleView />
        </div>

    	</div>    	
    );
  },
});



export default HomeView
