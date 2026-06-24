import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    
    
      
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#333",
        padding: "15px 30px",
      }}
    >
      <h2
        style={{
          color: "white",
          margin: 0,
        }}
      >
        MyWebsite
      </h2>

      <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: "20px",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <a
            href="#"
            style={{ color: "white", textDecoration: "none" }}
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#"
            style={{ color: "white", textDecoration: "none" }}
          >
            Men
          </a>
        </li>

        <li>
          <a
            href="#"
            style={{ color: "white", textDecoration: "none" }}
          >
            Women
          </a>
        </li>

        <li>
          <a
            href="#"
            style={{ color: "white", textDecoration: "none" }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>

  );
}

