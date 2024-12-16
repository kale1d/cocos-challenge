import { View, ActivityIndicator } from 'react-native';
import React from 'react';
import { Colors } from '../../theme';
import { styles } from './loading.styles';

export const Loading: React.FC = () => {
  return (
    <View style={styles.centerContainer}>
      <ActivityIndicator size="large" color={Colors.CAMEO_PINK} />
    </View>
  );
};
