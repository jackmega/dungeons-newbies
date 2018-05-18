function showNav() {
	document.getElementById('navigation').style.display = 'none';
	document.getElementById('show-btn').style.display = 'none';
	document.getElementById('hide-btn').style.display = 'block';
	document.getElementById('mobile-navigation').style.display = 'block';
}
function hideNav() {
	document.getElementById('navigation').style.display = 'block';
	document.getElementById('show-btn').style.display = 'block';
	document.getElementById('hide-btn').style.display = 'none';
	document.getElementById('mobile-navigation').style.display = 'none';
}