import { useState } from 'react';
import { Alert, Pressable, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Stack, router } from 'expo-router';
import { Screen } from '@/src/components/Screen';
import { FormField } from '@/src/components/FormField';
import { AppButton } from '@/src/components/AppButton';
import { accountService } from '@/src/api/services';
import React from 'react';

export default function CreateAccount(){
    
    const[form,setForm]=useState<Record<string,string>>({initialDeposit:'50'}),
         [visible,setVisible]=useState(false),
         [busy,setBusy]=useState(false);
         
    const set=(k:string)=>
        (v:string)=>
            setForm(o=>({...o,[k]:v})); // update form state with new value for key k
    
    async function submit(){
        const keys=['accountHolderName',
                    'customerId',
                    'phone',
                    'accountType',
                    'pin',
                    'initialDeposit'];
            
            // check if any required field is empty
            if(keys.some(k=>!form[k]?.trim()))
                
                // show alert if any required field is empty
                return Alert.alert('Required fields','Complete all fields.');
                
                // check if initial deposit is less than 50 and show alert if it is
                if(isNaN(Number(form.initialDeposit)))
                    return Alert.alert('Deposit','The initial deposit must be a number.');
                if(Number(form.initialDeposit)<50)
                    return Alert.alert('Deposit','The minimum initial deposit is R50.');
                      setBusy(true);try{await accountService.create({...form,initialDeposit:Number(form.initialDeposit)});
                      
                    Alert.alert('Success','Account created successfully.',[{text:'Continue',onPress:()=>router.back()}]);}
                    
                catch(e){
                    // show alert if account creation fails
                    Alert.alert('Creation failed',String(e));
                }
                
                finally{
                    
                    setBusy(false);
                }
            }
            return <>
            <Stack.Screen options={{title:'Create account',
                            headerStyle:{backgroundColor:'#E91E63'},
                            headerTintColor:'#fff'}
                        }/>
                        <Screen>{[['accountHolderName', 'Account holder name'],
                                   ['customerId', 'Customer ID'],
                                   ['phone', 'Phone'],
                                   ['accountType', 'Account type']]
                                    .map(([k,l])=><FormField key={k} label={`${l} *`}
 
                 value={form[k]??''} onChangeText={set(k)}/>)}
                     
                <View>
                    <FormField label="PIN *" value={form.pin??''} onChangeText={set('pin')} keyboardType="number-pad" secureTextEntry={!visible}/>
                    <Pressable className="absolute right-3 top-9 p-2" onPress={()=>setVisible(!visible)}>
                        <Ionicons name={visible?'eye-off-outline':'eye-outline'} size={22} color="#AD1749"/>
                    </Pressable>
                </View>
                
            <FormField label="Initial deposit *" value={form.initialDeposit} onChangeText={set('initialDeposit')} keyboardType="decimal-pad"/>
            <AppButton label={busy?'Creating...':'Create account'} onPress={submit} disabled={busy}/>
            </Screen>
        </>
    }
