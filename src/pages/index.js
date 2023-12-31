
//import "@/app/globals.css";
import localFont from 'next/font/local';
//import "@/styles/index.css";
//import 'bootstrap/dist/css/bootstrap.min.css'; 
import Navbar from "./navbar";

import Slider from './slider';



export default function IndexPage() {
  const items = [
    <div key={1}>Content for Slide 1</div>,
    <div key={2}>Content for Slide 2</div>,
    <div key={3}>Content for Slide 3</div>,
   
  ];
  return (
    <>

    
     <Slider items={items} />
    </>
  );
}
