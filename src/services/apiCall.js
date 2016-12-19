export const API_HOST_ADDRESS='http://localhost:3000/';

import request from '../lib/request';

export function buildUrl(method){
	return API_HOST_ADDRESS+method;
}
function resolvePromise(promise,resolve,reject){
	if(typeof resolve=='fucntion'&& typeof reject=='function'){
		return promise(resolve,reject);
	}
	if(typeof resolve=='function'){
		return promise(resolve,(error)=>{console.log(error)});
	}

	if(typeof resolve=='undefined'){
		return promise;
	}
	return promise;
}

export function apiGet(remoteMethod,params,resolve,reject){
	let url=buildUrl(remoteMethod);
	
	return resolvePromise(request.get(url,params).end(),resolve,reject);
}
export function apiPost(remoteMethod,params,resolve,reject){
	let url=buildUrl(remoteMethod);
	let promise=request.post(url).send(params).end();
	return resolvePromise(promise,resolve,reject);
}
export function apiCall(type,remoteMethod,params,resolve,reject){
	switch(type){
		case 'get':
		break;
		case 'post':
		break;
	}
}
