export const SCHEDULE_NEXT = 'SCHEDULE_NEXT'
export const SCHEDULE_PREV = 'DARA_PREV'

export function dataNext(next_data){
	return {
		type:SCHEDULE_NEXT,
		next_data
	}
}

export function dataPrev(start_data){
	return {
		type:SCHEDULE_PREV,
		start_data
	}
}

const initialState ={
	 current_data:1,
   start_data:1
}

const ACTION_HANDLERS = {
  [SCHEDULE_NEXT] : function(state, action){
  	return {
  		...state
  	};
  },
  [SCHEDULE_PREV] : function(state, action){
  	return {
  		...state
  	};
  }
}

export default function scheduleReducer( state= initialState,action){

  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}