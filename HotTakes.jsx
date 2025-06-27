{/* Header Part*/}
export default function Header() {
  return <div>{
    <header>
   <h1>Hot Takes 🔥</h1>
   <nav>
   <ul>
      <li>New Reviews</li>
      <li>Recents</li>
      <li>Archives</li>
   </ul>
  </nav>
</header>
  }</div>;
}
{/*Footer Part */}
export default function Footer() {
  return <div>{
    <footer>
   <ul>
      <li>Contact</li>
      <li>Newsletter</li>
   </ul>
</footer>
  
  }</div>;
}
{/*Import*/}
import Header from "./Header.js";
import Footer from "./Footer.js";
export default function App() {
  return (
    <div>
      <header />
      <footer />
        
    </div>
  );
}

