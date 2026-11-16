
import { useState } from "react";

function ListaDuvidas() {
  const [texto, setTexto] = useState("");
  const [duvidas, setDuvidas] = useState([]);

  function adicionarDuvida() {
    const textoLimpo = texto.trim();

    if (!textoLimpo) {
      return;
    }

    const novaDuvida = {
      id: crypto.randomUUID(),
      texto: textoLimpo,
    };

    setDuvidas((anterior) => [...anterior, novaDuvida]);

    setTexto("");
  }

  function removerDuvida(id) {
    setDuvidas((anterior) =>
      anterior.filter((duvida) => duvida.id !== id)
    );
  }

  return (
    <section className="duvidas">
      <span className="etiqueta">ANOTAÇÕES</span>
      <h2>Minhas dúvidas</h2>

      <p>
        Anote os assuntos que você precisa estudar novamente.
      </p>

      <div className="campo-duvida">
        <input
          type="text"
          placeholder="Ex: Como funcionam props?"
          value={texto}
          onChange={(evento) => setTexto(evento.target.value)}
          onKeyDown={(evento) => {
            if (evento.key === "Enter") {
              adicionarDuvida();
            }
          }}
        />

        <button onClick={adicionarDuvida}>
          Adicionar
        </button>
      </div>

      <div className="lista-duvidas">
        {duvidas.length === 0 ? (
          <p className="vazio">
            Nenhuma dúvida cadastrada ainda.
          </p>
        ) : (
          duvidas.map((duvida) => (
            <div className="duvida-item" key={duvida.id}>
              <span>{duvida.texto}</span>

              <button
                onClick={() => removerDuvida(duvida.id)}
                aria-label="Remover dúvida"
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>

      <span className="contador-duvidas">
        {duvidas.length} dúvida(s) cadastrada(s)
      </span>
    </section>
  );
}

export default ListaDuvidas;
