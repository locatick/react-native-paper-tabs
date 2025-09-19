"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNativePaper = require("react-native-paper");
var _Swiper = _interopRequireDefault(require("./Swiper"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Swiper.default, {
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
var _default = exports.default = (0, _reactNativePaper.withTheme)(Tabs);
//# sourceMappingURL=Tabs.js.map