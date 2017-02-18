import { FETCH_WEATHER } from '../actions/index';


export default function(state = [], action) {

  switch (action.type) {
  case FETCH_WEATHER:
    // concat creates a new array
    //return state.concat([action.payload.data]);

    console.log(action.payload.data);

    // this is the same as above
    return [ action.payload.data, ...state ];


  }

  return state;
}
