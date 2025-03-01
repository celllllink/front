import { ConfigBase } from "unocss";

const FlexKeyValues = {
  s: "flex-start",
  c: "center",
  e: "flex-end",
  sb: "space-between",
  sa: "space-around",
  bl: "baseline",
  sh: "stretch",
};
type FlexKey = "s" | "c" | "e" | "sb" | "sa" | "bl" | "sh";

// justify-content: flex-start | flex-end | center | space-between | space-around;
// align-items: flex-start | flex-end | center | baseline | stretch;
// align-self: auto | flex-start | flex-end | center | baseline | stretch;

// 多根轴线的排列方式
// align-content: flex-start | flex-end | center | space-between | space-around | stretch;

// order
// flex-grow
// flex-shrink
// flex-basis
// flex

export const MetacssRules: ConfigBase["rules"] = [
  /* 布局 */
  // 定位
  ["pt_r", { position: "relative" }],
  ["pt_a", { position: "absolute" }],
  ["pt_f", { position: "fixed" }],
  ["pt_s", { position: "sticky" }],
  // 定位的位置(上下左右)
  [/^t_(\d+)$/, ([, d]) => ({ top: `${d}px` })],
  [/^b_(\d+)$/, ([, d]) => ({ bottom: `${d}px` })],
  [/^l_(\d+)$/, ([, d]) => ({ left: `${d}px` })],
  [/^r_(\d+)$/, ([, d]) => ({ right: `${d}px` })],
  // 浮动
  ["fl", { float: "left" }],
  ["fr", { float: "right" }],
  // flex
  ["row", { display: "flex" }],
  ["column", { display: "flex", "flex-direction": "column" }],
  [/^row-h_(sb|sa|bl|sh|s|c|e)/, ([, d]) => ({ display: "flex", "justify-content": FlexKeyValues[d as FlexKey] })],
  [/^row-v_(sb|sa|bl|sh|s|c|e)/, ([, d]) => ({ display: "flex", "align-items": FlexKeyValues[d as FlexKey] })],
  [
    /^row_(sb|sa|bl|sh|s|c|e)_(sb|sa|bl|sh|s|c|e)/,
    ([, v, h]) => ({ display: "flex", "align-items": FlexKeyValues[v as FlexKey], "justify-content": FlexKeyValues[h as FlexKey] }),
  ],
  ["row-wp_w", { "flex-wrap": "wrap" }],
  ["row-wp_wr", { "flex-wrap": "wrap-reverse" }],
  [/^row-gap_(\d+)$/, ([, d]) => ({ "row-gap": `${d}px` })],
  [
    /^column-h_(sb|sa|bl|sh|s|c|e)/,
    ([, d]) => ({ display: "flex", "flex-direction": "column", "justify-content": FlexKeyValues[d as FlexKey] }),
  ],
  [
    /^column-v_(sb|sa|bl|sh|s|c|e)/,
    ([, d]) => ({ display: "flex", "flex-direction": "column", "align-items": FlexKeyValues[d as FlexKey] }),
  ],
  [
    /^column_(sb|sa|bl|sh|s|c|e)_(sb|sa|bl|sh|s|c|e)/,
    ([, v, h]) => ({
      display: "flex",
      "flex-direction": "column",
      "align-items": FlexKeyValues[v as FlexKey],
      "justify-content": FlexKeyValues[h as FlexKey],
    }),
  ],
  ["column-wp_w", { "flex-wrap": "wrap" }],
  ["column-wp_wr", { "flex-wrap": "wrap-reverse" }],
  [/^column-gap_(\d+)$/, ([, d]) => ({ "column-gap": `${d}px` })],
  [/^flex_(\d+)$/, ([, d]) => ({ flex: `${d}` })],

  /* 盒模型 */
  ["dp_n", { display: "none" }],
  ["dp_b", { display: "block" }],
  ["dp_i", { display: "inline" }],
  ["dp_ib", { display: "inline-block" }],
  // 宽
  [/^w_(\d+)$/, ([, d]) => ({ width: `${d}px` })],
  [/^w_(\d+)vw$/, ([, d]) => ({ width: `${d}vw` })],
  [/^w_(\d+)%$/, ([, d]) => ({ width: `${d}%` })],
  [/^min-w_(\d+)$/, ([, d]) => ({ "min-width": `${d}px` })],
  [/^min-w_(\d+)vw$/, ([, d]) => ({ "min-width": `${d}vw` })],
  [/^min-w_(\d+)%$/, ([, d]) => ({ "min-width": `${d}%` })],
  [/^max-w_(\d+)$/, ([, d]) => ({ "max-width": `${d}px` })],
  [/^max-w_(\d+)vw$/, ([, d]) => ({ "max-width": `${d}vw` })],
  [/^max-w_(\d+)%$/, ([, d]) => ({ "max-width": `${d}%` })],
  // 高
  [/^h_(\d+)$/, ([, d]) => ({ height: `${d}px` })],
  [/^h_(\d+)vh$/, ([, d]) => ({ height: `${d}vh` })],
  [/^h_(\d+)%$/, ([, d]) => ({ height: `${d}%` })],
  [/^min-h_(\d+)$/, ([, d]) => ({ "min-height": `${d}px` })],
  [/^min-h_(\d+)vh$/, ([, d]) => ({ "min-height": `${d}vh` })],
  [/^min-h_(\d+)%$/, ([, d]) => ({ "min-height": `${d}%` })],
  [/^max-h_(\d+)$/, ([, d]) => ({ "max-height": `${d}px` })],
  [/^max-h_(\d+)vh$/, ([, d]) => ({ "max-height": `${d}vh` })],
  [/^max-h_(\d+)%$/, ([, d]) => ({ "max-height": `${d}%` })],
  // 外边距
  [/^mg_(\d+)$/, ([, d]) => ({ margin: `${d}px` })],
  [/^mg-h_(\d+)$/, ([, d]) => ({ "margin-left": `${d}px`, "margin-right": `${d}px` })],
  ["mg-h_a", { margin: "0 auto" }],
  [/^mg-v_(\d+)$/, ([, d]) => ({ "margin-top": `${d}px`, "margin-bottom": `${d}px` })],
  ["mg-v_a", { margin: "auto 0" }],
  [/^mg-t_(\d+)$/, ([, d]) => ({ "margin-top": `${d}px` })],
  [/^mg-b_(\d+)$/, ([, d]) => ({ "margin-bottom": `${d}px` })],
  [/^mg-l_(\d+)$/, ([, d]) => ({ "margin-left": `${d}px` })],
  [/^mg-r_(\d+)$/, ([, d]) => ({ "margin-right": `${d}px` })],
  // 内边距
  [/^pd_(\d+)$/, ([, d]) => ({ padding: `${d}px` })],
  [/^pd-h_(\d+)$/, ([, d]) => ({ "padding-left": `${d}px`, "padding-right": `${d}px` })],
  ["pd-h_a", { padding: "0 auto" }],
  [/^pd-v_(\d+)$/, ([, d]) => ({ "padding-top": `${d}px`, "padding-bottom": `${d}px` })],
  ["pd-v_a", { padding: "auto 0" }],
  [/^pd-t_(\d+)$/, ([, d]) => ({ "padding-top": `${d}px` })],
  [/^pd-b_(\d+)$/, ([, d]) => ({ "padding-bottom": `${d}px` })],
  [/^pd-l_(\d+)$/, ([, d]) => ({ "padding-left": `${d}px` })],
  [/^pd-r_(\d+)$/, ([, d]) => ({ "padding-right": `${d}px` })],
  // 隐藏 滚动
  ["of_h", { overflow: "hidden" }],
  ["of_s", { overflow: "scroll" }],
  ["of_a", { overflow: "auto" }],
  ["of-x_h", { "overflow-x": "hidden" }],
  ["of-x_s", { "overflow-x": "scroll" }],
  ["of-x_a", { "overflow-x": "auto" }],
  ["of-y_h", { "overflow-y": "hidden" }],
  ["of-y_s", { "overflow-y": "scroll" }],
  ["of-y_a", { "overflow-y": "auto" }],

  /* 色彩风格 */
  // 颜色
  ["c_0", { color: "#000000" }],
  ["c_3", { color: "#333333" }],
  ["c_6", { color: "#666666" }],
  ["c_9", { color: "#999999" }],
  [/^c_([0-9a-zA-Z]{6})$/, ([, d]) => ({ color: `#${d}` })],
  // 背景颜色
  [/^bg_([0-9a-zA-Z]{6})$/, ([, d]) => ({ "background-color": `#${d}` })],
  [
    /^bg_([0-9]{1,3})_([0-9]{1,3})_([0-9]{1,3})_([0-9]{1,3})$/,
    ([, r, g, b, a]) => ({ "background-color": `rgba(${r}, ${g}, ${b}, ${+a / 100})` }),
  ],
  // 字体大小
  [/^fs_(\d+)$/, ([, d]) => ({ "font-size": `${d}px` })],
  // 行高
  [/^lh_(\d+)$/, ([, d]) => ({ "line-height": `${d}px` })],
  // 对齐方式
  ["ta_l", { "text-align": "left" }],
  ["ta_l", { "text-align": "center" }],
  ["ta_l", { "text-align": "right" }],
  // 字重
  ["fw", { "font-weight": "bold" }],
  ["fwer", { "font-weight": "bolder" }],
  [/^fw_(\d+)$/, ([, d]) => ({ "font-weight": `${d}` })],
  // 换行
  ["wb_ba", { "word-break": "break-all" }],
  ["wb_ba", { "word-break": "keep-all" }],

  /* 其他 */
  // 鼠标样式
  ["cs_p", { cursor: "pointer" }],
  ["cs_na", { cursor: "not-allowed" }],
  // 层级
  [/^zi_(\d+)$/, ([, d]) => ({ "z-index": `${d}` })],
  // 透明度
  [/^op_(\d+)$/, ([, d]) => ({ opacity: `${+d / 10}` })],
  // 圆角
  [/^br_(\d+)$/, ([, d]) => ({ "border-radius": `${d}px` })],
  [/^br_(\d+)%$/, ([, d]) => ({ "border-radius": `${d}%` })],
  [/^br-tl_(\d+)$/, ([, d]) => ({ "border-top-left-radius": `${d}px` })],
  [/^br_tl_(\d+)%$/, ([, d]) => ({ "border-top-left-radius": `${d}%` })],
  [/^br_tr_(\d+)$/, ([, d]) => ({ "border-top-right-radius": `${d}px` })],
  [/^br_tr_(\d+)%$/, ([, d]) => ({ "border-top-right-radius": `${d}%` })],
  [/^br_bl_(\d+)$/, ([, d]) => ({ "border-bottom-left-radius": `${d}px` })],
  [/^br_bl_(\d+)%$/, ([, d]) => ({ "border-bottom-left-radius": `${d}%` })],
  [/^br_br_(\d+)$/, ([, d]) => ({ "border-bottom-right-radius": `${d}px` })],
  [/^br_br_(\d+)%$/, ([, d]) => ({ "border-bottom-right-radius": `${d}%` })],

  // overflow
  ["of-x_h", { "overflow-x": "hidden" }],
  ["of-y_h", { "overflow-y": "hidden" }],
  ["of_h", { "overflow-x": "hidden", "overflow-y": "hidden" }],
];
