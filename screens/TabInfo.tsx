import { Button,View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function TabInfo({route,navigation}) {
  return (
    <View style={styles.container}>
      <Text>{route.params.item.info}</Text>
      <Text>Artista: {route.params.item.artista}</Text>
      <Text>Fecha: {route.params.item.fecha}</Text>
      <Text>Hora: {route.params.item.hora}</Text>
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
    socialLinks: {
      fontSize: 16,
      color: '#fff',
      backgroundColor: '#ff8c00',
      paddingHorizontal: 20,
      paddingVertical: 6,
      borderRadius: 6,
      marginTop:10
      
  }
})