import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Axios } from '../api/exercises_api';
import ExerciseList from '../components/exercisesList';
import { IExercises } from '../interfaces/models';

interface ExercisesProps {
  router: any;
}

interface ItemParams {
  name: string;
  image?: string;
}

export const Exercises: React.FC<ExercisesProps> = () => {
  const item = useLocalSearchParams() as unknown as ItemParams | null;
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

  useEffect(() => {
    if (item) {
      getExercises(item.name);
      console.log(item)
    }
  }, [item]);

  return (
    <ScrollView>
      <StatusBar style="light" />
      <Image
        source={item?.image}
        style={{ width: wp(100), height: hp(45) }}
        className="rounded-b-[40px]"
      />
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => router.back()}
        className="bg-stone-800 mx-4 absolute flex justify-center items-center pr-1 rounded-full"
        style={{ height: hp(4), width: hp(4), marginTop: hp(5) }}
      >
        <Ionicons name="caret-back-outline" size={hp(3)} color="white" />
      </TouchableOpacity>

      {/* exercises */}
      <View className="mx-4 space-y-3 mt-4">
        <Text style={{ fontSize: hp(3) }} className="font-semibold text-neutral-700">
          {item?.name} Exercises
        </Text>
        <View className="mb-10">
          <ExerciseList data={exercises} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Exercises;
