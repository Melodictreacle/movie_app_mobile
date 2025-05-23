import { View, Text,Image, TextInput } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'
 interface Props{
    placeholder:string;
    onPress:()=>void,
 }
const SearchBar = ({placeholder,onPress}:Props) => {
  return (
    <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-5'>
        <Image source={icons.search} className='size-5' resizeMode='contain' tintColor="#ab8bff"></Image>
        <TextInput
            onPress={onPress}
            placeholder={placeholder}
            placeholderTextColor="#ab8bff"
            value=''
            onChangeText={()=>{}}
            className='flex-1 ml-2 text-'
        />
    </View>
  )
}

export default SearchBar