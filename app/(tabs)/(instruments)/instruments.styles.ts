import { StyleSheet } from 'react-native';
import { Colors, Spacing } from '../../../theme';

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
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.WHITE,
  },
  name: {
    fontSize: 12,
    color: Colors.LIGHTGRAY,
  },
  price: {
    fontSize: 16,
    textAlign: 'right',
    fontWeight: 'bold',
    color: Colors.WHITE,
  },
  return: {
    fontSize: 14,
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
