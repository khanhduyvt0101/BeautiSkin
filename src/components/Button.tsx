import { themeColors } from "@/constants";
import React from "react";
import * as Paper from "react-native-paper";

interface IButtonProps extends Partial<Paper.ButtonProps> {}

export const Button = (props: IButtonProps) => {
  const getButtonColor = () => {
    let buttonColor: string | undefined;

    switch (props.mode) {
      case "text":
        buttonColor = props.buttonColor;
        break;

      case "outlined":
        buttonColor = themeColors.colors.onPrimary;
        break;

      default:
        buttonColor = themeColors.colors.secondary;
        break;
    }

    return buttonColor;
  };

  const getTextColor = () => {
    let textColor: string | undefined;

    switch (props.mode) {
      case "contained":
      case "elevated":
        textColor = themeColors.colors.onPrimary;
        break;

      default:
        textColor = props.textColor;
        break;
    }

    return textColor;
  };

  return (
    <Paper.Button
      {...props}
      buttonColor={getButtonColor()}
      textColor={getTextColor()}
    >
      {props.children}
    </Paper.Button>
  );
};
