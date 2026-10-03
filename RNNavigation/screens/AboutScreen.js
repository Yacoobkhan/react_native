import React from 'react';
import { View, Text,StyleSheet,Button } from 'react-native';
import { useLayoutEffect } from 'react';

export default function AboutScreen({navigation, route}) {
    const {name} = route.params;

    useLayoutEffect(()=>{
        navigation.setOptions({
            title:name
        })
    },[navigation,name]);
  return (
    <View style={styles.container} >
      <Text style={styles.Text}>About Screen</Text>
       <Text style={styles.Text}>Name: {name}</Text>

       <Button title='update the name' onPress={() => navigation.setParams({
        name:"React Native"
       })}/>

       <Button title='change to previous name' onPress={() => navigation.navigate('Home', {result:'Data From About'})} />

      {/* <Button title='Back to home' onPress={() => navigation.navigate('Home')} /> */}


    </View>
  );
}

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