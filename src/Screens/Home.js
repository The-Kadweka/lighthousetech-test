import { SafeAreaView, StyleSheet,Image,Text,ImageBackground,FlatList, View, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import holo1 from '../../assets/icons/holo1.png'
import { FontAwesome } from '@expo/vector-icons';
import img from '../../assets/icons/iStock-853568862.jpg';
import image from '../../assets/icons/view.png'
import image1 from '../../assets/games/game1.png'
import image2 from '../../assets/games/game2.png'
import image3 from '../../assets/games/game3.jpg'
import image4 from '../../assets/games/game4.jpg'
import icon1 from '../../assets/side-icons/icon1.png'
import icon2 from '../../assets/side-icons/icon2.png'
import icon3 from '../../assets/side-icons/icon3.png'
import icon4 from '../../assets/side-icons/icon4.png'
import icon5 from '../../assets/side-icons/icon5.png'
import icon6 from '../../assets/side-icons/icon6.png'
// import icon7 from '../../assets/side-icons/ho_ga2@3x.png'
import React from 'react'

const data =[
{
id: "1",
name: "Earnest Green",
},
{
id: "1",
name: "Earnest Green",
},
{
id: "1",
name: "Earnest Green",
},
{
id: "1",
name: "Earnest Green",
},
{
id: "1",
name: "Earnest Green",
},
{
id: "1",
name: "Earnest Green",
},
]
const games=[
  {'image':image1},
  {'image':image2},
  {'image':image3},
  {'image':image4}
]
const sideicon=[
  {'icon':icon1},
  {'icon':icon2},
  {'icon':icon3},
  {'icon':icon4},
  {'icon':icon5},
  {'icon':icon6}
]
const Home = () => {
  return (
    <SafeAreaView style={styles.topSection}>
      <View style={{justifyContent:'space-around',marginTop:40,flexDirection:'row'}}>
      <FontAwesome name="bell" size={24} color="gold" />
      <Image source={holo1} style={{height:40,width:150,marginTop:-12}}/>
<MaterialIcons name="menu" size={24} color="gold" />
      </View>

<ImageBackground source={img} resizeMode="cover" style={styles.imageView}> 
  <View style={{height:180,backgroundColor:'black',opacity:0.9,justifyContent:'center',alignContent:'center',width:'100%'}}>
    <Image source={image} style={{height:180,width:'90%',left:20}} resizeMode="contain"/>
  </View>
</ImageBackground>





      <View style={{marginLeft:25}}>
        <View>
          <Text style={{color:'gold',fontSize:18}}>Hot Games</Text>
        </View>
        <FlatList 
        horizontal
        data={games}
        renderItem={({item}) => 
        // <View style={{backgroundColor:'gold',height:80,width:100,borderRadius:10,marginVertical: 8,
        // marginHorizontal: 8,}}>
          <ImageBackground  source={item.image}   resizeMode="cover" style={{backgroundColor:'gold',height:80,width:100,borderRadius:10,marginVertical: 8,
        marginHorizontal: 8,}}>

          </ImageBackground>
        // </View>
      }
      />

      </View>
      <View style={{height:70,marginTop:10,flexDirection:'row',justifyContent:'flex-start',width:'80%',left:'2%',right:'2%'}}>
        <View style={{position:'absolute',flexDirection:'row',justifyContent:'flex-start',left:10,width:"40%"}}>
          <View>
            <Image source={require('../../assets/icons/wallet.png')} style={{height:30,width:30}}/>
          </View>
          <View style={{left:20}}>
          <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
            <Text style={{color:'grey',fontSize:20}}>KEN</Text>
            <Image source={require('../../assets/icons/king.png')} style={{height:20,left:5,width:20}}/>
            <Text style={{left:7,color:'gold',fontSize:20}}>7</Text>
            </View>
          <View style={{flexDirection:'row',justifyContent:'flex-start'}}><Text style={{color:'grey'}}>$</Text><Text style={{color:'gold'}}>689589685</Text></View>
          </View>
        </View>
  <View style={{position:'absolute',right:10}}>
    <Text  style={{color:'grey'}}>
      <Image source={require('../../assets/icons/alarm.png')} style={{height:10,width:10}}/>
      :Dragon Boat Festival holiday!
      
      </Text>
  </View>
</View>

      <View style={styles.ContainerView}>
      <FlatList 
         showsVerticalScrollIndicator
        data={sideicon}
        renderItem={({item}) => 
        <TouchableOpacity style={{borderRadius:15,height:50,width:'30%',marginBottom:30,left:22}}>
        <Image source={item.icon} style={{height:70,width:70}}/>
      </TouchableOpacity>
      }
      />


 
   <View style={{width:'70%'}}>
   <FlatList 
   showsVerticalScrollIndicator
        data={data}
        renderItem={({item}) => 
   <View style={styles.column2}>
        <TouchableOpacity style={{justifyContent:'center',alignItems:'center',position:'absolute',right:10,bottom:10,backgroundColor:'black',opacity:.6,height:30,width:70,borderRadius:20,borderWidth:2,borderColor:'white'}}>
<Text style={{color:'white',fontWeight:'300',fontSize:15}}>Start</Text>
        </TouchableOpacity>
      </View>
      }
      />
   </View>

      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  topSection:{
    backgroundColor:'black',
    height:'100%'
  },
  imageView:{
    height:180,
  },
  Image:{
    height:40,
    width:20
  },
  ContainerView:{
    flexDirection:'row',
    justifyContent:'space-around'
  },
  column2:{
    backgroundColor:'gold',
    height:100,
    left:10,
    marginBottom:10,
    width:'90%',
    borderRadius:10
  }
})