walk(document.body);
//Walk function stolen from:
//http://is.gd/mwZp7E
function walk(node){
	var child, next;
	switch (node.nodeType){
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while (child){
				next = child.nextSibling;
				walk(child);
				child = next;
			}
		break;
		case 3: // Text node
			malkovichText (node);
			break;
	}
	malkovichImg();
}

//TODO implement onClick functionality of browser action icon
//TODO replace images with mystery actor

function malkovichText (textNode) {
		textNode.nodeValue = textNode.nodeValue.
			replace(/([A-Z])\w+/g, "Malkovich").	//intial capital
			replace(/\b([A-Z]+)\b/g, "MALKOVICH").	//all caps
			replace(/\b([a-z]+)\b/g, "malkovich");	//all lower case
}

function malkovichImg (){ //TODO randomize image
	var images = document.getElementsByTagName("img");
	for (var i = 0, l = images.length; i < l; i++){
		images[i].src = "http://upload.wikimedia.org/wikipedia/commons/4/45/John_Malkovich_at_San_Sebastian_Filmfestival.jpg";
	}
}
