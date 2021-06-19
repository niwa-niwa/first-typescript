import React from "react";


interface Props {
  text: string
}

interface UserData {
  id:number;
  name:string;
}

const TestComponent: React.FC<Props> = (props) => {
  const [count, setCount] = React.useState<number>(0);
  const [user,  setName] = React.useState<UserData>({id:2, name:"super man"});
  const [inputData, setInputData] = React.useState("");

  const increment = (num:number) => {
    setCount(num+1);
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
    setInputData(e.target.value)
  }

  return(
    <div>
      <h1>{props.text}</h1>
      <h1>{inputData}</h1>
      <h2>{count}</h2>
      <p>{user.id}</p>
      <p>{user.name}</p>
      <button onClick={()=>{increment(count)}}>Increment</button>
      <input type="text" value={inputData} onChange={handleInputChange} />
    </div>
  );
};

export default TestComponent;
