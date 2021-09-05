import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

const ExtrasScreen =  () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>This section is reserved for future updates of the course if more elements and functionalities are needed</Text>
    </SafeAreaView>
  );
};

ExtrasScreen.navigationOptions = {
  headerTitle: 'Extras',
  headerShown: true,
  headerTitleAlign: 'center'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2.5,
  }
});

export default ExtrasScreen;
