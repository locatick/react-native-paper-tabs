"use strict";

import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTabIndex } from "./context.js";
import TabsHeader from "./TabsHeader.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function Swiper(props) {
  const {
    theme,
    dark,
    style,
    iconPosition,
    showTextLabel,
    showLeadingSpace,
    uppercase,
    mode,
    tabHeaderStyle,
    tabLabelStyle
  } = props;
  const index = useTabIndex();
  let children = props.children;
  const currentScreen = children[index];
  if (!currentScreen) {
    return null;
  }
  const renderProps = {
    children,
    theme,
    dark,
    style,
    offset: undefined,
    position: undefined,
    iconPosition,
    showTextLabel,
    showLeadingSpace,
    uppercase,
    mode,
    tabHeaderStyle,
    tabLabelStyle
  };
  return /*#__PURE__*/_jsxs(View, {
    style: styles.root,
    children: [/*#__PURE__*/_jsx(TabsHeader, {
      ...renderProps
    }), currentScreen]
  });
}
const styles = StyleSheet.create({
  root: {
    flex: 1
  }
});
export default Swiper;
//# sourceMappingURL=Swiper.js.map