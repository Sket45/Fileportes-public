import React, { useState, useEffect} from 'react'


function Slider(data)  {

    const [count, setCount] = useState(0);

    useEffect(() => {
        const incrementCount = () => {
            count >= data.length-1 ? setCount(0) : setCount(count + 1);
        };
       
        const timer = setTimeout(() => incrementCount(), 3000);
        return () => clearTimeout(timer);
    }, [count]);




  return (
    
    <>
        <h1>"{data[count].review}"</h1>
        <div>
            <p>{data[count].name}, </p> 
            <p>{data[count].route}</p>
           
        </div>
        
    </>
  )
}

export default Slider;