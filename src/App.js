import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { string } from 'prop-types'


export const Button = ({ label }) => {
  const s = StyleSheet.create({
    container:{
      backgroundColor:'mediumturquoise',
      width: 150,
      height:50,
      alignItems:'center',
      justifyContent:'center',
      margin:15,
    },
    text:{
      color: 'white',
    },
  })
  return <TouchableOpacity
    onPress={() => 'log rap'}
    style={s.container}
  >
    <Text style={s.text}>{label}</Text>
  </TouchableOpacity>
}

export const Message = () => {
  const s = StyleSheet.create({
    container:{
      backgroundColor:'#fafafa',
      borderRadius: 10,
      alignItems:'center',
      justifyContent:'center',
      width: '20%',
      height:'10%',
    },
  })
  return <View style={s.container}>
    <Text>lorem</Text>
  </View>
}

export default () => {
  const s = StyleSheet.create({
    container:{
      backgroundColor:'lightslategrey',
      flex:1,
      height:'100vh',
      alignItems:'center',
      paddingTop:70,
    },
  })
  return <View style={s.container}>
    <Button label='Say Hi?' />
    <Message />
  </View>
}

Button.propTypes = {
  label: string,
}
