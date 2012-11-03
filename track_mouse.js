function init(areas, conditions, callbacks, not_in_area_callback) {
  activeArea.initialize(areas, conditions, callbacks, not_in_area_callback);
      
	if (window.Event)
  {
	  document.captureEvents(Event.MOUSEMOVE);
	}
  
	document.onmousemove = getCursorXY;
}

function getCursorXY(e) 
{
  x = (window.Event) ? e.pageX : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
	y = (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);

  activeArea.run([[x,y,1]]);
}