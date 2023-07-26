import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View, TextInput, select} from 'react-native';
import Title from '../components/title';


const Option = ({navigation}) => {

    var data = ["Easy", "Medium", "Hard"];


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
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('HistoryQuiz')}
        style={styles.button}>
        <Text style={styles.buttonText}>History Quiz</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('GKQuiz')}
        style={styles.button}>
        <Text style={styles.buttonText}>General Knowledge Quiz</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('SportsQuiz')}
        style={styles.button}>
        <Text style={styles.buttonText}>Sports Quiz</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Option;

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