import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Screen } from '@/src/components/Screen';
import React from 'react';

export default function Messages(){ 
    
    return <Screen>
     <Text className="text-3xl font-medium">Messages</Text>
        <View className="mt-5 items-center rounded-2xl bg-white p-8">
            <Ionicons name="chatbubble-outline" size={42} color="#E91E63"/>
        
        
    <Text className="mt-4 text-lg font-medium">No messages</Text>
    
    <Text className="mt-2 text-center font-normal leading-6 text-zinc-600">This authenticated screen is ready for a real REST, WebSocket, SSE or push-notification adapter.</Text>
  </View>
</Screen>
}