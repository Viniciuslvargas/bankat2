import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Alert, Image } from 'react-native';
import BalanceDisplay from './BalanceDisplay';
import TransactionControls from './TransactionControls';

const App = () => {
  const [balance, setBalance] = useState(7320.92); // Saldo inicial

  const handleDeposit = (amount) => {
    const bonus = amount * 0.01; // Calcula o bônus de 1%
    setBalance(balance + amount + bonus); // Atualiza o saldo
    Alert.alert('Depósito', `Você depositou R$ ${(amount + bonus).toFixed(2)}`);
  };

  const handleWithdraw = (amount) => {
    const newBalance = balance - amount;
    const penalty = newBalance * 0.025; // Calcula a multa de 2.5%
    setBalance(newBalance - penalty); // Atualiza o saldo
    Alert.alert('Saque', `Você sacou R$ ${amount.toFixed(2)}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: 'https://logospng.org/download/santander/logo-santander-icon-4096.png' }} style={styles.logo} />
      <BalanceDisplay balance={balance} />
      <TransactionControls onDeposit={handleDeposit} onWithdraw={handleWithdraw} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // Centraliza a logo horizontalmente
    padding: 20,
    backgroundColor: 'gray',
  },
  logo: {
    width: 120, // Largura da logo (ajuste conforme necessário)
    height: 120, // Altura da logo (ajuste conforme necessário)
    marginBottom: 20,
    
  },
});

export default App;
