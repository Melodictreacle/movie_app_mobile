import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'

const Tabicon = ({ icon, focused, title }: any) => {
  if (focused) {
    return <>
      <ImageBackground source={images.highlight} className='flex flex-row w-full flex-1 min-w-[100px] 
                  min-h-14 mt-3 justify-center items-center rounded-full overflow-hidden'>
        <Image source={icon} tintColor="#151312" className="size-5"></Image>
        <Text className='text-secondary text-base font-semibold'>{title}</Text>
      </ImageBackground>
    </>
  }
  else {
    return <View className='size-full justify-center items-center mt-2 rounded-full'>
      <Image source={icon} tintColor="#A8B5DB" className='size-5'></Image>
    </View>
  }

}


const _layout = () => {

  return (
    <Tabs 
      screenOptions={{
        tabBarShowLabel:false,
        tabBarItemStyle:{
          width:'100%',
          height:'100%',
          justifyContent:'center',
          alignItems:'center',
        },
        tabBarStyle:{
          backgroundColor:'#0f0D23',
          borderRadius:50,
          marginHorizontal:20,
          marginBottom:15,
          height:49,
          position:'absolute',
        }
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Tabicon icon={icons.home} title="Home" focused={focused} />
          )
        }}
      />
      <Tabs.Screen
        name='search'
        options={{
          title: 'Search',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Tabicon icon={icons.search} title="Search" focused={focused} />
          )
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Tabicon icon={icons.person} title="Profile" focused={focused} />
          )
        }}
      />
      <Tabs.Screen
        name='saved'
        options={{
          title: 'Saved',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Tabicon icon={icons.save} title="Saved" focused={focused} />
          )
        }}
      />
    </Tabs>
  )
}

export default _layout