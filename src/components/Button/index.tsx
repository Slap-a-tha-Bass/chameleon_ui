import { ButtonProps } from "..";
import { CustomButton } from "./button";

export default function Button({
  children,
  disabled,
  onClick,
  bgColor,
  color,
  padding,
  margin,
  borderStyle,
  borderColor,
  borderWidth,
  borderRadius,
}: ButtonProps) {
  const handleClick = () => {
    if (!disabled) {
      onClick();
    }
  };
  return (
    <CustomButton
      disabled={disabled}
      onClick={handleClick}
      bgColor={bgColor}
      color={color}
      padding={padding}
      margin={margin}
      borderStyle={borderStyle}
      borderColor={borderColor}
      borderWidth={borderWidth}
      borderRadius={borderRadius}
    >
      {children}
    </CustomButton>
  );
}
