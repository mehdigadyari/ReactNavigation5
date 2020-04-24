import React from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const LoginScreen = ({ navigation, route, title, setIsLogin }) => {
    const { name, age } = route.params ? route.params : { name: "", age: "" }
    return (
        <View style={{ justifyContent: "center", alignItems: 'center', flex: 1 }} >
            <Text>LoginScreen</Text>
            <Text> {name} </Text>
            <Text> {age} </Text>
            <Text> {title} </Text>
            <TouchableOpacity onPress={() => {
                navigation.navigate('RegisterScreen', { name: "reactdeveloper", age: 24 })
            }} >
                <Text>Login to reg</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={async () => {
                await AsyncStorage.setItem('user', 'ali')
                setIsLogin(true)
            }} >
                <Text style={{ color: 'red' }} >Login me</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginScreen
