import React from 'react';
import { Text, View, StyleSheet, ScrollView, FlatList, Image } from 'react-native';
import { europe, usacanada, asia } from '../data/countryData';

const ImageComponents = ({title}) => {
  const cities =
    title === 'Europe' ? europe : title === 'Asia' ? asia : usacanada;

  return (
    <ScrollView>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(city) => city.name}
        data={cities}
        renderItem={({item}) => {
          return (
            <View style={styles.imageContainer}>
              <Text style={styles.imageText}>{item.name}</Text>
              <Image
                style={styles.image}
                resizeMode={'cover'}
                source={item.imagePath}
              />
            </View>
          );
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  headerText: {
    fontSize: 25,
  },
  imageContainer: {
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  imageText: {
    fontSize: 20,
    marginBottom: 5,
    alignSelf: 'center',
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 4,
    marginBottom: 5,
  },
});

export default ImageComponents;
