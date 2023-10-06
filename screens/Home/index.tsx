import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Agendamento } from '../Agendamento';
import { Dados } from '../Dados';



export function Home() {

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/cruz.webp')}
            style={styles.imagem}/>

            
            <Text style={styles.title}>Bem-Vindo</Text>
            <TouchableOpacity   onPress={() => navigation.navigate(Agendamento)} style={styles.button}>
                <Text style={styles.buttonText}>
                    Agendamento
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(Dados)}  style={styles.button}>
                <Text style={styles.buttonText}>
                    Visualizar Ficha
                </Text>
            </TouchableOpacity>
        </View>
    );
}