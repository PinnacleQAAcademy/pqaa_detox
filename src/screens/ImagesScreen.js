import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import ImageComponents from '../components/ImageComponents';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ImagesScreen = () => {
  return (
    <SafeAreaView style={{marginBottom: 50}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageComponents title="Europe" />
        <ImageComponents title="USA / Canada" />
        <ImageComponents title="Asia" />
      </ScrollView>
    </SafeAreaView>
  );
};

ImagesScreen.navigationOptions = {
  headerTitle: 'Cities',
  headerShown: true,
  headerTitleAlign: 'center',
  title: 'Cities',
  tabBarIcon: <FontAwesome5 name="city" size={20} />,
  tabBarAccessibilityLabel: 'Cities',
};

export default ImagesScreen;
