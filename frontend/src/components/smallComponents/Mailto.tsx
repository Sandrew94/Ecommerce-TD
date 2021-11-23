import * as React from "react";
import { LinkStyleA } from "../../styles/smallComponents/Mailto.style";

interface IMailToProps {
  email: string;
  subject: string;
  body: string;
}

const MailTo: React.FunctionComponent<IMailToProps> = ({
  email,
  subject,
  body,
  children,
}) => {
  return (
    <LinkStyleA
      href={`mailto:${email}?subject=${
        encodeURIComponent(subject) || ""
      }&body=${encodeURIComponent(body) || ""}`}
    >
      {children}
    </LinkStyleA>
  );
};

export default MailTo;
