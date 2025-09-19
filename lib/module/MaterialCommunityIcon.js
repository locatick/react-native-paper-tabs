"use strict";

import { Animated } from 'react-native';
import { jsx as _jsx } from "react/jsx-runtime";
let MaterialCommunityIcons;
try {
  MaterialCommunityIcons = Animated.createAnimatedComponent(require('@react-native-vector-icons/material-design-icons').default);
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
    return /*#__PURE__*/_jsx(Animated.Text, {
      ...rest,
      selectable: false,
      children: "\u25A1"
    });
  };
}
export default MaterialCommunityIcons;
//# sourceMappingURL=MaterialCommunityIcon.js.map