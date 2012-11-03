activeAreas
============

Javascript library to define sensible areas on the browser

What is it about?
-----------------

A simple yet helpful library to define sensible areas on the browser that respond to position information. Basically the idea is to determin if a certain soure of position information (like the mouse), is inside an area, and then triggering some callback.

But how does it work?
---------------------

Well, you need three things: a list of active areas and a list of associated callbacks. If a point is inside the area, the callback will be triggered. Check out the example on test.html, there you could see it in action, just move the mouse over the blue or red stripes and le the magic amaze you.

Author
------

Le me, [@guiman](https://github.com/guiman). This is part of another project i'm currently working on: [Baku] (https://github.com/guiman/baku). A plataform that allows you to manipulate in a more human way your interactions with the browser using special but simple hardware. 