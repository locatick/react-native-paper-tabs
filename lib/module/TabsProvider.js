"use strict";

import React, { useState } from 'react';
import { TabsContext } from "./context.js";
import { jsx as _jsx } from "react/jsx-runtime";
export function TabsProvider({
  children,
  onChangeIndex,
  defaultIndex
}) {
  const [index, setIndex] = useState(defaultIndex || 0);
  const goTo = React.useCallback(ind => {
    setIndex(ind);
    onChangeIndex?.(ind);
  }, [setIndex, onChangeIndex]);
  const value = React.useMemo(() => ({
    goTo,
    index
  }), [goTo, index]);
  return /*#__PURE__*/_jsx(TabsContext.Provider, {
    value: value,
    children: children
  });
}
//# sourceMappingURL=TabsProvider.js.map