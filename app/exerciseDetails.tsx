import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { IExercises } from '../interfaces/models';
import { Axios } from '../api/exercises_api';
import { capitalizeWords, formatInstructions } from '../utils/formatter';

interface IDetails {
  item: any
}

interface ItemParams {
  name: string;
  image?: string;
}

const ExerciseDetails: React.FC<IDetails> = () => {
  const item = useLocalSearchParams() as unknown as IExercises | null;
  const router = useRouter();

  const [exercises, setExercises] = useState<IExercises[]>([]);

  const getExercises = async (bodyPart: string) => {
    try {
      const url = `/exercises/bodyPart/${bodyPart.toLowerCase()}`;
      const response = await Axios.get(url);
      const data = response.data;
      setExercises(data);
    } catch (error) {
      console.error('Error response data:', error);
    }
  }

  // useEffect(() => {
  //   if (item) {
  //     getExercises(item.name);
  //     console.log(item)
  //   }
  // }, [item]);

  const instructionsWithSpace = formatInstructions(item?.instructions);

  return (
    <ScrollView>
      <StatusBar style="dark" />
      <Image
        source={item?.gifUrl}
        style={{ width: wp(100), height: hp(50) }}
        className="rounded-b-[40px] shadow-2xl"
      />
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => router.back()}
        className="bg-stone-800 mx-4 absolute flex justify-center items-center pr-1 rounded-full"
        style={{ height: hp(4), width: hp(4), marginTop: hp(5) }}
      >
        <Ionicons name="caret-back-outline" size={hp(3)} color="white" />
      </TouchableOpacity>

      <View className='bg-neutral-100 h-full pb-10'>
        <View className="mx-4 space-y-3 mt-4">
          <Text style={{ fontSize: hp(3) }} className="font-semibold text-neutral-700">
            {capitalizeWords(item?.name)}
          </Text>
        </View>

        {/* Details */}
        <View className='mx-4 flex-col mt-4'>
          <View className='flex gap-1'>
            <Text style={{ fontSize: hp(2.2) }} className="font-bold text-neutral-700">
              <Text className='text-neutral-500 font-medium'>Equipament:</Text> {capitalizeWords(item?.equipment)}
            </Text>

            <View>
              <Text style={{ fontSize: hp(2.2) }} className="font-bold text-neutral-700">
                <Text className='text-neutral-500 font-medium'>Secondary Muscles:</Text> {capitalizeWords(item?.secondaryMuscles)}
              </Text>
            </View>

            <View>
              <Text style={{ fontSize: hp(2.2) }} className="font-bold text-neutral-700">
                <Text className='text-neutral-500 font-medium'>Target:</Text> {capitalizeWords(item?.target)}
              </Text>
            </View>
          </View>
        </View>

        {/* Instructions  */}
        <View className="mx-4 space-y-3 mt-4">
          <Text style={{ fontSize: hp(3) }} className="font-semibold text-neutral-700">
            Instructions
          </Text>
        </View>

        <View style={{ flexDirection: 'column' }}>
          <View className="mx-4 space-y-3 mt-4">
            <Text style={{ fontSize: hp(2.2) }} className="text-neutral-500 font-medium">
              {instructionsWithSpace}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView >
  )
}

export default ExerciseDetails;