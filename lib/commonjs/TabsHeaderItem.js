"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TabsHeaderItem;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativePaper = require("react-native-paper");
var _color = _interopRequireDefault(require("color"));
var _internal = require("./internal");
var _MaterialCommunityIcon = _interopRequireDefault(require("./MaterialCommunityIcon.js"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const AnimatedText = _reactNative.Animated.createAnimatedComponent(_reactNative.Text);
function TabsHeaderItem({
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
  const rippleColor = React.useMemo(() => (0, _color.default)(baseColor).alpha(0.32).rgb().string(), [baseColor]);
  const {
    color,
    opacity
  } = (0, _internal.useAnimatedText)({
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
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
    style: [styles.tabRoot, mode === 'fixed' && styles.tabRootFixed],
    onLayout: e => onTabLayout(tabIndex, e),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativePaper.TouchableRipple, {
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
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
        style: [styles.touchableRippleInner, iconPosition === 'top' && styles.touchableRippleInnerTop],
        children: [tab.props.icon ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
          style: [styles.iconContainer, iconPosition !== 'top' && styles.marginRight],
          children: tab.props.icon ? _reactNative.Platform.OS === 'android' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Animated.View, {
            style: {
              opacity
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_MaterialCommunityIcon.default, {
              selectable: false,
              accessibilityElementsHidden: true,
              importantForAccessibility: "no",
              name: tab.props.icon,
              color: textColor,
              size: 24
            })
          }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_MaterialCommunityIcon.default, {
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
        }) : null, badgeIsFilled ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
          style: [styles.badgeContainer, {
            right: (badgeWithoutContent ? String(tab.props.badge).length * -2 : 0) - 2
          }],
          children: badgeWithoutContent ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativePaper.Badge, {
            visible: true,
            size: 8,
            theme: theme
          }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativePaper.Badge, {
            visible: true,
            size: 16,
            theme: theme,
            children: tab.props.badge
          })
        }) : null, showTextLabel ? /*#__PURE__*/(0, _jsxRuntime.jsx)(AnimatedText, {
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
const styles = _reactNative.StyleSheet.create({
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
    ..._reactNative.Platform.select({
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