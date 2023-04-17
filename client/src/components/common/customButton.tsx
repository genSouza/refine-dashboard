import React from "react";
import { Button } from "@mui/material";
import { CustomButtonProps } from "interfaces/common";

export const CustomButton = ({
  type,
  title,
  backgroundColor,
  color,
  fullWidth,
  icon,
  handleClick,
}: CustomButtonProps) => {
  return (
    <Button
      sx={{
        flex: fullWidth ? "1" : "unset",
        padding: "10px 15px",
        width: fullWidth ? "100%" : "fit-content",
        minWidth: 130,
        backgroundColor: backgroundColor,
        color: color,
        fontSize: 16,
        fontWeight: 600,
        gap: "10px",
        textTransform: "capitalize",
        "&:hover": {
          opacity: 0.9,
          backgroundColor: backgroundColor,
        },
      }}
      onClick={handleClick}
    >
      {icon}
      {title}
    </Button>
  );
};
