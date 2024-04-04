

const shopping = ({selectProduct , setSelectProduct}) => {

    const handleSelectProduct = (e, value) => {

        if(e.target.checked == true){
            if(['t-shirt','hoodie', 'jeans','shorts'].includes(e.target.value)){
                setSelectProduct({
                    ...selectProduct,
                    clothing : {...selectProduct.clothing, [e.target.value] : {count :'1', value : value}}
                })
            }
        }else{
            if(['t-shirt','hoodie', 'jeans','shorts'].includes(e.target.value)){              
                setSelectProduct({
                    ...selectProduct,
                    clothing :  {...selectProduct.clothing, [e.target.value] : {count :'0', value : 0}} 
                })
            }
        }

        if(e.target.checked == true){
            if(['hat','bag', 'belt'].includes(e.target.value)){
                setSelectProduct({
                    ...selectProduct,
                    accessories :  {...selectProduct.accessories, [e.target.value] : {count :'1', value : value}}
                })
            }
        }else{
            if(['hat','bag', 'belt'].includes(e.target.value)){
                setSelectProduct({
                    ...selectProduct,
                    accessories : {...selectProduct.accessories, [e.target.value] : {count :'0', value : 0}}
                })
            }
        }

        if(e.target.checked == true){
            if(['watch','camera', 'phone', 'laptop'].includes(e.target.value)){
                setSelectProduct({
                    ...selectProduct,
                    electronics : {...selectProduct.electronics, [e.target.value] : {count :'1', value : value}}
                })
            }
        }else{
            if(['watch','camera', 'phone', 'laptop'].includes(e.target.value)){
                setSelectProduct({
                    ...selectProduct,
                    electronics : {...selectProduct.electronics, [e.target.value] : {count :'0', value : 0}}
                })
            }
        }

    }   

    const handleCountProduct = (e) => {

        if(['t-shirt','hoodie', 'jeans','shorts'].includes(e.target.name)){
            setSelectProduct({
                ...selectProduct,
                clothing : {...selectProduct.clothing, [e.target.name] : {...selectProduct.clothing?.[e.target.name], count : e.target.value}}
            })
        }

        if(['hat','bag', 'belt'].includes(e.target.name)){
            setSelectProduct({
                ...selectProduct,
                accessories : {...selectProduct.accessories, [e.target.name] : {...selectProduct.accessories?.[e.target.name], count : e.target.value}}
            })
        }
        if(['watch','camera', 'phone', 'laptop'].includes(e.target.name)){
            setSelectProduct({
                ...selectProduct,
                electronics : {...selectProduct.electronics, [e.target.name] : {...selectProduct.electronics?.[e.target.name], count : e.target.value}}
            })
        }

    }

    return(
        <div>

            <h1 style={{margin:"0"}}> Products </h1>
            
            <div>
                <h1>Clothing</h1>
                <input type="checkbox" id="t-shirt" name="t-shirt" value="t-shirt" onChange={(e) => handleSelectProduct(e, 350)}/>
                <label htmlFor="t-shirt"> T-Shirt : </label>
                {selectProduct.clothing['t-shirt'] >= '1' ? <><span>350 THB</span> <input id="t-shirt" name="t-shirt" type="number" defaultValue={1} min={1} onChange={e => handleCountProduct(e)}/> จำนวน</> :""}  <br/>

                <input type="checkbox" id="hoodie" name="hoodie" value="hoodie" onChange={(e) => handleSelectProduct(e, 700)}/>
                <label htmlFor="hoodie"> Hoodie : </label>
                {selectProduct.clothing['hoodie'] >= '1' ? <><span>700 THB</span> <input id="hoodie" name="hoodie" type="number" defaultValue={1} min={1} onChange={e => handleCountProduct(e)}/> จำนวน</> :""}  <br/>

                <input type="checkbox" id="jeans" name="jeans" value="jeans" onChange={(e) => handleSelectProduct(e, 450)}/>
                <label htmlFor="jeans"> Jeans : </label>
                {selectProduct.clothing['jeans'] >= '1' ? <><span>450 THB</span> <input id="jeans" name="jeans" type="number" defaultValue={1} min={1} onChange={e => handleCountProduct(e)}/> จำนวน</> :""}  <br/>

                <input type="checkbox" id="shorts" name="shorts" value="shorts" onChange={(e) => handleSelectProduct(e, 250)}/>
                <label htmlFor="shorts"> Shorts : </label>
                {selectProduct.clothing['shorts'] >= '1' ? <><span>250 THB</span> <input id="shorts" name="shorts" type="number" defaultValue={1} min={1} onChange={e => handleCountProduct(e)}/> จำนวน</> :""}  <br/>
            </div>            

            <div>
                <h1>Accessories</h1>
                <input type="checkbox" id="hat" name="hat" value="hat" onChange={(e) => handleSelectProduct(e, 250)}/>
                <label htmlFor="hat"> Hat : </label>
                {selectProduct.accessories['hat'] >= '1' ? <><span>250 THB</span> <input id="hat" name="hat" type="number" defaultValue={1} min={1} onChange={e => handleCountProduct(e)}/> จำนวน</> :""}  <br/>

                <input type="checkbox" id="bag" name="bag" value="bag" onChange={(e) => handleSelectProduct(e, 640)}/>
                <label htmlFor="bag"> Bag : </label>
                {selectProduct.accessories['bag'] >= '1' ? <><span>640 THB</span> <input id="bag" name="bag" type="number" defaultValue={1} min={1} onChange={e => handleCountProduct(e)}/> จำนวน</> :""}  <br/>

                <input type="checkbox" id="belt" name="belt" value="belt" onChange={(e) => handleSelectProduct(e, 230)}/>
                <label htmlFor="belt"> Belt : </label>
                {selectProduct.accessories['belt'] >= '1' ? <><span>230 THB</span> <input id="belt" name="belt" type="number" defaultValue={1} min={1} onChange={e => handleCountProduct(e)}/> จำนวน</> :""}  <br/>
            </div>

            <div>
                <h1>Electronics</h1>
                <input type="checkbox" id="watch" name="watch" value="watch" onChange={(e) => handleSelectProduct(e, 850)}/>
                <label htmlFor="watch"> Watch : </label>
                {selectProduct.electronics['watch'] >= '1' ? <><span>850 THB</span> <input id="watch" name="watch" type="number" defaultValue={1} min={1} onChange={e => handleCountProduct(e)}/> จำนวน</> :""}  <br/>

                <input type="checkbox" id="camera" name="camera" value="camera" onChange={(e) => handleSelectProduct(e, 1250)}/>
                <label htmlFor="camera"> Camera : </label>
                {selectProduct.electronics['camera'] >= '1' ? <><span>1250 THB</span> <input id="camera" name="camera" type="number" defaultValue={1} min={1} onChange={e => handleCountProduct(e)}/> จำนวน</> :""}  <br/>

                <input type="checkbox" id="phone" name="phone" value="phone" onChange={(e) => handleSelectProduct(e, 3450)}/>
                <label htmlFor="phone"> Phone : </label>
                {selectProduct.electronics['phone'] >= '1' ? <><span>3450 THB</span> <input id="phone" name="phone" type="number" defaultValue={1} min={1} onChange={e => handleCountProduct(e)}/> จำนวน</> :""}  <br/>

                <input type="checkbox" id="laptop" name="laptop" value="laptop" onChange={(e) => handleSelectProduct(e, 5500)}/>
                <label htmlFor="laptop"> Laptop : </label>
                {selectProduct.electronics['laptop'] >= '1' ? <><span>5500 THB</span> <input id="laptop" name="laptop" type="number" defaultValue={1} min={1} onChange={e => handleCountProduct(e)}/> จำนวน</> :""}  <br/>
            </div>

        </div>
    )
}

export default shopping