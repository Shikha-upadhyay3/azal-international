import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div style={{ padding: "20px", background: "#222", color: "white" }}>
      <Link to="/" style={{ color: "white", marginRight: "15px" }}>Home</Link>
      <Link to="/about" style={{ color: "white", marginRight: "15px" }}>About</Link>
      <Link to="/projects" style={{ color: "white", marginRight: "15px" }}>Projects</Link>
      <Link to="/contact" style={{ color: "white" }}>Contact</Link>
    </div>
  );
}
