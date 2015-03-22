function display(action, id)
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

