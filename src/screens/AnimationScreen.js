import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Animated,
  Easing,
  Switch,
} from 'react-native';

const AnimationScreen = () => {
  const [rotateValue] = useState(new Animated.Value(0));
  const [isAnimationStarted, setIsAnimationStarted] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    handleToggleAnimation();
  };

  const handleToggleAnimation = () => {
    if (isAnimationStarted) {
      return StopImageRotate();
    }
    return StartImageRotate();
  };

  const StartImageRotate = () => {
    setIsAnimationStarted(true);
    Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    ).start();
  };

  const StopImageRotate = () => {
    setIsAnimationStarted(false);

    Animated.timing(rotateValue, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: false,
    }).stop();
  };

  const RotateData = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Animated.Image
          style={{
            height: 230,
            transform: [{rotate: RotateData}],
            width: 250,
          }}
          source={require('../assets/star.png')}
        />
      </View>

      <View style={styles.container}>
        <Switch
          style={styles.switch}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </SafeAreaView>
  );
};

AnimationScreen.navigationOptions = {
  headerTitle: 'Animation',
  headerTitleAlign: 'center',
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  image: {
    height: 400,
    width: 350,
  },
  switch: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AnimationScreen;
