import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import { Screen } from '@/src/components/Screen';
import React from 'react';

export default function HomeScreen() {
  return <Screen>
    <View className="rounded-3xl bg-primary p-6"><Text className="text-sm font-normal uppercase tracking-widest text-white/80">Your financial future</Text>
       <Text className="mt-3 text-3xl font-medium text-white">Welcome to Mbhombi</Text><Text className="mt-3 text-base font-normal leading-6 text-white">Simple, secure banking for individuals and communities.</Text><Link href="/bank/create" className="mt-6 rounded-xl bg-white p-4 text-center font-medium text-primary-dark">Create a bank account</Link></View>
    <View className="mt-5 rounded-2xl border border-zinc-200 bg-white p-5">
      <Text className="text-xl font-medium">Our vision</Text><Text className="mt-2 font-normal leading-6 text-zinc-600">To make reliable financial services accessible, understandable and useful to every customer.</Text></View>
    <View className="mt-4 rounded-2xl border border-zinc-200 bg-white p-5">
      <Text className="text-xl font-medium">Our mission</Text><Text className="mt-2 font-normal leading-6 text-zinc-600">To provide secure digital tools that help individuals and communities build financial confidence.</Text></View>
    <View className="mt-4 rounded-2xl border border-zinc-200 bg-white p-5">
      <Text className="text-xl font-medium">Account creation guidance</Text><Text className="mt-2 font-normal leading-7 text-zinc-600">1. Open Bank.
2. Select Create account.
3. Complete the account details.
4. Deposit at least R50.
5. Review and submit securely.</Text>
<Link href="/bank/create" className="mt-4 font-normal text-primary">Open Account now</Link></View>
    <Link href="/about" className="mt-6 text-center font-normal text-primary">About us</Link>
    <Text className="mt-5 text-center text-sm font-normal text-zinc-600">Contact us  •  Careers  •  Ts & Cs  •  Privacy Policy</Text>
    <View className="mt-4 bg-black p-5"><Text className="text-center font-normal text-white">© Mbhombi Financial Services</Text></View>
  </Screen>;
}
