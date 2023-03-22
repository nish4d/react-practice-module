import React, { useState } from 'react';

const Mobile = () => {
    
    const [count, setCount] = useState(100)
    const counts=()=> {
       const counter =  count-10;
       if (counter<0){
        alert('please stop')
       }
       else{
           setCount(counter)
       }
    }
    return (
        <div>
            <p>{count}%</p>
            <button onClick={counts}>Battery Down</button>
        </div>
    );
};

export default Mobile;