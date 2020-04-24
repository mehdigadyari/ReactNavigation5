import React from 'react'
import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native'

const HomeScreen = ({ navigation, setIsLogin }) => {
    return (
        <View>
            <Text>HomeScreen</Text>

            <TouchableOpacity onPress={
                () => navigation.navigate('SettingScreen')
            } >
                <Text>setting</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={
                () => navigation.openDrawer()
            } >
                <Text>likes</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={
                async () => {
                    await AsyncStorage.removeItem('user')
                    setIsLogin(false)
                }
            } >
                <Text style={{ color: 'red' }} >logout</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen
