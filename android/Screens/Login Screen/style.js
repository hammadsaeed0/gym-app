import { StyleSheet } from 'react-native'

const Style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ffffff',
        width: '100%',
        height:'100%'
    },
    logoContainer:{
        width: '100%',
        alignItems: 'center',
        marginVertical: '10%'
    },
    img:{
        width: 180,
        height: 180
    },
    title:{
        fontSize: 40,
        color: 'black',
        fontFamily: 'Roboto-Bold'

    },
input: {
    height: 50,
    borderRadius: 40,
    width: '95%',
    paddingHorizontal: '10%',
    fontFamily: 'Roboto-Regular',
    fontSize: 17,
    backgroundColor: '#f1f4f8',
    marginBottom: '3%'
    
    
    
},
inputContainer:{
    width: '100%',
    alignItems: 'center',
    marginTop: '-8%'
    
},
buttonView:{
    width: '95%',
    height: 50,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:'5%'

},
buttonText:{
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Roboto-Medium'
},
IconSection:{
    width: '100%',
    height:50,
    paddingHorizontal: '25%'
},
imgicon:{
    width:30,
    height: 40
},
imgicon2:{
    width:40,
    height: 40
},
imgicon3:{
    width:40,
    height: 45
},
Icons:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
},
buttomSection:{
    flexDirection: 'row',
    width: '100%',
    height: 40,
    top: '10%',
    alignItems: 'center',
    justifyContent: 'center'
},
forget:{
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'Roboto-Bold',
    marginBottom: '20%'
}
})

export default Style; 