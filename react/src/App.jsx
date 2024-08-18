import { useState } from 'react'
import './App.css'
import Products from './products';
import Nav from './nav.jsx'
function App() {
  const [search,setsearch] = useState("");
  const [data,setData] = useState([]);
  const YOUR_APP_ID = "e8c7ba16"
  const YOUR_APP_KEY ="fef3f97b05a0833f86214df85caa96b7";
  const submithandler = e =>{
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=12&calories=591-722&health=alcohol-free`).then(
    response => response.json()
  ).then(
      data => setData(data.hits)
    )
  }
  return(
    <>
    {/* <Nav/> */}
    <center>
      <h4>Food Recipe App</h4>
      <form onSubmit={submithandler}>
        <label htmlFor="">Enter your food item: </label>
        <br />
        <br />
        <input type="text" value={search} onChange={(e) => setsearch(e.target.value)}/>
        <br />
        <br />
        <button className="btn btn-primary">Search</button>
      </form>
      <h1 id='myId'>You Are Searching for the {search}</h1>
      <marquee>|| ⭕FAST DELIVERY CALL : +91 987654321 ⭕ || ❤️ REACT CENTER ❤️ || OWNER NAME : JAVASCRIPT </marquee>
 <div className='place'>{data.length>1?<Products data ={data}/>:null} </div>  </center>
    </>
  )
}

export default App
