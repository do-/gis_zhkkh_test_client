(function () {

    clearTimeout (window.alarm)
    
    $(window).keydown (check_hotkeys)

    let [type, id] = location.pathname.split ('/').filter ((i) => i)

    if (!type) return redirect (window.name = '/file_upload')

    $_REQUEST = {type, id}

    show_block ('main')

})()