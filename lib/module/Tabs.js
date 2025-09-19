"use strict";

import * as React from 'react';
import { withTheme } from 'react-native-paper';
import Swiper from './Swiper';
import { jsx as _jsx } from "react/jsx-runtime";
function Tabs({
  theme,
  dark,
  style,
  mode = 'fixed',
  uppercase = true,
  iconPosition = 'leading',
  showTextLabel = true,
  showLeadingSpace = true,
  disableSwipe = false,
  tabHeaderStyle,
  tabLabelStyle,
  ...rest
}) {
  const children = React.Children.toArray(rest.children).filter(Boolean);
  return /*#__PURE__*/_jsx(Swiper, {
    style: style,
    dark: dark,
    theme: theme,
    uppercase: uppercase,
    iconPosition: iconPosition,
    showTextLabel: showTextLabel,
    showLeadingSpace: showLeadingSpace,
    mode: mode,
    disableSwipe: disableSwipe,
    tabHeaderStyle: tabHeaderStyle,
    tabLabelStyle: tabLabelStyle,
    children: children
  });
}
export default withTheme(Tabs);
//# sourceMappingURL=Tabs.js.map