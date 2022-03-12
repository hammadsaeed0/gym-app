import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  BackHandler,
  Dimensions
} from 'react-native';
import Icon from 'react-native-dynamic-vector-icons';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import style from './style';
import { BackgroundImage } from 'react-native-elements/dist/config';
const {width , height} = Dimensions.get('window')
const home = () => {
  return (
    <ScrollView contentContainerStyle={style.container} style={{flex:1}}>
      <View style={style.header}>
        <View style={style.innerHeader}>
          <View style={{flexDirection: 'row'}}>
            <Text style={style.title}>Hi, </Text>
            <Text style={style.title}>Hammad</Text>
          </View>
          <View style={style.iconSide}>
            <Icon
              name="bell"
              type="Feather"
              size={18}
              color="#522ea9"
              onPress={() => {}} m 
            />
          </View>
        </View>
      </View>

      {/* Search Bar */}

      <View style={style.searchSection}>
        <Icon
          name="search1"
          type="AntDesign"
          size={20}
          color="#522ea9"
          style={{width: '10%', marginHorizontal: '4%'}}
        />
        <TextInput
          style={style.input}
          placeholder="Search Something"
          placeholderTextColor={'gray'}
          maxLength={40}
        />
      </View>

      {/* Category Section */}
      <View style={style.categorySec}>
        <View style={style.cateHeading}>
          <View style={style.leftCate}>
            <Text
              style={{
                color: 'black',
                fontSize: 20,
                fontFamily: 'Fredoka-Regular',
              }}>
              Category{' '}
            </Text>
          </View>
          <View style={style.rightCate}>
            <Text
              style={{
                color: 'gray',
                fontSize: 15,
                fontFamily: 'Fredoka-Regular',
              }}>
              View All
            </Text>
          </View>
        </View>
        <View style={style.categoryItem}>
          <View style={style.item}>
            <Image
              style={style.itemLogo}
              source={require('../../../Images/item.png')}
            />
            <Text style={{color: 'black'}}>Cardio</Text>
          </View>
          <View style={style.item}>
            <Image
              style={style.itemLogo}
              source={require('../../../Images/item.png')}
            />
            <Text style={{color: 'black'}}>Cardio</Text>
          </View>
          <View style={style.item}>
            <Image
              style={style.itemLogo}
              source={require('../../../Images/item.png')}
            />
            <Text style={{color: 'black'}}>Cardio</Text>
          </View>
          <View style={style.item}>
            <Image
              style={style.itemLogo}
              source={require('../../../Images/item.png')}
            />
            <Text style={{color: 'black'}}>Cardio</Text>
          </View>
        </View>
      </View>

      {/* Main Image  */}
      <View
        style={{
          width: '88%',
          height: height/100*28,
          backgroundColor: 'red',
          alignSelf: 'center',
          top: '8%',
          borderRadius: 10,
          overflow: 'hidden',
        }}>
        <ImageBackground
          source={require('../../../Images/head.jpeg')}
          style={style.imgCon}>
          <LinearGradient
            colors={['#774fbf', '#522ea9']}
            style={style.headerButton}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <TouchableOpacity>
              <Text style={style.headerText}>Sign In</Text>
            </TouchableOpacity>
          </LinearGradient>
        </ImageBackground>
      </View>

      {/* Popular Workout Section */}

      <View
        style={{
          top: '10%',
          width: '90%',
          alignSelf: 'center'
          
        }}>
        <View style={style.cateHeading}>
          <View style={style.leftCate}>
            <Text
              style={{
                color: 'black',
                fontSize: 20,
                fontFamily: 'Fredoka-Regular',
              }}>
              Category{' '}
            </Text>
          </View>
          <View style={style.rightCate}>
            <Text
              style={{
                color: 'gray',
                fontSize: 15,
                fontFamily: 'Fredoka-Regular',
              }}>
              View All
            </Text>
          </View>
        </View>
        <Text style= {{color: 'gray'}}>Workouts: 80</Text>

        {/* 2nd Scrool View */}
        
      </View>
      <View style={{width: '90%', height: height/100*40, alignSelf:'center', top: '10%', marginBottom: '50%'}}>

              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={{top:'2%'}}>
              <ImageBackground source={require('../../../Images/img1.jpeg')} style={style.tinyLogo} imageStyle={{ borderRadius: 10}} >
              <Text style={{color:'black', fontSize: 23, top: '100%', left: '2%', fontFamily: 'Fredoka-Medium'}}>Rapid Lower Body</Text> 
              <Text style={{color:'black', fontSize: 15, top: '100%', left: '2%', fontFamily: 'Fredoka-Medium', color:'#522ea9'}}>Beginner</Text> 
              </ImageBackground>
              
              </View>
              <View style={{top:'2%'}}>
              <ImageBackground source={require('../../../Images/img2.jpeg')} style={style.tinyLogo} imageStyle={{ borderRadius: 10}} >
              <Text style={{color:'black', fontSize: 23, top: '100%', left: '2%', fontFamily: 'Fredoka-Medium'}}>BodyWeight Straight</Text> 
              <Text style={{color:'black', fontSize: 15, top: '100%', left: '2%', fontFamily: 'Fredoka-Medium', color:'#522ea9'}}>Beginner</Text>
              </ImageBackground>
              </View><View style={{top:'2%'}}>
              
              </View>              


              </ScrollView>
      </View>
      

    </ScrollView>
  );
};

export default home;
