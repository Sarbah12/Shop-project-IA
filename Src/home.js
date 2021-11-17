import React from 'react';
import {View,Text, SafeAreaView  } from 'react-native';
import icon from "react-native-vector-icons"
const HomeScreen = () => {
  return(
    <SafeAreaView style={{flex:1,paddingHorizontal:20,backgroundColor:Colors.white}}
    >
    <View style={style.Header}>
   
     <View>
     <Text style={{fontSize:20,fontWeight: 'bold'}}> Welcome To</Text>
    <Text style={{ fontSize:35, fontWeight: 'bold', color: Colors.yellow}}> Quality Sounds</Text>
     </View>
    <Icon name="shopping cart"/>
    </View>
    
    </SafeAreaView>



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