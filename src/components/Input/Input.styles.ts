import { StyleSheet } from 'react-native';
import { colors } from '../../config/colors';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 14,
  },
  label: {
    marginBottom: 6,
    fontSize: 13,
    color: colors.label,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    color: colors.text,
  },
  inputError: {
    borderColor: colors.danger,
  },
  errorText: {
    color: colors.danger,
    fontSize: 12,
    marginTop: 4,
  },
});