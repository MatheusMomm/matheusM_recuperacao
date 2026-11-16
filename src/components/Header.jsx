
function Header({ total }) {
  return (
    <header className="header">
      <div className="header-conteudo">
        <h1>React<span>Study</span></h1>
        <p>Seu guia de aprendizado</p>
      </div>

      <div className="header-status">
        <span>CONTEÚDOS REVISADOS</span>
        <strong>{total}/8</strong>
      </div>
    </header>
  );
}

export default Header;
