import React from "react";
import { Pressable, Text } from "react-native";

const CustomButton = ({onPress, title}) => (
    <Pressable onPress={onPress}
        style={{justifyContent:"center",
            alignItems:"center",
            backgroundColor:"yellow",
            borderRadius:10,
            padding:10
        }}
    >
        <Text style={{fontSize:18, color:"white"}}>{title}</Text>
    </Pressable>
)

export default CustomButton;