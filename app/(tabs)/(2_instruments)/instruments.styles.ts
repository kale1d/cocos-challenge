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
  leftContainer: {
    flex: 1,
    paddingRight: Spacing.space8H,
  },
  rightContainer: {
    flexShrink: 0,
    alignItems: 'flex-end',
  },
  ticker: {
    fontSize: normalizeSize(18),
    fontWeight: 'bold',
    color: Colors.WHITE,
  },
  name: {
    fontSize: normalizeSize(12),
    color: Colors.LIGHTGRAY,
  },
  price: {
    fontSize: normalizeSize(16),
    textAlign: 'right',
    fontWeight: 'bold',
    color: Colors.WHITE,
  },
  return: {
    fontSize: normalizeSize(14),
  },
  increase: {
    color: Colors.SUCCESS,
  },
  decrease: {
    color: Colors.ERROR,
  },
  bold: {
    fontWeight: 'bold',
  },
});
