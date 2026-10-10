# Ensino Livre

Site educativo independente sobre educação, inclusão, pensamento crítico e resistência. Projeto feito com HTML semântico, CSS, Bootstrap 5 e JavaScript simples, organizado para facilitar manutenção e aprendizado.

## Estrutura do projeto

```text
ensino-livre/
├── index.html                 # Página inicial
├── educacao.html              # Conteúdo sobre educação e desigualdade
├── sobre.html                 # Projeto, perfil e referência a Bakunin
├── assets/
│   ├── css/
│   │   └── style.css          # Estilos próprios e responsividade
│   ├── js/
│   │   └── main.js            # Interações progressivas da interface
│   └── img/
│       └── pedro-henrique.jpg # Foto de perfil
├── .gitignore
└── README.md
```

## Como executar

1. Extraia a pasta do ZIP.
2. Abra `index.html` no navegador. Para um ambiente de desenvolvimento mais próximo de hospedagem, use a extensão **Live Server** no VS Code.
3. A navegação entre páginas usa caminhos relativos, então a pasta pode ser publicada em hospedagem estática, como GitHub Pages.

## Tecnologias

- HTML5 semântico e atributos de acessibilidade
- CSS3 com regras responsivas
- Bootstrap 5.3.3 e Bootstrap Icons via CDN
- JavaScript sem dependências adicionais para as interações próprias

## Boas práticas adotadas

- Separação entre estrutura (HTML), apresentação (CSS) e comportamento (JavaScript).
- Nomes de arquivos e diretórios descritivos, em minúsculas e sem espaços.
- HTML indentado e legível para facilitar revisão e manutenção.
- Textos alternativos nas imagens, carregamento tardio para imagens de conteúdo e links externos com `rel="noopener noreferrer"` quando abrem nova aba.
- JavaScript defensivo: cada interação verifica se o elemento correspondente existe antes de usá-lo.
- Arquivos estáticos organizados em `assets/` e links internos relativos.

## Dependências externas

Bootstrap, Bootstrap Icons e fontes são carregados por CDN. Algumas fotografias editoriais também são referenciadas por URLs públicas do repositório original; essas imagens precisam de internet e podem deixar de funcionar se os arquivos remotos forem movidos. Para produção, prefira armazenar localmente apenas imagens para as quais você tenha direito de uso e registre suas fontes/licenças.

## Antes de publicar

- Revise as fontes e a exatidão das citações e conteúdos educativos.
- Confira direitos de uso e atribuição das imagens externas.
- Teste navegação por teclado, celular e diferentes navegadores.
- Se o site crescer, considere separar o CSS em arquivos por responsabilidade e adotar formatação/lint automáticos.

## Revisão técnica

Foi feita uma verificação estática básica dos arquivos HTML, CSS e JavaScript:

- caminhos relativos para páginas, folhas de estilo, scripts e imagens locais;
- IDs duplicados e imagens sem texto alternativo;
- equilíbrio das chaves do CSS e remoção dos nomes antigos de classes verdes;
- sintaxe do JavaScript com `node --check`.

Essas verificações não substituem testes em navegadores nem uma validação completa por ferramentas como Nu HTML Checker e Lighthouse. Antes de publicar, teste também o menu em telas pequenas, o contraste, a navegação por teclado e os links externos.
