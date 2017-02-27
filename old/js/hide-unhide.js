function show(id)
{
    document.getElementById(id + '-heading').href = "javascript:hide('"+id+"')";
    
    var growDiv = document.getElementById(id);
    items = document.getElementsByClassName('collapse');
    for (var i = 0; i < items.length; i ++)
    {
        if (items[i].clientHeight && items[i].id != id)
            hide(items[i].id);
    }
    var wrapper = document.querySelector('#content-' + id);
    growDiv.style.height = wrapper.clientHeight + "px";
}

function hide(id)
{
    document.getElementById(id + '-heading').href = "javascript:show('"+id+"')";
    var growDiv = document.getElementById(id);
    growDiv.style.height = 0;
}

//Old Function
/*function display1(action, id)
{
    console.log(id);
    if (action == 'show')
    {
        items = document.getElementsByClassName('collapse');
        for (var i = 0; i < items.length; i ++)
        {
            items[i].style.display = 'none';
            document.getElementById(items[i].id + '-heading').href = "javascript:display('show', '"+items[i].id+"')";
        }
        document.getElementById(id).style.display = 'block';
        document.getElementById(id + '-heading').href = "javascript:display('hide', '"+id+"')";
        
    }

    if (action == 'hide')
    {
        document.getElementById(id).style.display = 'none';
        document.getElementById(id + '-heading').href = "javascript:display('show', '"+id+"')";
    }
}
*/
