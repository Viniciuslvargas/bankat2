import React from 'react';
import { View, Text, StyleSheet } from 'react-native'; 
const BalanceDisplay = ({ balance }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Saldo: R$ {balance.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default BalanceDisplay;
