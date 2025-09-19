"use strict";

import * as React from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import ViewPager from 'react-native-pager-view';
import { TabsContext } from "./context.js";
import TabsHeader from "./TabsHeader.js";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
const styles = StyleSheet.create({
  viewPager: {
    flex: 1
  }
});
const AnimatedPagerView = Animated.createAnimatedComponent(ViewPager);
function SwiperNative(props) {
  const {
    theme,
    dark,
    style,
    iconPosition,
    showTextLabel,
    uppercase,
    mode,
    showLeadingSpace,
    disableSwipe,
    tabHeaderStyle,
    tabLabelStyle
  } = props;
  const {
    index,
    goTo
  } = React.useContext(TabsContext);
  const indexRef = React.useRef(index || 0);
  let children = props.children;
  const offset = React.useRef(new Animated.Value(0));
  const position = React.useRef(new Animated.Value(index || 0));
  const isScrolling = React.useRef(false);
  const viewPager = React.useRef(undefined);
  React.useEffect(() => {
    if (index !== indexRef.current) {
      isScrolling.current = true;
      // requestAnimationFrame(
      //   () => viewPager.current && viewPager.current.setPage(index)
      // );
      viewPager.current && viewPager.current.setPage(index);
    }
    indexRef.current = index;
    return undefined;
  }, [isScrolling, viewPager, index]);
  const onPageScrollStateChanged = React.useCallback(e => {
    // Keyboard.dismiss();
    isScrolling.current = e.nativeEvent.pageScrollState !== 'idle';
  }, [isScrolling]);
  const onPageSelected = React.useCallback(e => {
    if (isScrolling.current) return;
    isScrolling.current = false;
    const i = e.nativeEvent.position;
    goTo(i);
  }, [isScrolling, goTo]);
  const renderProps = {
    children,
    theme,
    dark,
    style,
    position: position.current,
    offset: offset.current,
    iconPosition,
    showTextLabel,
    showLeadingSpace,
    uppercase,
    mode,
    tabHeaderStyle,
    tabLabelStyle
  };
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx(TabsHeader, {
      ...renderProps
    }), /*#__PURE__*/_jsx(AnimatedPagerView, {
      style: styles.viewPager,
      initialPage: index,
      scrollEnabled: !disableSwipe,
      onPageSelected: onPageSelected,
      ref: viewPager,
      onPageScrollStateChanged: onPageScrollStateChanged,
      onPageScroll: Animated.event([{
        nativeEvent: {
          offset: offset.current,
          position: position.current
        }
      }], {
        useNativeDriver: true
      }),
      children: React.Children.map(children.filter(Boolean), (tab, tabIndex) => /*#__PURE__*/_jsx(View, {
        style: styles.viewPager,
        children: tab
      }, tab.props.label || tabIndex))
    })]
  });
}
export default SwiperNative;
//# sourceMappingURL=Swiper.native.js.map