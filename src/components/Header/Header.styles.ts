import { StyleSheet } from 'react-native';
import { colors } from '../../config/colors';

export const styles = StyleSheet.create({
  container: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
  },
});