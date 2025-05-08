# Lista de Contatos

Este é um aplicativo de lista de contatos desenvolvido com **React Native** e **Expo**, utilizando componentes reutilizáveis e animações para melhorar a experiência do usuário.

## 📋 Funcionalidades

- Exibição de uma lista de contatos com nome e telefone.
- Animação de carregamento (Skeleton) enquanto os dados estão sendo carregados.
- Componente de cabeçalho estilizado para o título da aplicação.
- Integração com uma API para buscar os contatos (simulada com dados estáticos neste exemplo).

## 🛠️ Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento mobile.
- **Expo**: Plataforma para desenvolvimento e execução do aplicativo.
- **Moti**: Biblioteca para animações.
- **FlatList**: Componente para renderização eficiente de listas.

## 🚀 Como executar o projeto

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/lista-de-contatos.git
   cd lista-de-contatos
   ```

2. Instale as dependências:
   ```sh
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```sh
   npx expo start
   ```

4. Escaneie o QR Code no terminal com o aplicativo **Expo Go** no seu dispositivo móvel ou execute em um emulador.

## 📂 Estrutura do Projeto

```
lista-de-contatos/
├── app/
│   ├── _layout.js         # Componente de cabeçalho
│   ├── index.js           # Tela principal
├── components/
│   ├── CartaoContato.js   # Componente para exibir cada contato
│   ├── Skeleton.js        # Componente de animação de carregamento
├── README.md              # Documentação do projeto
```

## 📝 Notas

- Substitua a URL da API no arquivo `index.js` para integrar com uma API real.
- Certifique-se de que a API retorna os dados no formato esperado: `{ id, nome, telefone }`.

## 📖 Referências

- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [Expo Documentation](https://docs.expo.dev/)
- [Moti Documentation](https://moti.fyi/)

## ✨ Autor

Desenvolvido por **Giovanni Gonçalves**.