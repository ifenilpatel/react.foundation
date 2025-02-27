import { ReactNode } from "react";

const Card = ({ children }: { children: ReactNode }) => {
  return <div className="bg-white shadow-md rounded-md">{children}</div>;
};

const Title = ({ children }: { children: ReactNode }) => {
  return <div className="p-2">{children}</div>;
};

const Body = ({ children }: { children: ReactNode }) => {
  return <div className="p-2">{children}</div>;
};

const Footer = ({ children }: { children: ReactNode }) => {
  return <div className="p-2">{children}</div>;
};

// Attach components to Card
Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
