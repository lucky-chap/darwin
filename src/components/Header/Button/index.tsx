import './index.css'

type ButtonProps = {
	children: React.ReactNode
	type: string
	onClick: React.MouseEventHandler<HTMLButtonElement>
	disabled?: boolean
}

export default function Button({
	children,
	type,
	onClick,
	disabled,
}: ButtonProps) {
	return (
		<button
			onClick={onClick}
			className={`button ${type} ${disabled ? 'disabled' : ''}`}
			disabled={disabled}
		>
			{children}
		</button>
	)
}

