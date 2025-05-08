import React from 'react';

const CartaoContato = ({ contato }) => {
  return (
    <div style={estiloCartao}>
      <h2>{contato.nome}</h2>
      <p>Telefone: {contato.telefone}</p>
    </div>
  );
};

const estiloCartao = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '16px',
  margin: '8px 0',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

export default CartaoContato;