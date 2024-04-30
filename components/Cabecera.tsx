import React from "react";
import { StyleSheet, View, Text, Image, SafeAreaView } from "react-native";

export default function Cabecera(): React.JSX.Element{
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Les Penyes en Festes</Text>
       <SafeAreaView>   
                <Image
                style={styles.imagen}    
                source={require('../assets/lespenyesenfestes.png')}
            />
            </SafeAreaView>
           
                
        
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        alignItems:"center",
        marginTop:50

    },
    imagen:{
        width: 200,
        height: 200         
    },
    titulo:{
        color:'red',
        fontSize:30,
        fontFamily: 'Noto Sans',
        fontWeight: 'bold',
        marginLeft:20,
        marginRight:20
    }

})


