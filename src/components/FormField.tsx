import React from 'react';
import { Text, TextInput, TextInputProps, View } from 'react-native';

type Props = TextInputProps & { label: string; error?: string };
export function FormField({ label, error, ...props }: Props) {
  return (
    <View className="mb-4">
      <Text className="mb-2 text-sm font-normal text-zinc-700">{label}</Text>
      <TextInput
        className="min-h-12 rounded-xl border border-silver bg-white px-4 text-base font-normal text-zinc-900"
        placeholderTextColor="#777"
        {...props}
      />
      {error ? <Text className="mt-1 text-sm font-normal text-red-700">{error}</Text> : null}
    </View>
  );
}
