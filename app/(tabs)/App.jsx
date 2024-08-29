import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Modal } from 'react-native';

const App = () => {
  const [saldo, setSaldo] = useState(7320.92); 
  const [valor, setValor] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [acao, setAcao] = useState(''); 

  const handleSaque = () => {
    setAcao('sacar');
    setModalVisible(true);
  };

  const handleDeposito = () => {
    setAcao('depositar');
    setModalVisible(true);
  };

  const confirmarAcao = () => {
    const valorNumerico = parseFloat(valor);

    if (acao === 'sacar') {
      const multa = saldo * 0.0025; 
      setSaldo(saldo - valorNumerico - multa);
    } else if (acao === 'depositar') {
      const bonus = valorNumerico * 0.01; 
      setSaldo(saldo + valorNumerico + bonus);
    }

    setValor('');
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saldo: R$ {saldo.toFixed(2)}</Text>
      
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Digite o valor"
        value={valor}
        onChangeText={setValor}
      />
      
      <Button title="Sacar" onPress={handleSaque} />
      <Button title="Depositar" onPress={handleDeposito} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Tem certeza que deseja {acao} R$ {valor}?
            </Text>
            <View style={styles.buttonContainer}>
              <Button
                title="Sim"
                onPress={confirmarAcao}
                color="#2196F3"
              />
              <Button
                title="Não"
                onPress={() => setModalVisible(false)}
                color="#f44336"
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '100%',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default App;
