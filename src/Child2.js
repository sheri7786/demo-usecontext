import React, {useReducer} from 'react';
import counterReducer from './CounterReducer';


const Child2 = ()=>{
    let [state,dispatch] = useReducer(counterReducer,1);
    console.log(state);
    return(
        <div>
            <h3>value of  reducer state is:{state}</h3>
            <button onClick ={()=> dispatch('INCREMENT')}> increment reducer</button>
        </div>
    )
}
export default Child2;