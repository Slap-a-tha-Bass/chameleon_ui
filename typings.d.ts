export = Button;

declare namespace Button {
    export type ButtonProps = {
        bgColor?: string;
        color?: string;
        padding?: number;
        margin?: number;
        borderStyle?: string;
        borderColor?: string;
        borderWidth?: number;
        borderRadius?: number;
    }

    /**
    * Button with custom props for styling. Colors can be strings, HEX, or RGB. Use px for margin, padding, borderWidth, and borderRadius. 
    *
    * Example:
    * ```
    * <Button color="red" bgColor="blue" margin={10} padding={20}  />
    * ```
    */
    export const Button: ButtonProps;
}