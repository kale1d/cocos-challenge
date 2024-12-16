import { StyleSheet } from 'react-native';
import { Colors, normalizeSize, Spacing } from '../../theme';

export const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.BACKGROUND_COLOR,
  },
  errorText: {
    fontSize: normalizeSize(16),
    color: Colors.DARKGRAY,
    marginBottom: Spacing.space16V,
  },
  retryButton: {
    paddingHorizontal: Spacing.space12H,
    paddingVertical: Spacing.space12V,
    backgroundColor: Colors.MIDDLE_PURPLE,
    borderRadius: normalizeSize(8),
  },
  retryText: {
    fontSize: normalizeSize(16),
    color: Colors.WHITE,
  },
});
