import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Header from './_layout';
import CartaoContato from '../components/ListadeContatos.js';
import SkeletonCard from '../components/Skeleton.js';

const TelaPrincipal = () => {
  const [contatos, setContatos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const fetchContatos = async () => {
      try {
        // Simulando uma API com dados estáticos
        const dados = [
          { id: 1, nome: 'João Silva', telefone: '(11) 98765-4321' },
          { id: 2, nome: 'Maria Oliveira', telefone: '(21) 91234-5678' },
          { id: 3, nome: 'Carlos Pereira', telefone: '(31) 99876-5432' },
        ];
        setTimeout(() => {
          setContatos(dados);
          setCarregando(false);
        }, 2000); // Simula um atraso de 2 segundos
      } catch (erro) {
        console.error('Erro ao buscar contatos:', erro);
        setCarregando(false);
      }
    };

    fetchContatos();
  }, []);

  if (carregando) {
    // Exibe os SkeletonCards enquanto os dados estão sendo carregados
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.lista}>
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={contatos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CartaoContato contato={item} />}
        contentContainerStyle={styles.lista}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  lista: {
    padding: 16,
  },
});

export default TelaPrincipal;