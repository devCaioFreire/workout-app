import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function Index() {
  return (
    <View className='flex-1 flex justify-center items-center'>
      <StatusBar style='auto' />
      <Image
        source={require('../assets/images/welcome.png')}
        className='h-full w-full absolute'
      />

      <LinearGradient
        colors={['transparent', '#18181b']}
        style={{ width: wp(100), height: hp(110) }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
        className='flex justify-end pb-20 space-y-8'>

        <Animated.View entering={FadeInDown.delay(200).springify()} className="flex items-center">
          <View className='flex items-center'>
            <Text style={{ fontSize: hp(5) }} className='text-white font-bold tracking-wide'>
              Best <Text className='text-indigo-600'>Workouts</Text>
            </Text>
            <Text style={{ fontSize: hp(5) }} className='text-white font-bold tracking-wide'>
              For you
            </Text>
          </View>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(200).springify()} className="flex items-center">
          <View>
            <TouchableOpacity
              onPress={() => router.push('/home')}
              activeOpacity={0.7}
              style={{ height: hp(7), width: wp(80) }}
              className='bg-indigo-800 flex items-center justify-center mx-auto rounded-full border-[2px] border-neutral-200'>
              <Text style={{ fontSize: hp(3) }} className='text-white font-bold -tracking-widest'>Get Started</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>

      </LinearGradient>
    </View>
  );
}
