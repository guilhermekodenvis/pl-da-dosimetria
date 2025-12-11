# PL da Dosimetria - Votação dos Deputados

Um site mobile-first para acompanhar a votação da PL 1459/2022 (PL da Dosimetria) pelos deputados federais brasileiros.

## 📋 Sobre o Projeto

A PL 1459/2022 (PL da Dosimetria) propõe mudanças na legislação trabalhista relacionadas à jornada de trabalho e dosimetria das atividades insalubres. Este site permite que cidadãos acompanhem como cada deputado federal votou nesta importante proposta.

## ✨ Funcionalidades

- **Listagem de Deputados**: Visualize todos os deputados que participaram da votação
- **Busca em Tempo Real**: Pesquise por nome, partido ou estado (UF)
- **Filtros por Voto**: Filtre deputados por Sim, Não, Abstenção ou Ausente
- **Design Responsivo**: Interface otimizada para mobile, tablet e desktop
- **Informações Detalhadas**: 
  - Foto oficial do deputado
  - Nome completo
  - Partido político
  - Estado (UF)
  - Espectro ideológico (Direita/Centro/Esquerda)
  - Voto na PL

## 🚀 Tecnologias Utilizadas

- **[Next.js 16](https://nextjs.org/)** - Framework React com App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Estilização utilitária
- **React 19** - Biblioteca de componentes

## 📦 Instalação

### Pré-requisitos

- Node.js 18.17 ou superior
- npm, yarn, pnpm ou bun

### Passos

1. Clone o repositório:
```bash
git clone https://github.com/guilhermekodenvis/pl-da-dosimetria.git
cd pl-da-dosimetria
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
# ou
pnpm install
# ou
bun install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 🏗️ Estrutura do Projeto

```
pl-da-dosimetria/
├── app/
│   ├── layout.tsx          # Layout principal da aplicação
│   ├── page.tsx            # Página inicial com listagem
│   └── globals.css         # Estilos globais
├── components/
│   ├── Header.tsx          # Cabeçalho com informações da PL
│   ├── SearchBar.tsx       # Barra de busca
│   ├── DeputadoCard.tsx    # Card de deputado
│   └── FilterMenu.tsx      # Menu de filtros (rodapé fixo)
├── data/
│   └── deputados.json      # Dados estruturados dos deputados
├── types/
│   └── deputado.ts         # Definições de tipos TypeScript
└── public/                 # Arquivos estáticos
```

## 🎨 Design

### Cores Principais

- **Branco**: #FFFFFF (fundo)
- **Azul Marinho**: #1e3a8a, #1e40af (elementos principais)
- **Amarelo**: #fbbf24, #f59e0b (destaques)

### Estilo

- Mobile-first e totalmente responsivo
- Design minimalista e moderno
- Transições suaves
- Alta acessibilidade

## 📊 Dados

Os dados dos deputados incluem:
- Informações obtidas da API oficial da Câmara dos Deputados
- Fotos oficiais
- Classificação ideológica baseada em análises políticas públicas
- Registro completo da votação da PL 1459/2022

## 🛠️ Scripts Disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Cria a build de produção
npm run start    # Inicia o servidor de produção
npm run lint     # Executa o linter ESLint
```

## ♿ Acessibilidade

O projeto segue as melhores práticas de acessibilidade:
- Semântica HTML apropriada
- Textos alternativos em todas as imagens
- Contraste de cores acessível
- Navegação completa por teclado
- Labels ARIA para componentes interativos

## 📱 Responsividade

O site é otimizado para:
- 📱 Mobile (< 768px)
- 💻 Tablet (768px - 1024px)
- 🖥️ Desktop (> 1024px)

## 🚀 Deploy

### Vercel (Recomendado)

O deploy mais fácil é através da [Vercel](https://vercel.com/new):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/guilhermekodenvis/pl-da-dosimetria)

### Outras Plataformas

O projeto pode ser deployado em qualquer plataforma que suporte Next.js:
- Netlify
- AWS Amplify
- Google Cloud Platform
- Azure Static Web Apps

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Guilherme Kodenvis**

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:
1. Fazer um Fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abrir um Pull Request

## 📞 Suporte

Para dúvidas ou sugestões, abra uma [issue](https://github.com/guilhermekodenvis/pl-da-dosimetria/issues) no GitHub.
