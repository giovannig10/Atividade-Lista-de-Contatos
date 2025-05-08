import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Lista de Contatos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#4CAF50', // Cor de fundo do header
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4, // Sombra no Android
    shadowColor: '#000', // Sombra no iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  title: {
    color: '#fff', // Cor do texto
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;