import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import { Agendamento } from '../Agendamento';


const nomes = ['Ana Maria', '547358734756', '12/10/2005', 'rua bonfim', '17',
]


export function Dados() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dados da consulta</Text>
      <FlatList
        data={nomes}
        renderItem={({ item }) => (
          <View style={styles.nomeView}>
            <Text style={styles.nomeItem}>{item}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />


    </View>
  );
}