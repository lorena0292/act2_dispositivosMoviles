import { Button,View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

export default function TabInfo({route,navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={false}
            persistentScrollbar={true}  
      > 
        <Text style={styles.info}>{route.params.item.info}</Text>
        <Text style={styles.artist}>Artista: {route.params.item.artista}</Text>
        <Text style={styles.fecha}>Fecha: {route.params.item.fecha}</Text>
        <Text style={styles.fecha}>Hora: {route.params.item.hora}</Text>
        <Text style={styles.extra}>Lugar: {route.params.item.lugar}</Text> 
        <Text style={styles.extra}>Precio: {route.params.item.precio}</Text>
        <Text style={styles.extra}>Puntos de venta presenciales: {route.params.item.puntos_venta_presenciales}</Text>
        <Text style={styles.extra}>Puntos de venta online: {route.params.item.venta_online}</Text>
      </ScrollView>
      
      <View style={styles.button}>
          <Button 
        title="Consige aqui tus entradas"
        onPress={() => navigation.navigate('Registro')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding:50,
        
    },
    button: {
      margin:50,
      paddingHorizontal: 20,
    },
    fuente:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
    },
    info: {
      fontSize: 17,
      color: 'black',
      paddingHorizontal: 20,
      paddingVertical: 6,
      marginTop:10
      
    },
    extra: {
      fontSize: 14,
      color: 'black',
      paddingHorizontal: 20,
      paddingVertical: 2,
      marginTop:5
      
  },
    artist: {
      fontSize: 24,
      color: 'black',
      fontWeight: 'bold',
      paddingHorizontal: 20,
      paddingVertical: 6,
      marginTop:10
      
  },
  fecha: {
    fontSize: 14,
    color: 'red',
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingVertical: 2,
    marginTop:5
    
  }
})