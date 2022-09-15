import { StyleSheet, Text, View,Image} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import ChatScreen from './ChatScreen';
import PrizeScreen from './PrizeScreen';
import btm1 from '../../assets/bottomIcons/btm1.png'
import btm2 from '../../assets/bottomIcons/btm2.png'
import btm3 from '../../assets/bottomIcons/btm3.png'
import btm4 from '../../assets/bottomIcons/btm4.png'
import btm5 from '../../assets/bottomIcons/btm5.png'
import btm6 from '../../assets/bottomIcons/btm6.png'
import btm7 from '../../assets/bottomIcons/btm7.png'
import btm8 from '../../assets/bottomIcons/btm8.png'
import btm9 from '../../assets/bottomIcons/btm9.png'
import btm10 from '../../assets/bottomIcons/btm10.png'
import CoinScreen from './CoinScreen';
import ProfileScreen from './ProfileScreen';
import Home from './Home';
import React from 'react'

const Tab = createBottomTabNavigator();

const BottomScreen = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarStyle:{
        backgroundColor:'black'
      }      
      }}>
      <Tab.Screen name="Home" component={Home} 
       options={{
        tabBarShowLabel:false,
        tabBarIcon: ({focused}) => (
          focused ?  <Image source={btm8} style={styles.btmIcon}/> : <Image source={btm3} style={styles.btmIcon}/>
        ),
      }}
      />
      <Tab.Screen name="Prize" component={PrizeScreen} 
       options={{
        tabBarLabel: 'Prize',
        tabBarIcon: ({focused}) => (
          focused ?  <Image source={btm6} style={styles.btmIcon}/> : <Image source={btm1} style={styles.btmIcon}/>
         ),
      }}
      />
          <Tab.Screen name="Coin" component={CoinScreen} 
       options={{
        tabBarLabel: 'Coin',
        tabBarIcon: ({focused}) => (
         focused ?  <Image source={btm10} style={styles.btmIcon}/> : <Image source={btm5} style={styles.btmIcon}/>
        ),
      }}
      />
      <Tab.Screen name="Chats" component={ChatScreen} 
       options={{
        tabBarLabel: 'Chats',
        tabBarIcon: ({focused}) => (
          focused ?  <Image source={btm7} style={styles.btmIcon}/> : <Image source={btm2} style={styles.btmIcon}/>
        ),
      }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} 
       options={{
        tabBarIcon: ({focused}) => (
          focused ?  <Image source={btm9} style={styles.btmIcon}/>: <Image source={btm4} style={styles.btmIcon}/>
        ),
      }}
      />
    </Tab.Navigator>
  )
}

export default BottomScreen

const styles = StyleSheet.create({
  btmIcon:{
    height:30,
    width:30
  }
})