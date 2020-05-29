import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './page/HomeScreen'
import LikesScreen from './page/LikesScreen'
const Stack = createStackNavigator()
const index = ({  }) => {
    return (
        <Stack.Navigator initialRouteName="home">
            <Stack.Screen name="likes" component={LikesScreen} />
            <Stack.Screen name="home" component={HomeScreen} />
        </Stack.Navigator>
    )
}

export default index
