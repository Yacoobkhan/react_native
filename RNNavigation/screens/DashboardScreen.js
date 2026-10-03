import React from 'react';
import { View, Text,StyleSheet,Button } from 'react-native';

export default function DashboardScreen({navigation}) {
  return (
    <View style={styles.container} >
     <Text  style={styles.Text}>
        Dashboard Screen
     </Text>
     <Button title='toggle  drawer' onPress={() => navigation.toggleDrawer()}/>
      <Button title='settings' onPress={() => navigation.jumpTo("Settings")}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignCenter:"center",
        justifyContent:'center',
        padding:10,
    },
    Text:{
        fontSize:30,
        fontWeight:'bold',
        marginBottom:16,
    },
})