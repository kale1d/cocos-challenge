import { PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './layout.styles';
import { Text } from 'react-native';

type TLayout = PropsWithChildren & { title: string };

export const Layout: React.FC<TLayout> = ({ children, title }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>{title}</Text>
      {children}
    </SafeAreaView>
  );
};
