  import "./nav.css"; // facultatif si tu veux styliser

export default function Navigation() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/apropos/pageapropos">À propos</Link></li>
        <li><Link to="/projet/pageProjet">Projets</Link></li>
      </ul>
    </nav>
  );
}
