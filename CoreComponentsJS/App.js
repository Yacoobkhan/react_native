import { View, Text,Image, ImageBackground, ScrollView,Button } from "react-native";

const logoImg = require('./assets/icon.png')

export default function App(){
  return <View style={{flex:1 , backgroundColor:"plum", padding:60, }}>
    {/* <Image source={logoImg} style={{height:300,width:300}}/>
    <Image source={{uri: "https://picsum.photos/300"}} style={{height:300, width:300}}/>
    <Text><Text style={{color:"white"}}>Hello</Text> World</Text>  */}
    <ScrollView>
      {/* <ImageBackground source={logoImg} style={{flex:1}}> */}
      <Image source={logoImg} style={{height:300,width:300}}/>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore.</Text>
        <Image source={logoImg} style={{height:300,width:300}}/>
        <Image source={logoImg} style={{height:300,width:300}}/>
        <Image source={logoImg} style={{height:300,width:300}}/>
      {/* </ImageBackground> */}
    </ScrollView>

    <Button title='Press' onPress={() => console.log("Button Pressed")} color="red"  disabled/>
  </View>
}