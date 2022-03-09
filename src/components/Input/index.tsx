import { CustomInput, InputProps } from "./input";

export default function Input({
  required,
  bgColor,
  color,
  padding,
  margin,
  borderStyle,
  borderColor,
  borderWidth,
  borderRadius,
}: InputProps) {
  return (
    <CustomInput
      required={required}
      bgColor={bgColor}
      color={color}
      padding={padding}
      margin={margin}
      borderStyle={borderStyle}
      borderColor={borderColor}
      borderWidth={borderWidth}
      borderRadius={borderRadius}
    />
  );
}
