import React,{useState} from 'react';
import { Text, View, StyleSheet,TextInput,Button } from 'react-native';
import Constants from 'expo-constants';


export default function App() {
  const [price,setPrice]=useState("");
  const [discount,setDiscount]=useState('');
  const [save,setSave]=useState('');
  const [fprice,setFprice]=useState('');
  function  discountCa(price,discount){

      var dis=price*(discount/100);
      return dis;

  }
  const fpri=()=>{

    setFprice(price-discountCa(price,discount));




  }
  const saving=()=>{
    setSave(discountCa);




  }
  

  return (
    <View style={styles.container}>
      <Text>Enter Price</Text>
      <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={price => setPrice(price)}
      value={price}
    />
    <Text>Enter Discount</Text>
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={discount => setDiscount(discount)}
      value={discount}
    />

    <Button  title="Cal"
    onPress={()=>{discountCa(price,discount)}}/>
<Text>finalprice: {fprice} </Text>
<Text>USave: {save}</Text>


       
     
    </View>
  );
}

const styles = StyleSheet.create({
  
})
