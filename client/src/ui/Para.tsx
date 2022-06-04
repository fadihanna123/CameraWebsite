import { ParaProps } from "models";
import React from "react";

const Para: React.FC<ParaProps> = ({ className, children }: ParaProps) => {
    return <p className={className?.join(" ")}>{children}</p>;
};

export default Para;
