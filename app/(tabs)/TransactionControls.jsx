import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const TransactionControls = ({ onDeposit, onWithdraw }) => {
  const [value, setValue] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite o valor"
        keyboardType="numeric"
        value={value}
        onChangeText={setValue}
      />
      <View style={styles.buttons}>
        <Button title="Depositar" onPress={() => { onDeposit(parseFloat(value)); setValue(''); }} />
        <Button title="Sacar" onPress={() => { onWithdraw(parseFloat(value)); setValue(''); }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default TransactionControls;
