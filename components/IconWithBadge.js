import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const styles = StyleSheet.create({
    root: {
        width: 40,
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    badgeView: {
        width: 18,
        height: 18,
        backgroundColor: "red",
        position: 'absolute',
        borderRadius: 9,
        right: 0,
        top: 5,
        opacity: .9,
    },
    badgeText: {
        color: "#fff",
        textAlign: "center",
        textAlignVertical: 'center',
        fontSize: 14
    }
})

const IconWithBadge = ({ name, count, focused, color }) => {
    return (
        <View style={styles.root}>
            <AntDesign name={name} size={focused ? 24 : 20} color={color} />

            {count > 0 && !focused ? (

                <View style={styles.badgeView} >
                    <Text style={styles.badgeText}> {count} </Text>
                </View>

            ) : (null)
            }
        </View>
    )
}

export default IconWithBadge
