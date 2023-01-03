
import './app.css';
import Cards from './componets/Main/Cards';
import Image from './componets/Main/Image/Img8.png' 
import Img9 from './componets/Main/Image/Img9.png'
import Img10 from './componets/Main/Image/Img10.png'
import Img11 from './componets/Main/Image/Img11.png'

var sdata =[{'Image':Image,'title':'nike','price':'$45.00'},{'Image':Img9,'title':'snakers','price':'$35.00'},{'Image':Img10,'title':'puma','price':'$10.00'},{'Image':Img11,'title':'bata','price':'$37.00'}]





function App() {
  return(
    <>
  
   
   {sdata.map((item) => {
    return <Cards img={item.Image} title={item.title} price={item.price}/>


   })}
       
  
   
  
  

  </>
  )
}

export default App;
