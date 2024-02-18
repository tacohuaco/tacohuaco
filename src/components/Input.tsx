import { forwardRef } from 'react';
import clsx from 'clsx';
import { input } from './Input.css';

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	className?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ className, ...props }: InputProps, ref) => (
		<input ref={ref} className={clsx(className, input)} {...props} />
	)
);
