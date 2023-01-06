export const css = (cssConfig, containerUID, percentage) => {
  let seg_0_90_percentage = 90;
  let seg_90_180_percentage = 90;
  let seg_180_270_percentage = 90;
  let seg_270_360_percentage = 90;
  if (percentage < 25) {
    seg_0_90_percentage = 90 - (percentage / 100) * 360;
  } else if (25 <= percentage && percentage < 50) {
    seg_0_90_percentage = 0;
    seg_90_180_percentage = 90 - (-(25 - percentage) / 100) * 360;
  } else if (50 <= percentage && percentage < 75) {
    seg_0_90_percentage = 0;
    seg_90_180_percentage = 0;
    seg_180_270_percentage = 90 - (-(50 - percentage) / 100) * 360;
  } else if (75 <= percentage) {
    seg_0_90_percentage = 0;
    seg_90_180_percentage = 0;
    seg_180_270_percentage = 0;
    seg_270_360_percentage = 90 - (-(75 - percentage) / 100) * 360;
  }
  return `
        .${containerUID}-seg-0-90 {
            transform: rotate(0deg) skew(${seg_0_90_percentage}deg);
            background-color: ${cssConfig['seg_0_90_bgColor']};
        }
        .${containerUID}-seg-90-180 {
            transform: rotate(90deg) skew(${seg_90_180_percentage}deg);
            background-color: ${cssConfig['seg_90_180_bgColor']};
        }
        .${containerUID}-seg-180-270 {
            transform: rotate(180deg) skew(${seg_180_270_percentage}deg);
            background-color: ${cssConfig['seg_180_270_bgColor']};
        }
        .${containerUID}-seg-270-360 {
            transform: rotate(270deg) skew(${seg_270_360_percentage}deg);
            background-color: ${cssConfig['seg_270_360_bgColor']};
        }
        .${containerUID}-outer-circle {
            width: ${cssConfig['outer_circle_size']}px;
            height: ${cssConfig['outer_circle_size']}px;
            background-color: ${cssConfig['outer_circle_background_color']};
        }
        .${containerUID}-inner-circle {
            width: ${cssConfig['inner_circle_size']}px;
            height: ${cssConfig['inner_circle_size']}px;
            background-color: ${cssConfig['inner_circle_background_color']};
        }`;
};
