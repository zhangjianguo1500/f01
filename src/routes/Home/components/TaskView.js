/*
**任务模块
**/
import React, { Component,PropTypes } from 'react';
import '../../../components/Tabs/assets/index';
import './PressView.scss'
import './TaskView.scss'
import { Router, Route, IndexRoute, hashHistory ,Link} from 'react-router';

class Task extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    console.log(this.props.id, 'constructor');
  }

  componentWillReceiveProps() {
    console.log(this.props.id, 'componentWillReceiveProps');
  }

  render() {
    const count = [1, 1, 1, 1,1,1,1];// new Array(4) skip forEach ....
    const els = count.map((c, i) => {
      return <ul className="box_space" key ={i}>
                <li>1504{this.props.id}</li>
                <li>报销申请</li>
                <li><Link >办理任务</Link></li>
              </ul>;
    });
    return (<div className = 'box i-news'>
          <div className ='news-list-box'>
          	<ul className ='box_space' style={{color: '#9facbd'}}>
          		<li>
          			流程定义ID
          		</li>
          		<li>
          			任务名称
          		</li>
          		<li>
          			操作
          		</li>
          	</ul>
            {els}
          </div>
          <div className ='more'><Link>更多<i className="ic-i-arrow-more"></i></Link></div>
    </div>);
  }
}

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

const  TaskView = React.createClass({
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
		        <TabPane tab={`个人任务`} key="1" placeholder="loading 1">
		          <Task id={start}/>
		        </TabPane>
		        <TabPane tab={`组任务`} key="2" placeholder="loading 2">
		          <Task id={start + 1}/>
		        </TabPane>
		      </Tabs>
			   );
	    }else{
	    	com=(<div></div>);
	    }
		return(
			<div className = 'index-bd-box hh-radius hh-pd0  shadow'>
			  {com} 
			</div>
		);
	}

});

export default TaskView;