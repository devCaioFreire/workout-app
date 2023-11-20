import { StatusBar } from 'expo-status-bar';
import { Image, Text, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BodyParts from '../components/bodyParts';
import CarouselSlider from '../components/carousel';
import React from 'react';

export default function Home() {
  return (
    <SafeAreaView className='flex-1 bg-white space-y-5' edges={['top']}>
      <StatusBar style='dark' />

      {/* Punchline and Avatar */}
      <View className='flex-row justify-between items-center mx-5'>
        <View className='space-y-2'>
          <Text
            style={{ fontSize: hp(4.5) }}
            className='font-bold tracking-wider text-neutral-700'>
            READY TO
          </Text>
          <Text
            style={{ fontSize: hp(4.5) }}
            className='font-bold tracking-wider text-indigo-600'>
            WORKOUT
          </Text>
        </View>

        <View className='flex justify-center items-center space-y-2'>
          <Image
            source={require('../assets/images/avatar.png')}
            style={{ height: hp(6), width: hp(6) }}
            className='rounded-full' />

          <View className='flex justify-center items-center bg-neutral-200 rounded-full border-[3px] border-neutral-300'
            style={{ height: hp(5.5), width: hp(5.5) }}>
            <Ionicons name='notifications' size={hp(3)} color="gray" />
          </View>
        </View>
      </View>

      {/* Image Slider */}
      <View>
        <CarouselSlider />
      </View>

      {/* Body Parts List */}
      <View className='flex-1'>
        <BodyParts />
      </View>
    </SafeAreaView>
  );
}