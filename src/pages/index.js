// Import necessary modules
import "@/app/globals.css";
import localFont from 'next/font/local';
import "@/styles/index.css"

const mexcellent = localFont({ src: '../../public/fonts/mexcellent.ttf' });

// Define the styles directly within the component


// Define the IndexPage component
export default function IndexPage() {
    return (
        <>
           

            {/* Main container with custom font */}
            
            <main className={mexcellent.className} >
            <h1 crossOrigin="anonymous" className="neon flicker-slow">Techstatic</h1>
            </main>
            <section  className={mexcellent.className}>
              <h1>Events</h1>
            </section>
            <section className={mexcellent.className}>
             <h1>Gallery</h1>
           </section>
            <section className={mexcellent.className}>
             <h1>Department</h1>
           </section>
            <section className={mexcellent.className}>
             <h1>Sponsers</h1>
            </section>
           
        </>
    );
}
