import {View,Text,StyleSheet} from 'react-native'; 

export default function App(){
  return(
     <View style={styles.container}>
      <Text style={styles.title}>Hello, World</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"blue",
    padding:60,
  },
  title:{
    fontSize:20,
    color:"white"
  }
})
