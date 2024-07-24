import React, { useState } from 'react';

const Count = () => {
    const [value, setValue] = useState(1);

    const  checkprime=(num)=>{
        
        let factor=0;
        
        for(let i=1;i<=num;i++)
          {
            if(num%i==0)
            {
              factor++
            }
          }
        
        if(factor==2)
        {
          return "true"
        }
        else{
           return "false"
        }
    }
    return (
        <div className='card'>
            <h2>{value}</h2>
            <p style={{color:'white',fontFamily:'poppins',fontSize:"20px"}}>Number is {value % 2 === 0 ? 'Even' : 'Odd'}</p>
            <p style={{color:'white',fontFamily:'poppins',fontSize:'20px'}}>Number is prime {checkprime(value)}</p>
            <button disabled={value===0} onClick={() => setValue(value - 1)}>-</button>
            <button onClick={() => setValue(0)}>Reset</button>
            <button onClick={() => setValue(value + 1)}>+</button>
        </div>
    );
}

export default Count;
