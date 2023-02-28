import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  // code here
  return(
    <div id='app'>
    {/* {<img className="Kalvium" src={imageData()[0].img}/>} */}
    {
      imageData().map((image)=>{
        return(<img className='Kalvium' src={image.img} key = {image.id} alt = "elephant"/>)
      })
    }
    </div>
  )
}

export default App;
