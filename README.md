# Getting Started with Create React App

[Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### Redux
~ npm install --save react-redux @reduxjs/toolkit

### Execute JsonServer
~ npx json-server@0.17.1 db.json --port 4000 --delay 1000

### API EBAC
baseUrl: 'https://fake-api-tau.vercel.app/api'
query: () => 'ebac_sports'

### API Local
baseUrl: '[http:](http://localhost:4000)'
query: () => 'produtos'

### Modelagem de negocio
  * Incluir a opção de enviar pedido para a loja dos items do meu carrinho de comprar.
  * Compartilhar meus favoritos com meus amigos.
  * Editar o carrinho de compras.

### Design
  * Menu superior fixo, sempre exibi-lo mesmo que role a página.
  * Criar Botão Enviar pedido, exibi-lo apenas quando conter itens no carrinho.
