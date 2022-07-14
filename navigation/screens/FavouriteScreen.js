import * as React from 'react'
import {View, Text} from 'react-native'

export default function FavouriteScreen({navigation}) {
     return(
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
               <Text 
               onPress={() => navigation.navigate('Home')}
               style={{
                    fontSize: 26, 
                    fontweight: 'bold'
               }}>
                    Favourite Page
               </Text>
          </View>
     );
}