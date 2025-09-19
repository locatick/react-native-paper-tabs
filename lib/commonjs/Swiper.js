"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _context = require("./context.js");
var _TabsHeader = _interopRequireDefault(require("./TabsHeader.js"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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
  const index = (0, _context.useTabIndex)();
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
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: styles.root,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_TabsHeader.default, {
      ...renderProps
    }), currentScreen]
  });
}
const styles = _reactNative.StyleSheet.create({
  root: {
    flex: 1
  }
});
var _default = exports.default = Swiper;
//# sourceMappingURL=Swiper.js.map