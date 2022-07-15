import * as React from 'react'
import {View, Text} from 'react-native'
import ContactsScreen from './ContactsScreen';

export default function FavouriteScreen({navigation}) {
     return(
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
               <Text 
               onPress={() => navigation.navigate(ContactsScreen)}
               style={{
                    fontSize: 26, 
                    fontweight: 'bold'
               }}>
                    Favourite Page
               </Text>
          </View>
     );
}