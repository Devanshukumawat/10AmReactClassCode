import Card from "./Day1/Card"
import Example from "./Day1/Example";
import Example1 from "./Day2/Example1";
import Myprops from "./Day2/Myprops";
import Product from "./Day2/Product";
import MyProfile from "./Day2/media/Gallery_New_ (10).jpg"
import Devimage from "./Day1/media/1691224446516.jpeg"
import Test from "./Day3/Test"
import Counter from "./Day3/Counter";
import Statetest from "./Day3/Statetest";
import Form from "./Day4/Form";
import Todo from "./Day5/Todo";
import UseEffect from "./Day6/UseEffect";
import Data from "./Day7/Data";

import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from "./Day8/Navbar";
import Footer from "./Day8/Footer";
import Homepage from "./Day8/Homepage";
import Muibutton from "./Day9/Muibutton";
import MusicPlayerSlider from "./Day9/MusicPlayerSlider";
import TestMui from "./Day10/TestMui";
import SignInSide from "./Day10/SignInSide";
import DrawerAppBar from "./Day10/DrawerAppBar";
import BasicTable from "./Day11/BasicTable";
import SignUp from "./Day10/Signup";
import MyStyle from "./Day11/MyStyle";


function App() {

  let ProductData = [
    {
      ProductName:"Iphone",
      Price:"$678",
      Rating:"4.9",
      Id:"767676"
    },
    {
      ProductName:"Samsung Tv",
      Price:"$999",
      Rating:"4.5",
      Id:"989898"
    },
    {
      ProductName:"MI Laptop",
      Price:"$567",
      Rating:"4.1",
      Id:"567676"
    },
    {
      ProductName:"Apple",
      Price:"$123",
      Rating:"4.3",
      Id:"787676"
    },
    {
      ProductName:"Iphone",
      Price:"$678",
      Rating:"4.9",
      Id:"767676"
    },
    {
      ProductName:"Samsung Tv",
      Price:"$999",
      Rating:"4.5",
      Id:"989898"
    },
    {
      ProductName:"MI Laptop",
      Price:"$567",
      Rating:"4.1",
      Id:"567676"
    },
    {
      ProductName:"Apple",
      Price:"$123",
      Rating:"4.3",
      Id:"787676"
    }
  ]

    return ( 
      <>

      <MyStyle/>

      {/* <BrowserRouter>
        <Navbar/>
        <DrawerAppBar/>
        <Routes>
          <Route path="/" element={<SignInSide/>} />
          <Route path="/todo" element={<Todo/>}/>
          <Route path="/counter" element={<Counter/>} />
          <Route path="/form" element={<Form/>}/>
          <Route path="/card" element={<Card image={Devimage}/>}/>
          <Route path="/table" element={<BasicTable/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter> */}

      {/* <Muibutton/> */}

      {/* <MusicPlayerSlider/> */}

      {/* <TestMui/> */}

      {/* <SignInSide/> */}


      {/* <Data/> */}

     {/* <UseEffect/> */}

      {/* <Todo/> */}

      {/* <Form/> */}

      {/* {
        ProductData.map((value,index)=>(
          <>
          <Product Pname = {value.ProductName} price={value.Price} rating={value.Rating}/>
        </>
        ))
      }

       <Card name="Aman" desc = "Hello Class" image = {Devimage} />
       <Card name="Devanshu" desc = "Welcome class" image={MyProfile} />
       <Card name="Devanshu" desc = "Welcome class" image = {Devimage}  />
       <Example firstName = "Manny"/>
       <Example1/>
       <Myprops name="Abhay"/>
       <Myprops name="Aman"/>
       <Myprops name="Devanshu"/>
       <Myprops name="Manny"/>
       <Test/>
       <Counter/>
       <Statetest/> */}
       
      </>
     );
}

export default App;



