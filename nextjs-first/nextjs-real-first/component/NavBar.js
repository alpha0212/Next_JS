import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";
import Image from "next/image";

export default function NavBar() {
  const router = useRouter();
  return (
    <div className={styles.navbar}>
      <span className={styles.navbar_text}>
        <Link href="/"><a className={router.pathname==="/"?"active":""}>DESIGN</a></Link></span>
  
      
    </div>

  );
}
