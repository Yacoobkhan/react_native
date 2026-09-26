import { View, Text,Image, ImageBackground, ScrollView,Button, Pressable, Modal, StatusBar, ActivityIndicator, Alert, StyleSheet} from "react-native";
import { useState } from "react";
import Greet from "./components/Greet";

const logoImg = require('./assets/icon.png')

export default function App(){

  const [isModalVisible,setIsModalVisible] = useState(false)
  const [isStatusBar,setIsStatusBar] = useState(false)

  const [isIndicator, setIsIndicator] = useState(true);

  return <View style={{flex:1 , backgroundColor:"plum", padding:100, }}>

    {/* IMAGE */}

    {/* <Image source={logoImg} style={{height:300,width:300}}/>
    <Image source={{uri: "https://picsum.photos/300"}} style={{height:300, width:300}}/>
    <Text><Text style={{color:"white"}}>Hello</Text> World</Text>  */}


      {/* SCROLLVIEW */}

    {/* <ScrollView> */}
      {/* <ImageBackground source={logoImg} style={{flex:1}}> */}
      {/* <Image source={logoImg} style={{height:300,width:300}}/>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore.</Text>
        <Image source={logoImg} style={{height:300,width:300}}/>
        <Image source={logoImg} style={{height:300,width:300}}/>
        <Image source={logoImg} style={{height:300,width:300}}/> */}
      {/* </ImageBackground> */}
    {/* </ScrollView> */}

    {/* BUTTON AND PRESSABLE */}

    {/* <Button title='Press' onPress={() => console.log("Button Pressed")} color="red"  disabled/>

      <Pressable onPressOut={() => console.log("Image Pressed")}>
        <Image source={logoImg} style={{height:300,width:300}}/>
      </Pressable>

      <Pressable onPressOut={() => console.log("Text Pressed")}>
        <Text>This is a Text, which check with pressable component.</Text>
      </Pressable> */}
      {/* <View style={{marginBottom:20}}> 
        <View style={{marginBottom:20}}>
             <Button title="StatusBar" onPress={() => setIsStatusBar(true)}/>
        </View> */}
      {/* <StatusBar backgroundColor="blue" barStyle="default" hidden={!isStatusBar}/> */}

      {/* <Button title="Close" onPress={()=>setIsStatusBar(false)}/>
    
    </View> */}

      {/* <Button title="Open" onPress={() => setIsModalVisible(true)}/> */}


        {/* MODAL */}

      {/*

          <Modal visible={isModalVisible} onRequestClose={() => setIsModalVisible(false)} animationType="fade" >
            <Text style={{color:"red"}}>Modal Content</Text>
            <Button title="Close" color="midnightblue" onPress={() => setIsModalVisible(false)}/>
          </Modal>  
          
      */}



      {/* <ActivityIndicator />

      <ActivityIndicator size="large"/> */}

      {/* <Button title="off" onPress={() => setIsIndicator(false)}/>

      <ActivityIndicator size="large" color="green" animating={isIndicator}/> 

      <Button title="on" onPress={()=>setIsIndicator(true)}/>
        
      <ActivityIndicator size="large" color="red" animating={false}/> */}


{/* <View style={{marginBottom:20}}>
      <Button title="Alert" onPress={() => Alert.alert("Invalid data!")}/>    
</View>

  <View style={{marginBottom:20}}>
          <Button title="Alert 2" onPress={() => Alert.alert("Invalid data!","E-Mail is invalid")}/>
  </View>

        <Button 
              title="Alert 3" 
              onPress={() => Alert.alert("Invalid data!","E-Mail is invalid",[
          {
            text:'Cancel',
            onPress:() => console.log("Cancel Pressed"),
          },{
            text:'ok',
            onPress:() => console.log("OK Pressed"),
          },
        ]
      )
    }
      />
       */}


    {/* <Greet name="Yacoob" />
    <Greet name="Khan" /> */}

  </View>
}