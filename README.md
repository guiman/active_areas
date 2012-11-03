activeAreas
============

Javascript library to define sensible areas on the browser

What is it about?
-----------------

A simple yet helpful library to define sensible areas on the browser that respond to position information. Basically the idea is to determin if a certain soure of position information (like the mouse), is inside an area, and then triggering some callback.

Usage
-----

activeArea has a simple api consisting of three methods: initialize, run and destroy.

Initialize set's everything you need to start capturing position. It takes 3 argumens: areas, conditions and callbacks.

== First: initialize

Areas represent the zones in the viewport that you want to respond to movement. It uses [x,y] as the upper left point and build a rectagle using the height and with.

```javascript
var height = 50;
var width = 50;
var x = y = 0;
var areas = [[heigth, width, [x,y]], [heigth, width, [500,50]]];
var callbacks = [function(){alert("Hey you are in a zone");}, function(){alert("Hey you are in another zone");}];

// The second parameter is not beings use right now but i'm planning on adding conditions for the callbacks
activeArea.initialize(areas, [], callbacks);
```

There is a direct correlation between the number of areas and callbaks, so the first area will try to execute the first callback and so on.

== Second: run

Once you have set this up, you are ready to go. Now it's time to tell if the position source (in most cases the mouse but could be a multitouch screen or something else), for that just use run:

```javascript
// It expects an array like this [x,y,z] where x,y are position and z might be magnitude, speed, time, etc.
var position = [10,10,1];
activeArea.run(position);
```

activeArea.run(position) will return the areas activated by the position.

== Third: destroy

activeArea.destroy() cleans state information so activeArea could be reused.

Author
------

Le me, [@guiman](https://github.com/guiman). This is part of another project i'm currently working on: [Baku] (https://github.com/guiman/baku). A plataform that allows you to manipulate in a more human way your interactions with the browser using special but simple hardware. 