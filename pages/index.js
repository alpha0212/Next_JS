import Link from "next/link";
import { useRouter } from "next/router";
import Seo from "../components/Seo";
import Image from "next/image";
import styles from "./index.module.css";

export default function Home({ results }) {
  return (
  <main>
    <div className={styles.container}>
      <Seo title="Home" />
      <div className={styles.main_container}>
        <h1 className={styles.main_text}>Hello.</h1>
        <h2 className={styles.title_text}>Is my Portfolio Site.</h2>
      </div>
      <div className={styles.content_line}>Contents</div>
      <div className={styles.content_container}>
        <div>
          <div className={styles.content}>
            <a href="https://github.com/alpha0212" target='_blank' width={400}>
              <Image src="/GIt.png" width={255} height={170}/>
            </a>
            <span className={styles.content_text}>My GitHub</span>
          </div>
          
        </div>
      </div>
      <style jsx>{`
      a{
        
      }
      h1{
        
        -webkit-animation: fadein 2.5s;
        
        
      }
      h2{
        -webkit-animation: fadein 5s;
      }
      @-webkit-keyframes fadein { /* Safari and Chrome */
      from {
          opacity: 0;
      }
      to {
          opacity: 1;
      }
      
  }
      `}</style>
    </div>
  </main>
  );
}
