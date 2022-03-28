export const randomStr = (length) => {
  let result = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const showInCssClass = (type, showIn) => {
  if (
    showIn.includes("xs") &&
    showIn.includes("sm") &&
    showIn.includes("md") &&
    showIn.includes("lg")
  ) {
    return "";
  } else if (
    !showIn.includes("xs") &&
    showIn.includes("sm") &&
    showIn.includes("md") &&
    showIn.includes("lg")
  ) {
    return `show-${type}-in-sm-md-lg`;
  } else if (
    !showIn.includes("xs") &&
    !showIn.includes("sm") &&
    showIn.includes("md") &&
    showIn.includes("lg")
  ) {
    return `show-${type}-in-md-lg`;
  } else if (
    !showIn.includes("xs") &&
    !showIn.includes("sm") &&
    !showIn.includes("md") &&
    showIn.includes("lg")
  ) {
    return `show-${type}-in-lg`;
  } else if (
    showIn.includes("xs") &&
    showIn.includes("sm") &&
    showIn.includes("md") &&
    !showIn.includes("lg")
  ) {
    return `show-${type}-in-md-sm-xsm`;
  } else if (
    showIn.includes("xs") &&
    showIn.includes("sm") &&
    !showIn.includes("md") &&
    !showIn.includes("lg")
  ) {
    return `show-${type}-in-sm-xsm`;
  } else if (
    showIn.includes("xs") &&
    !showIn.includes("sm") &&
    !showIn.includes("md") &&
    !showIn.includes("lg")
  ) {
    return `show-${type}-in-xsm`;
  } else {
    console.log(`Please enter only one of the following values for the showIn prop:
    ["xs", "sm", "md", "lg"],
    ["xs", "sm", "md"],
    ["xs", "sm"],
    ["xs"],
    ["sm", "md", "lg"],
    ["md", "lg"],
    ["lg"],
      `);
  }
};
