import { Stack } from "expo-router";
import React from "react";

export default function _layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="exercises"
        options={{
          presentation: 'fullScreenModal'
        }}
      />
      <Stack.Screen
        name="exerciseDetails"
        options={{
          presentation: 'fullScreenModal'
        }}
      />
    </Stack>
  )
}