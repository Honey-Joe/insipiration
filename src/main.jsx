import  ReactDOM  from "react-dom/client";
import "./index.css"
import Navbar from "./components/Navbar/Navbar";
import Blog1 from "./components/Blog1/Blog1";
import Blog2 from "./components/Blog2/Blog2";
import ReviewSection from "./components/Review/Review1/Review1";
import SimpleSlider from "./components/Review/Review2/Review2";
import Review1 from "./components/Review1/Review1";
import Review3 from "./components/Review3/Review3";
import Review4 from "./components/Review4/Review4";

const Applayout = ()=>{
  return(
    <>
      <Navbar></Navbar>
      <Blog1></Blog1>
      <Blog2></Blog2>
      <ReviewSection></ReviewSection>
      <SimpleSlider></SimpleSlider>
      <Review1></Review1>
      <Review3></Review3>
      <Review4></Review4>
      
      
      
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout></Applayout>)