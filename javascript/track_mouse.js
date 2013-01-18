var MouseTracker = {

  init: function () {
  	if (window.Event)
    {
  	  document.captureEvents(Event.MOUSEMOVE);
  	}
  
  	document.onmousemove = this.track;
  },

  track: function (e)
  {
    x = (window.Event) ? e.pageX : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
  	y = (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);

    ActiveAreas.run([[x,y,1]]);
  }
};