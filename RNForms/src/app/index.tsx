import React from "react";
import {View,Text,TextInput,StyleSheet,Button,Image,KeyboardAvoidingView,Platform} from 'react-native';
import { useState } from "react";

export default function App(){

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const validateForm = () => {
      let errors ={};

     if (!username) errors.username = "Username is required";
      if(!password) errors.password = "Password is required";

      setErrors(errors)

      return Object.keys(errors).length === 0;
    }

    const handleSubmit = () =>{
      if(validateForm()){
          console.log("Submitted",username,password);
          setUsername("");
          setPassword("");
          setErrors({})
      }
    }
    return(

    <KeyboardAvoidingView behavior="padding"  keyboardVerticalOffset={Platform.OS === 'android' ? 0 :100} style={styles.container}>
        <View style={styles.form}>
            <Image style={styles.image} source={require('../../assets/expo.icon/Assets/icon.png')} />
            <Text style={styles.label}>Username</Text>
            <TextInput style={styles.input} placeholder="Enter your username" value={username} onChangeText={setUsername} />
            {
              errors.username ? (<Text style={styles.errorText}>{errors.username}</Text>) : null
            }
            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.input} placeholder="Enter your password" secureTextEntry value={password} onChangeText={setPassword}/> 
            {
              errors.password ? (<Text style={styles.errorText}>{errors.password}</Text>) : null
            }
            <Button title="Login" onPress={handleSubmit}/>
        </View>
    </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#f5f5f5",
        paddingHorizontal:20,
        justifyContent:"center",
    },
    form:{
      backgroundColor:"white",
      padding:20,
      borderRadius:10,
      shadowColor:"black",
      shadowOffset:{
        width:0,
        height:2,
      },
      shadowOpacity:0.25,
      shadowRadius:4,
      elevation: 5,
    },
    label:{
      fontSize:16,
      fontWeight:"bold",
      marginBottom:5,
    },
    input:{
      borderColor:"#ddd",
      height:40,
      padding:10,
      marginBottom:15,
      borderWidth:1,
      borderRadius:5,
    },
    image:{
      height:200,
      width:200,
      marginBottom:16,
      alignSelf:"center",
    },
    errorText:{
      color:"red",
      marginBottom:10,
    }

})













// import React from 'react';
// import {View,Text,StatusBar, StyleSheet, TextInput, Switch} from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useState } from 'react';

// export default function App(){
//   const [name,setName] = useState("");
//   const [number,setNumber] = useState("");
//   const [password,setPassword] = useState("");
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   return(
//       <SafeAreaView style={styles.container}>
//         <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Name" autoCorrect={false} autoCapitalize="none"></TextInput>
//         <Text style={styles.text}>My Name is {name}</Text>
// {/* 
//         <TextInput style={styles.input} value={number} onChangeText={setNumber} placeholder="Number" keyboardType='numeric'/>
//         <Text style={styles.text}>Number: {number}</Text>

        
//         <TextInput style={styles.input} value={password} onChangeText={setPassword} placeholder="password" secureTextEntry/> */}

//         <TextInput style={[styles.input, styles.multitext]} placeholder='message' multiline/>

//         <View style={styles.switchContainer}>
//           <Text style={styles.text}>Dark Mode</Text>
//           <Switch value={isDarkMode} onValueChange={() => setIsDarkMode((previousState) => !previousState)}
//             trackColor={{false:"#767577", true:"green"}} thumbColor="red"/>
            
//         </View>
//       </SafeAreaView>
//   )
// }


// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     backgroundColor:"#fff",
//     paddingTop: StatusBar.currentHeight,
//   },
//   input:{
//     height:40,
//     padding:10,
//     margin:10,
//     borderWidth:1,
//   },
//   text:{
//     fontSize:30,
//     padding:10,
//   },
//   multitext:{
//     minHeight:100,
//     verticalAlign:'top',
//   },
//   switchContainer:{
//     flexDirection:'row',
//     alignItems:'center',
//     justifyContent:'space-between',
//     paddingHorizontal:10,
//   }
// })