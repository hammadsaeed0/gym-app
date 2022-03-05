import { View, Text, Image, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Style from './style'
import React from 'react'

const Gender = () => {
  return (
    <View style={Style.container}>
        <View style={Style.headCon}>
            <Text style={Style.heading}>Choose gender</Text>
        </View>

        
        <View style={Style.imgCon}>
        <Image
            style={Style.img}
            source={require('../../../Images/men2.png')}
            />
        <Text style={Style.imgText}>Woman</Text>
        </View>


        <View style={Style.imgCon}>
        <Image
            style={Style.img}
            source={require('../../../Images/men2.png')}
            />
        <Text style={Style.imgText}>Woman</Text>
        </View>
        <View style={Style.imgCon}>
        <Image
            style={Style.img}
            source={require('../../../Images/men2.png')}
            />
        <Text style={Style.imgText}>Woman</Text>
        </View>
        
        <View style={{alignItems:'center', marginVertical:'30%'}}>
                <LinearGradient colors={['#774fbf', '#522ea9']}  style={Style.buttonView}
                start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                >
                <TouchableOpacity>
                <Text style={Style.buttonText}>Continue</Text>
                </TouchableOpacity>
                </LinearGradient>
        </View>
        
    </View>
  )
}

export default Gender