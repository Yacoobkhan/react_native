// import {View,Text,StyleSheet} from 'react-native'; 

// export default function App(){
//   return(
//      <View style={styles.container}>
//       {/* <Text style={styles.title}>Hello, World</Text> */}
//         <View style={[styles.box, styles.lightBlueBg, styles.boxShadow]}>
//           <Text style={{borderRadius:5, backgroundColor:"red"}}>LightBlueBox</Text>
//         </View>
//         <View style={[styles.box, styles.lightGreenBg, styles.androidShadow]}>
//           <Text >LightGreenBox</Text>
//         </View>

//     </View>
//   )
// }


// const styles = StyleSheet.create({
//   container:{flex:1,backgroundColor:"white",padding:60},
//   box:{
//     height:150,
//     width:150,
//     borderWidth:2,
//     borderColor:'Purple',

//     marginVertical: 10,
//     marginHorizontal: 20,

//     paddingVertical:10,
//     paddingHorizontal:20,
//     borderRadius:5,
//   },
//   lightBlueBg:{
//     backgroundColor:"lightblue",
//   },
//   lightGreenBg:{
//     backgroundColor:"lightgreen",
//   },
//   boxShadow:{
//       shadowColor:"yellow",
//       shadowOffset:{
//         width:6,
//         height:6,
//       },
//       shadowOpacity:0.6,
//       shadowRadius: 4,
//   },
//   androidShadow:{
//     elevation:10,
//   }
 
// })



import { StyleSheet, Text, View } from 'react-native';

export default function App(){
  return(
    <View style={{flex:1,backgroundColor:"plum", padding:20}}>
      <View style={styles.darkContent}>
        <Text style={styles.darkTextContent}>
           Style Inheritance 
           <Text style={styles.boldText}>In bold</Text>
        </Text>
      </View>
      <View style={[styles.box, styles.lightblueBg,styles.boxShadow]}>
        <Text>Text box light blue color</Text>
      </View>

      <View style={[styles.box, styles.lightgreenBg,styles.androidShadow]}>
        <Text>Text Box light green color</Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  box:{
    width:250,
    height:250,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical:10,
    borderWidth:2,
    borderColor:"Purple",
    borderRadius:5,
  },
  darkContent:{
    backgroundColor:"black",
  },
  darkTextContent:{
    color:"white",
  },
  boldText:{
    fontSize:30,
  },
  lightblueBg:{
    backgroundColor:"lightblue",
  },
  lightgreenBg:{
    backgroundColor:"lightgreen",
  },
  boxShadow:{
    shadowColor:"#333333",
  },
  androidShadow:{
    elevation:300,
  },
})