 import {
 	connect
 } from 'react-redux'
 import navTabReducer, {
 	navAddTab,
 	navRemoveTab,
 	navTabChange
 } from '../modules/tabs'

 import NavigateTabs from '../components/NavigateTabs'

 const mapDispatchToProps = {
 	navAddTab: function() {
 		return (dispatch, getState) => {
	 		let radom = Math.random() * 1000;
	 		let tab = {
	 			name: 'Home' + random,
	 			component: 'Home' + radom
	 		};
	 		dispatch(navAddTab(tab));

 		}
 	},
 	onItemRemove: function(sender) {
 		let tab=sender;
 		return (dispatch, getState) => {
 			dispatch(navRemoveTab(tab));
 		}

 	},
 	onItemClick: function() {

 	}
 }

 const mapStateToProps = (state) => ({
 	 //tabs:state.navigate.tabs
 })

 export default connect(mapStateToProps,mapDispatchToProps)(NavigateTabs);