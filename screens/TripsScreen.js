import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import LoginPlaceHolder from '../components/screens/LoginPlaceHolder'
import { useNavigation } from '@react-navigation/native';

export default function TripsScreen() {
  const navigaton = useNavigation();
  function onLoginHandler(){
    navigaton.navigate("LogInScreen")
  }
  return (
    <SafeAreaView>
    <LoginPlaceHolder
      title="Trips"
      onPress={onLoginHandler}
      heading="No Trips booked"
      subtitle="Access all torch trips and view ongoing trips here after log in."
    />
  </SafeAreaView>
  )
}