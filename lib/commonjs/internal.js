"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAnimatedText = useAnimatedText;
exports.useIndicator = useIndicator;
exports.useOffsetScroller = useOffsetScroller;
var React = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function getIndicatorStyle({
  left,
  width
}) {
  return {
    transform: [{
      scaleX: width
    }, {
      translateX: roundToTwo(left / width) || 0
    }]
  };
}
function roundToTwo(num) {
  return Math.round(num * 100 + Number.EPSILON) / 100;
}
function useIndicator({
  index,
  layouts
}) {
  const [indicatorStyle, setIndicatorStyle] = React.useState(null);
  const indicatorRef = React.useRef(null);
  const updateIndicator = React.useCallback(() => {
    if (!indicatorRef.current || !layouts.current) {
      return;
    }
    const cl = layouts.current[index];
    if (cl) {
      setIndicatorStyle(getIndicatorStyle({
        left: cl.x,
        width: cl.width
      }));
    }
  }, [index, indicatorRef, layouts]);

  // update indicator when index changes (updateIndicator function changes to new reference when index changes)
  React.useEffect(() => {
    updateIndicator();
  }, [updateIndicator]);
  return [indicatorRef, updateIndicator, indicatorStyle];
}
function useOffsetScroller(_) {}
function useAnimatedText({
  activeColor,
  active,
  textColor
}) {
  return React.useMemo(() => ({
    color: active ? activeColor : textColor,
    opacity: active ? 1 : 0.6
  }), [active, activeColor, textColor]);
}
//# sourceMappingURL=internal.js.map