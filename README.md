activeAreas
============

Javascript library to define sensible areas on the browser

What is it about?
-----------------

A simple library to define sensible areas on the browser that respond to position information. Basically the idea is to determin if a certain soure of position information (like the mouse), is inside an area, and then triggering some callback.

Usage
-----

Just add the script "active_areas.js" in the header (o anywhere you think it's best) and it will define a ActiveAreas object which will allow you to access functionality.

ActiveAreas has a simple api consisting of three methods: initialize, run and destroy.

###First: initialize

Initialize set's everything you need to start capturing position. It takes 4 arguments: areas, conditions, callbacks and not_in_any_area_callback.

* Areas: represents the zones in the viewport that you want to respond to movement. It uses [x,y] as the upper left point and build a rectagle using the height and with.
* Callbacks: there is a direct correlation between the number of areas and callbaks, so the first area will try to execute the first callback and so on. The callback may receives an identifier value, setted in the area as the fourth value.
* Conditions: functions that return boolean values. They determin if a point is in any area and the conditional function returns true, then a callback is triggered. The callback may receives an identifier value, setted in the area as the fourth value.
* Not in any area callback: it's optional callback that's triggered when the position lands in no area.

```javascript
var height = 50;
var width = 50;
var x = y = 0;
var id_1 = 1;
var id_2 = 2;
var areas = [[heigth, width, [x,y], id_1], [heigth, width, [500,50], id_2]];
var callbacks = [function(id){alert("Hey you are in a zone. ID: "+id);}, function(){alert("Hey you are in another zone");}];

ActiveAreas.initialize(areas, [function(){return true;}, function(id){return id != 0;}], callbacks);
```

###Second: run

The run method takes position information from a position source (in most cases the mouse but could be a multitouch screen or something else) and determins witch areas activated. It expects a list of arrays like: [x,y,z] where x,y are position and z might be magnitude, speed, time, etc.

```javascript
var position = [10,10,1];
active_areas = ActiveAreas.run([position]);
```

The return value "active_areas" will be a list like [[heigth, width, [x,y], id], [heigth, width, [x,y], id], [heigth, width, [x,y], id], ...] representing the areas that where activated when run executed.

Also the run method executes the callbacks before returning the activated areas.

###Third: destroy

ActiveAreas.destroy() cleans state information so activeArea could be reused.

Why would you do something like this?
-------------------------------------

Last couple months I've been getting intereseted in HCI, looking for new ways of making applications on the web (focusing on the users satisfaction while using them). On the same road while working on [Baku](https://github.com/guiman/baku) with my friend and co-creator of the project [dpaez](https://github.com/dpaez), we sumbled uppon the concept of NUIs which are awesome (you should read [Brave NUI world](http://www.amazon.com/Brave-NUI-World-Designing-Interfaces/dp/0123822319)).

This library it's an attemp to build a movement aware surface on the browser screen, that could help develop this new kinds of interfaces.

As an example on how could this help build NUIs, I combined the ActiveAreas library with Deck.js to allow users a new way of interacting with slides. This new ways allows users define areas on the sides of the browser viewport, and when the mouse moves over them, they move to the next or proviuos slide, depending on which side you move the mouse to.

The full example can be found in the gh-pages branch of this project. [Try it out here](http://guiman.github.com/active_areas/)

Author
------

Le me, [@guiman](https://github.com/guiman), I'm just a Computer Science student working on new ways to interact with computers and use them to enhace our every day interaction our surrounding world.