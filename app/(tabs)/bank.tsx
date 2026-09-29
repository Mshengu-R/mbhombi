import { useCallback, useState } from 'react';
import { ActivityIndicator, RefreshControl, Text, View } from 'react-native';
import { Link, useFocusEffect } from 'expo-router';
import { Screen } from '@/src/components/Screen';
import { accountService } from '@/src/api/services';
import type { Account } from '@/src/types';
import React from 'react';

export default function BankScreen() {
  const [accounts,setAccounts]=useState<Account[]>([]),
        [loading,setLoading]=useState(true),
        [error,setError]=useState('');


  const load=useCallback(async()=>{ setLoading(true);setError('');
    
    try{
        setAccounts(await accountService.list());
      }
      catch(e){
        setError(String(e));
      }
      finally{
        setLoading(false);
      }
    },[]);

  useFocusEffect(useCallback(()=>{load();},[load]));
  
  return <Screen>
    <View className="mb-5 flex-row items-center justify-between">
      <View>
        <Text className="text-3xl font-medium">Your accounts</Text>
          <Text className="mt-1 font-normal text-zinc-600">Accounts:</Text>
    </View>
    
    <Link href="/bank/create" className="rounded-full bg-primary px-4 py-3 text-white">＋</Link>
    </View>
    {
    loading?<ActivityIndicator color="#E91E63"/>:error?<Text className="rounded-xl bg-red-50 p-4 font-normal text-red-800">{error}</Text>:accounts.length===0?
    <View className="rounded-2xl bg-white p-6">
      <Text className="text-center font-normal">No accounts were found.</Text>
      <Link href="/bank/create" className="mt-4 text-center font-normal text-primary">Create your first account</Link>
      </View>:accounts.map((a)=><View key={a.id||a.accountNumber} className="mb-4 rounded-2xl bg-silver p-5">
        
        <Text className="font-normal">{a.bankName||'Mbhombi'}</Text>
        <Text className="mt-2 text-xl font-medium">{a.accountType}</Text>
        <Text className="mt-8 tracking-widest">{a.accountNumber}</Text>
        <Text className="mt-2 text-lg font-normal">{a.currency||'ZAR'} {Number(a.balance||0).toFixed(2)}</Text>
        <Text className="mt-2 font-normal">{a.status}</Text></View>)
        }

  </Screen>;
}
