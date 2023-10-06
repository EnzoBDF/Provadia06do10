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
  input:{
    width:230,
    height:40,
    marginBottom:20,
    borderRadius:5,
    borderWidth:2,
    borderColor:'#8d54f0'

  },
  title:{
    fontSize:18,
    fontWeight:'600',
    marginBottom:25,
  },
  button:{
    width:150,
    height:70,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#8d54f0',
    borderRadius:15,
    marginTop:15
  },
  buttonText:{
    fontWeight:'700',
    color:'white',
 
  },
  imagem:{
    width:200,
    height:200,
    marginBottom:20,
    borderRadius:100,
    borderWidth:4,
    borderColor:'#8d54f0',
    resizeMode:'cover'

  }

});

export default styles;