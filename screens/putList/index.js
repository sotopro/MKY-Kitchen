import {Button, MenuAlt, Pickers, TT} from '../../components';
import { FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";

import Color from "../../constants/colors";
import { addlist } from "../../store/action";

const PutList = ({navigation}) => {

  const dispatch = useDispatch();
  const list = useSelector(state => state.lists.lists);
  

  const onChangeProduct = (text) => { setProduct(text.replace(/[^ a-zA-Z ]/g, '')) }; // Validar solo texto
  const onChangeQuantity = (text) => { setQuantity(text.replace(/[^0-9]/g, '')) };// Validar solo numeros
  
  const [listName, setListName] = useState(''); 
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [measure, setMeasure] = useState('Seleccione una ...');
  const [order, setorder] = useState([]);

  const ingresarProducto = () => {
    setProduct('');
    setQuantity(0);
    setMeasure('Seleccione una ...');
    dispatch(addlist(list, order));
  }

  const date = () => {
    const date = Date.now();
    const hoy = new Date(date);
    const day = hoy.toLocaleString();
    return day;
  }

  return (
    <ScrollView style={styles.container}>
      <MenuAlt title={'Agregar Lista '} />
      <View style={styles.dateContainer}>
        <Text style={styles.date}> Nombre de la Lista:setlistName({date()}) </Text>
      </View>
      <View style={styles.TextInputContainer}>
        <View style={styles.TextBoxContainer}>
          <TT placeholder="Producto" value={product} onChangeText={onChangeProduct}/>
          <TT placeholder="Cantidad" value={quantity} onChangeText={onChangeQuantity}/>
        </View>
        <Text style={styles.textPicker}> Medidas - {measure}</Text>
        <Pickers stateFirst={measure} stateSecond={setMeasure}></Pickers>
      
        <View style={styles.buttonContainer}>
          <Button title="Agregar" bkcolor={Color.primary} color={Color.letter} onPress={() => ingresarProducto()} />
        </View>
      </View>
    </ScrollView> 
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.primary,
    color: Color.letter,
    fontFamily: 'Lato-Regular',
  },

  dateContainer: {
    marginHorizontal:20,
    marginVertical: 5,
    fontSize: 20,
  },

  date: {
    fontSize: 16,
    color: Color.letter,
    fontFamily: 'Lato-Regular',
  },

  TextInputContainer: {
    marginTop: 40,
    marginHorizontal: 10,
  },

  TextBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  TextInput: {
    height: 33,
    color: Color.primary,
    backgroundColor: Color.letter,
    fontSize: 15,
    selectionColor: Color.letterº,
    placeholderTextColor: Color.primary,
    marginBottom: 15,
    paddingHorizontal: 10,
  }, 

  textPicker: {
    color: Color.letter,
  }

});

export default PutList;