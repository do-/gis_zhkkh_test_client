////////////////////////////////////////////////////////////////////////////////

$_DRAW.file_upload = async function (data) {

	let $panel = $('main')
	
	let it = data.item
	
	await to_fill ('file_upload', it, $panel)
	
    $panel.w2reform ({ 
        
		name   : 'file_upload_form',
            
		record : data,  	

	})
	
	$('#ctx').w2regrid ({ 

        name: 'voc_contexts_grid',
        
       	multiSelect: false,

        show: {
            toolbar: 0,
            footer: 0,
            selectColumn: 1
        },     

        columns: [                
            {field: 'recid', caption: 'Код', size: 30},
            {field: 'label', caption: 'Наименование', size: 100},
        ],
        
        records: data.voc_contexts
        
    }).refresh ()
    
    w2ui ['voc_contexts_grid'].select (it.context)

}