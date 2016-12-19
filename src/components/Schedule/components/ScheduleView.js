import React, { Component } from 'react'
import './ScheduleView.scss'
import { Router, Route, IndexRoute, hashHistory ,Link} from 'react-router';

const ScheduleView =React.createClass({
	Format (fmt){
		//author:
   		 let o ={
			       
			"M+" : this.getMonth() + 1, //月份
			       
			"d+" : this.getDate(), //日
			       
			"h+" : this.getHours(), //小时
			       
			"m+" : this.getMinutes(), //分
			       
			"s+" : this.getSeconds(), //秒
			       
			"q+" : Math.floor((this.getMonth() + 3) / 3), //季度
			       
			"S" : this.getMilliseconds() //毫秒
			    
			};
		    if(/(y+)/.test(fmt))       
			fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
			for (var k in o)   
			if (new RegExp("(" + k + ")").test(fmt))          
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) :
			(("00" + o[k]).substr(("" + o[k]).length)));
			    return fmt;
	},
	addDays(d){
		this.setDate(this.getDate() + d);
	},
	addWeeks(w){
		this.addDays(w * 7);
	},
	addMonths(m){
		var d =this.getDate();
		   
		this.setMonth(this.getMonth() + m);

		    if(this.getDate() < d)
		       
		this.setDate(0);
	},
	addYears(){
		var m =
		this.getMonth();
		   
		this.setFullYear(this.getFullYear() + y);

		    if (m< this.getMonth()){
		       this.setDate(0);
		    }
	},
	getInitialState() {
		// let array = [];
	 //    let schedule = new Data();
	 //    let data = schedule.getDate();
	 //    for(var i = 0 ;i < 7;i++){
	 //    	schedule.setData();
	 //    }
	 return ({
	 	start:1
	 });


	},
	render(){
		return (
			<div className ='index-bd-box hh-radius hh-pd0 mt10 shadow schedule'>
				<div className ='i-schedule-hd'>
					<h2>日程</h2>
				</div>
				<div className = 'i-schedule-bd'>

					<div className="year">
                        <span className="a-lf"><i className="ic-i-arrow-left"></i></span>
                        <span className="y-m">10月 9-15日 2016</span>
                        <span className="a-rg"><i className="ic-i-arrow--right"></i></span>
                    </div>

                    <div className="week">
                        <ul className="hh-avg-sm-7 hh-thumbnails hd">
                        	<li className = 'clearfix'></li>
                            <li>一</li>
                            <li>二</li>
                            <li>三</li>
                            <li>四</li>
                            <li>五</li>
                            <li>六</li>
                            <li>日</li>
                        </ul>
                        <ul className="hh-avg-sm-7 hh-thumbnails p-b10">
                            <li>
	                            <div className="Expired">
		                             9
		                            <span>●</span>
	                            </div>
                            </li>
                            <li>
                            	<div className="current">
                            		10
                            		<br/>
                            		<span>●</span>
                            	</div>
                            </li>
                            <li>11</li>
                            <li>
                            	<div className="not-Expired">
                            		10
                            		<span>●</span>
                            		</div>
                            </li>
                            <li>13</li>
                            <li>14</li>
                            <li>15</li>
                        </ul>
                    </div>
                    <div className="schedule-list-box">
	                        <Link className="Expired"><span className="box_space lf" href="">● 总理点赞的赣南脐橙已被抢购一空</span><span className="rg">09:00-10:00</span></Link>
	                        <Link className="Expired"><span className="box_space lf" href="">● 总理点赞的赣南脐橙已被抢购一空</span><span className="rg">10:00-12:00</span></Link>
	                        <Link><span className="box_space lf" href="">● 总理点赞的赣南脐橙已被抢购一空</span><span className="rg">13:00-14:00</span></Link>
	                        <Link><span className="box_space lf" href="">● 总理点赞的赣南脐橙已被抢购一空</span><span className="rg">15:00-16:00</span></Link>
	                        <Link><span className="box_space lf" href="">● 总理点赞的赣南脐橙已被抢购一空</span><span className="rg">17:00-18:00</span></Link>
	                        <Link><span className="box_space lf" href="">● 总理点赞的赣南脐橙已被抢购一空</span><span className="rg">19:00-20:00</span></Link>
	                </div>
	                <div className="more"><Link >更多<i className="ic-i-arrow-more"></i></Link></div>
				</div>
				
			</div>
		)
	}
})

export default ScheduleView;