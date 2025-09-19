"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabsProvider = TabsProvider;
var _react = _interopRequireWildcard(require("react"));
var _context = require("./context.js");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function TabsProvider({
  children,
  onChangeIndex,
  defaultIndex
}) {
  const [index, setIndex] = (0, _react.useState)(defaultIndex || 0);
  const goTo = _react.default.useCallback(ind => {
    setIndex(ind);
    onChangeIndex?.(ind);
  }, [setIndex, onChangeIndex]);
  const value = _react.default.useMemo(() => ({
    goTo,
    index
  }), [goTo, index]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_context.TabsContext.Provider, {
    value: value,
    children: children
  });
}
//# sourceMappingURL=TabsProvider.js.map