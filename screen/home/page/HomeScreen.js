import React, { useContext } from 'react'
import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native'
import {LoginContext} from '../../../contexts/LoginContext'


const HomeScreen = ({ navigation }) => {
    const { logout } = useContext(LoginContext)
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
            <TouchableOpacity onPress={() => { logout() }} >
                <Text style={{ color: 'red' }} >logout</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen
