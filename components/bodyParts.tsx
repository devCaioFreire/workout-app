import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import { Image } from 'expo-image';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { bodyParts } from '../constants';
import React from 'react';

interface BodyPartsProps {
  name: string;
  image: string;
}

interface BodyPartsType {
  item: BodyPartsProps;
  index: string;
  router: any;
}

export default function BodyParts() {
  const router = useRouter();

  return (
    <View className='mx-4'>
      <Text
        style={{ fontSize: hp(3) }}
        className='font-semibold text-neutral-700'>Exercises</Text>

      <FlatList
        data={bodyParts}
        numColumns={2}
        keyExtractor={item => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item, index }: any) => <BodyPartsCard router={router} index={index} item={item} />} />
    </View>
  );
}

const BodyPartsCard = ({ item, router, index }: BodyPartsType) => {
  return (
    <TouchableOpacity
      key={index}
      onPress={() => router.push({ pathname: '/exercises', params: item })}
      activeOpacity={0.7}
      style={{ width: wp(44), height: wp(52) }}
      className='flex justify-end p-4 mb-4'>
      <Image
        source={item.image}
        contentFit='cover'
        style={{ width: wp(44), height: wp(52) }}
        className='rounded-[35px] absolute' />

      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.9)']}
        style={{ width: wp(44), height: wp(52) }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        className='absolute bottom-0 rounded-b-[35px]' />

      <Text
        style={{ fontSize: hp(2.3) }}
        className='text-white font-bold text-center tracking-wide'>{item.name}</Text>
    </TouchableOpacity>
  )
}