import { View, Text, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import DatePicker from 'react-native-date-picker'
import React from 'react'
import style from './style'
import { useState } from 'react'



const Birth = () => {
    const [date, setDate] = useState(new Date())
  return (
    <View style={style.container}>
      
    <View style={style.headCon}>
        <Text style={style.heading}>Select birth date</Text>
    </View>
    <View style={style.date_Setting}>
        <DatePicker date={date} onDateChange={setDate} mode="date" />
    </View>
    <View style={{alignItems:'center', marginVertical:"90%"}}>
                <LinearGradient colors={['#774fbf', '#522ea9']}  style={style.buttonView}
                start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                >
                <TouchableOpacity>
                <Text style={style.buttonText}>Continue</Text>
                </TouchableOpacity>
                </LinearGradient>
    </View>
    </View>
  )
}

export default Birth