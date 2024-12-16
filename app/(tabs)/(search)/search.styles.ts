import { StyleSheet } from 'react-native';
import { Colors, normalizeSize, Spacing } from '../../../theme';

export const styles = StyleSheet.create({
  searchInput: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 12,
    padding: Spacing.space16V,
    marginBottom: Spacing.space16V,
    fontSize: 16,
    color: Colors.WHITE,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
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
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spacing.space24H,
    marginTop: Spacing.space52V,
  },
  emptyImage: {
    width: normalizeSize(120),
    height: normalizeSize(120),
    marginBottom: Spacing.space24V,
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
    marginBottom: Spacing.space24V,
  },
});
