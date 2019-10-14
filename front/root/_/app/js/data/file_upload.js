////////////////////////////////////////////////////////////////////////////////

$_DO.update_file_upload = async function (e) {

	let f = w2_panel_form ()

	let data = f.values ().actual ().validated ()
	
	if (!(data.context = w2_first_grid ().getSelection () [0])) die ('foo', 'Укажите, пожалуйста, раздел')
	
	f.lock ()
	
	let d = await response ({type: 'file_uploads', action: 'create'}, data)

	f.unlock ()
	
	$('pre').text (`
<ns0:Name>1.docx</ns0:Name>
<ns0:Description>1.docx</ns0:Description>
<ns0:Attachment>
  <ns0:AttachmentGUID>${d.id}</ns0:AttachmentGUID>
</ns0:Attachment>
<ns0:AttachmentHASH>${d.sh}</ns0:AttachmentHASH>	
	`)

}

////////////////////////////////////////////////////////////////////////////////

$_GET.file_upload = async function (o) {

	let data = await response ({type: 'file_uploads', part: 'vocs'})
	
	add_vocabularies (data, {voc_stands: 1})

	return data

}