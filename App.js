import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
//import Constants from 'expo-constants';
import Home from'./screens/home';
import GKQuiz from'./screens/gkquiz';
import Result from'./screens/result';
import MyStack from './navigation';
import SportsQuiz from'./screens/sportsquiz';
import HistoryQuiz from'./screens/historyquiz';
// import Option from '../screens/option';



export default function App() {
  return (
    
    
      <NavigationContainer>
  	    <MyStack/>
      </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: { 
    paddingTop: 45,
    paddingHorizontal: 16,
  },

});
