import { Suspense } from 'react'
import React from 'react'
import Example from '../feb14/UseState'


export default function App(){
    const Component1=React.lazy(()=>import('./component/component1'))
    const Component2=React.lazy(()=>import('./component/component2'))
    const Button=React.lazy(()=>import('../feb14/ButtonList'))
    const CustomHook=React.lazy(()=>import('./CustomHooks'))
const tab='photos'
   
        // const [tab, setTab] = React.useState('photos');
        
        // function handleTabSelect(tab) {
        //   setTab(tab);
        // };
   
    return(
        <>
        {/* <Suspense fallback={<div>Loading....</div>}>
            
            <Component1/>
            <Component2/>
            <CustomHook/>
            <Button/>
        </Suspense> */}
       
          <Suspense fallback={<Example/>}>
          <Component2/><br></br>
          
          {tab === 'photos' ? <Button /> : <CustomHook />}
         
          <Component1/>
            
        </Suspense>

        </>
    )
}