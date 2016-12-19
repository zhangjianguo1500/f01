 import {
 	connect
 } from 'react-redux'
import { browserHistory } from 'react-router';
import Login from '../components/Login'
import {userLoginSign,userLoginReset,currentUserInfo} from '../modules/login'
import {login as userLogin} from '../../../services/authorize/authorize';

const mapDispatchToProps = {
 	loginSign: function(that) {
 		let {name,password} =that.props;
 		
 		return (dispatch, getState) => {
 			debugger;
 			//let auth=authorize;
 			let promise= userLogin(name,password);
 			promise.then((response)=>{ 				
 				console.log(response);
 				browserHistory.push('/'); 		
 			},(error)=>{
 				console.log(error);
 			});
 			/*
 			var promise=new Promise(function(resolve,reject){
 				window.setTimeout(function(){
 					if(name=='user'){
 						resolve({name,password});
 						browserHistory.push('/'); 						
 					}
 					else{
 						reject({name,password});
 					}
 				}, Math.random()*2000+1000);
 			});
 			promise.then((n)=>{
 				dispatch(userLoginSign(n));
 			},(n)=>{

 				console.log('错误处理流程');
 			});	
 			*/ 		
 		}
 	},
 	loginReset: function() {
 		return (dispatch, getState) => {
 			dispatch(userLoginReset());
 		}
 	},
 	currentInfo:function(user){
 		return (dispatch,getState)=>{
 			let current={};
 			console.log(Object.keys(user));
 			for(let obj in user){
 				current[user[obj].name]=user[obj].value;
 			}
 			dispatch(currentUserInfo(current));
 		}
 	}
 }

 const mapStateToProps =function (state){
 	 //tabs:state.navigate.tabs
 	 return {
 	 	name:state.login.name,
 	 	password:state.login.password
 	 }
 }

//let LoginForm=connect( mapStateToProps,mapDispatchToProps)(Login);

 export default connect( mapStateToProps,mapDispatchToProps)(Login);