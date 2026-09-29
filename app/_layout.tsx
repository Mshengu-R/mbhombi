import '../global.css';
import { ActivityIndicator, View } from 'react-native';
import { Redirect, Slot, useSegments } from 'expo-router';
import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider, useAuth } from '@/src/auth/AuthContext';
import React from 'react';

function Gate() {
  const { ready, authenticated } = useAuth();
  const segments = useSegments();
  const inAuth = segments[0] === '(auth)';

  if (!ready) return <View className="flex-1 items-center justify-center"><ActivityIndicator color="#E91E63" /></View>;
  if (!authenticated && !inAuth) return <Redirect href="/(auth)/login" />;
  if (authenticated && inAuth) return <Redirect href="/(tabs)" />;
  return <Slot />;
}

export default function RootLayout() {
  return <AuthProvider><StatusBar style="light" /><Gate /></AuthProvider>;
}
