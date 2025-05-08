import React from 'react';
import { View } from 'react-native';
import { MotiView } from 'moti';

const SkeletonCard = () => {
  return (
    <MotiView
      style={estiloCartao}
      from={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      transition={{
        type: 'timing',
        duration: 800,
        loop: true,
      }}
    >
      <View style={estiloLinha} />
      <View style={[estiloLinha, { width: '60%' }]} />
    </MotiView>
  );
};

const estiloCartao = {
  backgroundColor: '#f0f0f0',
  borderRadius: 8,
  padding: 16,
  marginVertical: 8,
  width: '100%',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 2,
};

const estiloLinha = {
  height: 20,
  backgroundColor: '#e0e0e0',
  borderRadius: 4,
  marginBottom: 8,
};

export default SkeletonCard;