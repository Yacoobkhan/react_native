import { View, Text,Image, ImageBackground, ScrollView,Button, Pressable, Modal } from "react-native";
import { useState } from "react";

const logoImg = require('./assets/icon.png')

export default function App(){

  const [isModalVisible,setIsModalVisible] = useState(false)

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

      <Pressable onPressOut={() => console.log("Image Pressed")}>
        <Image source={logoImg} style={{height:300,width:300}}/>
      </Pressable>

      <Pressable onPressOut={() => console.log("Text Pressed")}>
        <Text>This is a Text, which check with pressable component.</Text>
      </Pressable>

      <Button title="Open" onPress={() => setIsModalVisible(true)}/>


      <Modal visible={isModalVisible} onRequestClose={() => setIsModalVisible(false)} animationType="fade" >
        <Text style={{color:"red", backgroundColor:"White"}}>Modal Content</Text>
        <Button title="Close" color="midnightblue" onPress={() => setIsModalVisible(false)}/>
      </Modal>
  </View>
}