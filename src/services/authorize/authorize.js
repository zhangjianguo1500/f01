/*
*用户服务
*/
import {apiGet} from '../apiCall';
export const USER_LOGIN_METHOD='api/users';

export function isAuthorized(){
	return false;
}

export function getAuthorizeUser(){
	return {
		id:1,
		name:'name'
	}
}

export default function authorize(name,pwd,resolve,reject){
	if(isAuthorized()){
		return resolve(getAuthorizeUser());
	}
	return login(name,pwd,resolve,fault);	
}

export function login(name,password,resolve,reject)
{
	return apiGet(USER_LOGIN_METHOD);
}

export function getUser(){

}
//export default authorize;