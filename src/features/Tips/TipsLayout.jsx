import React, { useEffect, useReducer, useState } from 'react'
import FilterBox from './FilterBox'
import TipsList from './TipsList'
import { getTips } from '../../services/api.tips'


const initialState = {
    tips : [],
}

function reducer(state,action){
    switch(action.type){
        case 'getTips':
            return {...state,tips:action.payload}
        default :
        return state;
    }
}


function TipsLayout() {

    const [{tips},dispatch] = useReducer(reducer,initialState);

    useEffect(()=>{
        async function getData(){
            const data = await getTips();
            dispatch({type:"getTips",payload : data});
        }
        getData();
    },[])

  return (
    <div className='px-3 py-4'>
        <FilterBox />
        <TipsList tips={tips}/>
    </div>
  )
}

export default TipsLayout