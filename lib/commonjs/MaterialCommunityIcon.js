"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
var _jsxRuntime = require("react/jsx-runtime");
let MaterialCommunityIcons;
try {
  MaterialCommunityIcons = _reactNative.Animated.createAnimatedComponent(require('@react-native-vector-icons/material-design-icons').default);
} catch (_e) {
  const e = _e;
  console.log({
    e
  });
  let isErrorLogged = false;

  // Fallback component for icons
  // @ts-ignore
  MaterialCommunityIcons = ({
    name,
    ...rest
  }) => {
    if (!isErrorLogged) {
      if (!/(Cannot find module|Module not found|Cannot resolve module)/.test(e.message)) {
        console.error(e);
      }
      console.warn(`Tried to use the icon '${name}' in a component from 'react-native-paper-tabs', but 'react-native-vector-icons/MaterialCommunityIcons' could not be loaded.`, `To remove this warning, try installing 'react-native-vector-icons' or use another method to specify icon: https://callstack.github.io/react-native-paper/icons.html.`);
      isErrorLogged = true;
    }
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Animated.Text, {
      ...rest,
      selectable: false,
      children: "\u25A1"
    });
  };
}
var _default = exports.default = MaterialCommunityIcons;
//# sourceMappingURL=MaterialCommunityIcon.js.map