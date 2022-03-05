import { View, Text, ScrollView, TextInput  } from 'react-native'
import Icon from "react-native-dynamic-vector-icons";
import Style from './style'
import React from 'react'

const home = () => {
  return (
    <ScrollView contentContainerStyle={{backgroundColor: 'white', height: '100%', width: '100%'}}>
    <View  >
          <View style={Style.headCon}>
          {/* Header Section */}
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={Style.header}>Hi,</Text>
              <Text style={Style.header}> Hammad</Text>
            </View>
              <View style={Style.iconCon}>
              <Icon
                name="bell"
                type="Fontisto"
                size={20}
                color="#643eb3"
                onPress={() => {}}
              />
              

              </View>
          

          </View>
        
    </View>
    </ScrollView>
  )
}

export default home