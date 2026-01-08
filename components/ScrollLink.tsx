"use client";

import React, { ReactNode } from "react";
import { Link } from "react-scroll";

interface ScrollLinkProps {
  to: string;
  smooth?: boolean;
  offset?: number;
  duration?: number;
  spy?: boolean;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

const ScrollLink: React.FC<ScrollLinkProps> = ({
  to,
  smooth = true,
  offset = -70,
  duration = 500,
  spy = true,
  className,
  children,
  onClick,
  ...props
}) => {
  return (
    <Link
      to={to.replace("#", "")} // Ensure the id does not include #
      smooth={smooth}
      offset={offset}
      duration={duration}
      spy={spy}
      {...props}
      className={className}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default ScrollLink;
