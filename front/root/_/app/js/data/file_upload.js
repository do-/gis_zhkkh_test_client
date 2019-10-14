////////////////////////////////////////////////////////////////////////////////

$_GET.file_upload = async function (o) {

	let data = {voc_contexts: [
		{recid: "AGREEMENTS",            label: "Договора (ДУ, уставы, ДПОИ)"},
		{recid: "BILLS",                 label: "Электронные счета"},
		{recid: "CAPITALREPAIRPROGRAMS", label: "Капитальный ремонт"},
		{recid: "CONTENTMANAGEMENT",     label: "Управление контентом"},
		{recid: "DISCLOSURE",            label: "Раскрытие деятельности УО"},
		{recid: "HOMEMANAGEMENT",        label: "Управление домами, Лицевые счета"},
		{recid: "INFORMING",             label: "Оповещения"},
		{recid: "INSPECTION",            label: "Инспектирование жилищного фонда"},
		{recid: "LICENSES",              label: "Лицензии"},
		{recid: "MSP",                   label: "Меры социальной поддержки"},
		{recid: "NSI",                   label: "Нормативно-справочная информации"},
		{recid: "RKI",                   label: "Реестр коммунальной инфраструктуры"},
		{recid: "VOTING",                label: "Голосования"},
	]}	

	data.item = {
		context: 'CONTENTMANAGEMENT',
	}

	return data

}