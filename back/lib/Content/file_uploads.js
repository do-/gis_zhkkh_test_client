module.exports = {

////////////////////////////////////////////////////////////////////////////////

	do_create_file_uploads: async function () {
	
		let stand = this.conf.stands.filter (i => i.id == this.rq.id_stand) [0]
		
		let url = stand.href + 'ext-bus-file-store-service/rest/' + this.rq.context + '/'
	
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