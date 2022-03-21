import { StyleSheet , Dimensions } from 'react-native';

const {width , height} = Dimensions.get("screen");

const style = StyleSheet.create({
    mainImg: {
        width: '100%',
        height: height/100*100,
        backgroundColor: 'black'
    
    }
})

export default style;