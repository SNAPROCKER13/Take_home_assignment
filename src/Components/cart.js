import { useEffect, useState } from "react"

const Cart = ({selectProduct, selectValue,setLimitPoints }) => {
    const [items, setItems] = useState([])
    const [total, setTotal] = useState(0)
    const [code, setCode] = useState(1)

    useEffect(() => {

        let arrItems = []
        let arrCode = []

        let clothing = Object.entries(selectProduct.clothing)
        let accessories = Object.entries(selectProduct.accessories)
        let electronics = Object.entries(selectProduct.electronics)

        for(let [key, value] of clothing){
            arrItems.push({id:`${arrItems.length+1}`, key: `${key}` , count: `${value.count}`, value: value.value})
        }

        for(let [key, value] of accessories){
            arrItems.push({id:`${arrItems.length+1}`, key: `${key}` , count: `${value.count}`, value: value.value})
        }

        for(let [key, value] of electronics){
            arrItems.push({id:`${arrItems.length+1}`, key: `${key}` , count: `${value.count}`, value: value.value})
        }

        setItems(arrItems)

       Object.values(selectValue).map(item => {

            if(item.case !== undefined){
                arrCode.push(item.case)
            }

       })

        handleProcess()

        console.log()
        setCode(arrCode.length)

    },[selectProduct,selectValue])

    const handleProcess = () => {

        let clothing = Object.entries(selectProduct.clothing)
        let accessories = Object.entries(selectProduct.accessories)
        let electronics = Object.entries(selectProduct.electronics)

        let process = 0
        let collect = 0
        

        let multiProcess = 0
        let collectMulti = 0

        for(let [key,value] of clothing){
            multiProcess = multiProcess + Number(value.count * value.value)
        }

        for(let [key,value] of accessories){
            multiProcess = multiProcess + Number(value.count * value.value)
        }

        for(let [key,value] of electronics){
            multiProcess = multiProcess + Number(value.count * value.value)
        }
        
        if(selectValue.coupon.case == '1'){

            for(let [key,value] of clothing){
                process = process + Number(value.count * value.value)
            }
    
            for(let [key,value] of accessories){
                process = process + Number(value.count * value.value)
            }
    
            for(let [key,value] of electronics){
                process = process + Number(value.count * value.value)
            }
    
            process = process - Number(selectValue.coupon.fixed_amount)

            multiProcess = multiProcess - Number(selectValue.coupon.fixed_amount)

        }

        if(selectValue.coupon.case == '2'){

            for(let [key,value] of clothing){
                process = process + Number(value.count * value.value)
            }
    
            for(let [key,value] of accessories){
                process = process + Number(value.count * value.value)
            }
    
            for(let [key,value] of electronics){
                process = process + Number(value.count * value.value)
            }

            process = process - (process*(selectValue.coupon.percentage_discount/100))

            multiProcess = multiProcess - (multiProcess*(selectValue.coupon.percentage_discount/100))

        }

        if(selectValue.on_top.case == '3'){
            let cloth = 0;
            let acces = 0;
            let elec = 0;
            
            for(let [key,value] of clothing){
                cloth = cloth + Number(value.count * value.value)
                process = process + Number(value.count * value.value)
            }
    
            for(let [key,value] of accessories){
                acces = acces + Number(value.count * value.value)
                process = process + Number(value.count * value.value)
            }
    
            for(let [key,value] of electronics){
                elec = elec + Number(value.count * value.value)
                process = process + Number(value.count * value.value)
            }

            if(selectValue.on_top.category == 'Clothing'){
                process = process - (cloth*(selectValue.on_top.percentage/100))
                multiProcess = multiProcess - (multiProcess*(selectValue.on_top.percentage/100))
            }

            if(selectValue.on_top.category == 'Accessories'){
                process = process - (acces*(selectValue.on_top.percentage/100))
                multiProcess = multiProcess - (multiProcess*(selectValue.on_top.percentage/100))
            }

            if(selectValue.on_top.category == 'Electronics'){
                process = process - (elec*(selectValue.on_top.percentage/100))
                multiProcess = multiProcess - (multiProcess*(selectValue.on_top.percentage/100))
            }

        }

        if(selectValue.on_top.case == '4'){

            for(let [key,value] of clothing){
                process = process + Number(value.count * value.value)
            }
    
            for(let [key,value] of accessories){
                process = process + Number(value.count * value.value)
            }
    
            for(let [key,value] of electronics){
                process = process + Number(value.count * value.value)
            }

            if(code > 1){
                setLimitPoints(multiProcess*(20/100))
            }else{
                setLimitPoints(process*(20/100))
            }

            process = process - selectValue.on_top.points

            multiProcess = multiProcess - selectValue.on_top.points

        }

        if(selectValue.seasonal.case == '5'){
            
            let count = 0
            let countMulti = 0
          
            for(let [key,value] of clothing){
                process = process + Number(value.count * value.value)
            }
           
            for(let [key,value] of accessories){
                process = process + Number(value.count * value.value)
            }
    
            for(let [key,value] of electronics){
                process = process + Number(value.count * value.value)
            }

            collect = collect + process
            collectMulti = collectMulti + multiProcess

            while(collect >= Number(selectValue.seasonal.bath)){

                collect = collect - Number(selectValue.seasonal.bath)
                count = count + 1

            }

            while(collectMulti >= Number(selectValue.seasonal.bath)){

                collectMulti = collectMulti - Number(selectValue.seasonal.bath)
                countMulti = countMulti + 1

            }

            process = process - (Number(selectValue.seasonal.discount)*count)

            multiProcess = multiProcess - (Number(selectValue.seasonal.discount)*countMulti)
            

        }

        if(code > 1){
            setTotal(Number(multiProcess))
        }else{
            setTotal(Number(process))
        }
      
    }

    console.log(selectValue.coupon.fixed_amount)

    return(
        <div>
            <h1 style={{margin:"0"}}>Items In Cart</h1>
            
            {items.map((item) => {
                
                if(item.key == 't-shirt' && item.value != '0'){
                   return( 
                        <div key={item.id}>
                            <span>{item.count} {item.key} : {Number(item.value * item.count)} THB</span><br/>
                        </div>
                    )
                }
                if(item.key == 'hoodie' && item.value != '0'){
                    return( 
                        <div key={item.id}>
                            <span>{item.count} {item.key} : {Number(item.value * item.count)} THB</span><br/>
                        </div>
                    )
                }
                if(item.key == 'jeans' && item.value != '0'){
                    return( 
                        <div key={item.id}>
                            <span>{item.count} {item.key} : {Number(item.value * item.count)} THB</span><br/>
                        </div>
                    )
                }
                if(item.key == 'shorts' && item.value != '0'){
                    return( 
                        <div key={item.id}>
                            <span>{item.count} {item.key} : {Number(item.value * item.count)} THB</span><br/>
                        </div>
                    )
                }

                if(item.key == 'hat' && item.value != '0'){
                    
                    return( 
                        <div key={item.id}>
                            <span>{item.count} {item.key} : {Number(item.value * item.count)} THB</span><br/>
                        </div>
                    )
                }
                if(item.key == 'bag' && item.value != '0'){
                    return( 
                        <div key={item.id}>
                            <span>{item.count} {item.key} : {Number(item.value * item.count)} THB</span><br/>
                        </div>
                    )
                }
                if(item.key == 'belt' && item.value != '0'){
                    return( 
                        <div key={item.id}>
                            <span>{item.count} {item.key} : {Number(item.value * item.count)} THB</span><br/>
                        </div>
                    )
                }
                if(item.key == 'watch' && item.value != '0'){
                    return( 
                        <div key={item.id}>
                            <span>{item.count} {item.key} : {Number(item.value * item.count)} THB</span><br/>
                        </div>
                    )
                }
                if(item.key == 'camera' && item.value != '0'){
                    return( 
                        <div key={item.id}>
                            <span>{item.count} {item.key} : {Number(item.value * item.count)} THB</span><br/>
                        </div>
                    )
                }
                if(item.key == 'phone' && item.value != '0'){
                    return( 
                        <div key={item.id}>
                            <span>{item.count} {item.key} : {Number(item.value * item.count)} THB</span><br/>
                        </div>
                    )
                }
                if(item.key == 'laptop' && item.value != '0'){
                    return( 
                        <div key={item.id}>
                            <span>{item.count} {item.key} : {Number(item.value * item.count)} THB</span><br/>
                        </div>
                    )
                }
            }
            )}

            <br/><br/>
            {items.length != 0 ? <>
                {selectValue.coupon.case == 1 && selectValue.coupon.fixed_amount != undefined? <span>Discount: {`${selectValue.coupon?.['fixed_amount']}`} THB</span> : selectValue.coupon.case == 2 && selectValue.coupon.percentage_discount != undefined ? <span>Discount: {`${selectValue.coupon?.['percentage_discount']}`}%</span> : ""} 
                <br/>
                {selectValue.on_top.case == 3 && selectValue.on_top.percentage != undefined ? <span>Discount: {`${selectValue.on_top?.['percentage']}`}% Off on {selectValue.on_top?.['category'] == undefined ? 'category' : `${selectValue.on_top?.['category']}`}</span> : selectValue.on_top.case == 4 && selectValue.on_top.points != undefined ? <span>Points: {`${selectValue.on_top?.['points']}`} Points</span> : ""} 
                <br/>
                {selectValue.seasonal.case == 5 && selectValue.seasonal.bath != undefined && selectValue.seasonal.case == 5 && selectValue.seasonal.discount != undefined ? <span>Discount: {`${selectValue.seasonal?.['discount']}`} THB at ever {`${selectValue.seasonal?.['bath']}`} THB</span> : ""} 
            </>
            :""}
            <br/>
            <br/>
            
            <>
              <span>Total Price {total != undefined ? total || 0 : 0} THB</span>
            </>
        </div>
    )
    
}

export default Cart