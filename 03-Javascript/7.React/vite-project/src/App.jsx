import React from "react";
// javascript ko curly braces ke andr rapp krne pr hi js run hoti hai react me

const App = () => {
  let firstName = "Kali-Prem";
  function greet() {
    console.log("hello prem");
  }

  const skills = ["HTML", "CSS", "JS"];
  let age = 18;
  return (
    <div>
      <h1>Hello {firstName}</h1> {}
      {greet()}
      {console.log(15 + 15)}
      {/* {console.log(skills)} */}
      {/* {if(age>=18){console.log("eligible")}else{console.log("not eligible")}}; */}
      {age >= 18 ? <>Eligible</> : "NOt eligible"};
      {/* {for(let i = 0; i < skills.length;i++){
        console.log(skills[i])
      }}; */}{" "}
      //traditional for loop kam nhi krta hia
      {skills.map((skill) => {
        console.log(skill);
      })}
      ;
    </div>
  );
};

export default App;
