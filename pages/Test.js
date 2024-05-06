

import React, {useState} from 'react'
import * as postal_code from "@40bears/japan-postal-code-ts";

const Test = () => {
   const [val, setval] = useState('')
   const [val1, setval1] = useState('')

postal_code.get('386-0011', function(address) {
  console.log(address.prefecture); // => "東京都"
  console.log(address.city); // => "千代田区"
  console.log(address.area); // => "千代田"
  console.log(address.street); // => ""
});
  return (
    <div>
        
        <input value={val} onChange={(e)=>{setval(e.target.value)
        setval1('')
        }}/>
        <div></div>
        <select value={val1} onChange={(e)=>{setval(e.target.value)
        setval1(e.target.value)
    }   
        }>
        <option value={''}>----</option>
            <option value={'2317'}>2354 ThaoDP</option>
            <option value={'2317'}>2317 Ronaldo</option>
            <option value={'2499'}>2499 Palmela</option>
        </select>

    </div>
  )
}

export default Test
