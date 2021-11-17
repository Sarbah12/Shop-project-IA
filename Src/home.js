import React from 'react';
import {View,Text, SafeAreaView,ImageBackground ,TouchableOpacity} from 'react-native';
import icon from "react-native-vector-icons"
const HomeScreen = () => {
  return(
    
    <TouchableOpacity>
    <SafeAreaView style={{flex:1,paddingHorizontal:20,backgroundColor:Colors.white}}
    >
    <View style={style.Header}>
   
     <View>
       <ImageBackground style={styles.touchimg} source={data.image}/>
     <Text style={{fontSize:20,fontWeight: 'bold'}}> Welcome To</Text>
    <Text style={{ fontSize:35, fontWeight: 'bold', color: Colors.yellow}}> Quality Sounds</Text>
     </View>
    <Icon name="shopping cart"/>
    </View>
    
    </SafeAreaView>
</TouchableOpacity>


  );
    
};
const style= StyleSheet.create({
    Header: { 
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',

    }
})
export default HomeScreen;