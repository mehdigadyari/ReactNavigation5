import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const RegisterScreen = ({ navigation, route }) => {
    const { name, age } = route.params
    return (
        <View>
            <Text>RegisterScreen</Text>
            <Text> {name} </Text>
            <Text> {age} </Text>
            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen',{name:"gad"})}>
                <Text>back to log</Text>
            </TouchableOpacity>
        </View>
    )
}

export default RegisterScreen
