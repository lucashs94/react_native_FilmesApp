import React from 'react';
import { View,Text, StyleSheet, TouchableOpacity } from 'react-native';


export default function Detalhes({ filmes, voltar }) {
 return (

    <View style={styles.container}>

      <View style={styles.modalContainer}>

        <TouchableOpacity style={styles.btnVoltar} onPress={ voltar }>
          <Text style={{color: '#FFF', fontSize:16 }}>Voltar</Text>
        </TouchableOpacity>

        <Text style={styles.titulo}>{filmes.nome}</Text>
        
        <Text style={styles.sinopse}>Sinopse:</Text>
        <Text style={styles.descricao}>{filmes.sinopse}</Text>

      </View>
    
    </View>

  );
}


const styles = StyleSheet.create({
  container:{
    marginLeft: 10,
    marginRight: 10,
    flex:1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalContainer:{
    width: '90%',
    height: '80%',
    backgroundColor: '#121212',
    borderTopLeftRadius: 5,
    borderTopLRightRadius: 5,
  },
  btnVoltar:{
    backgroundColor:'#E52246',
    padding: 10,
    borderTopLeftRadius: 5,
    borderTopLRightRadius: 5,
  },
  titulo:{
    textAlign: 'center',
    color: '#FFF',
    padding: 10,
    fontSize: 28,
    fontWeight: 'bold',
  },
  sinopse:{
    color: '#FFF',
    fontSize: 18,
    marginBottom: 8,
    marginLeft: 10,
  },
  descricao:{
    color: '#FFF',
    marginLeft: 10,
    marginRight: 10,
  }
})