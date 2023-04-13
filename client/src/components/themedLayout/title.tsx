import React from "react";
import { useRouterContext, useLink, useRouterType } from "@refinedev/core";
import { Link as MuiLink } from "@mui/material";
import type { RefineLayoutThemedTitleProps } from "@refinedev/mui";
import { yariga, logo } from "assets";

export const Title: React.FC<RefineLayoutThemedTitleProps> = ({
  collapsed,
  wrapperStyles,
}) => {
  const routerType = useRouterType();
  const Link = useLink();
  const { Link: LegacyLink } = useRouterContext();

  const ActiveLink = routerType === "legacy" ? LegacyLink : Link;

  return (
    <MuiLink
      to="/"
      component={ActiveLink}
      underline="none"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        ...wrapperStyles,
      }}
    >
      {!collapsed && (
        <div>
          <img src={yariga} alt="yariga logo and title" />
        </div>
      )}
      {collapsed && (
        <div>
          <img src={logo} alt="yariga logo" />
        </div>
      )}
    </MuiLink>
  );
};
