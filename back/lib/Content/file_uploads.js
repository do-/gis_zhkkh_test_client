const http = require ('http')
const fs = require ('fs')

module.exports = {

////////////////////////////////////////////////////////////////////////////////

	do_create_file_uploads: async function () {
	
		let stand = this.conf.stands.filter (i => i.id == this.rq.id_stand) [0]

		let url = stand.href + 'ext-bus-file-store-service/rest/' + this.rq.context + '/'
		
		let path = '../files/1.docx'	
		let stat = fs.statSync (path)
		let body = fs.readFileSync (path)		
		
		let headers = {
			'Content-Length': stat.size,
			'Content-MD5': 'GAP8kkxCRTcZesVjV3vozg==',
			'X-Upload-OrgPPAGUID': this.rq.orgppaguid,
			'X-Upload-Filename': '1.docx',
		}
		
		return new Promise (function (ok, fail) {
		
			let hrq = http.request (url, {method: 'PUT', headers}, rp => {
			
				darn (rp.headers)		

				if (rp.statusCode == 200) return ok ({
					id: rp.headers ['x-upload-uploadid'],
					sh: 'DA5E79F3EA02E73C02B207C23D5AAE0A6CDE370D169FAB98C9369DC527F95B8C',
				})
				
				fail (`#foo#:${rp.statusCode} ${rp.statusMessage}: ${rp.headers ['x-upload-error']}`)

			})

			hrq.end (body)		
		
		})
		
	},

////////////////////////////////////////////////////////////////////////////////

	get_vocs_of_file_uploads: async function () {

		let data = {
		
			voc_contexts: [
				{id: "agreements",            label: "Договора (ДУ, уставы, ДПОИ)"},
				{id: "bills",                 label: "Электронные счета"},
				{id: "capitalrepairprograms", label: "Капитальный ремонт"},
				{id: "contentmanagement",     label: "Управление контентом"},
				{id: "disclosure",            label: "Раскрытие деятельности УО"},
				{id: "homemanagement",        label: "Управление домами, Лицевые счета"},
				{id: "informing",             label: "Оповещения"},
				{id: "inspection",            label: "Инспектирование жилищного фонда"},
				{id: "licenses",              label: "Лицензии"},
				{id: "msp",                   label: "Меры социальной поддержки"},
				{id: "nsi",                   label: "Нормативно-справочная информации"},
				{id: "rki",                   label: "Реестр коммунальной инфраструктуры"},
				{id: "voting",                label: "Голосования"},
			],
			
			voc_stands: this.conf.stands.map (i => ({id: i.id, label: i.label})),
			
			item: {context: 'contentmanagement'}
			
		}
		
		data.item.id_stand = data.voc_stands [0].id

		return data
	
	}
	

}