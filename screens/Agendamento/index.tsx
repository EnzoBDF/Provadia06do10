import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import styles from './styles';


export function Agendamento() {

    const[nome, setNome] = React.useState('')
    const[cpf, setCpf] = React.useState('')
    const[dataNasc, setDataNasc] = React.useState('')
    const[endereco, setEndereco] = React.useState('')
    const[idade, setIdade] = React.useState('')
    const[valor, setValor] = React.useState(0)


    const dados = [
      { label: 'Nome', value: nome },
      { label: 'CPF', value: cpf },
      { label: 'Data de Nascimento', value: dataNasc },
      { label: 'Endereço', value: endereco },
      { label: 'Idade', value: idade },
      { label: 'Valor', value: valor.toString() },
    ];

  function handleImpress(){
    console.log(nome);
    console.log(cpf);
    console.log(dataNasc);
    console.log(endereco);
    console.log(idade);
    console.log(valor);
    

  }

  return (
    
    <View style={styles.container}>
       <Image source={require('../../assets/plink-wide-cat.gif')}
            style={styles.imagem}/>
      <Text style={styles.title}>Digite seus dados para consulta</Text>
      <TextInput style={styles.input} value={nome} onChangeText={setNome} placeholder=' nome completo'></TextInput>
      <TextInput style={styles.input} value={cpf} onChangeText={setCpf} placeholder=' seu cpf'></TextInput>
      <TextInput style={styles.input} value={dataNasc} onChangeText={setDataNasc} placeholder=' data de nascimento'></TextInput>
      <TextInput style={styles.input} value={endereco} onChangeText={setEndereco} placeholder=' endereço'></TextInput>
      <TextInput style={styles.input} value={idade} onChangeText={setIdade} placeholder=' idade'></TextInput>
      <TextInput style={styles.input} value={valor} onChangeText={setValor} keyboardType='numeric' placeholder='valor'></TextInput>
      <TouchableOpacity style={styles.button} onPress={handleImpress}><Text style={styles.buttonText}>Cadastrar</Text></TouchableOpacity>
    </View>
  );
}