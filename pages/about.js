import Seo from "../components/Seo";

export default function Potato() {
  return (
    <div>
      <Seo title="About" />
      <h1 style={{color: "white"}}>About</h1>
      <h1 style={{color: "white"}}>About</h1>
      <h1 style={{color: "white"}}>About</h1>
      <h1 style={{color: "white"}}>About</h1>
      <h1 style={{color: "white"}}>About</h1>
      <h1 style={{color: "white"}}>About</h1>
      <h1 style={{color: "white"}}>About</h1>
      <h1 style={{color: "white"}}>About</h1>
      <h1 style={{color: "white"}}>About</h1>
      <h1 style={{color: "white"}}>About</h1>
      <h1 style={{color: "white"}}>About</h1>
      <h1 style={{color: "white"}}>About</h1>
      <style jsx>{`
      h1{
        text-align: center;
        -webkit-animation: fadein 2.5s;
        padding-top: 10%;
        
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
  );
}
