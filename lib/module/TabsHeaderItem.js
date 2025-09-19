"use strict";

import * as React from 'react';
import { Animated, StyleSheet, View, Platform, Text } from 'react-native';
import { Badge, TouchableRipple } from 'react-native-paper';
import Color from 'color';
import { useAnimatedText } from './internal';
import MaterialCommunityIcon from "./MaterialCommunityIcon.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const AnimatedText = Animated.createAnimatedComponent(Text);
export default function TabsHeaderItem({
  tab,
  tabIndex,
  active,
  goTo,
  onTabLayout,
  activeColor,
  textColor,
  theme,
  position,
  offset,
  childrenCount,
  uppercase,
  mode,
  iconPosition,
  showTextLabel,
  tabLabelStyle
}) {
  const baseColor = theme.colors.primary;
  const rippleColor = React.useMemo(() => Color(baseColor).alpha(0.32).rgb().string(), [baseColor]);
  const {
    color,
    opacity
  } = useAnimatedText({
    active,
    position,
    offset,
    activeColor,
    textColor,
    tabIndex,
    childrenCount
  });
  const badgeIsFilled = tab.props.badge !== undefined && tab.props.badge !== null;
  const badgeWithoutContent = typeof tab.props.badge === 'boolean';
  return /*#__PURE__*/_jsx(View, {
    style: [styles.tabRoot, mode === 'fixed' && styles.tabRootFixed],
    onLayout: e => onTabLayout(tabIndex, e),
    children: /*#__PURE__*/_jsx(TouchableRipple, {
      disabled: tab.props.disabled,
      onPress: e => {
        goTo(tabIndex);
        tab.props.onPress?.(e);
      },
      onPressIn: tab.props.onPressIn,
      style: [styles.touchableRipple, iconPosition === 'top' && styles.touchableRippleTop, tab.props.disabled && styles.touchableRippleDisabled, {
        borderRadius: theme.roundness
      }],
      rippleColor: rippleColor
      // @ts-ignore
      ,
      accessibilityTraits: 'button',
      accessibilityRole: "button",
      accessibilityComponentType: "button",
      accessibilityLabel: tab.props.label,
      accessibilityState: {
        selected: active
      },
      testID: `tab_${tabIndex}`,
      children: /*#__PURE__*/_jsxs(View, {
        style: [styles.touchableRippleInner, iconPosition === 'top' && styles.touchableRippleInnerTop],
        children: [tab.props.icon ? /*#__PURE__*/_jsx(View, {
          style: [styles.iconContainer, iconPosition !== 'top' && styles.marginRight],
          children: tab.props.icon ? Platform.OS === 'android' ? /*#__PURE__*/_jsx(Animated.View, {
            style: {
              opacity
            },
            children: /*#__PURE__*/_jsx(MaterialCommunityIcon, {
              selectable: false,
              accessibilityElementsHidden: true,
              importantForAccessibility: "no",
              name: tab.props.icon,
              color: textColor,
              size: 24
            })
          }) : /*#__PURE__*/_jsx(MaterialCommunityIcon, {
            selectable: false,
            accessibilityElementsHidden: true,
            importantForAccessibility: "no",
            name: tab.props.icon,
            style: {
              color,
              opacity
            },
            size: 24
          }) : null
        }) : null, badgeIsFilled ? /*#__PURE__*/_jsx(View, {
          style: [styles.badgeContainer, {
            right: (badgeWithoutContent ? String(tab.props.badge).length * -2 : 0) - 2
          }],
          children: badgeWithoutContent ? /*#__PURE__*/_jsx(Badge, {
            visible: true,
            size: 8,
            theme: theme
          }) : /*#__PURE__*/_jsx(Badge, {
            visible: true,
            size: 16,
            theme: theme,
            children: tab.props.badge
          })
        }) : null, showTextLabel ? /*#__PURE__*/_jsx(AnimatedText, {
          selectable: false,
          style: [styles.text, iconPosition === 'top' && styles.textTop, {
            ...theme.fonts.titleSmall,
            color,
            opacity
          }, tabLabelStyle],
          children: uppercase && !theme.isV3 ? tab.props.label.toUpperCase() : tab.props.label
        }) : null]
      })
    })
  }, tab.props.label);
}
const styles = StyleSheet.create({
  badgeContainer: {
    position: 'absolute',
    left: 0,
    top: -2
  },
  tabRoot: {
    position: 'relative'
  },
  tabRootFixed: {
    flex: 1
  },
  touchableRipple: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  touchableRippleTop: {
    height: 72
  },
  touchableRippleInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 16,
    paddingLeft: 16,
    minWidth: 90,
    maxWidth: 360
  },
  touchableRippleInnerTop: {
    flexDirection: 'column'
  },
  touchableRippleDisabled: {
    opacity: 0.4
  },
  iconContainer: {
    width: 24,
    height: 24
  },
  text: {
    textAlign: 'center',
    letterSpacing: 1,
    ...Platform.select({
      web: {
        transitionDuration: '150ms',
        transitionProperty: 'all'
      },
      default: {}
    })
  },
  textTop: {
    marginTop: 6
  },
  marginRight: {
    marginRight: 8
  }
});
//# sourceMappingURL=TabsHeaderItem.js.map