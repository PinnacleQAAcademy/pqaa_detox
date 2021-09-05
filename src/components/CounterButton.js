import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default CounterButton = ({ text, onPress, counter }) => {
  return (
    <View style={styles.view}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{text}</Text>
        </View>
      </TouchableOpacity>
      <View>
        <Text style={styles.text}>{counter}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    paddingTop: 35,
    marginRight: 10,
  },
  button: {
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 10,
    height: 150,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#76D13B',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    justifyContent: 'center',
    textAlign: 'center',
  },
  text: {
    fontSize: 60,
    alignSelf: 'center',
  },
});
