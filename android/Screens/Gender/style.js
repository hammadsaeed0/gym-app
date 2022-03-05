import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
    container:{
        backgroundColor: '#ffffff',
        width:'100%',
        height:'100%'
    },
    headCon:{
        width:'100%',
        alignItems:'center',
        marginVertical:'35%',
        marginBottom: '10%'
    },
    heading:{
        color:'black',
        fontFamily:'Fredoka-Medium',
        fontSize: 30,
        
    },
    imgCon:{
        width:'90%',
        height: '12%',
        alignSelf:'center',
        alignItems:'center',
        borderRadius: 10,
        borderColor: '#e5e9ef',
        borderWidth: 1,
        flexDirection: 'row',
        marginBottom: 10
        
    },
    img:{
        width: 50,
        height: 50,
        marginHorizontal: '5%'
        
    },
    imgText:{
        color:'black',
        fontFamily: 'Fredoka-Medium',
        fontSize: 18

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

export default style