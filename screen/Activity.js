import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

const Activity = ({setCount}) => {
useEffect(()=>{
setCount(0)
},[])
    return (
        <View>
            <Text>Activity</Text>
        </View>
    )
}

export default Activity
