import { ScrollView, StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import Concierto from './Concierto'

/* */
const datosConcierto =[
    {
        id: 1,
        artista: 'Kiko Rivera',
        fecha: '03 Agosto',
        imagenCartel: require('../assets/kikoRivera.jpeg')
    },
    {
        id: 2,
        artista: 'La Húngara',
        fecha: '04 Agosto',
        imagenCartel:  require('../assets/laHungara.jpeg'),
    },
    {
        id: 3,
        artista: 'Tributo Queen',
        fecha: '10 Agosto',
        imagenCartel:  require('../assets/tributoQueen.jpeg'),
    },
  
]

export default function ConciertosList(): JSX.Element  {
  return (
    <View>
        <Text style={styles.tituloTexto}>Conciertos</Text>
        <ScrollView horizontal={false}
            style={styles.container}
            persistentScrollbar={true}
           
        >   
            {datosConcierto.map( ({id,imagenCartel,fecha}) =>
                (
                    <Concierto key={id} imagenCartel={imagenCartel} fecha={fecha}/>
                )
            )}
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    tituloTexto:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        marginTop:30,
        marginLeft:30
       
    },
    container:{
        paddingHorizontal:16,
        marginBottom:4,
        margin:30,
        height:200,
        backgroundColor:"red",
        padding: 20,
        borderRadius: 10,
       
        
    },

 
})