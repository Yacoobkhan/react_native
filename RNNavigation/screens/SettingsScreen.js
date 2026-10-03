import React from 'react';
import { View, Text,StyleSheet,Button } from 'react-native';
import { useLayoutEffect } from 'react';

export default function SettingsScreen() {
  return (
    <View style={styles.container} >
     <Text  style={styles.Text}>
        Settings Screen
     </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:'center',
        padding:10,
    },
    Text:{
        fontSize:24,
        fontWeight:'bold',
        marginBottom:16,
    },
})