import * as React from 'react'
import * as Contacts from 'expo-contacts';
import {View, Text} from 'react-native';
import { useEffect, useState } from 'react';
import { COLORS } from '../constants/Colors';
import { color } from 'react-native-reanimated';

export default function ContactList(){
     //defining error message
     let [error, setError] = useState(undefined);
     let [contacts, setContacts] = useState(undefined);

     useEffect(() => {
          //async functions to request permissions and load contacts
          (async () => {
               const {status} = await Contacts.requestPermissionsAsync();
               //checking if the request is equal to granted
               if(status === "granted"){
                    const {data} = await Contacts.getContactsAsync({
                         fields: [Contacts.Fields.FirstName, Contacts.Fields.LastName, Contacts.Fields.PhoneNumbers, Contacts.Fields.Emails]
                    });

                    //checking the length of the data gotten
                    if(data.length > 0) {
                         setContacts(data);
                    }else{
                         setError("No Contact found.");
                    }
               }else{
                    setError("Permission to access contacts denied.");
               }
          })();

     }, []);

     let getContactsRow = () =>{
          if(contacts != undefined){
               return contacts.map((contact, index) => {
                    return(
                      <View>
                      <Text>Name: {contacts.firstName} {contacts.lastName}</Text>
                      <Text>Email: {contacts.firstName}</Text>
                    </View>
                    );
               });
          }else{
               return <Text>Awaiting Contacts...</Text>
          }
     }
  return(
       <>
            <View style={{
                           padding: 20,
                           backgroundColor: COLORS.lightRed,
                      }}>
                 <Text>
                      {/* {error} */}
                      {getContactsRow()}
                 </Text>
            </View>
       </>
  );
}

     
