/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
  TextInput,
  View,
  Alert
} from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Esquemas de validación
import * as Yup from 'yup'
//Formik
import {Formik} from 'formik'

const schema = Yup.object().shape({
  nombre:Yup.string()
  .min(2,'Tienes que escribir tu nombre')
  .max(30,'El nombre no puede ser tan largo')
  .required('El nombre es obligatorio'),

  email:Yup.string()
  .min(2,'Tienes que escribir tu email')
  .max(30,'El email no puede ser tan largo')
  .required('El email es obligatorio')
  ,
  telef:Yup.number()
  .min(9,'El teléfono tiene que tener minimo 9 cifras')
  .required('El teléfono es obligatorio')

})

function Registro({navigation}): JSX.Element {

  {/*INICIALIZACION VARIABLES */}

  const[conciertoKiko,setConciertoKiko]=useState(false);
  const[conciertoHungara,setConciertoHungara]=useState(false);
  const[conciertoQueen,setConciertoQueen]=useState(false);
  const [nombre, setnombre] = useState("");
  const [email, setEmail] = useState("");
  const [telef, settelef] = useState("");
  const [mensaje, setmensaje] = useState("");
  const [agree, setAgree] = useState(false);

  const submit = () => {

      Alert.alert('',`Muchas gracias. Recibirás tus entradas en la dirección de correo proporcionada`, [  
             {text: 'OK', onPress: () => navigation.navigate('Principal')},  
    ]  );

      
    
  };



  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.mainContainer}>
          <Text style={styles.mainHeader}>Entradas para conciertos</Text>


        
        {/*COMIENZA EL FORMULARIO FORMIK */}
          <Formik
              initialValues={{nombre:'',email:'',telef:'',mensaje:'',conciertoHungara:'', conciertoKiko:'', conciertoQueen:'' }}
              validationSchema={schema}
              onSubmit={values =>{submit();}}
          >
            
            {({values,handleChange,handleSubmit,errors,touched})=>
            (
              <>
               {/*Inicio Conciertos*/} 
                <Text style={styles.labels}>
                  Selecciona los conciertos a los cuales quieres asistir:
                </Text>
             
                <View style={styles.wrapper}>
                  <BouncyCheckbox
                    fillColor="red"
                    unFillColor="#FFFFFF"
                    iconStyle={{ borderColor: "blue" }}
                    innerIconStyle={{ borderWidth: 2 }}
                    textStyle={{ fontFamily: "JosefinSans-Regular" }}
                    isChecked={conciertoKiko}
                    onPress={()=>setConciertoKiko(!conciertoKiko)}
                  />
                  <Text style={styles.wrapperText}>
                    Kiko Rivera - 04/08/24
                  </Text>
                </View>
                <View style={styles.wrapper}>
                  
                <BouncyCheckbox
                  fillColor="blue"
                  unFillColor="#FFFFFF"
                  iconStyle={{ borderColor: "blue" }}
                  innerIconStyle={{ borderWidth: 2 }}
                  textStyle={{ fontFamily: "JosefinSans-Regular" }}
                  isChecked={conciertoHungara}
                  onPress={()=>setConciertoHungara(!conciertoHungara)}
                />
                <Text style={styles.wrapperText}>
                La Húngara - 05/08/24
                </Text>
                </View>
                <View style={styles.wrapper}>
                  <BouncyCheckbox
                    fillColor="green"
                    unFillColor="#FFFFFF"
                    iconStyle={{ borderColor: "blue" }}
                    innerIconStyle={{ borderWidth: 2 }}
                    textStyle={{ fontFamily: "JosefinSans-Regular" }}
                    isChecked={conciertoQueen}
                    onPress={()=>setConciertoQueen(!conciertoQueen)}
                  />
                  <Text style={styles.wrapperText}>
                    Tributo Queen - 10/08/24
                  </Text>
                </View>
               {/*Fin Conciertos*/} 
          
              {/*Input Nombre*/} 
              <View style={styles.inputContainer}>
                          <Text style={styles.labels}> Introduce tu nombre </Text>
                          {touched.nombre && errors.nombre && (
                              <Text style={styles.errorText}>
                                {errors.nombre}
                              </Text>
                          )}
                          <TextInput
                            style={styles.inputStyle}
                            placeholder={"Nombre"}
                            value={values.nombre}
                            onChangeText={handleChange('nombre')
                            
                            }
                          />
                        </View>
              {/*Fin Nombre*/} 

              {/*Mail*/} 
                        <View style={styles.inputContainer}>
                          <Text style={styles.labels}> Introduce tu email </Text>
                          {touched.email && errors.email && (
                              <Text style={styles.errorText}>
                                {errors.email}
                              </Text>
                          )}
                          <TextInput
                            style={styles.inputStyle}
                            placeholder={"email@ejemplo.com"}
                            value={values.email}
                                          onChangeText={handleChange('email')}
                          />
                        </View>
              {/*Fin mail*/} 

              {/*Movil*/} 
                        <View style={styles.inputContainer}>
                          <Text style={styles.labels}> Introduce tu número de móvil </Text>
                          {touched.telef && errors.telef && (
                              <Text style={styles.errorText}>
                                {errors.telef}
                              </Text>
                          )}
                          <TextInput
                            style={styles.inputStyle}
                            placeholder={"68766876"}
                            value={values.telef}
                            onChangeText={handleChange('telef')}
                          />
                        </View>
              {/*Fin Móvil*/} 

              {/*Comentarios*/} 
                        <View style={styles.inputContainer}>
                          <Text style={styles.labels}> ¿Necesitas espacio para personas con movilidad reducida? Describe tus necesidades </Text>
                          <TextInput
                            style={[styles.inputStyle, styles.multilineStyle]}
                            value={values.mensaje}
                            onChangeText={handleChange('mensaje')}
                            numberOfLines={5}
                            multiline={true}
                          />
                        </View>
              {/*Fin Comentarios*/} 

              {/*Aceptar Condiciones*/} 
                        {/* checkbox  */}

                        <View style={styles.wrapper}>
                        
                          <BouncyCheckbox
                            fillColor="gray"
                            unfillColor="#FFFFFF"
                            iconStyle={{ borderColor: "blue" }}
                            innerIconStyle={{ borderWidth: 2 }}
                            textStyle={{ fontFamily: "JosefinSans-Regular" }}
                            onPress={(isChecked: boolean) => {setAgree(!agree)}}
                          />
                          <Text style={styles.wrapperText}>
                            He leído y estoy de acuerdo
                          </Text>
                        </View>

              {/*Fin Aceptar Condiciones*/}

          {/* submit button  */}

          <TouchableOpacity
                  style={[
                    styles.buttonStyle,
                    {
                      backgroundColor: agree ? "#4630EB" : "grey",
                    },
                  ]}
                  disabled={!agree}
                  onPress={handleSubmit}>
                  <Text style={styles.buttonText}>Solicitar entradas </Text>
                </TouchableOpacity>

              </>

            )         
          }
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

//Estilos
const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    paddingHorizontal: 30,
    backgroundColor: "#fff",
  },
  mainHeader: {
    fontSize: 20,
    color: "#344055",
    fontWeight: "500",
    paddingTop: 20,
    paddingBottom: 15,
    fontFamily: "JosefinSans_500Medium",
    textTransform: "capitalize",
  },
  description: {
    fontSize: 20,
    color: "#7d7d7d",
    paddingBottom: 20,
    fontFamily: "JosefinSans_400Light",
    lineHeight: 25,
  },

  inputContainer: {
    marginTop: 20,
  },
  labels: {
    fontWeight: "bold",
    // fontSize: 15,
    color: "#7d7d7d",
    paddingBottom: 5,
    fontFamily: "JosefinSans_300Light",
    lineHeight: 25,
  },
  errorText:{
    color:'red',
    fontFamily: "JosefinSans_300Light",
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.3)",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 2,
  },
  multilineStyle: {
    paddingVertical: 4,
  },
  buttonStyle: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  buttonText: {
    color: "#eee",
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    fontFamily: "JosefinSans_300Light",
  },
  wrapperText: {
    marginLeft: 10,
    color: "#7d7d7d",
    fontFamily: "JosefinSans_300Light",
  },
});

export default Registro;
