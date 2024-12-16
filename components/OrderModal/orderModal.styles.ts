import { StyleSheet } from 'react-native';
import { Colors, normalizeSize, Spacing } from '../../theme';

const SIZE_24 = normalizeSize(24);

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  modalContent: {
    backgroundColor: Colors.BACKGROUND_COLOR,
    paddingHorizontal: Spacing.space24H,
    paddingVertical: Spacing.space24V,
    borderTopLeftRadius: SIZE_24,
    borderTopRightRadius: SIZE_24,
    shadowColor: Colors.BLACK,
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  modalTitle: {
    fontSize: SIZE_24,
    color: Colors.WHITE,
    fontWeight: '600',
    marginBottom: SIZE_24,
    textAlign: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
    marginBottom: Spacing.space16V,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: normalizeSize(12),
    paddingHorizontal: Spacing.space4H,
    paddingVertical: Spacing.space4V,
  },
  button: {
    flex: 1,
    paddingHorizontal: Spacing.space12H,
    paddingVertical: Spacing.space12V,
    borderRadius: normalizeSize(10),
    marginHorizontal: 2,
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: Colors.MIDDLE_PURPLE,
  },
  buttonText: {
    fontSize: normalizeSize(16),
    color: Colors.DARKGRAY,
    fontWeight: '500',
  },
  activeButtonText: {
    color: Colors.WHITE,
  },
  input: {
    fontSize: normalizeSize(16),
    color: Colors.WHITE,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: normalizeSize(12),
    paddingHorizontal: Spacing.space16H,
    paddingVertical: Spacing.space16V,
    marginBottom: Spacing.space16V,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  submitButton: {
    backgroundColor: Colors.MIDDLE_PURPLE,
    paddingHorizontal: Spacing.space16H,
    paddingVertical: Spacing.space16V,
    borderRadius: normalizeSize(12),
    alignItems: 'center',
    marginTop: Spacing.space16V,
  },
  disabledButton: {
    opacity: 0.5,
  },
  submitButtonText: {
    fontSize: normalizeSize(16),
    color: Colors.WHITE,
    fontWeight: '600',
  },
  closeButton: {
    paddingHorizontal: Spacing.space16H,
    paddingVertical: Spacing.space16V,
    alignItems: 'center',
    marginTop: Spacing.space8V,
  },
  closeButtonText: {
    fontSize: normalizeSize(16),
    color: Colors.DARKGRAY,
  },
});
