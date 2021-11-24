import * as CSS from "csstype";

type isActive = { isActive: boolean; color: CSS.Properties["color"] };

export const isActiveClass = ({ isActive, color }: isActive) => ({
  textDecoration: isActive ? "underline" : "none",
  color: isActive ? "#FB2E86" : color,
});
