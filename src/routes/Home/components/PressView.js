/***
新闻热点tabs
*/
import React, { Component,PropTypes } from 'react';
import '../../../components/Tabs/assets/index';
import PanelContent from './PanelContent'
import './PressView.scss'
import { Router, Route, IndexRoute, hashHistory ,Link} from 'react-router';
const lazyLoad = () => {  
    return new Promise(resolve => {
        require.ensure([], () => {
            resolve({
                 Tabs: require('../../../components/Tabs').default,
                 TabPane:require('../../../components/Tabs').TabPane ,
                 TabContent:require('../../../components/Tabs').TabContent,
                 ScrollableInkTabBar:require('../../../components/Tabs').ScrollableInkTabBar
            });
        });
    });
};

const  PressView = React.createClass({
	getInitialState() {
	    return {
	      start: 0,
	    };
  	},
	onTabClick(key) {
    	console.log(`onTabClick ${key}`);
  	},
	onChange(key) {
    	console.log(`onChange ${key}`);
  	},
	componentDidMount() {
		this.proms=lazyLoad();
	  	this.proms.then((comps)=>{
	  		this.setState(comps);
	  	});

	},
	render(){
		const start = this.state.start;
    	const {Tabs, TabPane ,TabContent,ScrollableInkTabBar} =this.state;
    	let com;
	    if(Tabs){
	    	com=(
			   <Tabs
		        defaultActiveKey="1"
		        destroyInactiveTabPane
	          prefixCls = "fooding-tabs"
		        renderTabBar={() => <ScrollableInkTabBar onTabClick={this.onTabClick}/>}
		        renderTabContent={() => <TabContent/>}
		        onChange={this.onChange}
		      >
		        <TabPane tab={`新闻`} key="1" placeholder="loading 1">
		          <PanelContent id={start}/>
		        </TabPane>
		        <TabPane tab={`在线调查`} key="2" placeholder="loading 2">
		          <PanelContent id={start + 1}/>
		        </TabPane>
		        <TabPane tab={`意见箱`} key="3" placeholder="loading 3">
		          <PanelContent id={start + 2}/>
		        </TabPane>
		        <TabPane tab={`电子公告`} key="4" placeholder="loading 4">
		          <PanelContent id={start + 3}/>
		        </TabPane>
		      </Tabs>
			   );
	    }else{
	    	com=(<div></div>);
	    }
		return(
			<div className = 'index-bd-box hh-radius hh-pd0 mt10 shadow'>
			  {com} 
			</div>
		);
	}

});

export default PressView;