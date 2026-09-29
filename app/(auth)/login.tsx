import { useState } from 'react';
import { Alert, Pressable, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Screen } from '@/src/components/Screen';
import { FormField } from '@/src/components/FormField';
import { AppButton } from '@/src/components/AppButton';
import { useAuth } from '@/src/auth/AuthContext';
import React from 'react';

export default function LoginScreen() {
  const { signIn } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);
  const [busy, setBusy] = useState(false);

  async function submit() {
    if (!username.trim() || !password) return Alert.alert('Required fields', 'Enter your username and password.');
    setBusy(true);

    try {

      await signIn(username.trim(), password);
       }
    catch(error) { 
      Alert.alert('Sign in failed', String(error)); 
    }

    finally { setBusy(false); }
  }

  
  return <Screen>
    <View className="flex-1 justify-center">
      <Ionicons name="business-outline" size={46} color="#E91E63" />
      <Text className="mt-5 text-3xl font-medium text-zinc-900">Welcome to Mbombi Bank</Text>
      <Text className="mb-8 mt-2 text-base font-normal text-zinc-600">Sign in to continue banking.</Text>
      <FormField label="Username" value={username} onChangeText={setUsername} autoCapitalize="none" autoComplete="username" />
      <View>
        <FormField label="Password" value={password} onChangeText={setPassword} secureTextEntry={!visible} autoComplete="password" />
        <Pressable className="absolute right-3 top-9 p-2" onPress={() => setVisible(!visible)}>
          <Ionicons name={visible ? 'eye-off-outline' : 'eye-outline'} size={22} color="#AD1749" />
        </Pressable>
      </View>
      <AppButton label={busy ? 'Signing in...' : 'Sign in'} onPress={submit} disabled={busy} />
      <Link href="/(auth)/signup" className="mt-5 text-center text-base font-normal text-primary">No profile? Create one</Link>
    </View>
  </Screen>;
}
