import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const noyoks = ['Anower', 'kaml', 'Alomgir', 'sabuz', 'Salman']
  const products = [
    {name: 'Photoshop', price:'$90.99'},
    {name: 'Illustrator', price:'$60.99'},
    {name: 'PDF Reader', price:'$6.99'},
    {name: 'Premie el', price:'$25.99'}
  ]
  
  return (
    <div className="App">
      <header className="App-header">
        <p>We are  react Family</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            noyoks.map(noyok => <li>{noyok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(product => <Product product= {product}></Product>)
        }
        {/* <Product product = {products[0]}></Product>
        <Product product = {products[1]}></Product> */}
        <Person name= "Ali khan Ashraf" job="Web Developer"></Person>
        <Person name= "Hena Begum" job="CHCP"></Person>
        <Person name= "Afsara Khanam" job="Student"></Person>
        <Person name= "Tasfia Khanam" job="Student"></Person>
        <Person name= "Owasifa Khanam" job="Dudbat"></Person>
      </header>
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([])
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      setUsers(data);
    })
  }, [])
  return (
    <div>
      <h1>Dynamic Users: {users.length}</h1>
      {
        users.map(user => <li>{user.email}</li>)
      }
    </div>
  )
}

function Counter (){
  const [count, setCount] = useState(10);;
  return (
    <div>
      <h1>Count:{count} </h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onMouseMove={() => setCount(count -1)}>Decrease</button>
    </div>
  )
}
function Product (props) {
  const productStyle={
    border: '1px solid gray',
    borderRadius: '5px',
    width: '200px',
    height: '200px',
    backgroundColor: 'lightgray',
    float: 'left'
  }
  // console.log(props);
  return (
    <div style={productStyle}>
      <h3>{props.product.name}</h3>
      <h5>{props.product.price}</h5>
      <button>Buy Now</button>
    </div>
  )
}
function Person (props){
  return (
    <div style={{border: '2px solid gold', width: '800px', margin: '10px',backgroundColor: 'green'}}>
      <h1 style={{color: 'gold'}}>My Name: {props.name} </h1>
      <p>My Profession: {props.job}</p>
    </div>
  )
}

export default App;
