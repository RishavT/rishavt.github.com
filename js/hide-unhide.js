function display(action, id)
{
    console.log(id);
    if (action == 'show')
    {
        document.getElementById(id).style.display = "block";
        document.getElementById(id + "-heading").href= "javascript:display('hide', '"+id+"')";
    }

    if (action == 'hide')
    {
        document.getElementById(id).style.display = "none";
        document.getElementById(id + "-heading").href= "javascript:display('show', '"+id+"')";
    }
}

