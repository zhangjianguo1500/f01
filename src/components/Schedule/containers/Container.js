 import {
 	connect
 } from 'react-redux'

import ScheduleView from '../components/ScheduleView'
import {dataPrev,dataNext} from '../modules/scheduleModules'

 const mapDispatchToProps = {
 	dataNext: function() {
 		// return (dispatch, getState) => {
	 	// // 	let radom = Math.random() * 1000;
	 	// let start = 1;
	  //   dispatch(dataNext(start));

 		// }
 		return (dispatch, getState) => {}
 	},
 	dataBack: function(sender) {
 		// let data=sender;
 		// return (dispatch, getState) => {
 		// 	dispatch(dataBack(data));
 		// }
 		return (dispatch, getState) => {}
 	}
 	
 }

 const mapStateToProps = function(state){

 	 //tabs:state.navigate.tabs
 	 console.log(state);
 	 return {
 	 	schedules:state.scheduleViewer
 	 }
 }

 export default connect(mapStateToProps,mapDispatchToProps)(ScheduleView);