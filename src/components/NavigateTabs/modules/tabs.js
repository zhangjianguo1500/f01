export const  NAV_ADD_TAB = 'NAV_ADD_TAB'
export const  NAV_REMOVE_TAB  = 'NAV_REMOVE_TAB'

export const  NAV_TAB_CHANGE = 'NAV_TAB_CHANGE'

export function navAddTab(tab){

	return{
		type:NAV_ADD_TAB,
		tab
	}
}

export function navRemoveTab(tab){
	return{
		type:NAV_REMOVE_TAB,
		tab

	}
}

export function navTabChange(tab){
	return{
		type:NAV_TAB_CHANGE,
		tab
	}
}

const initialState = {
	tabs: [],
	currentTab:'name'
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [NAV_ADD_TAB] : function(state, action){
  	//最多可以加10个，如果打开的是同一个不添加新的把现有的激活
  	let {tabs} = state;
  	if(tabs.length >= 10){
  		return state;
  	}
  	let newTabs=[];
  	tabs.map((e,index)=>{
  		newTabs.push(e);
  	});
    newTabs = newTabs.concat(action.tab);
    /*
    if(typeof(action.tab)=='object'){
      newTabs.push(action.tab);
    }else if(typeof(action.tab)=='array'){
      newTabs.concat(action.tab);
    }*/
  	return {
  		...state,
  		tabs:newTabs,
  		currentTab:action.tab.name
  	};
  },
  [NAV_REMOVE_TAB] : function(state, action){

  	let {tabs} = state;
    console.log(tabs);
  	if(tabs.length < 2){
  		return state;
  	}
  	let newTabs =[];
  	let activeIndex = -1;
  	tabs.map((e,index)=>{
  		if(e.name != action.tab.name){
  			newTabs.push(e);
  			if(state.currentTab == action.tab.name){
  				activeIndex = index-1;
  			}
  		}
  	});
  	if(activeIndex >-1){
  		return {
	  		...state,
	  		tabs:newTabs,
	  		currentTab:tabs[activeIndex].name
	  	}
  	}
  	return {
  		...state,
  		tabs:newTabs
  	}
  	
  },
  [NAV_TAB_CHANGE]:function(state, action){  		
  		return{
  			...state,  			
  			currentTab:state.tab.name
  		}
  }
}

export default function navTabReducer( state= initialState,action){

  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state

}