import { useEffect, useState } from 'react';
import { Alert, Text } from 'react-native';
import { Screen } from '@/src/components/Screen';
import { FormField } from '@/src/components/FormField';
import { AppButton } from '@/src/components/AppButton';
import { profileService } from '@/src/api/services';
import { useAuth } from '@/src/auth/AuthContext';
import type { Profile } from '@/src/types';
import React from 'react';


export default function ProfileScreen(){
    
    const{signOut,clearSession}=useAuth();
    const[profile,setProfile]=useState<Profile|null>(null),
         [error,setError]=useState(''),
         [busy,setBusy]=useState(false);
         
    useEffect(()=>{
        profileService
        .me()
        .then(setProfile)
        .catch( e=>setError(String(e)));
                   },[]);
    
    
    async function save(){
        if(!profile) return;
        setBusy(true);
        
        try{
            
            setProfile(
                
                await profileService.update(profile));
                
                Alert.alert('Saved','Profile updated.');
            
        }
        
        catch(e){
            
            Alert.alert('Update failed',String(e));
        
        }
        
        finally{
            
            setBusy(false);
        
        }

    }
    
    
    function remove(){
        
        Alert.alert('Delete profile?','This cannot be undone.',[{text:'Cancel',style:'cancel'},
            {text:'Delete',style:'destructive',
                
                onPress:async()=>{
       
                   try{
                        await profileService.remove();
                        
                        await clearSession();
   
                    }catch(e){
                        
                  Alert.alert('Delete failed',String(e));
              }
           }
       }
    ]
 );
}
 return <Screen>
    <Text className="mb-5 text-3xl font-medium">Your profile</Text>
      {  
        error?
        <Text className="font-normal text-red-700">{error}</Text>:!profile?<Text className="font-normal">Loading profile...</Text>:
        Object
        .entries(profile)
        .filter(([k,v])=>typeof v!=='object'&&!['password','pin'].includes(k)).map(([k,v])=>
                           <FormField key={k} label={k.replace(/([A-Z])/g,' $1')} value={String(v??'')} editable={!['id','username'].includes(k)} 
                                onChangeText={(text)=>setProfile({...profile,[k]:text})}/>)
    }
    
    { 
    // Saving changes
    profile?<>
    <AppButton label={busy?'Saving...':'Save changes'}
     onPress={save} disabled={busy}/>
     
     <Text onPress={remove} className="mt-5 text-center font-normal text-red-700">Delete profile</Text>
     </>:null
     }

     {/* Logging out */}
     <Text onPress={signOut} className="mt-8 text-center font-normal text-primary">Log out</Text>
     
</Screen>

}
