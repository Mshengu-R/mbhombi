import { useState } from 'react';
import { Alert, Pressable, Switch, Text, View } from 'react-native';
import { Stack, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Screen } from '@/src/components/Screen';
import { FormField } from '@/src/components/FormField';
import { AppButton } from '@/src/components/AppButton';
import { authService } from '@/src/api/services';
import type { RegisterRequest } from '@/src/types';
import React from 'react';

const choices = {
  title: ['MR','MRS','DR','PROFF','MISS','MS'],
  ethnicity: ['AFRICAN','ASIAN','INDIAN','MIXED','AMERICAN'],
  gender: ['MALE','FEMALE','OTHER'],
  customerLanguage: ['ENGLISH','XITSONGA','ISIZULU','ISIXHOSA','SEPEDI','SESOTHO','SETWANA','TSHIVHENDA','AFRIKAANS'],
};

function Choice({ label, values, value, setValue }: { label:string; values:string[]; value:string; setValue(v:string):void }) {
  return <View className="mb-4"><Text className="mb-2 text-sm font-normal text-zinc-700">{label}</Text><View className="flex-row flex-wrap gap-2">
       {
    values.map((item) => <Pressable key={item}
     onPress={
          () => setValue(item)}
          className={`rounded-full border px-3 py-2 ${value === item ? 'border-primary bg-pink-50' : 'border-silver bg-white'}`}>
            <Text className="font-normal text-zinc-800">{item}</Text>
            </Pressable>)}
       </View>
    </View>;
}

export default function SignupScreen() {
  const [form, setForm] = useState<Record<string,string>>({ 
    country:'South Africa',
    title:'MR', 
    ethnicity:'AFRICAN', 
    gender:'MALE', 
    customerLanguage:'ENGLISH' });

  const [visible,setVisible]=useState(false),
        [consent,setConsent]=useState(false), 
        [busy,setBusy]=useState(false);


  const set = (key:string) => (value:string) => setForm((old) => ({...old,[key]:value}));

  const field = (key:string,label:string,props={}) =>
         <FormField key={key} label={label} value={form[key] ?? ''} onChangeText={set(key)} {...props} />;

  async function submit() {
    const required=[ // required input from the user
                    'fullNames',
                    'surname',
                    'email',
                    'phone',
                    // 'username',
                    'idNumber',
                    'dateOfBirth',
                    // 'role',
                    'country',
                    // 'status',
                    'homeAddress',
                    'password'];

    if(required.some((key)=>!form[key]?.trim())) return Alert.alert('Required fields','Complete all required fields.');

    if(!/^\d{4}-\d{2}-\d{2}$/.test(form.dateOfBirth)) return Alert.alert('Date format','Use yyyy-MM-dd, for example 2000-01-31.');

    if(!consent) return Alert.alert('Consent required','Accept the Privacy Policy to continue.');

    const payload: RegisterRequest = {
      fullNames:form.fullNames,
      secondName:form.secondName?.trim()||null, 
      surname:form.surname,
      email:form.email, 
      phone:form.phone, 
      // username:form.username, 
      idNumber:form.idNumber,
      title:form.title, 
      dateOfBirth:form.dateOfBirth, 
      // role:form.role, 
      ethnicity:form.ethnicity,
      gender:form.gender, 
      country:form.country, 
      // status:form.status, 
      customerLanguage:form.customerLanguage,
      homeAddress:[form.homeAddress.trim()], password:form.password,
    };

    setBusy(true);
    try { 
      
      await authService.register(payload); 
      
      Alert.alert('Profile created','You can now sign in.',[{text:'Continue',onPress:()=>router.replace('/(auth)/login')}]); 
    }

    catch(error){
       Alert.alert('Registration failed',String(error));
       }

    finally{setBusy(false);}
  }

  return <><Stack.Screen options={{headerShown:true,title:'Create profile',headerStyle:{backgroundColor:'#E91E63'},headerTintColor:'#fff'}} /><Screen>
    <Text className="mb-1 text-3xl font-medium">Create profile</Text><Text className="mb-6 font-normal text-zinc-600">Please fill in the below form to register for banking.</Text>
    {field('fullNames','Full names (as they appear on the id) *')}
    {field('secondName','Second name')}
    {field('surname','Surname *')}
    {field('email','Email *',{keyboardType:'email-address',autoCapitalize:'none'})}
    {field('phone','Phone *',{keyboardType:'phone-pad'})}
    {/* {field('username','Username *',{autoCapitalize:'none'})} */}
    {field('idNumber','ID number *',{keyboardType:'number-pad'})}
    <Choice label="Title" values={choices.title} value={form.title} setValue={set('title')} />
    {field('dateOfBirth','Date of birth * (yyyy-MM-dd)',{placeholder:'2000-01-31'})}
    {/*field('role','Role *')*/}
    <Choice label="Ethnic group" values={choices.ethnicity} value={form.ethnicity} setValue={set('ethnicity')} />
    <Choice label="Gender" values={choices.gender} value={form.gender} setValue={set('gender')} />
    {field('country','Country *')}
    {/* {field('status','Status *')} */}
    <Choice label="Customer language" values={choices.customerLanguage} value={form.customerLanguage} setValue={set('customerLanguage')} />
    {field('homeAddress','Home address *',{multiline:true,numberOfLines:3})}
    <View>{field('password','Password *',{secureTextEntry:!visible})}<Pressable className="absolute right-3 top-9 p-2" onPress={
                   ()=>setVisible(!visible)}><Ionicons name={visible?'eye-off-outline':'eye-outline'} size={22} color="#AD1749" />
                 </Pressable>
              </View>
    
    <View className="mb-5 flex-row items-center">
      <Switch value={consent} onValueChange={setConsent} trackColor={{true:'#E91E63'}} />
      <Text className="ml-3 flex-1 font-normal">I consent to the Privacy Policy.</Text>
    </View>
    <AppButton label={busy?'Creating profile...':'Create profile'} onPress={submit} disabled={busy} />
  </Screen>
</>;

}