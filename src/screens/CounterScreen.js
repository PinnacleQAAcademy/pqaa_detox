import React, { useReducer } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { Text } from 'react-native-elements';
import CounterButton from '../components/CounterButton';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increase_1':
      return { ...state, counter_1: state.counter_1 + action.payload };
    case 'increase_2':
      return { ...state, counter_2: state.counter_2 + action.payload };
    case 'increase_3':
      return { ...state, counter_3: state.counter_3 + action.payload };
    case 'increase_4':
      return { ...state, counter_4: state.counter_4 + action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, {
    counter_1: 0,
    counter_2: 0,
    counter_3: 0,
    counter_4: 0,
  });
  const { counter_1, counter_2, counter_3, counter_4 } = state;
  const payload = 1;

  return (
    <SafeAreaView style={styles.container} forceInset={{ top: 'always' }}>
      <View>
        <CounterButton
          text="Water Counter"
          onPress={() => {
            dispatch({ type: 'increase_1', payload });
          }}
          counter={counter_1}
        />
      </View>
      <View>
        <CounterButton
          text="Electricity Counter"
          onPress={() => {
            dispatch({ type: 'increase_2', payload });
          }}
          counter={counter_2}
        />
      </View>
      <View>
        <CounterButton
          text="Gas Counter"
          onPress={() => {
            dispatch({ type: 'increase_3', payload });
          }}
          counter={counter_3}
        />
      </View>
      <View>
        <CounterButton
          text="Broadband Counter"
          onPress={() => {
            dispatch({ type: 'increase_4', payload });
          }}
          counter={counter_4}
        />
      </View>
    </SafeAreaView>
  );
};

CounterScreen.navigationOptions = {
  headerTitle: 'Counters',
  headerTitleAlign: 'center',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginLeft: 20,
    marginRight: 20,
    paddingBottom: 20
  }
});

export default CounterScreen;
