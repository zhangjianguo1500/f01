export const  USER_LOGIN_SIGN = 'USER_LOGIN_SIGN'
export const  USER_LOGIN_RESET = 'USER_LOGIN_RESET'
export const  USER_LOGIN_CURRENT='USER_LOGIN_CURRENT'

export function userLoginSign(user){
	return {
		type:USER_LOGIN_SIGN,
		user
	}
}

export function currentUserInfo(user){
	return {
		type:USER_LOGIN_CURRENT,
		user
	}
}

export function userLoginReset(){
	return{
		type:USER_LOGIN_RESET,
		user:{'name':'','password':''}
	}
}

const initialState ={
	name:'',
	password:''
}
const ACTION_HANDLERS = {
	[USER_LOGIN_SIGN]:function(state,action){
		//用户名密码的正则判断，远程访问，远程访问失败成功返回不同的信息
		return  {...state,
			msg:'成功'
		}

	},
	[USER_LOGIN_RESET]:function(state,action){
		return  {...state,
			name:'',
			password:''
		}
		
	},
	[USER_LOGIN_CURRENT]:function(state,action){
		let {name,password}=action.user;
		let newObj={};
		for(let key in state){
			for(let ckey in action.user){
				if(key==ckey){
					newObj[key]=action.user[ckey];
				}
			}
		}
		let obj=Object.assign({},state,newObj);
		return obj;
	}
}

export default function userLoginReducer( state= initialState,action){

  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state

}