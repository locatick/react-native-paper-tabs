"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TabsHeader;
var _reactNative = require("react-native");
var _reactNativePaper = require("react-native-paper");
var _color = _interopRequireDefault(require("color"));
var React = _interopRequireWildcard(require("react"));
var _internal = require("./internal");
var _TabsHeaderItem = _interopRequireDefault(require("./TabsHeaderItem.js"));
var _context = require("./context.js");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function TabsHeader({
  position,
  offset,
  theme,
  dark,
  style,
  iconPosition,
  showTextLabel,
  showLeadingSpace,
  uppercase,
  mode,
  tabHeaderStyle,
  tabLabelStyle,
  children
}) {
  const {
    index,
    goTo
  } = React.useContext(_context.TabsContext);
  const {
    colors,
    dark: isDarkTheme,
    mode: themeMode,
    isV3
  } = theme;
  const {
    backgroundColor: customBackground,
    elevation: _elevation,
    ...restStyle
  } = _reactNative.StyleSheet.flatten(style) || {};
  let elevation = theme.isV3 ? _elevation : _elevation || 4;
  let isDark;
  const backgroundColorV2 = isDarkTheme && themeMode === 'adaptive' ? (0, _reactNativePaper.overlay)(elevation || 0, colors.surface) : colors.primary;
  const backgroundColorV3 = theme.colors.surface;
  const backgroundColor = customBackground ? customBackground : isV3 ? backgroundColorV3 : backgroundColorV2;
  let hasPrimaryBackground = colors.primary === backgroundColor;
  if (typeof dark === 'boolean') {
    isDark = dark;
  } else {
    isDark = backgroundColor === 'transparent' ? false :
    // @ts-ignore
    !(0, _color.default)(backgroundColor).isLight();
  }
  const textColorV2 = isDark ? '#fff' : '#000';
  const activeColorV2 = hasPrimaryBackground ? textColorV2 : theme.colors.primary;

  // Color (active)	On surface	md.sys.color.on-surface
  // Color (inactive)	On surface variant	md.sys.color.on-surface-variant
  const textColorV3 = colors.onSurfaceVariant;
  const activeColorV3 = colors.onSurface;
  const textColor = isV3 ? textColorV3 : textColorV2;
  const activeColor = isV3 ? activeColorV3 : activeColorV2;
  const innerScrollSize = React.useRef(null);
  const scrollX = React.useRef(0);
  const scrollRef = React.useRef(null);
  const layouts = React.useRef(null);
  const [tabsLayout, setTabsLayout] = React.useState(null);
  const [indicatorRef, onUpdateTabLayout, indicatorStyle] = (0, _internal.useIndicator)({
    tabsLayout,
    layouts,
    index,
    offset,
    position,
    childrenCount: children.length
  });
  const onTabsLayout = React.useCallback(e => {
    setTabsLayout(e.nativeEvent.layout);
  }, [setTabsLayout]);
  const onTabLayout = React.useCallback((tabIndex, event) => {
    layouts.current = {
      ...layouts.current,
      [tabIndex]: event.nativeEvent.layout
    };
    onUpdateTabLayout();
  }, [layouts, onUpdateTabLayout]);
  const updateScroll = React.useCallback(scrollType => {
    if (!layouts.current) {
      console.log('returning no layout');
      return;
    }
    let cl = layouts.current[index];
    if (!cl || !scrollRef.current || !tabsLayout) {
      console.log('!cl || !scrollRef.current || !tabsLayout');
      return;
    }
    const tabsWidth = tabsLayout.width;
    let scrolledX = scrollX.current;
    if (scrollType === 'next') {
      const next = layouts.current?.[index + 1];
      if (next) {
        cl = next;
      }
    } else if (scrollType === 'prev') {
      const prev = layouts.current?.[index - 1];
      if (prev) {
        cl = prev;
      }
    }
    const relativeX = cl.x - scrolledX;
    const overflowLeft = relativeX;
    const overflowRight = -tabsWidth + relativeX + cl.width;
    if (overflowRight > -50) {
      scrollRef.current.scrollTo({
        x: scrolledX + overflowRight + 50,
        y: 0,
        animated: true
      });
    } else if (overflowLeft < 50) {
      scrollRef.current.scrollTo({
        x: scrolledX + overflowLeft - 50,
        y: 0,
        animated: true
      });
    }
  }, [layouts, index, scrollRef, scrollX, tabsLayout]);

  // subscribes to offset on native devices to scroll tab bar faster when scrolling (iOS only since Android bugs)
  (0, _internal.useOffsetScroller)({
    updateScroll,
    index,
    offset,
    mode
  });

  // updates scroll when index changes (updateScroll function changes to new reference when index changes)
  React.useEffect(() => {
    updateScroll();
  }, [updateScroll]);
  const SurfaceComponent = theme.isV3 ? _reactNative.View : _reactNativePaper.Surface;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Animated.View, {
    style: [styles.relative, tabHeaderStyle],
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(SurfaceComponent, {
      style: [{
        backgroundColor,
        elevation
      }, restStyle, styles.tabs, iconPosition === 'top' && styles.tabsTopIcon],
      onLayout: onTabsLayout,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.ScrollView, {
        ref: scrollRef,
        contentContainerStyle: mode === 'fixed' ? styles.fixedContentContainerStyle : undefined,
        onContentSizeChange: e => {
          innerScrollSize.current = e;
        },
        onScroll: e => {
          scrollX.current = e.nativeEvent.contentOffset.x;
        },
        scrollEventThrottle: 25,
        horizontal: true,
        showsHorizontalScrollIndicator: false,
        alwaysBounceHorizontal: mode === 'scrollable',
        scrollEnabled: mode === 'scrollable',
        children: [mode === 'scrollable' && showLeadingSpace ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
          style: styles.scrollablePadding
        }) : null, React.Children.map(children, (tab, tabIndex) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_TabsHeaderItem.default, {
          theme: theme,
          tabIndex: tabIndex,
          tab: tab,
          active: index === tabIndex,
          onTabLayout: onTabLayout,
          goTo: goTo,
          activeColor: activeColor,
          textColor: textColor,
          position: position,
          offset: offset,
          childrenCount: children.length,
          uppercase: uppercase,
          iconPosition: iconPosition,
          showTextLabel: showTextLabel,
          mode: mode,
          tabLabelStyle: tabLabelStyle
        })), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Animated.View, {
          ref: indicatorRef,
          pointerEvents: "none",
          style: [styles.indicator, {
            backgroundColor: theme.colors.primary
          }, indicatorStyle]
        })]
      }), elevation && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Animated.View, {
        style: [styles.removeTopShadow, {
          height: elevation,
          backgroundColor,
          top: -elevation
        }]
      })]
    })
  });
}
const styles = _reactNative.StyleSheet.create({
  relative: {
    position: 'relative'
  },
  removeTopShadow: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 2
  },
  scrollablePadding: {
    width: 52
  },
  tabs: {
    height: 48
  },
  tabsTopIcon: {
    height: 72
  },
  fixedContentContainerStyle: {
    flex: 1
  },
  indicator: {
    position: 'absolute',
    height: 2,
    width: 1,
    left: 0,
    bottom: 0,
    ..._reactNative.Platform.select({
      web: {
        backgroundColor: 'transparent',
        transitionDuration: '150ms',
        transitionProperty: 'all',
        transformOrigin: 'left',
        willChange: 'transform'
      },
      default: {}
    })
  }
});
//# sourceMappingURL=TabsHeader.js.map