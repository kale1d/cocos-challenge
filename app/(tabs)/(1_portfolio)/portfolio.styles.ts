import { StyleSheet } from 'react-native';
import { Colors, normalizeSize, Spacing } from '../../../theme';

export const styles = StyleSheet.create({
  card: {
    flexGrow: 1,
    paddingHorizontal: Spacing.space16H,
    paddingVertical: Spacing.space8V,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: Colors.DARKGRAY,
  },
  ticker: {
    fontSize: normalizeSize(18),
    fontWeight: 'bold',
    color: Colors.WHITE,
  },
  quantity: {
    fontSize: normalizeSize(12),
    color: Colors.LIGHTGRAY,
  },
  marketValue: {
    fontSize: normalizeSize(16),
    textAlign: 'right',
    fontWeight: 'bold',
    color: Colors.WHITE,
  },
  gains: {
    fontSize: normalizeSize(14),
    textAlign: 'right',
  },
  increase: {
    color: Colors.SUCCESS,
  },
  decrease: {
    color: Colors.ERROR,
  },
});
