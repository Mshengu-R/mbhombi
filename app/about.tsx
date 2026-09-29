import { Text, View } from 'react-native';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Screen } from '@/src/components/Screen';
import React from 'react';


const values=[
    
    ['shield-checkmark-outline',
     'Security',
     'Protecting access and financial activity.'],
     
    ['hand-left-outline',
     'Trust',
     'Clear and dependable financial service.'],
     
    ['people-outline',
     'Community',
     'Supporting individual and shared goals.'],
     
    ['lock-closed-outline',
     'Privacy',
     'Treating customer information with care.']
    ] as const;
    
export default function About(){
    
    return <>
            <Stack.Screen options={
                {
                    title:'About us',
                    headerStyle:{backgroundColor:'#E91E63'},
                    headerTintColor:'#fff'
                }}/>
                
            <Screen>
                <View className="rounded-3xl bg-primary p-6">
                  <Text className="text-3xl font-medium leading-10 text-white">Banking built around people and communities</Text>
                  <Text className="mt-3 font-normal leading-6 text-white">Mbhombi Financial Services is a digital platform for personal and community banking.</Text>
                    
            </View>
        
        <View className="mt-5 rounded-2xl bg-white p-5">
            <Text className="text-2xl font-medium">Who we are</Text>
            <Text className="mt-3 font-normal leading-6 text-zinc-600">We believe financial services should be secure, simple and understandable. Our platform brings customer profiles, accounts and financial activity into one accessible experience.</Text>
        </View>
      
      <Text className="mb-3 mt-6 text-2xl font-medium">Our values</Text>
      { 
      values.map(([icon,title,copy])=>
         <View key={title} className="mb-3 flex-row rounded-2xl bg-white p-5">
            <Ionicons name={icon} size={26} color="#E91E63"/>
            <View className="ml-4 flex-1">
                <Text className="text-lg font-medium">{title}</Text>
                <Text className="mt-1 font-normal text-zinc-600">{copy}</Text>
            </View>
        </View>)
        }
        </Screen>
    </>}
