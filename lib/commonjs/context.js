"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabsContext = void 0;
exports.useTabIndex = useTabIndex;
exports.useTabNavigation = useTabNavigation;
var _react = _interopRequireWildcard(require("react"));
var React = _react;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const TabsContext = exports.TabsContext = /*#__PURE__*/React.createContext({
  goTo: () => null,
  index: 0
});
function useTabNavigation() {
  return (0, _react.useContext)(TabsContext).goTo;
}
function useTabIndex() {
  return (0, _react.useContext)(TabsContext).index;
}
//# sourceMappingURL=context.js.map