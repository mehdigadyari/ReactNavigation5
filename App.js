import 'react-native-gesture-handler'
import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import LoginNavigation from './routes/LoginNavigation'
import MainTabNavigator from './routes/MainTabNavigator'
import DrawerRoutes from './routes/DrawerRoutes'
import {LoginContext} from './contexts/LoginContext'

export default function App() {
  const [isLogin, setIsLogin] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    AsyncStorage.getItem('user').then((user) => {
      if (user === null || user.length === 0) {
        setIsLogin(false)
        setLoading(false)
      } else {
        setIsLogin(true)
        setLoading(false)
      }
    })
  }, [])

  const login = async (name) => {
    await AsyncStorage.setItem('user', name)
    setIsLogin(true)
  }
  const logout = async () => {
    await AsyncStorage.removeItem('user')
    setIsLogin(false)
  }

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
        <ActivityIndicator size='large' />
      </View>
    )
  }

  return (
    <NavigationContainer>
      <LoginContext.Provider value={{ login: login, logout: logout }} >
        {isLogin ? <MainTabNavigator /> : <LoginNavigation />}
      </LoginContext.Provider>
    </NavigationContainer>
  );
}

