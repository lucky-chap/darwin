import { useEffect } from 'react'
import type { RefObject } from 'react'

export default function useClickOutside(ref: RefObject<HTMLInputElement>, callback: Function) {
	useEffect(() => {
		function handleClickOutside(event: { target: any | null }) {
			if (ref.current && !ref.current.contains(event.target)) {
				callback()
			}
		}
		// Bind the event listener
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [ref, callback])
}
