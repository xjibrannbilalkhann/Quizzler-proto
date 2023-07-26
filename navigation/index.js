import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import HistoryQuiz from '../screens/historyquiz';
import Result from '../screens/result';
import Option from '../screens/option';
import GKQuiz from '../screens/gkquiz';
import SportsQuiz from '../screens/sportsquiz';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
    
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Stack.Screen name="HistoryQuiz" component={HistoryQuiz} options={{headerShown: false}} />
      <Stack.Screen name="Option" component={Option} options={{headerShown: false}} />
      <Stack.Screen name="GKQuiz" component={GKQuiz} options={{headerShown: false}} />
      <Stack.Screen name="SportsQuiz" component={SportsQuiz} options={{headerShown: false}} />
      <Stack.Screen name="Result" component={Result} options={{headerShown: false}} />
          </Stack.Navigator>
  );
}

export default MyStack;