import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, FlatList, Image } from 'react-native';
import { Rating } from 'react-native-elements';

import { Button } from './Products/Button';
import Icon2 from 'react-native-vector-icons/Feather';
import Star from 'react-native-star-view';
import AsyncStorage from '@react-native-community/async-storage';


const PrevOrderDetailScreen = ({ route, navigation }) => {

  const starStyle = {
    width: 155,
    height: 35,
    marginBottom: 20,
  };
  /* 2. Get the param */
  const { itemlist,order_time,order_status } = route.params;

// console.log("DID LIST COME",itemlist)


const renderItem = ({ item }) => {
   
    return (
        <View style={{ flexDirection: 'row'}}>
      <View style={{ flexDirection: 'row', paddingVertical:20}}>
        <Image style={styles.image}
          source={{
            uri: item.image_path
          }} />
        <View>
          <Text style={{ width: 150,fontSize: 13, fontWeight: 'bold' }}>{item.name} </Text>
          <Text style={{ fontSize: 15 }}> Model: {item.model}</Text>
          <Text > </Text>
          <Text style={{ fontSize: 20 }}> ${item.price} </Text>
        
        <View style={{marginLeft:170, marginTop:-110}}>
        {order_status !== 'Preparing' && order_status !=='Cancelled' && order_status !== 'Shipped' &&
        <Button
              title="Rate|Comment"
              onPress={() => navigation.navigate('RateComment', {
                itemName: item.name,
                itemImage:item.image_path
              })} //navigate
            />
            
        }
       
        {order_status !== 'Preparing' && order_status !=='Cancelled' && order_status !== 'Shipped' &&
        <Button
              title="Return"
              onPress={() => alert("empty")} //navigate
            />
            
        }
        
        </View>
        </View>
        
      </View>
      
      </View>


    )

  };

  return (
    <ScrollView  >
        {/* <Image style={{marginLeft:20 , width:65, height: 70, marginTop:10,marginBottom: 0 }}
        source={{
          uri: 'http://cdn.onlinewebfonts.com/svg/img_330183.png'
        }}/> */}
         <Text style={{ marginTop: 25, paddingLeft:10,fontSize: 25, marginRight: 30,fontWeight: 'bold', color: '#BFA38F'  }}>   Order Info </Text>

      <FlatList
        data={itemlist}
        renderItem={renderItem}
        keyExtractor={(item) => item.name.toString()}
      />
     
      	<View
			style={{
			//borderBottomColor: '#BFA38F',
				borderColor: '#000000bf',
				borderBottomWidth: 5,
				borderEndWidth: 1000,
				}}
		/>
         <Text style={{ marginTop: 25, paddingLeft:10,fontSize: 18, marginRight: 30,fontWeight: 'bold', color: '#000000bf' }}>  Total Amount paid: $ </Text>
         <Text style={{ marginTop: 25, paddingLeft:10,fontSize: 18, marginRight: 30,fontWeight: 'bold', color: '#000000bf' }}>  Order Time:  {order_time} </Text>
         <Text style={{ marginTop: 25, paddingLeft:10,fontSize: 18, marginRight: 30,fontWeight: 'bold', color: '#000000bf' }}>  Payment type: Credit Card </Text>

    </ScrollView>
  );

}

export default PrevOrderDetailScreen;



const styles = StyleSheet.create({
  container: {
    shadowColor: '#cdcdcd',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 30,
  },
  image: { width: 90, height: 100 },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 0,
  },
  title: { fontSize: 23, fontWeight: 'bold' },
  description: { color: '#b1b1b1', marginBottom: 10 },
  price: {
    color: '#7de3bb',
    fontSize: 18,
    fontWeight: 'bold',
  },
  notInStock: { textAlign: 'center' },

  together: {

    flexDirection: 'row',
    justifyContent: 'space-between',

  },


});