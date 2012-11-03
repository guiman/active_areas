/*
Active area JS
-----------------------

This library allows you to define areas on the viewport
and respond to mouse movement over them. 

*/
var activeArea = function(){
  /*
  
  References:
  -----------
  
  = Area should be something like [H,W,P] where:

  H = height, numeric
  W = width, numeric
  P = point, array [x,y] representing the upper left corner

  = Stream data expected is: [[X,Y,Z], [X,Y,Z], ...]

  X = horizontal position
  Y = vertical position
  Z = magnitued

  */
  

  var _areas = new Array();
  var _conditions = new Array();
  var _callbacks = new Array();

  function initialize(areas, conditions, callbacks)
  {
    _areas = areas;
    _conditions = conditions; // To be used in the near future
    _callbacks = callbacks; 
  }

  function run(stream_data)
  {
    return activate_areas(stream_data, _areas);
  }

  function destroy()
  {
    _areas = new Array();
    _conditions = new Array();
    _callbacks = new Array();
  }

  function activate_areas(stream_data, areas)
  {
    active_areas = new Array();
    
    for (i = 0; i < areas.length ; i++)
    { 
      for (j = 0; j < stream_data.length; j++)
      {
        x = stream_data[j][0];
        y = stream_data[j][1];
      
        x_1 = areas[i][2][0];
        x_2 = x_1 + areas[i][0];
      
        y_1 = areas[i][2][1];
        y_2 = y_1 + areas[i][1];
    
        in_area = (y >= y_1) && (y <= y_2) && (x >= x_1) && (x <= x_2)
    
        if (in_area)
        {
          active_areas.push(areas[i]);
          _callbacks[i]();
        }
      }
    }
  
    return active_areas;
  }
  
	return {
		initialize: initialize,
		run: run,
    destroy: destroy
	} 
  
}();