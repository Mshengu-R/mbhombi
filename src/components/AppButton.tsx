import React from 'react';
import { Pressable, Text } from 'react-native';

type Props = { label: string; onPress(): void; disabled?: boolean; secondary?: boolean };
export function AppButton({ label, onPress, disabled, secondary }: Props) {
  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      onPress={onPress}
      className={`min-h-12 items-center justify-center rounded-xl px-5 ${secondary ? 'border border-primary bg-white' : 'bg-primary'} ${disabled ? 'opacity-50' : ''}`}
    >
      <Text className={`text-base font-medium ${secondary ? 'text-primary' : 'text-white'}`}>{label}</Text>
    </Pressable>
  );
}
