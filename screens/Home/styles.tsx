
import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    position: 'relative',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  },
  title:{
    fontSize:24,
    fontWeight:'bold',
  },
  button:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:"center",
    width:200,
    height:80,
    backgroundColor:'#8d54f0',
    borderRadius:20,
     marginTop:25
  },
  buttonText:{
    fontWeight:'700',
    color:'white'
  },
  imagem:{
    width:100,
    height:100,
    resizeMode:"contain",
    marginBottom:100
  }


});

export default styles;