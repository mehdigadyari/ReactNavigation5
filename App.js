import 'react-native-gesture-handler'
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import LoginNavigation from './routes/LoginNavigation'
import MainTabNavigator from './routes/MainTabNavigator'
import DrawerRoutes from './routes/DrawerRoutes'
import { View, ActivityIndicator, AsyncStorage } from 'react-native';
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

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
        <ActivityIndicator size='large' />
      </View>
    )
  }






  return (



    <NavigationContainer>
      {isLogin ? <MainTabNavigator setIsLogin={setIsLogin} /> : <LoginNavigation setIsLogin={setIsLogin} />}
    </NavigationContainer>
  );
}

