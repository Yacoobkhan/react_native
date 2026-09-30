import {View, Text,StyleSheet,Dimensions} from 'react-native';
import { useState, useEffect } from 'react';


export default function App(){

  const [dimensions, setDimensions] = useState({
    window: Dimensions.get("window")
  })

  useEffect(() =>{
    const subscription = Dimensions.addEventListener("change", ({window}) =>{
      setDimensions({window});
    });
    return () => subscription?.remove();
  })

  const {window} = dimensions;
  const dimensionWidth = window.width;
  const dimensioHeight = window.height;
  return(
    <View style={styles.container}>
      <View style={[styles.box, {height: dimensioHeight > 600 ? "60%" : "90%", width: dimensionWidth > 500 ? "70%" : "90%",}]}>
             <Text style={{fontSize: dimensionWidth > 500 ? 50 : 24 }}>
                Welcome !
              </Text>
      </View>
       
    </View>
  )
}

const dimensionWidth = Dimensions.get("window").width;
const dimensioHeight = Dimensions.get("window").height;

console.log({dimensionWidth, dimensioHeight})


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"plum",
    justifyContent:"center",
    alignItems:"center",
  },
  box:{
    backgroundColor:"lightblue",
    justifyContent:"center",
    alignItems:"center",
  },
})
