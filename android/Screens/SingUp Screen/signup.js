import { View, Text, Image, TextInput, TouchableOpacity  } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import style from './style'
import React from 'react'

const SingUp = () => {
  return (
    <View style={style.container}>
        <View style={style.logoContainer}>
        <Image
        style={style.img}
        source={require('../../../Images/logo.png')}
        />
        <Text style={style.title}>Sign Up</Text>
        </View>
        <View style={style.inputContainer}>
        <TextInput
        placeholder='Phone / Email'
        style={style.input}
  
        />
        <TextInput
        placeholder='Password'
        style={style.input}
  
        />
         <TextInput
        placeholder='Phone / Email'
        style={style.input}
  
        />
        <TextInput
        placeholder='Password'
        style={style.input}
  
        />
        
       
                <LinearGradient colors={['#774fbf', '#522ea9']}  style={style.buttonView}
                start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                >
                <TouchableOpacity>
                <Text style={style.buttonText}>Sign In</Text>
                </TouchableOpacity>
                </LinearGradient>
                <Text style={style.forget}>Forget Password</Text>
       
        
        <View style={style.IconSection}>
            <View style={style.Icons}>
                    <Image
                    style={style.imgicon}
                    source={require('../../../Images/Apple_logo.svg')}
                    />
                    <Image
                    style={style.imgicon2}
                    source={require('../../../Images/facebook-icon.svg')}
                    />
                    <Image
                    style={style.imgicon3}
                    source={require('../../../Images/Google-Icon.png')}
                    />
            </View>
        </View>
        <View style={style.buttomSection}>
            <Text style={{color: 'gray', fontSize: 15}}>Don't have an Account? </Text>
            <Text style={{color: 'gray', fontSize: 15, color: '#522ea9',fontFamily:'Roboto-Bold'}}> Sign Up</Text>
        </View>
        </View>
        
    </View>
  )
}

export default SingUp