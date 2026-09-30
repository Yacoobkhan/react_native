import {View, Text,StyleSheet, Platform} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useState, useEffect } from 'react';


export default function App(){

  // const [dimensions, setDimensions] = useState({
  //   window: Dimensions.get("window")
  // })

  // useEffect(() =>{
  //   const subscription = Dimensions.addEventListener("change", ({window}) =>{
  //     setDimensions({window});

  //      console.log({
  //         dimensionWidth: window.width,
  //         dimensioHeight: window.height,
  //       });
  //     });
  //   return () => subscription?.remove();
  // },[])

  // const {window} = dimensions;

  //WINDOW DIMENSION HOOK

  // const windowDimensionWidth = useWindowDimensions().width;
  // const windowDimensionHeight = useWindowDimensions().height;

  // console.log({windowDimensionWidth, windowDimensionHeight})
  return( 
    <SafeAreaView style={styles.SafeContainer}>

          <View style={styles.container}>
            <View style={[styles.box]}>
              <Text style={styles.text}>
                  Welcome !
              </Text>
              <CustomButton title="Click Me" onPress={() => alert("Clicked!!")} />
            </View>
                
          </View>

    </SafeAreaView>

  )
}



// const dimensionWidth = Dimensions.get("window").width;
// const dimensioHeight = Dimensions.get("window").height;

// console.log({dimensionWidth, dimensioHeight})


const styles = StyleSheet.create({
  SafeContainer:{
     flex:1,
     backgroundColor:"plum",
  },
  container:{
      flex:1,
      backgroundColor:Platform.OS === 'android' ? "black" : "purple",
  },
  box:{
    // backgroundColor:"lightblue",
    // justifyContent:"center",
    // alignItems:"center",
    padding:20,
  },
  text:{
    ...Platform.select({
      ios:{
        color:"purple",
        fontSize:30,
      },
      android:{
        color:"green",
        fontSize:30,
        fontStyle:"italic",
      },
    }),
    fontWeight:"bold",
    textAlign:"center",
  }
})
