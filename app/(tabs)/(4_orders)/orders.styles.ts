import { StyleSheet } from 'react-native';
import { Colors, Spacing, normalizeSize } from '../../../theme';

export const styles = StyleSheet.create({
  card: {
    flexGrow: 1,
    paddingHorizontal: Spacing.space16H,
    paddingVertical: Spacing.space16V,
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
  name: {
    fontSize: normalizeSize(12),
    color: Colors.LIGHTGRAY,
    marginBottom: Spacing.space4V,
  },
  orderDetails: {
    fontSize: normalizeSize(14),
    color: Colors.DARKGRAY,
  },
  quantity: {
    fontSize: normalizeSize(16),
    textAlign: 'right',
    fontWeight: 'bold',
    color: Colors.WHITE,
  },
  status: {
    fontSize: normalizeSize(14),
    textAlign: 'right',
    marginTop: Spacing.space4V,
  },
  filledStatus: {
    color: Colors.SUCCESS,
  },
  pendingStatus: {
    color: Colors.PENDING,
  },
  canceledStatus: {
    color: Colors.ERROR,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spacing.space24H,
    marginTop: Spacing.space52V,
  },
  emptyTitle: {
    fontSize: normalizeSize(20),
    fontWeight: '600',
    color: Colors.WHITE,
    textAlign: 'center',
    marginBottom: Spacing.space8V,
  },
  emptyDescription: {
    fontSize: normalizeSize(16),
    color: Colors.DARKGRAY,
    textAlign: 'center',
  },
});
