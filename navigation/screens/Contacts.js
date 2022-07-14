import * as React from 'react'
import {View, Text} from 'react-native'

export default function Contacts({navigation}) {
     return(
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
               <Text 
               onPress={() => alert('This is the contact page')}
               style={{
                    fontSize: 26, 
                    fontweight: bold
               }}>
                    Contact Page
               </Text>
          </View>
     );
}