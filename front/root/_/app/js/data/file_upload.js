////////////////////////////////////////////////////////////////////////////////

$_GET.file_upload = async function (o) {

	let data = await response ({type: 'file_uploads', part: 'vocs'})

	return data

}