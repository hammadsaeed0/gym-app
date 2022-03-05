import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
    container:{
        backgroundColor:'#ffffff',
        width:'100%',
        height: '100%'
    },
    headCon:{
        flexDirection: 'row',
        alignSelf: 'center',
        width: "90%",
        // marginVertical: '10%',
        justifyContent: 'space-between',
        height: '10%',
        alignItems: 'center',
        top: '10%'
        
    
    },
    header:{
        color:'black', fontSize:30, fontFamily:'Fredoka-Medium'
    },
    iconCon: {
        borderWidth: 2, width: '15%', alignItems: 'center', justifyContent: 'center', borderColor:'#e5e9ef', borderRadius: 10,
        height: '70%'
    },
    
})

export default style