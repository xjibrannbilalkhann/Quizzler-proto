import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Title = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>QUIZZLER</Text>
    </View>
  )
}
export default Title;

const styles = StyleSheet.create({
  title:{
    fontSize: 30,
    fontWeight: '600',
    color: '#808080',

  },
  container:{
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
});