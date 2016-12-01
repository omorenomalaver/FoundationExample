var links = [
			{
				"linkName":"Home",
				"href":"index.html"
			},
			{
				"linkName":"Searching by Suburbs",
				"href":"suburb_search.html"
			},
			{
				"linkName":"Add Users",
				"href":"add_users.html"
			}
			];


function createLinks()
{
	for(i=0;i<=links.length-1;i++)
	{
		var link1 = document.createElement("a");
		link1.setAttribute('href',links[i].href);
		var linkText1 = document.createTextNode(links[i].linkName);
		link1.appendChild(linkText1);
		document.getElementById("linkList").appendChild(link1);
	}
}