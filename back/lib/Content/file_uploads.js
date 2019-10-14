module.exports = {

////////////////////////////////////////////////////////////////////////////////

	get_vocs_of_file_uploads: async function () {

		let data = {
		
			voc_contexts: [
				{id: "AGREEMENTS",            label: "Договора (ДУ, уставы, ДПОИ)"},
				{id: "BILLS",                 label: "Электронные счета"},
				{id: "CAPITALREPAIRPROGRAMS", label: "Капитальный ремонт"},
				{id: "CONTENTMANAGEMENT",     label: "Управление контентом"},
				{id: "DISCLOSURE",            label: "Раскрытие деятельности УО"},
				{id: "HOMEMANAGEMENT",        label: "Управление домами, Лицевые счета"},
				{id: "INFORMING",             label: "Оповещения"},
				{id: "INSPECTION",            label: "Инспектирование жилищного фонда"},
				{id: "LICENSES",              label: "Лицензии"},
				{id: "MSP",                   label: "Меры социальной поддержки"},
				{id: "NSI",                   label: "Нормативно-справочная информации"},
				{id: "RKI",                   label: "Реестр коммунальной инфраструктуры"},
				{id: "VOTING",                label: "Голосования"},
			],
			
			voc_stands: this.conf.stands.map (i => ({id: i.id, label: i.label})),
			
			item: {context: 'CONTENTMANAGEMENT'}
			
		}
		
		data.item.id_stand = data.voc_stands [0].id

		return data
	
	}
	

}