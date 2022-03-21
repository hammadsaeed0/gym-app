import { ImageBackground, Text, View } from "react-native";
import React from 'react'
import style from './style'


const Splash = () => {
  return (
    <View>
        <View style={style.main}>
        <ImageBackground source={require('../../../Images/Splach.png')} style={style.mainImg} />
        </View>
    </View>
  )
}

export default Splash