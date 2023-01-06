export const css = (cssConfig, containerUID) => {
  if (cssConfig['direction'] === 'up') {
    return `
        .${containerUID}-triangleContainer {
            width: 0;
            height: 0;
            border-left: ${cssConfig['size']}px ${cssConfig['borderType']} transparent;
            border-right: ${cssConfig['size']}px ${cssConfig['borderType']} transparent;
            border-bottom: ${cssConfig['size']}px ${cssConfig['borderType']} ${cssConfig['color']};
    }`;
  } else if (cssConfig['direction'] === 'down') {
    return `
        .${containerUID}-triangleContainer {
            width: 0;
            height: 0;
            border-left: ${cssConfig['size']}px ${cssConfig['borderType']} transparent;
            border-right: ${cssConfig['size']}px ${cssConfig['borderType']} transparent;
            border-top: ${cssConfig['size']}px ${cssConfig['borderType']} ${cssConfig['color']};
    }`;
  } else if (cssConfig['direction'] === 'right') {
    return `
        .${containerUID}-triangleContainer {
            width: 0;
            height: 0;
            border-top: ${cssConfig['size']}px ${cssConfig['borderType']} transparent;
            border-bottom: ${cssConfig['size']}px ${cssConfig['borderType']} transparent;
            border-left: ${cssConfig['size']}px ${cssConfig['borderType']} ${cssConfig['color']};
    }`;
  } else if (cssConfig['direction'] === 'left') {
    return `
        .${containerUID}-triangleContainer {
            width: 0;
            height: 0;
            border-top: ${cssConfig['size']}px ${cssConfig['borderType']} transparent;
            border-bottom: ${cssConfig['size']}px ${cssConfig['borderType']} transparent;
            border-right: ${cssConfig['size']}px ${cssConfig['borderType']} ${cssConfig['color']};
    }`;
  }
};
