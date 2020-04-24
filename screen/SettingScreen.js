import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const SettingScreen = ({ navigation }) => {
    return (
        <View>

            <Text>settings</Text>

            <TouchableOpacity onPress={
                () => navigation.navigate('homeStack',{
                    screen:'likes',
                    params:{user:'jane'}
                })
            } >
                <Text>homeTab</Text>
            </TouchableOpacity>

        </View>
    )
}

export default SettingScreen
