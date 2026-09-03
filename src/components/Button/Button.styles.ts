import { StyleSheet } from 'react-native';
import { colors } from '../../config/colors';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginRight: 10,
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 16,
  },
});