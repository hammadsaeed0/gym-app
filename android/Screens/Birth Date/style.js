import { StyleSheet } from 'react-native'

const Style = StyleSheet.create({
    container:{
        width:"100%",
        height:"100%",
        backgroundColor:'#ffffff'
    },
    headCon:{
        width:"100%",
        alignItems: 'center',
        marginVertical: "20%"
    },
    heading:{
        fontSize: 30,
        color: 'black',
        fontFamily:'Fredoka-Medium',

    },
    date_Setting:{
        alignItems: 'center',
        marginVertical: '-10%',
    },
    buttonView:{
       width: '95%',
       height: 40,
       borderRadius: 40,
       alignItems: 'center',
       justifyContent: 'center',
       marginBottom:'5%',
       

},
buttonText:{
    color: 'white',
    fontSize: 20,
    fontFamily: 'Fredoka-Regular'
}
})

export default Style