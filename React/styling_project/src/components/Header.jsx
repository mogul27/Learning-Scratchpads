import logo from '../assets/logo.png';
import './Header.css';

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      {/* Use style prop for inline styling */}
      {/* Below is normal curly brace with object inside */}
      <p style={{
        color: "red",
        textAlign: 'left'
      }}>A community of artists and art-lovers.</p>
    </header>
  );
}
