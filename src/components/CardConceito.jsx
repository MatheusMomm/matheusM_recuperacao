
function CardConceito({ conceito, revisado, onToggle }) {
  return (
    <article className={`card ${revisado ? "card-revisado" : ""}`}>
      <div className="card-topo">
        <span className="card-numero">
          CONTEÚDO {String(conceito.id).padStart(2, "0")}
        </span>

        {revisado && <span className="selo">✓ Revisado</span>}
      </div>

      <h3>{conceito.titulo}</h3>

      <div className="card-secao">
        <h4>Explicação</h4>
        <p>{conceito.explicacao}</p>
      </div>

      <div className="card-secao exemplo">
        <h4>Exemplo prático</h4>
        <p>{conceito.exemplo}</p>
      </div>

      {conceito.erro && (
        <div className="card-secao erro">
          <h4>⚠ Erro comum e correção</h4>
          <p>{conceito.erro}</p>
        </div>
      )}

      <button
        className={`botao-revisao ${revisado ? "ativo" : ""}`}
        onClick={onToggle}
      >
        {revisado ? "✓ Revisado" : "Marcar como revisado"}
      </button>
    </article>
  );
}

export default CardConceito;
