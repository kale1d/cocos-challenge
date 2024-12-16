import { StyleSheet } from 'react-native';
import { Colors, normalizeSize, Spacing } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND_COLOR,
    paddingHorizontal: Spacing.space16H,
  },
  header: {
    fontSize: normalizeSize(24),
    color: Colors.WHITE,
    fontWeight: 'bold',
    padding: Spacing.space16V,
  },
  navigationButton: {
    marginVertical: Spacing.space16V,
    marginRight: Spacing.space16H,
  },
});
