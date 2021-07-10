import React, { useState } from 'react';
import {Picker} from '@react-native-picker/picker'
import {
  Text,
  View,
  Image,
  Alert,
  Button
} from 'react-native';

const App = () => {


  const [hojaTamal, setHojaTamal] = useState('')
  const [tamal, setTamal] = useState('')
  const [salsa, setSalsa] = useState('')
  const [complementos, setComplementos] = useState('')

  const Tamal = () => {
    
    if (hojaTamal === "platano" && salsa != "sinSalsa" && complementos != "sinComplementos"){
      Alert.alert("", "Puedes comerte el Tamal", [
        {text: 'Perfecto', onPress: () => console.log("")}
      ])
    }
    
    else if (hojaTamal === "maiz" && salsa != "sinSalsa" && complementos != "sinComplementos" && tamal != "dulce" | tamal != "verdura" | tamal != "queso"){
      Alert.alert("", "Puedes comerte el Tamal", [
        {text: 'Perfecto', onPress: () => console.log("")}
      ])
    }
    else {
      Alert.alert(":(", "No te puedes comerte el Tamal", [
        {text: 'Okey', onPress: () => console.log("")}
      ])
    }

  }

  return (
    <View>
        <View>
            <Image source = {require('./src/tamal.jpg')} style = {{ height: 250, width: 420 }}/>
        </View>

          <Text style = {{ fontSize: 20, fontWeight: "bold" }}>¿Qué hoja de tamal tiene?</Text>

            <Picker selectedValue = {hojaTamal} onValueChange = {respuesta => setHojaTamal(respuesta)}>
              <Picker.Item label = "Maiz" value = "maiz" />
              <Picker.Item label = "Platano" value = "platano" />

            </Picker>


        <View>
            <Text style = {{ fontSize: 20, fontWeight: "bold" }}>¿De qué es el tamal?</Text>

            <Picker selectedValue = {tamal} onValueChange = {respuesta => setTamal(respuesta)}>
              <Picker.Item label = "PUERCO" value = "puerco" />
              <Picker.Item label = "PICADILLO" value = "picadillo" />
              <Picker.Item label = "POLLO" value = "pollo" />
              <Picker.Item label = "DULCE" value = "dulce" />
              <Picker.Item label = "QUESO" value = "queso" />
              <Picker.Item label = "VERDURA" value = "verdura" />
              
            </Picker>

            <Text style = {{ fontSize: 20, fontWeight: "bold" }}>¿Qué salsa tiene?</Text>

              <Picker selectedValue = {salsa} onValueChange = {respuesta => setSalsa(respuesta)}>
              <Picker.Item label = "Sin Salsa" value = "sinSalsa" />
                <Picker.Item label = "Salsa Roja" value = "roja" />
                <Picker.Item label = "Salsa Verde" value = "verde" />
              </Picker>

            <Text style = {{ fontSize: 20, fontWeight: "bold" }}>¿Qué complementos tiene?</Text>

              <Picker selectedValue = {complementos} onValueChange = {respuesta => setComplementos(respuesta)}>
              <Picker.Item label = "Sin Complementos" value = "sinComplementos" />
                <Picker.Item label = "Frijoles" value = "frijoles" />
                <Picker.Item label = "Lechuga" value = "lechuga" />
              </Picker>

              <Button 
                onPress = {() => Tamal()}
                title = "EVALUAR" 
                color = "#000"
              />
            
        </View>
    </View>
  );

};

export default App;
