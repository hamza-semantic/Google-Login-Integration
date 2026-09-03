import React from 'react';
import { View, ViewProps } from 'react-native';
import { styles } from './Card.styles';

export interface CardProps extends ViewProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children, style, ...rest }) => {
  return (
    <View style={[styles.card, style]} {...rest}>
      {children}
    </View>
  );
};

export default Card;