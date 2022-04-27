type NumberInputProps = {
	name: string
	value: number
	onChange: (value: number) => void
}

export default function NumberInput({
	name,
	value,
	onChange,
}: NumberInputProps) {
	let onChangeInput = (event: { target: { value: any } }) => {
		if (event.target.value >= 0) {
			onChange(event.target.value)
		} else {
			onChange(0)
		}
	}
	return (
		<div className='select-input'>
			<label htmlFor={name} className='input-label'>
				{name}
			</label>
			<input
				type='number'
				id={name}
				name={name}
				value={value}
				className='input-box'
				onChange={onChangeInput}
			/>
		</div>
	)
}

