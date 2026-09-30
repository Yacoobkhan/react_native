import {View, Text,StyleSheet,useWindowDimensions} from 'react-native';
import { useState, useEffect } from 'react';


export default function App(){

  // const [dimensions, setDimensions] = useState({
  //   window: Dimensions.get("window")
  // })

  // useEffect(() =>{
  //   const subscription = Dimensions.addEventListener("change", ({window}) =>{
  //     setDimensions({window});
  //   });
  //   return () => subscription?.remove();
  // })

  // const {window} = dimensions;
  // const dimensionWidth = window.width;
  // const dimensioHeight = window.height;

  const windowDimensionWidth = useWindowDimensions().width;
  const windowDimensionHeight = useWindowDimensions().height;

  console.log({windowDimensionWidth, windowDimensionHeight})
  return( 
    <View style={styles.container}>
      <View style={[styles.box, {height: windowDimensionHeight > 600 ? "60%" : "90%", width: windowDimensionWidth > 500 ? "70%" : "90%",}]}>
             <Text style={{fontSize: windowDimensionWidth > 500 ? 50 : 24 }}>
                Welcome !
              </Text>
      </View>
       
    </View>
  )
}



// const dimensionWidth = Dimensions.get("window").width;
// const dimensioHeight = Dimensions.get("window").height;

// console.log({dimensionWidth, dimensioHeight})


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
