
import "@/app/globals.css";
import localFont from 'next/font/local';
import "@/styles/index.css";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Navbar from "./navbar";
import HomePage from "./demo";
const mexcellent = localFont({ src: '../../public/fonts/mexcellent.ttf' });


export default function IndexPage() {
  return (
    <>

     <Navbar/>
     
     
      <main id="sections" className={mexcellent.className}>
        
        <h1 crossOrigin="anonymous" className="neon flicker-slow">Techstatic </h1>
      </main>
      
      
      <section  id="sections" className={mexcellent.className}>
        <h1 className="text-center">Events</h1>
        
      </section>

      <section  id="sections" className={mexcellent.className}>
        <h1 className="text-center">Gallery</h1>
      </section>

      <section  id="sections" className={mexcellent.className}>
        <h1 className="text-center">Department</h1>
      </section>

      <section  id="sections" className={mexcellent.className}>
        <h1 className="text-center">Sponsors</h1>
      </section>
    </>
  );
}
