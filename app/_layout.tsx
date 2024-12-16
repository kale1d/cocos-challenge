import { Stack } from 'expo-router/stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'expo-status-bar';
import { AppProvider } from '../store/Store';

const queryClient = new QueryClient();

export const Layout: React.FC = () => {
  return (
    <AppProvider>
      <QueryClientProvider client={queryClient}>
        <StatusBar style="light" translucent />
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </QueryClientProvider>
    </AppProvider>
  );
};

export default Layout;
