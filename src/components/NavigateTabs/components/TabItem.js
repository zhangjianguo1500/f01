import React, {Component,PropTypes} from 'react'
import { Link } from 'react-router'
export  class TabItem extends Component{
	render(){
		let {tab,onClick,onRemove} = this.props; 

		return (
			<div>
				<Link to ={tab.name}>
				{tab.name}
				<span onClick ={onRemove.bind(null,tab)} data-tab={tab} key = {tab.name}  value ="">&</span>
				</Link>
			</div>
			);
	}
}
TabItem.PropTypes ={
	tab:PropTypes.object.isRequired,
	onRemove:PropTypes.func.isRequired
}

export default TabItem;