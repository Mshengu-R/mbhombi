import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import type { ColorValue } from 'react-native';

const icon = (name: keyof typeof Ionicons.glyphMap) => ({ color, size }: { color: ColorValue; size: number }) => <Ionicons name={name} color={color} size={size} />;
export default function TabsLayout() {
  return <Tabs screenOptions={{headerStyle:{backgroundColor:'#E91E63'},headerTintColor:'#fff',headerTitleStyle:{fontWeight:'500'},tabBarActiveTintColor:'#E91E63',tabBarInactiveTintColor:'#777',tabBarLabelStyle:{fontWeight:'400'}}}>
    <Tabs.Screen name="index" options={{title:'Home',tabBarIcon:icon('home-outline')}} />
    <Tabs.Screen name="bank" options={{title:'Bank',tabBarIcon:icon('card-outline')}} />
    <Tabs.Screen name="messages" options={{title:'Messages',tabBarIcon:icon('chatbubble-outline')}} />
    <Tabs.Screen name="profile" options={{title:'Profile',tabBarIcon:icon('person-outline')}} />
  </Tabs>;
}
