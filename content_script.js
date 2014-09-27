// Copyright (c) 2014 Chris Lowe.

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
}

//TODO implement onClick functionality of browser action icon
//TODO replace images with mystery actor

function malkovichText (textNode) {
	textNode.nodeValue = textNode.nodeValue.
		replace(/([A-Z])\w+/g, "Malkovich").//intial capital
		replace(/\b([A-Z]+)\b/g, "MALKOVICH"). //all caps
		replace(/\b([a-z]+)\b/g, "malkovich"); //all lower case
}