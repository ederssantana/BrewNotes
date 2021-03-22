import React, { useState} from 'react'
import { View, Button, TextInput, ScrollView, StyleSheet } from 'react-native'
import firebase from '../database/Firebase'

const CriarReceita = (props) => {

    const [state, setState] = useState({
        nomeReceita: '',
        estilo: '',
        volume: '',
        descricao: ''
    })

    const handleChangeText = (name, value) => {
        setState({ ...state, [name]: value })
    }

    const gravarReceita = async () => {
        if (state.nomeReceita === '') {
            alert('Informe o nome da Receita')
        } else {
            try {
                await firebase.db.collection('receitas').add({
                    nomeReceita: state.nomeReceita,
                    estilo: state.estilo,
                    volume: state.volume,
                    descricao: state.descricao
                })
                //alert('Registrado com sucesso!')
                props.navigation.navigate('ListarReceitas') 
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Nome da Receita" onChangeText={(value) => handleChangeText('nomeReceita', value)} />
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Estilo" onChangeText={(value) => handleChangeText('estilo', value)} />
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Volume" onChangeText={(value) => handleChangeText('volume', value)} />
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Descrição" onChangeText={(value) => handleChangeText('descricao', value)} />
            </View>
            <View>
                <Button title="Salvar" onPress={() => gravarReceita()} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35
    },
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC'
    }
})

export default CriarReceita