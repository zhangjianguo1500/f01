import React ,{Component,PropTypes} from 'react'
import TabItem from './TabItem'

export class NavigateTabs extends Component{
	render(){
		
		let {tabs,onItemRemove,onItemClick}  = this.props;
		let random = Math.random;
		return (
			<ul>
				{
					tabs.map(
						(e,index)=>{
						return(
							<li key = {e.name}>
								<TabItem key= {e.name}  tab = {e}  onRemove={onItemRemove} onClick= {onItemClick}/>
							</li>
						)
					})
				}

			</ul>

		);
	}
}
NavigateTabs.propTypes ={
	tabs:PropTypes.array.isRequired,
	onItemRemove:PropTypes.func.isRequired
}
export default NavigateTabs;
