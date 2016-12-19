
import React, { Component,PropTypes } from 'react';
import { Router, Route, IndexRoute, hashHistory ,Link} from 'react-router';
const CenterEmail =React.createClass({
	getInitialState() {
	    return {
	      start: 0,
	    };
  	},
	render(){
		const count = [1, 1, 1, 1,1,1,1];// new Array(4) skip forEach ....
	    const els = count.map((c, i) => {
	      return (<Link className="list" key ={i}>
	      			<div className = 'clearfix'></div>
                    <label className="box_space" >China 's largest e - mail service providers</label>
                    <span className="Enclosure">
                        <i className="ic-i-Enclosure"></i>
                    </span>
                    <span className="En2">2016-11-24</span>
                     <h1 className="box_space">Can check more than 150 countries and regions, currency exchange rates, and conversion</h1>
                </Link>)
	    });
		return (
		<div className="index-bd-box hh-radius hh-pd0 shadow">
            <div className="i-Email-hd">
                <h2>邮件<span className="sup">12</span></h2>
                <Link><i className="ic-i-write-mails"></i></Link>
            </div>
            <div className="i-Email-bd">
              	{els}
                <div className="more"><Link>更多<i className="ic-i-arrow-more"></i></Link></div>
            </div>
          </div>
	);
	}
});
export default CenterEmail;