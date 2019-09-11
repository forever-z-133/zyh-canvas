(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}(function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
      return;
    }

    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  /**
   * 样式计算中心
   */
  var StyleConvert =
  /*#__PURE__*/
  function () {
    function StyleConvert() {
      _classCallCheck(this, StyleConvert);
    }

    _createClass(StyleConvert, [{
      key: "convert",
      value: function convert(style, dom) {
        var newStyle = this;

        for (var attr in newStyle) {
          var newValue = newStyle[attr];
          var oldValue = style[attr];
          delete newStyle[attr];

          if (attr === 'padding') {
            this.addPrefix(style, 'padding', this.one2four(newValue));
          }

          if (attr === 'left') {
            newValue = parseFloat(newValue);
            oldValue = parseFloat(oldValue);
            dom.x += newValue - oldValue;
          } else {
            style[attr] = newValue;
          }
        }
      } // 诸如 padding 转为 t/r/b/l 四个值

    }, {
      key: "one2four",
      value: function one2four(str) {
        var temp = str.split(' ');
        var top, right, bottom, left;

        if (temp.length === 1) {
          var _temp = _slicedToArray(temp, 4);

          top = _temp[0];
          var _temp$ = _temp[1];
          right = _temp$ === void 0 ? top : _temp$;
          var _temp$2 = _temp[2];
          bottom = _temp$2 === void 0 ? top : _temp$2;
          var _temp$3 = _temp[3];
          left = _temp$3 === void 0 ? top : _temp$3;
        }

        if (temp.length === 2) {
          var _temp2 = _slicedToArray(temp, 4);

          top = _temp2[0];
          right = _temp2[1];
          var _temp2$ = _temp2[2];
          bottom = _temp2$ === void 0 ? top : _temp2$;
          var _temp2$2 = _temp2[3];
          left = _temp2$2 === void 0 ? right : _temp2$2;
        }

        if (temp.length === 3) {
          var _temp3 = _slicedToArray(temp, 4);

          top = _temp3[0];
          right = _temp3[1];
          bottom = _temp3[2];
          var _temp3$ = _temp3[3];
          left = _temp3$ === void 0 ? right : _temp3$;
        }

        if (temp.length === 4) {
          var _temp4 = _slicedToArray(temp, 4);

          top = _temp4[0];
          right = _temp4[1];
          bottom = _temp4[2];
          left = _temp4[3];
        }

        return {
          top: top,
          right: right,
          bottom: bottom,
          left: left
        };
      } // 将 left 改为 paddingLeft 之类的

    }, {
      key: "addPrefix",
      value: function addPrefix(style, pre, data) {
        if (!pre || !data) throw new Error('缺少相应入参');

        for (var attr in data) {
          var newAttr = pre + attr.toFirstUpperCase();
          style[newAttr] = data[attr];
        }
      }
    }]);

    return StyleConvert;
  }();

  var alignContent = "normal";
  var alignItems = "normal";
  var alignSelf = "auto";
  var alignmentBaseline = "auto";
  var all = "";
  var animation = "none 0s ease 0s 1 normal none running";
  var animationDelay = "0s";
  var animationDirection = "normal";
  var animationDuration = "0s";
  var animationFillMode = "none";
  var animationIterationCount = "1";
  var animationName = "none";
  var animationPlayState = "running";
  var animationTimingFunction = "ease";
  var backfaceVisibility = "visible";
  var background = "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box";
  var backgroundAttachment = "scroll";
  var backgroundBlendMode = "normal";
  var backgroundClip = "border-box";
  var backgroundColor = "rgba(0, 0, 0, 0)";
  var backgroundImage = "none";
  var backgroundOrigin = "padding-box";
  var backgroundPosition = "0% 0%";
  var backgroundPositionX = "0%";
  var backgroundPositionY = "0%";
  var backgroundRepeat = "repeat";
  var backgroundRepeatX = "";
  var backgroundRepeatY = "";
  var backgroundSize = "auto";
  var baselineShift = "0px";
  var blockSize = "0px";
  var border = "0px none rgb(0, 0, 0)";
  var borderBlockEnd = "0px none rgb(0, 0, 0)";
  var borderBlockEndColor = "rgb(0, 0, 0)";
  var borderBlockEndStyle = "none";
  var borderBlockEndWidth = "0px";
  var borderBlockStart = "0px none rgb(0, 0, 0)";
  var borderBlockStartColor = "rgb(0, 0, 0)";
  var borderBlockStartStyle = "none";
  var borderBlockStartWidth = "0px";
  var borderBottom = "0px none rgb(0, 0, 0)";
  var borderBottomColor = "rgb(0, 0, 0)";
  var borderBottomLeftRadius = "0px";
  var borderBottomRightRadius = "0px";
  var borderBottomStyle = "none";
  var borderBottomWidth = "0px";
  var borderCollapse = "separate";
  var borderColor = "rgb(0, 0, 0)";
  var borderImage = "none";
  var borderImageOutset = "0px";
  var borderImageRepeat = "stretch";
  var borderImageSlice = "100%";
  var borderImageSource = "none";
  var borderImageWidth = "1";
  var borderInlineEnd = "0px none rgb(0, 0, 0)";
  var borderInlineEndColor = "rgb(0, 0, 0)";
  var borderInlineEndStyle = "none";
  var borderInlineEndWidth = "0px";
  var borderInlineStart = "0px none rgb(0, 0, 0)";
  var borderInlineStartColor = "rgb(0, 0, 0)";
  var borderInlineStartStyle = "none";
  var borderInlineStartWidth = "0px";
  var borderLeft = "0px none rgb(0, 0, 0)";
  var borderLeftColor = "rgb(0, 0, 0)";
  var borderLeftStyle = "none";
  var borderLeftWidth = "0px";
  var borderRadius = "0px";
  var borderRight = "0px none rgb(0, 0, 0)";
  var borderRightColor = "rgb(0, 0, 0)";
  var borderRightStyle = "none";
  var borderRightWidth = "0px";
  var borderSpacing = "0px 0px";
  var borderStyle = "none";
  var borderTop = "0px none rgb(0, 0, 0)";
  var borderTopColor = "rgb(0, 0, 0)";
  var borderTopLeftRadius = "0px";
  var borderTopRightRadius = "0px";
  var borderTopStyle = "none";
  var borderTopWidth = "0px";
  var borderWidth = "0px";
  var bottom = "auto";
  var boxShadow = "none";
  var boxSizing = "content-box";
  var breakAfter = "auto";
  var breakBefore = "auto";
  var breakInside = "auto";
  var bufferedRendering = "auto";
  var captionSide = "top";
  var caretColor = "rgb(0, 0, 0)";
  var clear = "none";
  var clip = "auto";
  var clipPath = "none";
  var clipRule = "nonzero";
  var color = "rgb(0, 0, 0)";
  var colorInterpolation = "srgb";
  var colorInterpolationFilters = "linearrgb";
  var colorRendering = "auto";
  var columnCount = "auto";
  var columnFill = "balance";
  var columnGap = "normal";
  var columnRule = "0px none rgb(0, 0, 0)";
  var columnRuleColor = "rgb(0, 0, 0)";
  var columnRuleStyle = "none";
  var columnRuleWidth = "0px";
  var columnSpan = "none";
  var columnWidth = "auto";
  var columns = "auto auto";
  var contain = "none";
  var content = "normal";
  var counterIncrement = "none";
  var counterReset = "none";
  var cssFloat = "none";
  var cssText = "";
  var cursor = "auto";
  var cx = "0px";
  var cy = "0px";
  var d = "none";
  var direction = "ltr";
  var display = "block";
  var dominantBaseline = "auto";
  var emptyCells = "show";
  var fill = "rgb(0, 0, 0)";
  var fillOpacity = "1";
  var fillRule = "nonzero";
  var filter = "none";
  var flex = "0 1 auto";
  var flexBasis = "auto";
  var flexDirection = "row";
  var flexFlow = "row nowrap";
  var flexGrow = "0";
  var flexShrink = "1";
  var flexWrap = "nowrap";
  var float = "none";
  var floodColor = "rgb(0, 0, 0)";
  var floodOpacity = "1";
  var font = "normal normal 400 normal 16px / normal Microsoft YaHei";
  var fontDisplay = "";
  var fontFamily = "Microsoft YaHei";
  var fontFeatureSettings = "normal";
  var fontKerning = "auto";
  var fontSize = "16px";
  var fontStretch = "100%";
  var fontStyle = "normal";
  var fontVariant = "normal";
  var fontVariantCaps = "normal";
  var fontVariantEastAsian = "normal";
  var fontVariantLigatures = "normal";
  var fontVariantNumeric = "normal";
  var fontVariationSettings = "normal";
  var fontWeight = "400";
  var gap = "normal normal";
  var grid = "none / none / none / row / auto / auto";
  var gridArea = "auto / auto / auto / auto";
  var gridAutoColumns = "auto";
  var gridAutoFlow = "row";
  var gridAutoRows = "auto";
  var gridColumn = "auto / auto";
  var gridColumnEnd = "auto";
  var gridColumnGap = "normal";
  var gridColumnStart = "auto";
  var gridGap = "normal normal";
  var gridRow = "auto / auto";
  var gridRowEnd = "auto";
  var gridRowGap = "normal";
  var gridRowStart = "auto";
  var gridTemplate = "none / none / none";
  var gridTemplateAreas = "none";
  var gridTemplateColumns = "none";
  var gridTemplateRows = "none";
  var height = "0px";
  var hyphens = "manual";
  var imageRendering = "auto";
  var inlineSize = "1343px";
  var isolation = "auto";
  var justifyContent = "normal";
  var justifyItems = "normal";
  var justifySelf = "auto";
  var left = "auto";
  var length = 279;
  var letterSpacing = "normal";
  var lightingColor = "rgb(255, 255, 255)";
  var lineBreak = "auto";
  var lineHeight = "normal";
  var listStyle = "disc outside none";
  var listStyleImage = "none";
  var listStylePosition = "outside";
  var listStyleType = "disc";
  var margin = "0px";
  var marginBlockEnd = "0px";
  var marginBlockStart = "0px";
  var marginBottom = "0px";
  var marginInlineEnd = "0px";
  var marginInlineStart = "0px";
  var marginLeft = "0px";
  var marginRight = "0px";
  var marginTop = "0px";
  var marker = "";
  var markerEnd = "none";
  var markerMid = "none";
  var markerStart = "none";
  var mask = "none";
  var maskType = "luminance";
  var maxBlockSize = "none";
  var maxHeight = "none";
  var maxInlineSize = "none";
  var maxWidth = "none";
  var maxZoom = "";
  var minBlockSize = "0px";
  var minHeight = "0px";
  var minInlineSize = "0px";
  var minWidth = "0px";
  var minZoom = "";
  var mixBlendMode = "normal";
  var objectFit = "fill";
  var objectPosition = "50% 50%";
  var offset = "none 0px auto 0deg";
  var offsetDistance = "0px";
  var offsetPath = "none";
  var offsetRotate = "auto 0deg";
  var opacity = "1";
  var order = "0";
  var orientation = "";
  var orphans = "2";
  var outline = "rgb(0, 0, 0) none 0px";
  var outlineColor = "rgb(0, 0, 0)";
  var outlineOffset = "0px";
  var outlineStyle = "none";
  var outlineWidth = "0px";
  var overflow = "visible";
  var overflowAnchor = "auto";
  var overflowWrap = "normal";
  var overflowX = "visible";
  var overflowY = "visible";
  var overscrollBehavior = "auto auto";
  var overscrollBehaviorX = "auto";
  var overscrollBehaviorY = "auto";
  var padding = "0px";
  var paddingBlockEnd = "0px";
  var paddingBlockStart = "0px";
  var paddingBottom = "0px";
  var paddingInlineEnd = "0px";
  var paddingInlineStart = "0px";
  var paddingLeft = "0px";
  var paddingRight = "0px";
  var paddingTop = "0px";
  var page = "";
  var pageBreakAfter = "auto";
  var pageBreakBefore = "auto";
  var pageBreakInside = "auto";
  var paintOrder = "normal";
  var parentRule = null;
  var perspective = "none";
  var perspectiveOrigin = "671.5px 0px";
  var placeContent = "normal normal";
  var placeItems = "normal normal";
  var placeSelf = "auto auto";
  var pointerEvents = "auto";
  var position = "static";
  var quotes = "";
  var r = "0px";
  var resize = "none";
  var right = "auto";
  var rowGap = "normal";
  var rx = "auto";
  var ry = "auto";
  var scrollBehavior = "auto";
  var scrollMargin = "0px";
  var scrollMarginBlock = "0px";
  var scrollMarginBlockEnd = "0px";
  var scrollMarginBlockStart = "0px";
  var scrollMarginBottom = "0px";
  var scrollMarginInline = "0px";
  var scrollMarginInlineEnd = "0px";
  var scrollMarginInlineStart = "0px";
  var scrollMarginLeft = "0px";
  var scrollMarginRight = "0px";
  var scrollMarginTop = "0px";
  var scrollPadding = "auto";
  var scrollPaddingBlock = "auto";
  var scrollPaddingBlockEnd = "auto";
  var scrollPaddingBlockStart = "auto";
  var scrollPaddingBottom = "auto";
  var scrollPaddingInline = "auto";
  var scrollPaddingInlineEnd = "auto";
  var scrollPaddingInlineStart = "auto";
  var scrollPaddingLeft = "auto";
  var scrollPaddingRight = "auto";
  var scrollPaddingTop = "auto";
  var scrollSnapAlign = "none";
  var scrollSnapStop = "normal";
  var scrollSnapType = "none";
  var shapeImageThreshold = "0";
  var shapeMargin = "0px";
  var shapeOutside = "none";
  var shapeRendering = "auto";
  var size = "";
  var speak = "normal";
  var src = "";
  var stopColor = "rgb(0, 0, 0)";
  var stopOpacity = "1";
  var stroke = "none";
  var strokeDasharray = "none";
  var strokeDashoffset = "0px";
  var strokeLinecap = "butt";
  var strokeLinejoin = "miter";
  var strokeMiterlimit = "4";
  var strokeOpacity = "1";
  var strokeWidth = "1px";
  var tabSize = "8";
  var tableLayout = "auto";
  var textAlign = "start";
  var textAlignLast = "auto";
  var textAnchor = "start";
  var textCombineUpright = "none";
  var textDecoration = "none solid rgb(0, 0, 0)";
  var textDecorationColor = "rgb(0, 0, 0)";
  var textDecorationLine = "none";
  var textDecorationSkipInk = "auto";
  var textDecorationStyle = "solid";
  var textIndent = "0px";
  var textOrientation = "mixed";
  var textOverflow = "clip";
  var textRendering = "auto";
  var textShadow = "none";
  var textSizeAdjust = "auto";
  var textTransform = "none";
  var textUnderlinePosition = "auto";
  var top = "auto";
  var touchAction = "auto";
  var transform = "none";
  var transformBox = "view-box";
  var transformOrigin = "671.5px 0px";
  var transformStyle = "flat";
  var transition = "all 0s ease 0s";
  var transitionDelay = "0s";
  var transitionDuration = "0s";
  var transitionProperty = "all";
  var transitionTimingFunction = "ease";
  var unicodeBidi = "normal";
  var unicodeRange = "";
  var userSelect = "auto";
  var userZoom = "";
  var vectorEffect = "none";
  var verticalAlign = "baseline";
  var visibility = "visible";
  var webkitAlignContent = "normal";
  var webkitAlignItems = "normal";
  var webkitAlignSelf = "auto";
  var webkitAnimation = "none 0s ease 0s 1 normal none running";
  var webkitAnimationDelay = "0s";
  var webkitAnimationDirection = "normal";
  var webkitAnimationDuration = "0s";
  var webkitAnimationFillMode = "none";
  var webkitAnimationIterationCount = "1";
  var webkitAnimationName = "none";
  var webkitAnimationPlayState = "running";
  var webkitAnimationTimingFunction = "ease";
  var webkitAppRegion = "none";
  var webkitAppearance = "none";
  var webkitBackfaceVisibility = "visible";
  var webkitBackgroundClip = "border-box";
  var webkitBackgroundOrigin = "padding-box";
  var webkitBackgroundSize = "auto";
  var webkitBorderAfter = "0px none rgb(0, 0, 0)";
  var webkitBorderAfterColor = "rgb(0, 0, 0)";
  var webkitBorderAfterStyle = "none";
  var webkitBorderAfterWidth = "0px";
  var webkitBorderBefore = "0px none rgb(0, 0, 0)";
  var webkitBorderBeforeColor = "rgb(0, 0, 0)";
  var webkitBorderBeforeStyle = "none";
  var webkitBorderBeforeWidth = "0px";
  var webkitBorderBottomLeftRadius = "0px";
  var webkitBorderBottomRightRadius = "0px";
  var webkitBorderEnd = "0px none rgb(0, 0, 0)";
  var webkitBorderEndColor = "rgb(0, 0, 0)";
  var webkitBorderEndStyle = "none";
  var webkitBorderEndWidth = "0px";
  var webkitBorderHorizontalSpacing = "0px";
  var webkitBorderImage = "none";
  var webkitBorderRadius = "0px";
  var webkitBorderStart = "0px none rgb(0, 0, 0)";
  var webkitBorderStartColor = "rgb(0, 0, 0)";
  var webkitBorderStartStyle = "none";
  var webkitBorderStartWidth = "0px";
  var webkitBorderTopLeftRadius = "0px";
  var webkitBorderTopRightRadius = "0px";
  var webkitBorderVerticalSpacing = "0px";
  var webkitBoxAlign = "stretch";
  var webkitBoxDecorationBreak = "slice";
  var webkitBoxDirection = "normal";
  var webkitBoxFlex = "0";
  var webkitBoxOrdinalGroup = "1";
  var webkitBoxOrient = "horizontal";
  var webkitBoxPack = "start";
  var webkitBoxReflect = "none";
  var webkitBoxShadow = "none";
  var webkitBoxSizing = "content-box";
  var webkitClipPath = "none";
  var webkitColumnBreakAfter = "auto";
  var webkitColumnBreakBefore = "auto";
  var webkitColumnBreakInside = "auto";
  var webkitColumnCount = "auto";
  var webkitColumnGap = "normal";
  var webkitColumnRule = "0px none rgb(0, 0, 0)";
  var webkitColumnRuleColor = "rgb(0, 0, 0)";
  var webkitColumnRuleStyle = "none";
  var webkitColumnRuleWidth = "0px";
  var webkitColumnSpan = "none";
  var webkitColumnWidth = "auto";
  var webkitColumns = "auto auto";
  var webkitFilter = "none";
  var webkitFlex = "0 1 auto";
  var webkitFlexBasis = "auto";
  var webkitFlexDirection = "row";
  var webkitFlexFlow = "row nowrap";
  var webkitFlexGrow = "0";
  var webkitFlexShrink = "1";
  var webkitFlexWrap = "nowrap";
  var webkitFontFeatureSettings = "normal";
  var webkitFontSizeDelta = "";
  var webkitFontSmoothing = "auto";
  var webkitHighlight = "none";
  var webkitHyphenateCharacter = "auto";
  var webkitJustifyContent = "normal";
  var webkitLineBreak = "auto";
  var webkitLineClamp = "none";
  var webkitLocale = "zh-cmn-Hans";
  var webkitLogicalHeight = "0px";
  var webkitLogicalWidth = "1343px";
  var webkitMarginAfter = "0px";
  var webkitMarginAfterCollapse = "collapse";
  var webkitMarginBefore = "0px";
  var webkitMarginBeforeCollapse = "collapse";
  var webkitMarginBottomCollapse = "collapse";
  var webkitMarginCollapse = "";
  var webkitMarginEnd = "0px";
  var webkitMarginStart = "0px";
  var webkitMarginTopCollapse = "collapse";
  var webkitMask = "";
  var webkitMaskBoxImage = "none";
  var webkitMaskBoxImageOutset = "0px";
  var webkitMaskBoxImageRepeat = "stretch";
  var webkitMaskBoxImageSlice = "0 fill";
  var webkitMaskBoxImageSource = "none";
  var webkitMaskBoxImageWidth = "auto";
  var webkitMaskClip = "border-box";
  var webkitMaskComposite = "source-over";
  var webkitMaskImage = "none";
  var webkitMaskOrigin = "border-box";
  var webkitMaskPosition = "0% 0%";
  var webkitMaskPositionX = "0%";
  var webkitMaskPositionY = "0%";
  var webkitMaskRepeat = "repeat";
  var webkitMaskRepeatX = "";
  var webkitMaskRepeatY = "";
  var webkitMaskSize = "auto";
  var webkitMaxLogicalHeight = "none";
  var webkitMaxLogicalWidth = "none";
  var webkitMinLogicalHeight = "0px";
  var webkitMinLogicalWidth = "0px";
  var webkitOpacity = "1";
  var webkitOrder = "0";
  var webkitPaddingAfter = "0px";
  var webkitPaddingBefore = "0px";
  var webkitPaddingEnd = "0px";
  var webkitPaddingStart = "0px";
  var webkitPerspective = "none";
  var webkitPerspectiveOrigin = "671.5px 0px";
  var webkitPerspectiveOriginX = "";
  var webkitPerspectiveOriginY = "";
  var webkitPrintColorAdjust = "economy";
  var webkitRtlOrdering = "logical";
  var webkitRubyPosition = "before";
  var webkitShapeImageThreshold = "0";
  var webkitShapeMargin = "0px";
  var webkitShapeOutside = "none";
  var webkitTapHighlightColor = "rgba(0, 0, 0, 0.18)";
  var webkitTextCombine = "none";
  var webkitTextDecorationsInEffect = "none";
  var webkitTextEmphasis = "";
  var webkitTextEmphasisColor = "rgb(0, 0, 0)";
  var webkitTextEmphasisPosition = "over right";
  var webkitTextEmphasisStyle = "none";
  var webkitTextFillColor = "rgb(0, 0, 0)";
  var webkitTextOrientation = "vertical-right";
  var webkitTextSecurity = "none";
  var webkitTextSizeAdjust = "auto";
  var webkitTextStroke = "";
  var webkitTextStrokeColor = "rgb(0, 0, 0)";
  var webkitTextStrokeWidth = "0px";
  var webkitTransform = "none";
  var webkitTransformOrigin = "671.5px 0px";
  var webkitTransformOriginX = "";
  var webkitTransformOriginY = "";
  var webkitTransformOriginZ = "";
  var webkitTransformStyle = "flat";
  var webkitTransition = "all 0s ease 0s";
  var webkitTransitionDelay = "0s";
  var webkitTransitionDuration = "0s";
  var webkitTransitionProperty = "all";
  var webkitTransitionTimingFunction = "ease";
  var webkitUserDrag = "auto";
  var webkitUserModify = "read-only";
  var webkitUserSelect = "auto";
  var webkitWritingMode = "horizontal-tb";
  var whiteSpace = "normal";
  var widows = "2";
  var width = "1343px";
  var willChange = "auto";
  var wordBreak = "normal";
  var wordSpacing = "0px";
  var wordWrap = "normal";
  var writingMode = "horizontal-tb";
  var x = "0px";
  var y = "0px";
  var zIndex = "auto";
  var zoom = "1";
  var defaultStyle = {
  	alignContent: alignContent,
  	alignItems: alignItems,
  	alignSelf: alignSelf,
  	alignmentBaseline: alignmentBaseline,
  	all: all,
  	animation: animation,
  	animationDelay: animationDelay,
  	animationDirection: animationDirection,
  	animationDuration: animationDuration,
  	animationFillMode: animationFillMode,
  	animationIterationCount: animationIterationCount,
  	animationName: animationName,
  	animationPlayState: animationPlayState,
  	animationTimingFunction: animationTimingFunction,
  	backfaceVisibility: backfaceVisibility,
  	background: background,
  	backgroundAttachment: backgroundAttachment,
  	backgroundBlendMode: backgroundBlendMode,
  	backgroundClip: backgroundClip,
  	backgroundColor: backgroundColor,
  	backgroundImage: backgroundImage,
  	backgroundOrigin: backgroundOrigin,
  	backgroundPosition: backgroundPosition,
  	backgroundPositionX: backgroundPositionX,
  	backgroundPositionY: backgroundPositionY,
  	backgroundRepeat: backgroundRepeat,
  	backgroundRepeatX: backgroundRepeatX,
  	backgroundRepeatY: backgroundRepeatY,
  	backgroundSize: backgroundSize,
  	baselineShift: baselineShift,
  	blockSize: blockSize,
  	border: border,
  	borderBlockEnd: borderBlockEnd,
  	borderBlockEndColor: borderBlockEndColor,
  	borderBlockEndStyle: borderBlockEndStyle,
  	borderBlockEndWidth: borderBlockEndWidth,
  	borderBlockStart: borderBlockStart,
  	borderBlockStartColor: borderBlockStartColor,
  	borderBlockStartStyle: borderBlockStartStyle,
  	borderBlockStartWidth: borderBlockStartWidth,
  	borderBottom: borderBottom,
  	borderBottomColor: borderBottomColor,
  	borderBottomLeftRadius: borderBottomLeftRadius,
  	borderBottomRightRadius: borderBottomRightRadius,
  	borderBottomStyle: borderBottomStyle,
  	borderBottomWidth: borderBottomWidth,
  	borderCollapse: borderCollapse,
  	borderColor: borderColor,
  	borderImage: borderImage,
  	borderImageOutset: borderImageOutset,
  	borderImageRepeat: borderImageRepeat,
  	borderImageSlice: borderImageSlice,
  	borderImageSource: borderImageSource,
  	borderImageWidth: borderImageWidth,
  	borderInlineEnd: borderInlineEnd,
  	borderInlineEndColor: borderInlineEndColor,
  	borderInlineEndStyle: borderInlineEndStyle,
  	borderInlineEndWidth: borderInlineEndWidth,
  	borderInlineStart: borderInlineStart,
  	borderInlineStartColor: borderInlineStartColor,
  	borderInlineStartStyle: borderInlineStartStyle,
  	borderInlineStartWidth: borderInlineStartWidth,
  	borderLeft: borderLeft,
  	borderLeftColor: borderLeftColor,
  	borderLeftStyle: borderLeftStyle,
  	borderLeftWidth: borderLeftWidth,
  	borderRadius: borderRadius,
  	borderRight: borderRight,
  	borderRightColor: borderRightColor,
  	borderRightStyle: borderRightStyle,
  	borderRightWidth: borderRightWidth,
  	borderSpacing: borderSpacing,
  	borderStyle: borderStyle,
  	borderTop: borderTop,
  	borderTopColor: borderTopColor,
  	borderTopLeftRadius: borderTopLeftRadius,
  	borderTopRightRadius: borderTopRightRadius,
  	borderTopStyle: borderTopStyle,
  	borderTopWidth: borderTopWidth,
  	borderWidth: borderWidth,
  	bottom: bottom,
  	boxShadow: boxShadow,
  	boxSizing: boxSizing,
  	breakAfter: breakAfter,
  	breakBefore: breakBefore,
  	breakInside: breakInside,
  	bufferedRendering: bufferedRendering,
  	captionSide: captionSide,
  	caretColor: caretColor,
  	clear: clear,
  	clip: clip,
  	clipPath: clipPath,
  	clipRule: clipRule,
  	color: color,
  	colorInterpolation: colorInterpolation,
  	colorInterpolationFilters: colorInterpolationFilters,
  	colorRendering: colorRendering,
  	columnCount: columnCount,
  	columnFill: columnFill,
  	columnGap: columnGap,
  	columnRule: columnRule,
  	columnRuleColor: columnRuleColor,
  	columnRuleStyle: columnRuleStyle,
  	columnRuleWidth: columnRuleWidth,
  	columnSpan: columnSpan,
  	columnWidth: columnWidth,
  	columns: columns,
  	contain: contain,
  	content: content,
  	counterIncrement: counterIncrement,
  	counterReset: counterReset,
  	cssFloat: cssFloat,
  	cssText: cssText,
  	cursor: cursor,
  	cx: cx,
  	cy: cy,
  	d: d,
  	direction: direction,
  	display: display,
  	dominantBaseline: dominantBaseline,
  	emptyCells: emptyCells,
  	fill: fill,
  	fillOpacity: fillOpacity,
  	fillRule: fillRule,
  	filter: filter,
  	flex: flex,
  	flexBasis: flexBasis,
  	flexDirection: flexDirection,
  	flexFlow: flexFlow,
  	flexGrow: flexGrow,
  	flexShrink: flexShrink,
  	flexWrap: flexWrap,
  	float: float,
  	floodColor: floodColor,
  	floodOpacity: floodOpacity,
  	font: font,
  	fontDisplay: fontDisplay,
  	fontFamily: fontFamily,
  	fontFeatureSettings: fontFeatureSettings,
  	fontKerning: fontKerning,
  	fontSize: fontSize,
  	fontStretch: fontStretch,
  	fontStyle: fontStyle,
  	fontVariant: fontVariant,
  	fontVariantCaps: fontVariantCaps,
  	fontVariantEastAsian: fontVariantEastAsian,
  	fontVariantLigatures: fontVariantLigatures,
  	fontVariantNumeric: fontVariantNumeric,
  	fontVariationSettings: fontVariationSettings,
  	fontWeight: fontWeight,
  	gap: gap,
  	grid: grid,
  	gridArea: gridArea,
  	gridAutoColumns: gridAutoColumns,
  	gridAutoFlow: gridAutoFlow,
  	gridAutoRows: gridAutoRows,
  	gridColumn: gridColumn,
  	gridColumnEnd: gridColumnEnd,
  	gridColumnGap: gridColumnGap,
  	gridColumnStart: gridColumnStart,
  	gridGap: gridGap,
  	gridRow: gridRow,
  	gridRowEnd: gridRowEnd,
  	gridRowGap: gridRowGap,
  	gridRowStart: gridRowStart,
  	gridTemplate: gridTemplate,
  	gridTemplateAreas: gridTemplateAreas,
  	gridTemplateColumns: gridTemplateColumns,
  	gridTemplateRows: gridTemplateRows,
  	height: height,
  	hyphens: hyphens,
  	imageRendering: imageRendering,
  	inlineSize: inlineSize,
  	isolation: isolation,
  	justifyContent: justifyContent,
  	justifyItems: justifyItems,
  	justifySelf: justifySelf,
  	left: left,
  	length: length,
  	letterSpacing: letterSpacing,
  	lightingColor: lightingColor,
  	lineBreak: lineBreak,
  	lineHeight: lineHeight,
  	listStyle: listStyle,
  	listStyleImage: listStyleImage,
  	listStylePosition: listStylePosition,
  	listStyleType: listStyleType,
  	margin: margin,
  	marginBlockEnd: marginBlockEnd,
  	marginBlockStart: marginBlockStart,
  	marginBottom: marginBottom,
  	marginInlineEnd: marginInlineEnd,
  	marginInlineStart: marginInlineStart,
  	marginLeft: marginLeft,
  	marginRight: marginRight,
  	marginTop: marginTop,
  	marker: marker,
  	markerEnd: markerEnd,
  	markerMid: markerMid,
  	markerStart: markerStart,
  	mask: mask,
  	maskType: maskType,
  	maxBlockSize: maxBlockSize,
  	maxHeight: maxHeight,
  	maxInlineSize: maxInlineSize,
  	maxWidth: maxWidth,
  	maxZoom: maxZoom,
  	minBlockSize: minBlockSize,
  	minHeight: minHeight,
  	minInlineSize: minInlineSize,
  	minWidth: minWidth,
  	minZoom: minZoom,
  	mixBlendMode: mixBlendMode,
  	objectFit: objectFit,
  	objectPosition: objectPosition,
  	offset: offset,
  	offsetDistance: offsetDistance,
  	offsetPath: offsetPath,
  	offsetRotate: offsetRotate,
  	opacity: opacity,
  	order: order,
  	orientation: orientation,
  	orphans: orphans,
  	outline: outline,
  	outlineColor: outlineColor,
  	outlineOffset: outlineOffset,
  	outlineStyle: outlineStyle,
  	outlineWidth: outlineWidth,
  	overflow: overflow,
  	overflowAnchor: overflowAnchor,
  	overflowWrap: overflowWrap,
  	overflowX: overflowX,
  	overflowY: overflowY,
  	overscrollBehavior: overscrollBehavior,
  	overscrollBehaviorX: overscrollBehaviorX,
  	overscrollBehaviorY: overscrollBehaviorY,
  	padding: padding,
  	paddingBlockEnd: paddingBlockEnd,
  	paddingBlockStart: paddingBlockStart,
  	paddingBottom: paddingBottom,
  	paddingInlineEnd: paddingInlineEnd,
  	paddingInlineStart: paddingInlineStart,
  	paddingLeft: paddingLeft,
  	paddingRight: paddingRight,
  	paddingTop: paddingTop,
  	page: page,
  	pageBreakAfter: pageBreakAfter,
  	pageBreakBefore: pageBreakBefore,
  	pageBreakInside: pageBreakInside,
  	paintOrder: paintOrder,
  	parentRule: parentRule,
  	perspective: perspective,
  	perspectiveOrigin: perspectiveOrigin,
  	placeContent: placeContent,
  	placeItems: placeItems,
  	placeSelf: placeSelf,
  	pointerEvents: pointerEvents,
  	position: position,
  	quotes: quotes,
  	r: r,
  	resize: resize,
  	right: right,
  	rowGap: rowGap,
  	rx: rx,
  	ry: ry,
  	scrollBehavior: scrollBehavior,
  	scrollMargin: scrollMargin,
  	scrollMarginBlock: scrollMarginBlock,
  	scrollMarginBlockEnd: scrollMarginBlockEnd,
  	scrollMarginBlockStart: scrollMarginBlockStart,
  	scrollMarginBottom: scrollMarginBottom,
  	scrollMarginInline: scrollMarginInline,
  	scrollMarginInlineEnd: scrollMarginInlineEnd,
  	scrollMarginInlineStart: scrollMarginInlineStart,
  	scrollMarginLeft: scrollMarginLeft,
  	scrollMarginRight: scrollMarginRight,
  	scrollMarginTop: scrollMarginTop,
  	scrollPadding: scrollPadding,
  	scrollPaddingBlock: scrollPaddingBlock,
  	scrollPaddingBlockEnd: scrollPaddingBlockEnd,
  	scrollPaddingBlockStart: scrollPaddingBlockStart,
  	scrollPaddingBottom: scrollPaddingBottom,
  	scrollPaddingInline: scrollPaddingInline,
  	scrollPaddingInlineEnd: scrollPaddingInlineEnd,
  	scrollPaddingInlineStart: scrollPaddingInlineStart,
  	scrollPaddingLeft: scrollPaddingLeft,
  	scrollPaddingRight: scrollPaddingRight,
  	scrollPaddingTop: scrollPaddingTop,
  	scrollSnapAlign: scrollSnapAlign,
  	scrollSnapStop: scrollSnapStop,
  	scrollSnapType: scrollSnapType,
  	shapeImageThreshold: shapeImageThreshold,
  	shapeMargin: shapeMargin,
  	shapeOutside: shapeOutside,
  	shapeRendering: shapeRendering,
  	size: size,
  	speak: speak,
  	src: src,
  	stopColor: stopColor,
  	stopOpacity: stopOpacity,
  	stroke: stroke,
  	strokeDasharray: strokeDasharray,
  	strokeDashoffset: strokeDashoffset,
  	strokeLinecap: strokeLinecap,
  	strokeLinejoin: strokeLinejoin,
  	strokeMiterlimit: strokeMiterlimit,
  	strokeOpacity: strokeOpacity,
  	strokeWidth: strokeWidth,
  	tabSize: tabSize,
  	tableLayout: tableLayout,
  	textAlign: textAlign,
  	textAlignLast: textAlignLast,
  	textAnchor: textAnchor,
  	textCombineUpright: textCombineUpright,
  	textDecoration: textDecoration,
  	textDecorationColor: textDecorationColor,
  	textDecorationLine: textDecorationLine,
  	textDecorationSkipInk: textDecorationSkipInk,
  	textDecorationStyle: textDecorationStyle,
  	textIndent: textIndent,
  	textOrientation: textOrientation,
  	textOverflow: textOverflow,
  	textRendering: textRendering,
  	textShadow: textShadow,
  	textSizeAdjust: textSizeAdjust,
  	textTransform: textTransform,
  	textUnderlinePosition: textUnderlinePosition,
  	top: top,
  	touchAction: touchAction,
  	transform: transform,
  	transformBox: transformBox,
  	transformOrigin: transformOrigin,
  	transformStyle: transformStyle,
  	transition: transition,
  	transitionDelay: transitionDelay,
  	transitionDuration: transitionDuration,
  	transitionProperty: transitionProperty,
  	transitionTimingFunction: transitionTimingFunction,
  	unicodeBidi: unicodeBidi,
  	unicodeRange: unicodeRange,
  	userSelect: userSelect,
  	userZoom: userZoom,
  	vectorEffect: vectorEffect,
  	verticalAlign: verticalAlign,
  	visibility: visibility,
  	webkitAlignContent: webkitAlignContent,
  	webkitAlignItems: webkitAlignItems,
  	webkitAlignSelf: webkitAlignSelf,
  	webkitAnimation: webkitAnimation,
  	webkitAnimationDelay: webkitAnimationDelay,
  	webkitAnimationDirection: webkitAnimationDirection,
  	webkitAnimationDuration: webkitAnimationDuration,
  	webkitAnimationFillMode: webkitAnimationFillMode,
  	webkitAnimationIterationCount: webkitAnimationIterationCount,
  	webkitAnimationName: webkitAnimationName,
  	webkitAnimationPlayState: webkitAnimationPlayState,
  	webkitAnimationTimingFunction: webkitAnimationTimingFunction,
  	webkitAppRegion: webkitAppRegion,
  	webkitAppearance: webkitAppearance,
  	webkitBackfaceVisibility: webkitBackfaceVisibility,
  	webkitBackgroundClip: webkitBackgroundClip,
  	webkitBackgroundOrigin: webkitBackgroundOrigin,
  	webkitBackgroundSize: webkitBackgroundSize,
  	webkitBorderAfter: webkitBorderAfter,
  	webkitBorderAfterColor: webkitBorderAfterColor,
  	webkitBorderAfterStyle: webkitBorderAfterStyle,
  	webkitBorderAfterWidth: webkitBorderAfterWidth,
  	webkitBorderBefore: webkitBorderBefore,
  	webkitBorderBeforeColor: webkitBorderBeforeColor,
  	webkitBorderBeforeStyle: webkitBorderBeforeStyle,
  	webkitBorderBeforeWidth: webkitBorderBeforeWidth,
  	webkitBorderBottomLeftRadius: webkitBorderBottomLeftRadius,
  	webkitBorderBottomRightRadius: webkitBorderBottomRightRadius,
  	webkitBorderEnd: webkitBorderEnd,
  	webkitBorderEndColor: webkitBorderEndColor,
  	webkitBorderEndStyle: webkitBorderEndStyle,
  	webkitBorderEndWidth: webkitBorderEndWidth,
  	webkitBorderHorizontalSpacing: webkitBorderHorizontalSpacing,
  	webkitBorderImage: webkitBorderImage,
  	webkitBorderRadius: webkitBorderRadius,
  	webkitBorderStart: webkitBorderStart,
  	webkitBorderStartColor: webkitBorderStartColor,
  	webkitBorderStartStyle: webkitBorderStartStyle,
  	webkitBorderStartWidth: webkitBorderStartWidth,
  	webkitBorderTopLeftRadius: webkitBorderTopLeftRadius,
  	webkitBorderTopRightRadius: webkitBorderTopRightRadius,
  	webkitBorderVerticalSpacing: webkitBorderVerticalSpacing,
  	webkitBoxAlign: webkitBoxAlign,
  	webkitBoxDecorationBreak: webkitBoxDecorationBreak,
  	webkitBoxDirection: webkitBoxDirection,
  	webkitBoxFlex: webkitBoxFlex,
  	webkitBoxOrdinalGroup: webkitBoxOrdinalGroup,
  	webkitBoxOrient: webkitBoxOrient,
  	webkitBoxPack: webkitBoxPack,
  	webkitBoxReflect: webkitBoxReflect,
  	webkitBoxShadow: webkitBoxShadow,
  	webkitBoxSizing: webkitBoxSizing,
  	webkitClipPath: webkitClipPath,
  	webkitColumnBreakAfter: webkitColumnBreakAfter,
  	webkitColumnBreakBefore: webkitColumnBreakBefore,
  	webkitColumnBreakInside: webkitColumnBreakInside,
  	webkitColumnCount: webkitColumnCount,
  	webkitColumnGap: webkitColumnGap,
  	webkitColumnRule: webkitColumnRule,
  	webkitColumnRuleColor: webkitColumnRuleColor,
  	webkitColumnRuleStyle: webkitColumnRuleStyle,
  	webkitColumnRuleWidth: webkitColumnRuleWidth,
  	webkitColumnSpan: webkitColumnSpan,
  	webkitColumnWidth: webkitColumnWidth,
  	webkitColumns: webkitColumns,
  	webkitFilter: webkitFilter,
  	webkitFlex: webkitFlex,
  	webkitFlexBasis: webkitFlexBasis,
  	webkitFlexDirection: webkitFlexDirection,
  	webkitFlexFlow: webkitFlexFlow,
  	webkitFlexGrow: webkitFlexGrow,
  	webkitFlexShrink: webkitFlexShrink,
  	webkitFlexWrap: webkitFlexWrap,
  	webkitFontFeatureSettings: webkitFontFeatureSettings,
  	webkitFontSizeDelta: webkitFontSizeDelta,
  	webkitFontSmoothing: webkitFontSmoothing,
  	webkitHighlight: webkitHighlight,
  	webkitHyphenateCharacter: webkitHyphenateCharacter,
  	webkitJustifyContent: webkitJustifyContent,
  	webkitLineBreak: webkitLineBreak,
  	webkitLineClamp: webkitLineClamp,
  	webkitLocale: webkitLocale,
  	webkitLogicalHeight: webkitLogicalHeight,
  	webkitLogicalWidth: webkitLogicalWidth,
  	webkitMarginAfter: webkitMarginAfter,
  	webkitMarginAfterCollapse: webkitMarginAfterCollapse,
  	webkitMarginBefore: webkitMarginBefore,
  	webkitMarginBeforeCollapse: webkitMarginBeforeCollapse,
  	webkitMarginBottomCollapse: webkitMarginBottomCollapse,
  	webkitMarginCollapse: webkitMarginCollapse,
  	webkitMarginEnd: webkitMarginEnd,
  	webkitMarginStart: webkitMarginStart,
  	webkitMarginTopCollapse: webkitMarginTopCollapse,
  	webkitMask: webkitMask,
  	webkitMaskBoxImage: webkitMaskBoxImage,
  	webkitMaskBoxImageOutset: webkitMaskBoxImageOutset,
  	webkitMaskBoxImageRepeat: webkitMaskBoxImageRepeat,
  	webkitMaskBoxImageSlice: webkitMaskBoxImageSlice,
  	webkitMaskBoxImageSource: webkitMaskBoxImageSource,
  	webkitMaskBoxImageWidth: webkitMaskBoxImageWidth,
  	webkitMaskClip: webkitMaskClip,
  	webkitMaskComposite: webkitMaskComposite,
  	webkitMaskImage: webkitMaskImage,
  	webkitMaskOrigin: webkitMaskOrigin,
  	webkitMaskPosition: webkitMaskPosition,
  	webkitMaskPositionX: webkitMaskPositionX,
  	webkitMaskPositionY: webkitMaskPositionY,
  	webkitMaskRepeat: webkitMaskRepeat,
  	webkitMaskRepeatX: webkitMaskRepeatX,
  	webkitMaskRepeatY: webkitMaskRepeatY,
  	webkitMaskSize: webkitMaskSize,
  	webkitMaxLogicalHeight: webkitMaxLogicalHeight,
  	webkitMaxLogicalWidth: webkitMaxLogicalWidth,
  	webkitMinLogicalHeight: webkitMinLogicalHeight,
  	webkitMinLogicalWidth: webkitMinLogicalWidth,
  	webkitOpacity: webkitOpacity,
  	webkitOrder: webkitOrder,
  	webkitPaddingAfter: webkitPaddingAfter,
  	webkitPaddingBefore: webkitPaddingBefore,
  	webkitPaddingEnd: webkitPaddingEnd,
  	webkitPaddingStart: webkitPaddingStart,
  	webkitPerspective: webkitPerspective,
  	webkitPerspectiveOrigin: webkitPerspectiveOrigin,
  	webkitPerspectiveOriginX: webkitPerspectiveOriginX,
  	webkitPerspectiveOriginY: webkitPerspectiveOriginY,
  	webkitPrintColorAdjust: webkitPrintColorAdjust,
  	webkitRtlOrdering: webkitRtlOrdering,
  	webkitRubyPosition: webkitRubyPosition,
  	webkitShapeImageThreshold: webkitShapeImageThreshold,
  	webkitShapeMargin: webkitShapeMargin,
  	webkitShapeOutside: webkitShapeOutside,
  	webkitTapHighlightColor: webkitTapHighlightColor,
  	webkitTextCombine: webkitTextCombine,
  	webkitTextDecorationsInEffect: webkitTextDecorationsInEffect,
  	webkitTextEmphasis: webkitTextEmphasis,
  	webkitTextEmphasisColor: webkitTextEmphasisColor,
  	webkitTextEmphasisPosition: webkitTextEmphasisPosition,
  	webkitTextEmphasisStyle: webkitTextEmphasisStyle,
  	webkitTextFillColor: webkitTextFillColor,
  	webkitTextOrientation: webkitTextOrientation,
  	webkitTextSecurity: webkitTextSecurity,
  	webkitTextSizeAdjust: webkitTextSizeAdjust,
  	webkitTextStroke: webkitTextStroke,
  	webkitTextStrokeColor: webkitTextStrokeColor,
  	webkitTextStrokeWidth: webkitTextStrokeWidth,
  	webkitTransform: webkitTransform,
  	webkitTransformOrigin: webkitTransformOrigin,
  	webkitTransformOriginX: webkitTransformOriginX,
  	webkitTransformOriginY: webkitTransformOriginY,
  	webkitTransformOriginZ: webkitTransformOriginZ,
  	webkitTransformStyle: webkitTransformStyle,
  	webkitTransition: webkitTransition,
  	webkitTransitionDelay: webkitTransitionDelay,
  	webkitTransitionDuration: webkitTransitionDuration,
  	webkitTransitionProperty: webkitTransitionProperty,
  	webkitTransitionTimingFunction: webkitTransitionTimingFunction,
  	webkitUserDrag: webkitUserDrag,
  	webkitUserModify: webkitUserModify,
  	webkitUserSelect: webkitUserSelect,
  	webkitWritingMode: webkitWritingMode,
  	whiteSpace: whiteSpace,
  	widows: widows,
  	width: width,
  	willChange: willChange,
  	wordBreak: wordBreak,
  	wordSpacing: wordSpacing,
  	wordWrap: wordWrap,
  	writingMode: writingMode,
  	x: x,
  	y: y,
  	zIndex: zIndex,
  	zoom: zoom
  };

  /**
   * 样式构造期
   */
  function CSSStyleDeclaration(dom) {
    var sc = new StyleConvert();
    var obj = {};

    obj.convert = function () {
      return sc.convert(obj, dom);
    };

    obj = new Proxy(obj, {
      set: function set(target, key, value, receiver) {
        sc[key] = value;
        target[key] = value;
        return receiver;
      },
      get: function get(target, key) {
        if (key in target) return target[key];
        return defaultStyle[key];
      }
    });
    return obj;
  }

  /**
   * 样式绘制中心
   */
  function StyleRender(ctx, style, dom) {
    var x = dom.x,
        y = dom.y,
        width = dom.width,
        height = dom.height;
    ctx.rect(x, y, width, height); // 背景

    ctx.fillStyle = style.backgroundColor;
    ctx.fill(); // 边框

    var borderWidth = parseFloat(style.borderWidth) || 0;

    if (borderWidth) {
      // lineWidth 设 0 也还是 1，所以只能这么搞了
      ctx.strokeStyle = style.borderColor;
      ctx.lineWidth = borderWidth;
      ctx.stroke();
    }
  }

  /**
   * 公共方法
   */
  var app = {
    data: {}
  };

  String.prototype.toFirstUpperCase = function () {
    return this.slice(0, 1).toUpperCase() + this.slice(1).toLowerCase();
  };
  var getFontSize = function getFontSize(ctx) {
    return parseFloat(ctx.font.split(' ')[0]);
  };
  var getTextWidth = function getTextWidth(ctx, text) {
    return ctx.measureText(text).width;
  };
  var useTempCanvas = function () {
    var canvas = document.createElement('canvas');
    return function (raw_ctx, func) {
      var w = canvas.width = raw_ctx.canvas.width;
      var h = canvas.height = raw_ctx.canvas.height;
      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, w, h);
      func && func(ctx, raw_ctx);
      raw_ctx.drawImage(canvas, 0, 0, w, h);
    };
  }();

  var domId = 0;

  var Sprite =
  /*#__PURE__*/
  function () {
    function Sprite(style) {
      _classCallCheck(this, Sprite);

      this.domId = ++domId;
      this.style = new CSSStyleDeclaration(this);

      for (var attr in style) {
        this.style[attr] = style[attr];
      }

      this.inited = false;
      this.x = 0;
      this.y = 0;
      this.width = 0;
      this.height = 0;
      this.childX = 0;
      this.childY = 0;
      this.childWidth = 0;
      this.childHeight = 0;
      this.child = [];
      this.parent = void 0;
    }

    _createClass(Sprite, [{
      key: "draw",
      value: function draw(ctx) {
        // 绘制本节点
        useTempCanvas(ctx, this._draw.bind(this)); // 绘制子节点

        if (this.child.length) {
          this.child.forEach(function (el) {
            return el.draw(ctx);
          });
        }
      }
    }, {
      key: "_draw",
      value: function _draw(ctx) {
        if (!this.inited) {
          this.inited = true;
          this.child.forEach(function (el) {
            el.init && el.init(ctx);
          });
          this.init && this.init(ctx);
        } // 将 padding 转为 paddingLeft 等


        this.style.convert(this); // 各式公共样式的处理，如背景/边框等

        StyleRender(ctx, this.style, this); // 各节点特有的绘制方案

        if (this.customDraw) {
          this.customDraw(ctx);
        }
      }
    }, {
      key: "addChild",
      value: function addChild(el) {
        var _this = this;

        el.parent = this;
        this.child.push(el); // 部分样式被子级继承

        ['fontSize'].forEach(function (attr) {
          el.style[attr] = _this.style[attr];
        });
      }
    }, {
      key: "removeChild",
      value: function removeChild(el) {
        this.child = this.child.filter(function (item) {
          return item !== el;
        });
      }
    }]);

    return Sprite;
  }();

  var BlockBox =
  /*#__PURE__*/
  function (_Sprite) {
    _inherits(BlockBox, _Sprite);

    function BlockBox(style) {
      _classCallCheck(this, BlockBox);

      return _possibleConstructorReturn(this, _getPrototypeOf(BlockBox).call(this, style));
    }

    _createClass(BlockBox, [{
      key: "init",
      value: function init() {
        this.x = this.parent ? this.parent.x : 0;
        this.y = this.parent ? this.parent.y : 0;

        var _height = this.child.reduce(function (re, el) {
          return re + el.height;
        }, 0);

        this.width = parseFloat(this.style.width) || app.data.winW;
        this.height = parseFloat(this.style.height) || _height;
      }
    }]);

    return BlockBox;
  }(Sprite);

  var TextNode =
  /*#__PURE__*/
  function (_Sprite) {
    _inherits(TextNode, _Sprite);

    function TextNode(text, style) {
      var _this;

      _classCallCheck(this, TextNode);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(TextNode).call(this, style));
      _this.text = text;
      return _this;
    }

    _createClass(TextNode, [{
      key: "init",
      value: function init(ctx) {
        var _this$style = this.style,
            fontSize = _this$style.fontSize,
            fontFamily = _this$style.fontFamily;
        ctx.font = "".concat(fontSize, " ").concat(fontFamily);
        this.width = getTextWidth(ctx, this.text);
        this.height = getFontSize(ctx);
        this.x = this.parent ? this.parent.x : 0;
        this.y = this.parent ? this.parent.y : 0;
      }
    }, {
      key: "customDraw",
      value: function customDraw(ctx) {
        var text = this.text,
            x = this.x,
            y = this.y;
        var _this$style2 = this.style,
            color = _this$style2.color,
            fontSize = _this$style2.fontSize,
            fontFamily = _this$style2.fontFamily;
        ctx.font = "".concat(fontSize, " ").concat(fontFamily);
        ctx.fillStyle = color;
        ctx.textBaseline = 'top';
        ctx.fillText(text, x, y);
      }
    }]);

    return TextNode;
  }(Sprite);

  var InlineBox =
  /*#__PURE__*/
  function (_Sprite) {
    _inherits(InlineBox, _Sprite);

    function InlineBox(style) {
      _classCallCheck(this, InlineBox);

      return _possibleConstructorReturn(this, _getPrototypeOf(InlineBox).call(this, style));
    }

    _createClass(InlineBox, [{
      key: "init",
      value: function init(ctx) {
        this.x = this.parent ? this.parent.x : 0;
        this.y = this.parent ? this.parent.y : 0;
        var width = 0,
            height = 0;
        this.child.forEach(function (el) {
          width += el.width;
          height += el.height;
        });
        this.width = width;
        this.height = height;
      }
    }, {
      key: "customDraw",
      value: function customDraw(ctx) {}
    }]);

    return InlineBox;
  }(Sprite);

  var Index =
  /*#__PURE__*/
  function (_BlockBox) {
    _inherits(Index, _BlockBox);

    function Index(style) {
      var _this;

      _classCallCheck(this, Index);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this, style));
      _this.style.backgroundColor = 'pink';
      var inline = new InlineBox({
        fontSize: '50px',
        backgroundColor: 'red'
      });
      inline.addChild(new TextNode('xx'));

      _this.addChild(inline); // this.addChild(new TextNode('120px', {
      //   color: 'white',
      //   borderWidth: '5px'
      // }));


      setInterval(function () {
        inline.x = parseFloat(inline.x) + 1;
      }, 50);
      return _this;
    }

    return Index;
  }(BlockBox);

  var Main = function Main(canvas, ctx, width, height) {
    _classCallCheck(this, Main);

    var MainPage = new Index({
      width: width,
      height: height
    });

    (function loop() {
      ctx.clearRect(0, 0, width, height);
      MainPage.draw(ctx);
      requestAnimationFrame(loop);
    })();
  };

  /**
   * 页面初始入口
   */

  window.test = function (length) {
    if (!this.xxx || this.xxx < length) {
      var _console;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      (_console = console).log.apply(_console, args);

      this.xxx = ++this.xxx || 1;
    }
  };

  var canvas = document.createElement('canvas');
  var winW = canvas.width = 750;
  var winH = canvas.height = 1334;
  var ctx = canvas.getContext('2d');
  document.body.append(canvas);
  app.data.winW = winW;
  app.data.winH = winH;
  new Main(canvas, ctx, winW, winH);

}));
