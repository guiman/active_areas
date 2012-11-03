activeAreas
============

Javascript library to define sensible areas on the browser

What is it about?
-----------------

A simple yet helpful library to define sensible areas on the browser that respond to position information. Basically the idea is to determin if a certain soure of position information (like the mouse), is inside an area, and then triggering some callback.

Usage
-----

activeArea has a simple api consisting of three methods: initialize, run and destroy. To use it, just add it in your header section of your html.

== First: initialize

Initialize set's everything you need to start capturing position. It takes 4 argumens: areas, conditions, callbacks and not_in_any_area_callback.

* Areas: represent the zones in the viewport that you want to respond to movement. It uses [x,y] as the upper left point and build a rectagle using the height and with.
* Callbacks: there is a direct correlation between the number of areas and callbaks, so the first area will try to execute the first callback and so on. The callback may receives an identifier value, setted in the area as the fourth value.
* Conditions: functions that return boolean values. They determin if a point is in any area and the conditional function returns true, then a callback is triggered. The callback may receives an identifier value, setted in the area as the fourth value.
* Not in any area callback: it's optional callback that's triggered when the pointer lands in any area.

```javascript
var height = 50;
var width = 50;
var x = y = 0;
var id_1 = 1;
var id_2 = 2;
var areas = [[heigth, width, [x,y], id_1], [heigth, width, [500,50], id_2]];
var callbacks = [function(id){alert("Hey you are in a zone. ID: "+id);}, function(){alert("Hey you are in another zone");}];

// The second parameter is not beings use right now but i'm planning on adding conditions for the callbacks
activeArea.initialize(areas, [function(){return true;}, function(id){return id != 0;}], callbacks);
```

== Second: run

Once you have set this up, you are ready to go. The run method  takes position information from a position source (in most cases the mouse but could be a multitouch screen or something else) and determins witch areas activated.

```javascript
// It expects a list of array like this [x,y,z] where x,y are position and z might be magnitude, speed, time, etc.
var position = [10,10,1];
active_areas = activeArea.run([position]);
```

active_areas will be a list like [[heigth, width, [x,y], id], [heigth, width, [x,y], id], [heigth, width, [x,y], id], ...]

== Third: destroy

activeArea.destroy() cleans state information so activeArea could be reused.

Author
------

Le me, [@guiman](https://github.com/guiman). This is part of another project i'm currently working on: [Baku] (https://github.com/guiman/baku). A plataform that allows you to manipulate in a more human way your interactions with the browser using special but simple hardware. 