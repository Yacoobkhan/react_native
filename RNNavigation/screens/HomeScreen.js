import React from 'react';
import { View, Text,StyleSheet, Button } from 'react-native';

const HomeScreen = ({navigation,route}) => {
   const result = route.params?.result;
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Home Screen</Text>
      <Text style={styles.Text}>{result}</Text>
      <Button title="Go to About" onPress={() => navigation.navigate('About')} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        textAlign:'center',
        justifyContent:'center',
        padding:10,
    },
    Text:{
        fontSize:24,
        fontWeight:'bold',
        marginBottom:16,
        textAlign:'center',
    },
})