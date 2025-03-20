import { default as React } from 'react';
type ButtonProps = {
    label: string;
    onClick?: () => void;
};
declare const MyButton: React.FC<ButtonProps>;
export default MyButton;
