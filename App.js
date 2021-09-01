import { StatusBar } from 'expo-status-bar';

import React, { useState } from 'react';
import { StyleSheet, Text, View,TextInput,Image,TouchableOpacity} from 'react-native';
import { Button,Switch } from 'react-native-elements';


export default function App() {
 
  const [valorSwitch, setValue] = useState(false)


  return (
    <View style={styles.container}>
     
      <Image style={styles.logotipo }source={require('./assets/logo.png')}/>
      <TextInput
        style={styles.textInput}
        placeholder="E-mail" />
     
      <StatusBar style="auto" />
      <TextInput
        style={styles.textInput}
        placeholder="Senha" 
        secureTextEntry={true}
        />

     <View style={styles.containerSwith}>
        <Text style={styles.labelSwith}>Cliente</Text>
        <Switch 
          value={valorSwitch}
          color="#FC9900"
          onValueChange={()=> setValue(!valorSwitch)}
        /> 
        <Text style={styles.labelSwith}>Estabelecimento</Text>
    </View>
     <Button
        buttonStyle={{height: 50, width: 300, backgroundColor: '#FC9900', marginTop:30}}
        title="Entrar" 
        onPress={()=> alert("Botão Entrar pressionado")}
     />
     <Text style={styles.frases}>Esqueceu a senha ?</Text>
     <Text style={styles.frases}>Ainda não faz parte do nosso clube ?</Text>
     <View style={styles.bottonView}>
       <TouchableOpacity style={styles.botaoCadastre} onPress={()=> alert("Botão cadastre-se pressionado")} >
         <Text style={styles.textoBotao}>CADASTRE-SE</Text>
       </TouchableOpacity>
       <View style={styles.linhaHorizontal}></View>
     </View>
     <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
 
  },
  textInput:{
    margin: 10,
   
    height: 50,
    width: '80%',
    padding: 10,
    backgroundColor: 'white'
  
  },
  logotipo:{
    width: '70%',
    height: 80,
    resizeMode: 'stretch',
    marginBottom:70
    
  },
  frases:{
    color: 'white',
    fontSize: 18,
    marginTop: 20,
   
    fontStyle:'italic'
  },
  seletor: {
    marginTop: 10
  },
  containerSwith: {
    flex:0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 30,
    marginTop: 20
  },
  labelSwith:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    fontStyle:'italic'
   
  },
  linhaHorizontal:{
    backgroundColor: "#FC9900",
    height: 10,
    width: "100%",
    bottom:0
  },
  bottonView:{
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom:0

  },
  botaoCadastre:{
    backgroundColor: "#FC9900",
    height: 50,
    width: 150,
    borderTopLeftRadius: 15,
    borderTopRightRadius:15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textoBotao:{
    color: 'white',
    fontSize: 18,
   
  }

});
