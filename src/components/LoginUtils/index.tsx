import { ReactNode } from "react";
import Tab from "@mui/material/Tab";
import { styled } from "@mui/material/styles";

interface LoginContainerProps {
  children: ReactNode;
  backgroundColor: string;
}
interface LoginDivisorProps {
  children: ReactNode;
  percentage: string;
  backgroundColor: string;
  customClass?: string;
}
interface StyledTabProps {
  label: string;
  value: string;
}

export const LoginContainer: React.FC<LoginContainerProps> = ({
  children,
  backgroundColor,
}) => {
  return (
    <div style={{ width: "100%", backgroundColor: backgroundColor }}>
      {children}
    </div>
  );
};
export const LoginDivisor: React.FC<LoginDivisorProps> = ({
  children,
  percentage,
  backgroundColor,
  customClass,
}) => {
  return (
    <div
      style={{
        width: "100%",
        height: percentage,
        backgroundColor: backgroundColor,
      }}
      className={customClass}
    >
      {children}
    </div>
  );
};

export const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: "none",
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(20),
  marginRight: theme.spacing(1),
  color: "rgba(255, 255, 255, 0.7)",
  "&.Mui-selected": {
    color: "#fff",
    outline: "none ",
  },
  "&.Mui-focusVisible": {
    backgroundColor: "rgba(100, 95, 228, 0.32)",
  },
}));
