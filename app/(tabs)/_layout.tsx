import { Tabs } from 'expo-router';
import {
  Colors,
  normalizeHorizontal,
  normalizeSize,
  normalizeVertical,
} from '../../theme';

import Ionicons from '@expo/vector-icons/Ionicons';
import { Platform } from 'react-native';

export const TabLayout: React.FC = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.BACKGROUND_COLOR,
          height:
            Platform.OS === 'ios'
              ? normalizeVertical(80)
              : normalizeVertical(60),
        },
        tabBarActiveBackgroundColor: Colors.DARKESTGRAY,
        tabBarInactiveBackgroundColor: Colors.BACKGROUND_COLOR,
        tabBarIconStyle: {
          width: normalizeHorizontal(24),
          height: normalizeVertical(24),
        },
        tabBarActiveTintColor: Colors.PURPLE_MOUNTAIN,
        tabBarInactiveTintColor: Colors.DARKGRAY,
        tabBarLabelStyle: {
          fontSize: normalizeSize(12),
          fontWeight: '500',
          marginTop: normalizeVertical(2),
        },
      }}>
      <Tabs.Screen
        name="(portfolio)/index"
        options={{
          tabBarLabel: 'Portfolio',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="wallet" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="(instruments)/index"
        options={{
          tabBarLabel: 'Instruments',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="trending-up" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="(search)/index"
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-sharp" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="(orders)/index"
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
