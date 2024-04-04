import './App.css';
import React , {useEffect, useState} from 'react'

import Shopping from './Components/shopping';
import Cart from './Components/cart';
import Coupon from './Components/coupon';

function App() {
  const [limitPoints, setLimitPoints] = useState(0)
  const [selectProduct, setSelectProduct] = useState({
    "clothing": {},
    "accessories": {},
    "electronics": {}
  })

  const [selectValue, setSelectValue] = useState({
    "coupon": {},
    "on_top": {},
    "seasonal": {},
  })

  useEffect(()=>{

  },[limitPoints])

  console.log(selectValue)

return (
    <div className="App">
     <h1> shopping discount app</h1>

    <div style={{display:"flex",flexDirection:"row",height:'50%'}}>

      <div style={{width:"100%", padding:'15px', border:"1px solid gray"}}>
        <Shopping setSelectProduct={setSelectProduct} selectProduct={selectProduct} />
      </div>

      <div style={{width:"100%", padding:'15px', border:"1px solid gray"}}>
        <Cart selectProduct={selectProduct} selectValue={selectValue} setLimitPoints={setLimitPoints} limitPoints={limitPoints}/>
      </div>
      
      <div style={{width:"100%", padding:'15px', border:"1px solid gray"}}>
        <Coupon selectValue={selectValue} setSelectValue={setSelectValue}  limitPoints={limitPoints}/>
      </div>

     </div>

    </div>
  );
}

export default App;
