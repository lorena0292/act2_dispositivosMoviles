import { Button,View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function TabInfo({navigation}) {
  return (
    <View style={styles.container}>
      
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