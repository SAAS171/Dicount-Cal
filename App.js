import React,{useState} from 'react';
import { Text, View, StyleSheet,TextInput,Button } from 'react-native';
import Constants from 'expo-constants';


export default function App() {
  const [price,setPrice]=useState("");
  const [discount,setDiscount]=useState('');
  const [save,setSave]=useState('');
  const [fprice,setFprice]=useState('');

  const Usave=(Price,Discount)=>{

    



  }

  return (
    <View style={styles.container}>
      <Text>Enter Price</Text>
      <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => setPrice(text)}
      value={price}
    />
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => setDiscount(text)}
      value={discount}
    />


       
     
    </View>
  );
}

const styles = StyleSheet.create({
  
})