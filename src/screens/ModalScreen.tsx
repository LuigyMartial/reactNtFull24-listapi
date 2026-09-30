import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ModalScreen: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Modal demo</Text>
      <TouchableOpacity
          style={styles.btn}
          onPress={() => setShowModal(!showModal)}
      >
        <Text style={styles.text}>Show Modal</Text>
      </TouchableOpacity>

      <Modal
        animationType='slide'
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
        transparent={true}
      >
        <View style={styles.centerView}>
          <View style={styles.modalView}>
            <Text>Modal Component </Text>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => setShowModal(false)}
            >
              <Text style={styles.text}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  btn: {
    marginTop: 20,
    marginBottom: 10,
    padding: 10,
    minWidth: 250,
    alignItems: 'center',
    backgroundColor: '#4ca008',
    borderRadius: 5,
  },
  text: { fontSize: 20, fontWeight: 'bold', color: 'white' },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    padding: 35,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  }

});

export default ModalScreen;