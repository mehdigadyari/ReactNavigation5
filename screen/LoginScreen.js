import React, { useContext } from 'react'
import { View, Text, AsyncStorage, TouchableOpacity } from 'react-native'
import {LoginContext} from '../contexts/LoginContext'

const LoginScreen = ({ navigation, route, }) => {
    const { name, age } = route.params ? route.params : { name: "", age: "" }
    const { login } = useContext(LoginContext)

    return (
        <View style={{ justifyContent: "center", alignItems: 'center', flex: 1 }} >

            <Text>LoginScreen</Text>

            <TouchableOpacity onPress={() => {
                navigation.navigate('RegisterScreen', { name: "reactdeveloper", age: 24 })
            }} >
                <Text>Login to reg</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { login('ali') }} >
                <Text style={{ color: 'red' }} >Login me</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginScreen
