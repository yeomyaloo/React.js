import {useState,useEffect} from 'react';

function Hello(){
  useEffect(()=>{
    console.log("bye :<");
    return () => console.log("create :>");
  },[]);
  return<h1>Hello</h1>;
}

//js 쓸 때 중괄호 !! {} !!! 
function App() {
  const [showing,setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
