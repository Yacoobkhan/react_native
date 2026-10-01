import {View,Text,StyleSheet,ScrollView,StatusBar,FlatList} from 'react-native';
import PokemonList from '../../data.json';

export default function App(){
  return(
    <View style={styles.container}>
      {/* <ScrollView style={styles.ScrollView}>
          {PokemonList.map((pokemon) =>{
            return(
              <View key={pokemon.id} style={styles.card}>
                <Text style={styles.cardText}>{pokemon.type}</Text>
                <Text style={styles.cardText}>{pokemon.name}</Text>
              </View>
            )
          })}
      </ScrollView> */}


      <FlatList data={[]} 
          
          renderItem={({item}) =>{
            console.log(item.id)
            return(
              <View style={styles.card} key={item.id}>
                <Text style={styles.cardText}>{item.type}</Text>
                <Text style={styles.cardText}>{item.name}</Text>
              </View>
            )
          }}

          // horizontal

          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={<View style={{height:16}}/>}
          ListEmptyComponent={<Text style={styles.itemsText}>No items Found</Text>}
      />
     </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#f5f5f5",
    paddingTop:StatusBar.currentHeight,
  },
  ScrollView:{
    paddingHorizontal:16,
  },
  card:{
    backgroundColor:"white",
    padding:16,
    borderRadius:20,
    borderWidth:1,
    // marginBottom:16,
  },
  cardText:{
    fontSize:30,
  },
  itemsText:{
    fontSize:20,
    fontWeight:"bold",
    textAlign:"center",
    color:"red",
  }
})