import styles from "./Hello.module.css";
import { useState } from "react";
import UserName from "./UserName";

const Hello = (props) => {
  console.log(props);
  
  //let name = "Mike";
  
  const [name, setName] = useState('Mike');
  const [age, setAge] = useState(props.age);
  const msg = age > 19 ? "성인 입니다." : "미성년자 입니다.";


  const showName = () => {
    console.log("Mike");
  }

  function showAge(age) {
    console.log(age);
  }

  const showText = (e) => {
    console.log(e.target.value);
  }

  const changeName = () => {
    const newName = name === "Mike" ? "Jane" : "Mike";
    //document.getElementById("name").innerText = name;
    setName(newName);
  }

  const toSetAge = () => {
    setAge(age + 1);
  }

  const twin = () => {
    changeName();
    toSetAge();
  }

    return (
      <div>
        <p>Hello</p>
        <button onClick={showName}>SHow name</button>
        <button onClick={() => {
          showAge(30);
        }}>SHow age</button>
        <div className={styles.box}>Hello</div>

        <p>이벤트 처리</p>
        <input type="text" onChange={showText}/> 

        <p>state</p>
        <h2 id="name">{name}({age}) : {msg}</h2>
        <UserName name={name}></UserName>
        <button onClick={twin}>Change</button>
      </div>     
    )    
};

export default Hello;