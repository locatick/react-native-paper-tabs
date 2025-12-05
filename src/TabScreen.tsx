import * as React from 'react';
import type {
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

export interface TabScreenProps {
  label: string;
  icon?: any;
  badge?:
    | string
    | number
    | boolean
    | {
        value?: string | number | boolean;
        style?: StyleProp<ViewStyle>;
        textStyle?: StyleProp<TextStyle>;
      };
  children: any;
  onPress?: (event: GestureResponderEvent) => void;
  onPressIn?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
}

export default function TabScreen({ children }: TabScreenProps) {
  return React.Children.only(children);
}
