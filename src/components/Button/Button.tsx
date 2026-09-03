import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
  View,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { styles } from './Button.styles';

export interface ButtonProps {
  title: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  iconName?: string;
  iconColor?: string;
  iconSize?: number;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  loading = false,
  disabled = false,
  style,
  textStyle,
  iconName,
  iconColor = '#fff',
  iconSize = 18,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabled, style]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <View style={styles.contentContainer}>
          {iconName && (
            <FontAwesome
              name={iconName}
              size={iconSize}
              color={iconColor}
              style={styles.icon}
            />
          )}
          <Text style={[styles.text, textStyle]}>{title}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;