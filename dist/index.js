(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}(function () { 'use strict';

  // 全局变量
  const app = {
    data: {}
  };

  /****************************************
   * canvas 相关功能
   ***************************************/
  function createCanvas() {
    return document.createElement('canvas');
  }
  function getContext(canvas, width, height) {
    canvas = canvas || createCanvas();
    canvas.width = width || 750;
    canvas.height = height || 1334;
    return canvas.getContext('2d');
  }
  const useTempCanvas = (() => {
    const canvas = createCanvas();
    return function(raw_ctx, func) {
      const w = raw_ctx.canvas.width;
      const h = raw_ctx.canvas.height;
      const ctx = getContext(canvas, w, h);
      ctx.clearRect(0, 0, w, h);
      ctx.save();
      func && func(ctx, raw_ctx);
      raw_ctx.drawImage(canvas, 0, 0, w, h);
      ctx.restore();
    };
  })();
  // 驼峰
  function camelize(str) {
    return str.toLowerCase().replace(/-(\w)/g, (_, s) => (s ? s.toUpperCase() : ''));
  }

  // 诸如 padding 转为 t/r/b/l 四个值
  function one2four(str) {
    const temp = str.split(' ');
    let top, right, bottom, left;
    if (temp.length === 1) [top, right = top, bottom = top, left = top] = temp;
    if (temp.length === 2) [top, right, bottom = top, left = right] = temp;
    if (temp.length === 3) [top, right, bottom, left = right] = temp;
    if (temp.length === 4) [top, right, bottom, left] = temp;
    return { top, right, bottom, left };
  }

  function one2three(str, pre, styles) {
    const temp = str.split(' ');
    let [width, style, color] = temp;
    style = style || styles[pre + style];
    color = color || styles[pre + color];
    return { width, style, color };
  }

  // 将 left 改为 paddingLeft 之类的
  // addPrefix(styles, 'padding', { left: 0 }); // { paddingLeft: 0 }
  function addPrefix(styles, pre, data) {
    for (const attr in data) {
      if (pre === attr) continue;
      const value = data[attr];
      const newAttr = camelize(`${pre}-${attr}`);
      styles[newAttr] = value;
    }
    return data;
  }

  /**
   * 样式计算中心
   * 即子元素与 padding 与 paddingLeft 等的转化计算过程
   */
  class StyleConvert {
    convert(oldStyle, dom) {
      const newStyle = this;
      for (const attr in newStyle) {
        let newValue = newStyle[attr];
        let oldValue = oldStyle[attr];
        delete newStyle[attr];
        // 先拆，比如 padding 改变则 paddingLeft 改变
        // 再合，比如 paddingLeft 改变则 padding 改变
        if (attr === 'padding') {
          addPrefix(oldStyle, 'padding', one2four(newValue));
        } else if (attr === 'margin') {
          addPrefix(oldStyle, 'margin', one2four(newValue));
        } else if (attr === 'border') {
          addPrefix(oldStyle, 'margin', one2three(newValue));
        } else if (attr === 'background') ; else {
          dom[attr] = newValue;
        }
      }
    }
  }

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
   * 即 dom.style 对象
   */

  function CSSStyleDeclaration(dom) {
    const sc = new StyleConvert();
    let style = {};
    style.convert = () => sc.convert(style, dom);
    style = new Proxy(style, {
      set: function (target, key, value, receiver) {
        sc[key] = value;  // 外显结果，比如给予 padding，但其实并未处理
        if (value != target[key]) {
          target[key] = value; // 临时赋值，在下个渲染周期进行处理，比如给的 target.padding='0' 会转为 sc.padding='0px 0px 0px 0px'
        }
        return receiver;
      },
      get: function(target, key) {
        if (key in target) return target[key];
        return defaultStyle[key];
      }
    });
    return style;
  }

  /**
   * 样式绘制中心
   */
  function StyleRender(ctx, style, dom) {
    const { x, y, width, height } = dom;
    ctx.rect(x, y, width, height);
    // 背景
    ctx.fillStyle = style.backgroundColor;
    ctx.fill();
    // 边框
    const borderWidth = parseFloat(style.borderWidth) || 0;
    if (borderWidth) { // lineWidth 设 0 也还是 1，所以只能这么搞了
      ctx.strokeStyle = style.borderColor;
      ctx.lineWidth = borderWidth;
      ctx.stroke();
    }
  }

  /**
   * 所有元素节点的基础
   * 即 dom 对象
   */
  let domId = 0;

  class Sprite {
    constructor(style) {
      this.domId = ++domId;
      this.style = new CSSStyleDeclaration(this);

      this.x = 0;
      this.y = 0;
      this.width = 0;
      this.height = 0;

      this.children = [];
      this.parent = void 0;

      for (const attr in style) {
        this.style[attr] = style[attr];
      }
    }
    render(ctx) {
      this._drawNode(ctx, this);
      const { children = [] } = this;
      children.forEach(el => el._drawNode(ctx, el));
    }
    _drawNode(raw_ctx, node) {
      const { parent } = node;
      if (!parent) {
        // 直接绘制
        node.draw(raw_ctx);
      } else {
        // 有父元素的会被裁剪
        useTempCanvas(raw_ctx, ctx => {
          node.draw(ctx);
          ctx.globalCompositeOperation = 'destination-in';
          parent.draw(ctx);
          ctx.globalCompositeOperation = 'source-over';
        });
      }
    }
    draw(ctx) {
      // 将 padding 转为 paddingLeft 等
      this.style.convert(this);

      // 各式公共样式的处理，如背景/边框等
      StyleRender(ctx, this.style, this);

      // 各节点特有的绘制方案
      if (this.customDraw) {
        this.customDraw(ctx);
      }
    }
    appendChild(el) {
      el.parent = this;
      this.children.push(el);
    }
    removeChild(el) {
      this.child = this.children.filter(child => child !== el);
    }
  }

  /**
   * 块级盒子
   */

  class BlockBox extends Sprite {
    constructor(style) {
      super(style);
    }
  }

  /**
   * 内联盒子
   */

  class InlineBox extends Sprite {
    constructor(style) {
      super(style);
    }
  }

  /**
   * 首页
   */

  class Index extends BlockBox {
    constructor(style) {
      super(style);

      this.style.backgroundColor = 'pink';
      const inline = new InlineBox({
        width: 100,
        height: 200,
        backgroundColor: 'red'
      });
      this.appendChild(inline);
    }
  }

  /**
   * 绘制插件初始入口
   */

  class Main {
    constructor(canvas, ctx, width, height) {
      const MainPage = new Index({ width, height });

      (function loop() {
        ctx.clearRect(0, 0, width, height);
        MainPage.render(ctx);
        requestAnimationFrame(loop);
      })();
    }
  }

  /* 测试用 */
  window.test = function(length, ...args) {
    if (!this.xxx || this.xxx < length) {
      console.log(...args);
      this.xxx = ++this.xxx || 1;
    }
  };

  /**
   * 页面初始入口
   */

  app.data.winW = 750;
  app.data.winH = 1334;
  const winW = app.data.winW;
  const winH = app.data.winH;

  const canvas = createCanvas();
  const ctx = getContext(canvas, winW, winH);
  document.body.append(canvas);

  new Main(canvas, ctx, winW, winH);

}));
