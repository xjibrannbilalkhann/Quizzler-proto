import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Title from '../components/title';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title titleText='QUIZZLER' />
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: 'https://cdni.iconscout.com/illustration/premium/thumb/giving-different-feedback-and-review-in-websites-2112230-1779230.png',
          }}
          style={styles.banner}
          resizeMode="contain"
        />
        <Text style={styles.des}>Quizler would quiz your mind till the point where your mind can not quiz no more and thats when we know what your mind is capable of </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Quiz')}
        style={styles.button}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  des:{
    color: '#808080',
    textAlign: 'center',
    fontSize: 18,
  },
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  container: {
    paddingTop: 50,
      paddingHorizontal: 20,
      height: '100%',
      backgroundColor: '#202030',
  },
  button: {
    width: '100%',
    backgroundColor: '#39304A',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#808080',
  },
});