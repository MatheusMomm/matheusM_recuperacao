
import { useState } from "react";
import Header from "./components/Header";
import CardConceito from "./components/CardConceito";
import ListaDuvidas from "./components/ListaDuvidas";
import "./App.css";

const conceitos = [
  {
    id: 1,
    titulo: "Git e GitHub",
    explicacao:
      "Git é um sistema de controle de versões que permite acompanhar alterações no código. O GitHub é uma plataforma online onde podemos armazenar e compartilhar repositórios.",
    exemplo:
      "Um desenvolvedor utiliza git add, git commit e git push para registrar e enviar suas alterações ao GitHub.",
    erro:
      "Erro comum: confundir commit com push. O commit salva as alterações no histórico local, enquanto o push envia os commits para o repositório remoto.",
  },
  {
    id: 2,
    titulo: "Node.js e npm",
    explicacao:
      "Node.js permite executar JavaScript fora do navegador. O npm é um gerenciador de pacotes usado para instalar bibliotecas e ferramentas necessárias em um projeto.",
    exemplo:
      "Para instalar as dependências de um projeto, utilizamos o comando npm install.",
    erro:
      "Erro comum: acreditar que Node.js e npm são a mesma coisa. Node.js é o ambiente de execução e npm gerencia os pacotes.",
  },
  {
    id: 3,
    titulo: "React e JSX",
    explicacao:
      "React é uma biblioteca JavaScript utilizada para criar interfaces. JSX é uma sintaxe que permite escrever estruturas semelhantes ao HTML dentro do JavaScript.",
    exemplo:
      "Podemos criar um título usando: const elemento = <h1>Olá, mundo!</h1>.",
    erro:
      "Erro comum: esquecer que o JSX precisa retornar um elemento raiz. A solução é envolver os elementos em uma div ou Fragment (<> </>).",
  },
  {
    id: 4,
    titulo: "Componentes e props",
    explicacao:
      "Componentes são funções reutilizáveis que retornam JSX. Props são propriedades utilizadas para enviar informações de um componente pai para um componente filho.",
    exemplo:
      "Um componente Card pode receber uma prop titulo e mostrar diferentes títulos em cada utilização.",
    erro:
      "Erro comum: escrever o nome de um componente com letra minúscula. Componentes React devem começar com letra maiúscula, como CardConceito.",
  },
  {
    id: 5,
    titulo: "Estado e Hooks",
    explicacao:
      "O useState permite armazenar informações que podem mudar durante o uso da aplicação. Quando o estado é atualizado, o React renderiza novamente a interface.",
    exemplo:
      "Um contador pode utilizar useState(0) para armazenar seu valor e atualizar a tela quando um botão for clicado.",
    erro:
      "Erro comum: modificar uma variável de estado diretamente. Utilize o setter, como setContador(valor => valor + 1), para atualizar corretamente.",
  },
  {
    id: 6,
    titulo: "Eventos e validação",
    explicacao:
      "Eventos permitem que a aplicação responda às ações do usuário. O onClick executa uma função quando um elemento é clicado. O trim() remove espaços do início e do final de uma string.",
    exemplo:
      "Um botão pode utilizar onClick={adicionar} para executar uma função quando for pressionado.",
    erro:
      "Erro comum: utilizar onClick={adicionar()} sem querer executar a função durante a renderização. O correto é passar a referência: onClick={adicionar}.",
  },
  {
    id: 7,
    titulo: "Listas e imutabilidade",
    explicacao:
      "O método map() percorre arrays e cria um novo array com os resultados. No React, cada elemento de uma lista deve possuir uma key estável. A imutabilidade evita modificar diretamente os dados existentes.",
    exemplo:
      "Podemos utilizar itens.map(item => <li key={item.id}>{item.nome}</li>) para exibir uma lista.",
    erro:
      "Erro comum: esquecer a key ou modificar um array de estado usando push(). Utilize uma key estável e crie um novo array com spread ou filter().",
  },
  {
    id: 8,
    titulo: "Arquitetura web",
    explicacao:
      "Frontend é a parte visual da aplicação. Backend processa informações no servidor. APIs permitem a comunicação entre sistemas. localStorage armazena dados no navegador. SPA atualiza partes da interface sem recarregar a página inteira, enquanto PWA adiciona recursos de experiência semelhante a um aplicativo.",
    exemplo:
      "Uma loja virtual pode utilizar React no frontend, uma API no backend e localStorage para guardar preferências do usuário.",
    erro:
      "Erro comum: acreditar que localStorage é um banco de dados no servidor. Ele armazena informações localmente no navegador e não substitui um backend.",
  },
];

function App() {
  const [revisados, setRevisados] = useState([]);
  
  const totalRevisados = revisados.length;

  function alternarRevisao(id) {
    setRevisados((anterior) =>
      anterior.includes(id)
        ? anterior.filter((item) => item !== id)
        : [...anterior, id]
    );
  }

  return (
    <div className="app">
      <Header total={totalRevisados} />

      <main className="container">
        <section className="introducao">
          <span className="etiqueta">GUIA DE ESTUDOS</span>
          <h2>Aprenda React na prática</h2>
          <p>
            Oito conteúdos fundamentais para entender o desenvolvimento
            web e construir aplicações com React.
          </p>
        </section>

        <section className="progresso">
          <div className="progresso-texto">
            <h3>Seu progresso</h3>
            <strong>{totalRevisados}/8 conteúdos revisados</strong>
          </div>

          <div className="barra">
            <div
              className="barra-preenchida"
              style={{ width: `${(totalRevisados / 8) * 100}%` }}
            />
          </div>
        </section>

        <section className="cards">
          {conceitos.map((conceito) => (
            <CardConceito
              key={conceito.id}
              conceito={conceito}
              revisado={revisados.includes(conceito.id)}
              onToggle={() => alternarRevisao(conceito.id)}
            />
          ))}
        </section>

        <ListaDuvidas />
      </main>

      <footer>
        <p>Guia de Estudos React • Projeto Educacional</p>
      </footer>
    </div>
  );
}

export default App;
