import { Button,View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function TabInfo({route,navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.info}>{route.params.item.info}</Text>
      <Text style={styles.artist}>Artista: {route.params.item.artista}</Text>
      <Text style={styles.fecha}>Fecha: {route.params.item.fecha}</Text>
      <Text style={styles.fecha}>Hora: {route.params.item.hora}</Text>
      <Text>Lugar: {route.params.item.lugar}</Text> 
      <Text>Precio: {route.params.item.precio}</Text>
      <Text>Puntos de venta presenciales: {route.params.item.puntos_venta_presenciales}</Text>
      <Text>Puntos de venta online: {route.params.item.venta_online}</Text>
      
      <Button 
    title="Consige aqui tus entradas"
    onPress={() => navigation.navigate('Registro')}
    />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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
      borderRadius: 6,
      marginTop:10
      
  },
  artist: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 6,
    marginTop:10
    
},
fecha: {
  fontSize: 14,
  color: 'red',
  fontWeight: 'bold',
  paddingHorizontal: 2,
  paddingVertical: 2,
  borderRadius: 26,
  marginTop:5
  
}
})