import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Signup from './screens/Signup'
import Login from './screens/Login'
import Home from './screens/Home'
const App = () => {
  return (
    <View>
      {<Signup/>}
      <Login/>
      <Home/>
    </View>
  
  )
}

export default App

const styles = StyleSheet.create({})