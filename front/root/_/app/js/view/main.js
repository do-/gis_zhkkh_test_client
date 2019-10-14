$_DRAW.main = async function (data) {

    let $main = $('body').html ('<main style="position:fixed;top:0;left:0;bottom:0;right:0;"/>')
    
    show_block ($_REQUEST.type)
    
    return $main

}