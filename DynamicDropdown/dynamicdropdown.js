function dynamicDropdown(selectObject)
{

	// To reset item list
	const myNode = document.getElementById("item");
    while (myNode.lastElementChild) {
        myNode.removeChild(myNode.lastElementChild);
    }

    // To create new item list
    var text=[];
	var obj = document.getElementById('item');
	if (selectObject.value == "Fruits")
    {
		text = ["Apple", "Banana", "Cherry"];
	}    
	else if(selectObject.value == "Vegetables")
	{
		text = ["Asparagus", "Beets", "Chilli"];
	}
	else
	{
		text = ["Apple Crumble", "Banana Split", "Cherry Pop"];
	}

	text.forEach(function(t){
		var option = document.createElement("option");
		option.setAttribute("value", t);
		option.innerHTML = t;
		obj.appendChild(option);
    });

}

function showItem(){
	var text = document.getElementById("display_item");
	var category = document.getElementById("category").value;
	var item = document.getElementById("item").value;

	text.innerText = category + " : " + item;
}