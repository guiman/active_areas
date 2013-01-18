var DeckWithActiveAreas = {
  
  left_area: [],
  right_area: [],
  areas: [],
  conditions: [],
  callbacks: [],
  timeout_time: 10,

  init: function()
  {
    var area_with = 120, area_height = 1900;
    
    // Check arguments and interpret if they are suitable to be used as width and height
    if (arguments.length > 0)
    {
     area_with   = (!NaN(arguments[0]))? arguments[0] : area_width;
     area_height = ((arguments.length > 1) && (!NaN(arguments[1])))? arguments[0] : area_width;
    }
    
    var left_area = [area_with, area_height, [0,0], 0];
    var right_area = [area_with, area_height, [document.documentElement.clientWidth - 120, 0], 1];
    
    this.areas = [left_area, right_area];
    this.conditions = [this.check_if_active, this.check_if_active];
    this.callbacks = [  function(id){ if (this.active_area != id){ setTimeout(function(){ DeckWithActiveAreas.prev_slide(id);}, DeckWithActiveAreas.timeout_time); }}, function(id){ if (this.active_area != id){ setTimeout(function(){ DeckWithActiveAreas.next_slide(id);}, DeckWithActiveAreas.timeout_time); }}];
    
    ActiveAreas.initialize(this.areas, this.conditions, this.callbacks, this.clear_active_area);
  },
  
  // Reset the current active area
  clear_active_area: function()
  {
    ActiveAreas.active_area = undefined;
  },
  
  /*
  =====================================
  Conditions
  =====================================
  */

  check_if_active: function(id)
  {
    return ActiveAreas.active_area != id;
  },
  
  /*
  =====================================
  Callbacks
  =====================================
  */
  
  prev_slide: function(id)
  {
    $.deck('prev'); ActiveAreas.active_area = id;
  },
  
  next_slide: function(id)
  { 
    $.deck('next'); ActiveAreas.active_area = id;
  }
}