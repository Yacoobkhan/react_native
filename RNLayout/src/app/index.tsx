import {View,Text,StyleSheet} from 'react-native';
import Box from '../../components/Box';
import { Background } from 'expo-router/build/react-navigation';


export default function App(){
  return(
    <View style={styles.container}>
        <Box style={{backgroundColor:"#8e9b00" , alignSelf:"flex-start"}}>Box1</Box>
        <Box style={{backgroundColor:"#b65d1f", alignSelf:"flex-end"}}>Box2</Box>
        <Box style={{backgroundColor:"#1c4c56", alignSelf:"center"}}>Box3</Box>
        <Box style={{backgroundColor:"#ab9156", alignSelf:"stretch"}}>Box4</Box>
        <Box style={{backgroundColor:"#6b0803"}}>Box5</Box>
        <Box style={{backgroundColor:"#1c4c56"}}>Box6</Box>
        <Box style={{backgroundColor:"#b95f21"}}>Box7</Box>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"flex-end",
        marginTop:64,
        borderWidth:6,
        borderColor:"red",
    }
})