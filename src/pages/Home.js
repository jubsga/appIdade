import React, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
export default function Home(){

    let [anoAtual, setAnoAtual] = useState();
    let [anoNasc, setAnoNasc] = useState();
    let [total, setTotal] = useState();

    function calcularTotal(){

        let idade = parseFloat(anoAtual) - parseFloat(anoNasc);
        setTotal(idade);

        alert ("De acordo com o ano que voê nasceu, sua idade é em torno de: " +total+ " anos!");
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Descubra sua idade:</Text>
            <TextInput onChangeText={setAnoAtual} style={styles.input} placeholder="Ano Atual"></TextInput>
            <TextInput onChangeText={setAnoNasc} style={styles.input} placeholder="Ano de Nascimento"></TextInput>
            <TouchableOpacity onPress={calcularTotal} style={styles.button}>
                <Text style={styles.buttonText}>Descobrir Idade</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fadce0',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize: 30,
        color: '#000',
        fontWeight: 'bold'
    },
    input:{
        backgroundColor: '#a1ffa1',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 7,
        borderRadius: 10,
        marginTop: 30,
        width: 150
    },
    button:{
        backgroundColor: '#E6E6E6',
        alignItems: 'center',
        padding: 15,
        marginTop: 30,
        width: 200,
        borderRadius: 10
    },
    buttonText:{
        color: '#000',
        fontSize: 15,
        fontWeight: '800',
        textTransform: 'uppercase'
    }
});