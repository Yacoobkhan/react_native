import React from 'react';
import {View,Text,StatusBar, StyleSheet, TextInput, Switch} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

export default function App(){
  const [name,setName] = useState("");
  const [number,setNumber] = useState("");
  const [password,setPassword] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  return(
      <SafeAreaView style={styles.container}>
        <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Name" autoCorrect={false} autoCapitalize="none"></TextInput>
        <Text style={styles.text}>My Name is {name}</Text>
{/* 
        <TextInput style={styles.input} value={number} onChangeText={setNumber} placeholder="Number" keyboardType='numeric'/>
        <Text style={styles.text}>Number: {number}</Text>

        
        <TextInput style={styles.input} value={password} onChangeText={setPassword} placeholder="password" secureTextEntry/> */}

        <TextInput style={[styles.input, styles.multitext]} placeholder='message' multiline/>

        <View style={styles.switchContainer}>
          <Text style={styles.text}>Dark Mode</Text>
          <Switch value={isDarkMode} onValueChange={() => setIsDarkMode((previousState) => !previousState)}
            trackColor={{false:"#767577", true:"green"}} thumbColor="red"/>
            
        </View>
      </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff",
    paddingTop: StatusBar.currentHeight,
  },
  input:{
    height:40,
    padding:10,
    margin:10,
    borderWidth:1,
  },
  text:{
    fontSize:30,
    padding:10,
  },
  multitext:{
    minHeight:100,
    verticalAlign:'top',
  },
  switchContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:10,
  }
})