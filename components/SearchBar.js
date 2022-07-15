import * as React from 'react'
import { render } from 'react-dom'
import { TextInput } from 'react-native-gesture-handler'
import { COLORS } from '../constants/Colors';

export default function SearchBar(){
     return(
          <TextInput style={{
               height: 50,
               borderWidth: 2,
               paddingLeft: 20,
               margin: 18,
               borderRadius: 28,
               borderColor: COLORS.lightRed
          }}
          
          placeholder="Search Here"
          underlineColorAndroid="transparent"
          />
     );
}