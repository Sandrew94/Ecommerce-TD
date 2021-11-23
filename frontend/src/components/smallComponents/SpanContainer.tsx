import * as React from "react";
import { SpanWrapper } from "../../styles/smallComponents/SpanStyle.style";

interface ISpanStyleProps {
  children?: React.ReactNode;
}

const SpanContainer: React.FunctionComponent<ISpanStyleProps> = ({
  children,
}) => {
  return <SpanWrapper>{children}</SpanWrapper>;
};

export default SpanContainer;
