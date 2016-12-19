import React, { Component,PropTypes } from 'react';
import './MoneyExchangeView.scss' 
import Select, { Option } from 'rc-select'
import '../../../components/Select/assets/index.scss'

const MoneyExchangeView = React.createClass({
	getPopupContainer(node) {
	    return node.parentNode;
	},
	onSelect(v,y) {
	    console.log('onSelect', v);//v是哪个select
	    console.log(y);//y为选中的值
	},
	render(){
		return (
			<div className="index-bd-box hh-radius mt10 shadow">
	           <div className="currency-hd">
	                <h2>货币兑换</h2>
	            </div>
	            <div className="currency-bd">
	                <h2>1 USD=6.6707 CNY</h2>
	                <input type="text" className="hh-form-field hh-radius"/>
	                <div className="currency-box">
	                	<Select
				            placeholder="CNY"
				            style={{ width: 200 }}
				            getPopupContainer={this.getPopupContainer}
				            className ='currency-btn select-from-currency'
				            onSelect={this.onSelect.bind(this,1)}
				          >
				            <Option value="1">1</Option>
				            <Option value="2">2</Option>
				            <Option value="3">3</Option>
				        </Select>
	                    <span className="c-switch"><i className="ic-i-switch"></i></span>
	                   	<Select
				            placeholder="CNY"
				            style={{ width: 200 }}
				            getPopupContainer={this.getPopupContainer}
				            onSelect={this.onSelect.bind(this,2)}
				            className ='currency-btn select-from-currency'>
				            <Option value="1">1</Option>
				            <Option value="2">2</Option>
				            <Option value="3">3</Option>
				        </Select>
	                    <button type="button" className="ar-btn hh-btn-primary hh-radius">转换</button>
                	</div>
                	<div className="dictionary-title t10">汇率1.000000</div>
                	<div className="dictionary-title">更新时间：2016-10-16   18:45:30</div>
           		</div>
	        </div>
			)
	}
})

export default MoneyExchangeView;