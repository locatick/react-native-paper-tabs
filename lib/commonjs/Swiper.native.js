"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativePagerView = _interopRequireDefault(require("react-native-pager-view"));
var _context = require("./context.js");
var _TabsHeader = _interopRequireDefault(require("./TabsHeader.js"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const styles = _reactNative.StyleSheet.create({
  viewPager: {
    flex: 1
  }
});
const AnimatedPagerView = _reactNative.Animated.createAnimatedComponent(_reactNativePagerView.default);
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
  } = React.useContext(_context.TabsContext);
  const indexRef = React.useRef(index || 0);
  let children = props.children;
  const offset = React.useRef(new _reactNative.Animated.Value(0));
  const position = React.useRef(new _reactNative.Animated.Value(index || 0));
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
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_TabsHeader.default, {
      ...renderProps
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(AnimatedPagerView, {
      style: styles.viewPager,
      initialPage: index,
      scrollEnabled: !disableSwipe,
      onPageSelected: onPageSelected,
      ref: viewPager,
      onPageScrollStateChanged: onPageScrollStateChanged,
      onPageScroll: _reactNative.Animated.event([{
        nativeEvent: {
          offset: offset.current,
          position: position.current
        }
      }], {
        useNativeDriver: true
      }),
      children: React.Children.map(children.filter(Boolean), (tab, tabIndex) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        style: styles.viewPager,
        children: tab
      }, tab.props.label || tabIndex))
    })]
  });
}
var _default = exports.default = SwiperNative;
//# sourceMappingURL=Swiper.native.js.map