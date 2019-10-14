////////////////////////////////////////////////////////////////////////////////

$_DO.update_file_upload = async function (e) {

	let data = w2_panel_form ().values ()
	
	if (!(data.context = w2_first_grid ().getSelection () [0])) die ('foo', 'Укажите, пожалуйста, раздел')
	
	let d = await response ({type: 'file_uploads', action: 'create'}, data)

}

////////////////////////////////////////////////////////////////////////////////

$_GET.file_upload = async function (o) {

	let data = await response ({type: 'file_uploads', part: 'vocs'})
	
	add_vocabularies (data, {voc_stands: 1})

	return data

}