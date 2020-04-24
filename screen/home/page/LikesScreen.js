import React from 'react'
import { View, Text } from 'react-native'

const LikesScreen = ({route}) => {
    const  {user}= route.params
    return (
        <View>
            <Text>LikesScreen</Text>
            <Text>{user}</Text>

        </View>
    )
}

export default LikesScreen
