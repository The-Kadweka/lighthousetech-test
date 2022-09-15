import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CoinScreen = () => {
  return (
    <View style={styles.Container}>
      <Text style={{color:'gold'}}>CoinScreen</Text>
    </View>
  )
}

export default CoinScreen

const styles = StyleSheet.create({
    Container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'black',
    
      }
})