/*
Active area JS
-----------------------

This library allows you to define areas on the viewport
and respond to mouse movement over them. 

*/
var ActiveAreas = {
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
  
  _areas: [],
  
  _conditions: [],
  
  _callbacks: [],
  
  active_area: undefined,

  initialize: function (areas, conditions, callbacks, not_in_any_area)
  {
    this._areas = areas;
    this._conditions = conditions;
    this._callbacks = callbacks;
    this._not_in_any_area_callback = (not_in_any_area == undefined)? function(){} : not_in_any_area;
  },

  run: function (stream_data)
  {
    var ret = this.activate_areas(stream_data, this._areas);
    
    if (ret.length == 0)
    {
      this._not_in_any_area_callback();
    }
    
    return ret;
  },

  destroy: function ()
  {
    this._areas = [];
    this._conditions = [];
    this._callbacks = [];
  },

  activate_areas: function (stream_data, areas)
  {
    var active_areas = new Array();
    
    for (i = 0; i < areas.length ; i++)
    { 
      for (j = 0; j < stream_data.length; j++)
      {
        var x, y, x_1, y_1;
        
        x = stream_data[j][0];
        y = stream_data[j][1];
      
        x_1 = areas[i][2][0];
        x_2 = x_1 + areas[i][0];
      
        y_1 = areas[i][2][1];
        y_2 = y_1 + areas[i][1];
    
        var in_area = (y >= y_1) && (y <= y_2) && (x >= x_1) && (x <= x_2)
    
        if (in_area)
        {
          active_areas.push(areas[i]);
          
          if ((this._conditions[i] != undefined) && (this._conditions[i](areas[i][3]) == true))
          {
            this._callbacks[i](areas[i][3]);
          }
        }
      }
    }
  
    return active_areas;
  }
};