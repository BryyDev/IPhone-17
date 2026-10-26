# iPhone 17 Pro

Landing page inspirada no iPhone 17 Pro, criada como meu primeiro projeto
utilizando React. A proposta foi desenvolver uma experiência visual moderna,
com foco na apresentação do produto, seus recursos e diferentes opções de
acabamento.

> Projeto demonstrativo e sem vínculo oficial com a Apple.

## Sobre o projeto

A página apresenta uma interface escura e responsiva, inspirada no estilo
visual de páginas de produtos premium. O conteúdo é dividido em seções que
destacam:

- Apresentação do iPhone 17 Pro;
- Design em titânio e sistema operacional;
- Chip A18 Pro e informações de desempenho;
- Sistema de câmeras;
- Seleção interativa de cores;
- Comparação entre os modelos Pro e Pro Max;
- Navegação por seções e rodapé informativo.

## Tecnologias

- **React** — construção da interface com componentes reutilizáveis;
- **Tailwind CSS** — estilização, layout responsivo e estados visuais;
- **Vite** — ferramenta de desenvolvimento e build do projeto;
- **Node.js** — ambiente utilizado para o ecossistema JavaScript e gerenciamento
  das dependências;
- **JavaScript (ES Modules)** — lógica dos componentes e interações;
- **ESLint** — padronização e verificação do código.

## Estrutura do projeto

```text
src/
├── components/
│   ├── Colors.jsx       # Seleção de cores e modelos
│   ├── Footer.jsx       # Rodapé da página
│   ├── Hero.jsx         # Seção visual principal
│   ├── Highlights.jsx   # Design, desempenho e câmeras
│   ├── Intro.jsx        # Apresentação e especificações iniciais
│   └── NavBar.jsx       # Navegação responsiva
├── App.jsx              # Composição principal da página
├── index.css            # Estilos globais e utilitários
└── main.jsx             # Ponto de entrada da aplicação
```

As imagens utilizadas na página ficam em `public/img/`, enquanto a configuração
do Vite e do Tailwind é definida em `vite.config.js`.

## Aprendizados

Este projeto foi desenvolvido como uma introdução prática ao React. Durante a
implementação, foram explorados:

- Criação e composição de componentes funcionais;
- Uso do `useState` para controlar a cor selecionada;
- Renderização de listas com `map`;
- Organização de dados em arrays para gerar conteúdo dinâmico;
- Navegação por âncoras entre seções;
- Criação de layouts responsivos com Tailwind CSS;
- Uso do Vite para estruturar uma aplicação moderna em React.

## Licença

Este projeto está disponível sob a [Licença MIT](./LICENSE).