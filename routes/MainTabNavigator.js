import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStackScreen from '../screen/home/index'
import SettingScreen from '../screen/SettingScreen'
import Activity from '../screen/Activity'
import IconWithBadge from '../components/IconWithBadge'

import { View, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const Tabs = createBottomTabNavigator()

const MainTabNavigator = ({ }) => {
    const [count, setCount] = useState(3)
    return (
        <Tabs.Navigator

            screenOptions={{
                tabBarLabel: () => null
            }}


            tabBarOptions={{
                activeTintColor: "#f00", inactiveTintColor: "#000"
            }} >



            <Tabs.Screen
                options={{
                    // tabBarLabel: ({ focused }) => <Text style={{ fontSize: focused ? 20 : 14 }}  >خانه</Text>,
                    tabBarIcon: ({ focused, color }) =>
                        <AntDesign
                            name="home"
                            size={focused ? 24 : 20}
                            color={color}
                        />
                }}
                name="homeStack" component={HomeStackScreen} />


            <Tabs.Screen
                options={{

                    tabBarIcon: ({ focused, color }) =>
                        <IconWithBadge
                            name="hearto"
                            count={count}
                            focused={focused}
                            color={color}
                        />
                }}
                name="Activity" >
                {props => <Activity {...props} setCount={setCount} />}
            </Tabs.Screen>




            <Tabs.Screen options={{
                tabBarIcon: ({ focused, color }) =>
                    <AntDesign
                        name="setting"
                        size={focused ? 24 : 20}
                        color={color}

                    />
            }} name="SettingScreen" component={SettingScreen} />



        </Tabs.Navigator>
    )
}

export default MainTabNavigator
