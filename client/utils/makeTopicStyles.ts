export const makeTopicStyle = (tagName: string) => {
  if (tagName == "H1") {
    return { marginLeft: "0" };
  } else if (tagName === "H2") {
    return { marginLeft: "25px" };
  } else if (tagName === "H3") {
    return { marginLeft: "25px" };
  }
};
