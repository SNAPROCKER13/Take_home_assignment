import React from 'react'

const Coupon = ({selectValue, setSelectValue,limitPoints}) => {

    const handleSelect = (e) => {
        console.log(e.target.checked)
        if(e.target.checked == true){
            if(e.target.value == 1 || e.target.value == 2){
                setSelectValue({
                    ...selectValue,
                    "coupon": {case: e.target.value}
                })
            }
        }else{
            if(e.target.value == 1 || e.target.value == 2){
                setSelectValue({
                    ...selectValue,
                    "coupon": {case: 0},
                })
            }
        }

        if(e.target.checked == true){
            if(e.target.value == 3 || e.target.value == 4){
                setSelectValue({
                    ...selectValue,
                    "on_top": {case: e.target.value}
                })
            }
        }else{
            if(e.target.value == 3 || e.target.value == 4){
                setSelectValue({
                    ...selectValue,
                    "on_top": {case: 0},
                })
            }
        }

        if(e.target.checked == true){
            if(e.target.value == 5){
                setSelectValue({
                    ...selectValue,
                    "seasonal": {case: e.target.value}
                })
            }
        }else{
            if(e.target.value == 5){
                setSelectValue({
                    ...selectValue,
                    "seasonal": {case: 0},
                })
            }
        }
    }

    const handleChangeValue = (e) => {
       if(['fixed_amount','percentage_discount'].includes(e.target.name)){
            setSelectValue({
                ...selectValue,
                "coupon": {...selectValue.coupon, [e.target.name]: e.target.value},
            })
       }

       if(['item_category','points'].includes(e.target.name)){
            if(e.target.name == 'item_category'){
                setSelectValue({
                    ...selectValue,
                    "on_top": {...selectValue.on_top, percentage: e.target.value},
                })
            }else{
                setSelectValue({
                    ...selectValue,
                    "on_top": {...selectValue.on_top, [e.target.name]: e.target.value},
                })
            }
           
        }

        if(['special_campaigns'].includes(e.target.name)){
            console.log(e.target.name)
            setSelectValue({
                ...selectValue,
                "seasonal": {...selectValue.coupon, [e.target.name]: e.target.value},
            })
        }
    }

    const handleSelectCategory = (e) => {
        setSelectValue({
            ...selectValue,
            "on_top": {...selectValue.on_top, category: e.target.value },
        })
    }

    const handleDiscount = (e) => {
        setSelectValue({
            ...selectValue,
            "seasonal": {...selectValue.seasonal, discount: e.target.value},
        })
    }

    const handleBath = (e) => {
        setSelectValue({
            ...selectValue,
            "seasonal": {...selectValue.seasonal, bath: e.target.value},
        })
    }

    console.log(limitPoints)

    return (
        <div>
            <h1 style={{margin:"0"}} > Discount </h1>

            <div>
                <h1>Coupon</h1>
                <input type="checkbox" id="fixed_amount" name="fixed_amount" value="1" onChange={e => handleSelect(e)} disabled={selectValue.coupon.case == 2 ? true : false}/>
                <label htmlFor="fixed_amount"> Fixed amount : </label>
                {selectValue.coupon.case == 1 ? <><span>amount</span> <input defaultValue={0} id="fixed_amount" name="fixed_amount" type="number" onChange={e => handleChangeValue(e)} min={1} /> THB</> :""}  <br/>

                <input type="checkbox" id="percentage_discount" name="percentage_discount" value="2" onChange={e => handleSelect(e)} disabled={selectValue.coupon.case == 1 ? true : false}/>
                <label htmlFor="percentage_discount"> Percentage discount : </label>
                {selectValue.coupon.case == 2 ? <><span>Percentage</span> <input defaultValue={0} id="percentage_discount" name="percentage_discount" type="number" onChange={e => handleChangeValue(e)} min={1}/> %</>:""}  <br/>
            </div>
          
            <div>
                <h1>On Top</h1>
                <input type="checkbox" id="item_category" name="item_category" value="3" onChange={e => handleSelect(e)} disabled={selectValue.on_top.case == 4 ? true : false}/>
                <label htmlFor="item_category"> Percentage discount by item : </label>
                {selectValue.on_top.case == 3 ? <>
                <span>
                    <select defaultValue={0} onChange={e => handleSelectCategory(e)}>
                        <option value='0' >Catagoty</option>
                        <option value="Clothing" >Clothing</option>
                        <option value="Accessories" >Accessories</option>
                        <option value="Electronics" >Electronics</option>
                    </select>
                </span> <span>amount</span> <input id="item_category" name="item_category" type="number" onChange={e => handleChangeValue(e)} min={1} /> %</>:""}<br/>

                <input type="checkbox" id="points" name="points" value="4" onChange={e => handleSelect(e)} disabled={selectValue.on_top.case == 3 ? true : false}/>
                <label htmlFor="points"> Discount by points : </label>
                {selectValue.on_top.case == 4 ? <><span>Customer points</span> <input defaultValue={0} id="points" name="points" type="number" onChange={e => handleChangeValue(e)} min={1} max={limitPoints}/> points</>:""}  <br/>
            </div>
    
            <div>
                <h1>Seasonal</h1>
                <input type="checkbox" id="special_campaigns" name="special_campaigns" value="5" onChange={e => handleSelect(e)}/>
                <label htmlFor="special_campaigns"> Special campaigns : </label>
                {selectValue.seasonal.case == 5 ? <><span>every</span> <input defaultValue={0} id="special_campaigns" name="special_campaigns" type="number" onChange={(e) => handleBath(e)} min={1}/> THB <span>Discount</span> <input defaultValue={0} type="number" onChange={(e) => handleDiscount(e)} min={1} max={selectValue.seasonal.bath}/> THB</>:""}  <br/>
            </div>

        </div>
    )
}

export default Coupon