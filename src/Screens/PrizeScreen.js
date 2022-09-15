import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PrizeScreen = () => {
  return (
    <View style={styles.Container}>
      <Text style={{color:'gold'}}>PrizeScreen</Text>
    </View>
  )
}

export default PrizeScreen

const styles = StyleSheet.create({
  Container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'black',

  }
})