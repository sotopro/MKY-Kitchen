import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ingredients, MenuAlt, Other, Photo, Steps } from '../../components';
import React, {useState} from "react";

import Color from "../../constants/colors";
import { useSelector } from 'react-redux';

const ViewWelcome = ( {navigation}) => {

  const recipe = useSelector(state => state.recipes.selectedRecipe);

  const {name, description, date, ingredients, steps, other, photo} = recipe;

 
  return (
    <View style={styles.container}>
      <MenuAlt title={'Vista Receta'} />
      <Text style={styles.text}>Receta {name} - {date} </Text>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Descripción: {description}</Text>
      </View>
      <ScrollView>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Ingredientes:</Text>
          <Ingredients ingredients={ingredients} />
        </View>
        <View style = {styles.block}></View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Preparacion:</Text>
          <Steps steps ={steps} />
        </View>
        <View style = {styles.block}></View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Adicionales:</Text>
          <Other others={other} />
        </View>
        <View style = {styles.block}></View>
        <View style={styles.textContainer}>
          <Photo photo={photo} />
        </View>
      </ScrollView>
      
    
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.primary,
    color: Color.letter,     
    fontFamily: 'Lato-Bold',
  },
  
  textContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  text: {
    color: Color.letter,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal:20
  },

  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    height: 33,
  },
  block:{
    height: 10,
  }


});

export default ViewWelcome;