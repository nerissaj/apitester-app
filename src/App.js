import React,{useState, useEffect} from 'react';
import styled from 'styled-components'
import './App.css';
import axios from 'axios'
import Card from './component/card'
import Button from '@material-ui/core/Button';





const StyledP = styled.p`
font-size:45px;
text-align:center;
color:orange;
backgroundColor: white;
width:500px;
margin:20px auto;
`;

   function App() {
 const [data, setData] = useState([]);
 useEffect(() => {
  
 
 axios
.get('https://api.openbrewerydb.org/breweries')
    .then(res =>{
     
   setData(res.data)
   console.log('res',res.data);
   });
    
 },[]);

  return (
    <div className="App">
      <h1>APItester</h1>
      {data.map ((chars,index)=>
      <Card chars ={chars} key={index} />

      )}
             <Button variant="contained" color="secondary">
      Read More
    </Button>
    <StyledP>this is just one Brewery test, this is a paragraph that I am changing</StyledP>
    </div>
  );}
  
   

  export default App