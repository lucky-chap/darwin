export default function downloadBlob(blob: string, fileName: string) {
	let link = document.createElement('a')
	link.setAttribute('href', blob)
	link.setAttribute('download', fileName)
	link.style.display = 'none'
	document.body.appendChild(link)
	link.click()
	document.body.removeChild(link)
    console.log(typeof blob)
}
