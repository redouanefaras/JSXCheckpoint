import {useState} from 'react'

function FuncCmp(props) {
    const [count, setCount]=useState(0);
  return (
    <div>
      <h1>I am {props.title}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere earum
        soluta, ex repudiandae dicta nostrum aliquid sunt amet labore! Facilis
        id alias explicabo corporis eius molestias ex voluptatum exercitationem
        iste.
      </p>
      <p>{count}</p>
      <button onClick={()=>{setCount(count+1);}}>Update Counter</button>
    </div>
  );
}

export default FuncCmp;