import React from 'react'
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import Logo from '../assets/logo.png'
import { Image } from 'react-native'

const CustonDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <Image
                source={Logo}
                style={{ width: "80%", height: 150, resizeMode: 'stretch' }}
            />
            <DrawerItemList itemStyle={{ flexDirection: 'row-reverse' }} {...props} />
            <DrawerItem label="about me" />
        </DrawerContentScrollView>
    )
}

export default CustonDrawer
