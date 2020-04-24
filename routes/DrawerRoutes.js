import React from 'react'
import { View, Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from '../screen/home/page/HomeScreen'
import Drawerq from '../screen/Drawer'
import SettingScreen from '../screen/SettingScreen'
import { AntDesign } from '@expo/vector-icons'
import CustonDrawer from '../components/CustonDrawer'

const Drawer = createDrawerNavigator()
const DrawerRoutes = () => {
    return (
        <Drawer.Navigator
            drawerPosition='right'
            overlayColor="#00BCD4"
            drawerType='slide'
            drawerContent={(props) => <CustonDrawer {...props} />}
        >
            <Drawer.Screen
                options={{ drawerIcon: ({ focused, color }) => <AntDesign name="home" size={24} /> }}
                name="HomeScreen" component={HomeScreen} />
            <Drawer.Screen name="Drawerq" component={Drawerq} />
            <Drawer.Screen name="SettingScreen" component={SettingScreen} />
        </Drawer.Navigator>
    )
}

export default DrawerRoutes
