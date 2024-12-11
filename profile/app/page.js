import Image from "next/image";
import Header from "./_components/Header";
import Main from "./_components/Main";
import Footer from "./_components/Footer";4
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // Disable automatic CSS injection


export default function Home() {
  return (
    
    <div className="">
      <Main/>

    </div>
  );
}
