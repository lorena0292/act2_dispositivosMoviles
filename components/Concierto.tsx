import { ScrollView, StyleSheet, Text, View, Image,TouchableOpacity, Pressable} from 'react-native'
import React from 'react'

function Concierto({concierto}): JSX.Element  {
     return(  
        <View style={styles.card}>
            <Image
                source={concierto.imagenCartel }
                style={styles.imagenCartel}
            />         
            <Text style={styles.fecha}>{concierto.fecha}</Text>          
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
        padding: 10,
        borderRadius: 10
    },
    imagenCartel: {
        width: 120,
        height: 120,
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
});

export default Concierto;