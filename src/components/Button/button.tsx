import styled from "styled-components";

export const CustomButton = styled.button<ButtonProps>`
  background-color: ${(props) => props.bgColor || "#008cff"};
  color: ${(props) => props.color || "#eeeeee"};
  padding: ${(props) => props.padding || 10}px;
  margin: ${(props) => props.margin || 10}px;
  border-style: ${(props) => props.borderStyle || "solid"};
  border-color: ${(props) => props.borderColor || "transparent"};
  border-width: ${(props) => props.borderWidth || 1}px;
  border-radius: ${(props) => props.borderRadius || 5}px;
`;

interface ButtonProps {
  bgColor?: string;
  color?: string;
  padding?: number;
  margin?: number;
  borderStyle?: string;
  borderColor?: string;
  borderWidth?: number;
  borderRadius?: number;
}
