import { ScrollView, StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'

 
export default function Concierto({imagenCartel,fecha}): JSX.Element  {
    return(
        <View style={styles.card}>
            <Image
                source={imagenCartel }
                style={styles.imagenCartel}
            />
            <View>
                <Text style={styles.fecha}>{fecha}</Text>
               
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    tituloTexto:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container:{
        paddingHorizontal:5,
        marginBottom:4
    },
    card: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        backgroundColor: 'black',
        padding: 20,
        borderRadius: 10
    },
    imagenCartel: {
        width: 90,
        height: 90,
        borderRadius: 60 / 2,
        marginRight: 14
    },
    fecha: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFF'
    },
    userStatus: {
        fontSize: 12
    }
})

