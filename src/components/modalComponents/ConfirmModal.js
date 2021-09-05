import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import { Text } from 'react-native-elements';
import ModalSection from './ModalSection';
import ModalButton from './ModalButton';

const ConfirmModal = ({ text, visible, onAccept, onDecline }) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={() => {}}>
      <View style={styles.containerStyle}>
        <ModalSection>
          <Text style={styles.textStyle}>{text}</Text>
        </ModalSection>

        <ModalSection>
          <View style={styles.buttonContainer}>
            <ModalButton text="Yes" onPress={onAccept} />
            <ModalButton text="No" onPress={onDecline} />
          </View>
        </ModalSection>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40,
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    justifyContent: 'space-between',
    alignSelf: 'center',
    flex: 1,
    flexDirection: 'row',
    marginLeft: 35,
    marginRight: 35,
  },
});

export default ConfirmModal;
