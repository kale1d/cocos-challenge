import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { styles } from './error.styles';
import { TError } from './error.types';

export const Error: React.FC<TError> = ({ text, onPress }) => {
  return (
    <View style={styles.centerContainer}>
      <Text style={styles.errorText}>{text}</Text>
      {onPress && (
        <Pressable style={styles.retryButton} onPress={onPress}>
          <Text style={styles.retryText}>Retry</Text>
        </Pressable>
      )}
    </View>
  );
};
