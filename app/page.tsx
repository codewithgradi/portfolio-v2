import Top from "@/components/Top";
import styles from '@/config/styles.module.css'
import Navbar from "@/components/Navbar";
export default function Home() {
  
  
  
  return (
    <div className={`${styles.backgroundMain}  min-w-screen`}>
      <Top />
      <Navbar />      
    </div>
  );
}

