import React from 'react'
import { createStackNavigator, Header } from '@react-navigation/stack'
import HomeScreen from '../screen/home/page/HomeScreen'
import LoginScreen from '../screen/LoginScreen'
import RegisterScreen from '../screen/RegisterScreen'
import { AntDesign } from '@expo/vector-icons'

const Stack = createStackNavigator()

const LoginNavigation = ({setIsLogin}) => {
    return (
        <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{ header: () => null }} >

            <Stack.Screen name="RegisterScreen" component={RegisterScreen} 
            initialParams={{ name: "ff", age: 22 }} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen
                // options={{
                //     headerTitle: "ورورد",
                //     headerTitleAlign: "center",
                //     headerRight: ({ tintColor }) => <AntDesign name="logout" size={20} />,
                //     headerRightContainerStyle:{paddingRight:15}

                // }}
                name="LoginScreen">
                {props => <LoginScreen {...props} title="mehdi gadyari" setIsLogin={setIsLogin} />}

            </Stack.Screen>
            {/* bejaye ink az component estefade konim az in children ham mishe estefade krds */}

        </Stack.Navigator>
    )
}

export default LoginNavigation
