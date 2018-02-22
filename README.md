# jquery-lwd
A lightweight desktop-engine for JQuery

# Description
This lightweight jquery-ui-plugin provides basic desktop functionality.

# Features
<ul>
    <li>
        Windows
        <ul>
            <li>Resizable</li>
            <li>Movable</li>
            <li>Focus on active window</li>
            <li>Minimizable</li>
            <li>Maximizable</li>
            <li>Titlebar-icons</li>
        </ul>
    </li>
    <li>
        Taskbar
        <ul>
            <li>Display buttons for open windows</li>
            <li>Focus and restore windows on click</li>
            <li>Clock</li>
        </ul>
    </li>
</ul>

#Usage
Insert before </head>-Tag:
```html
<link href="/path/to/jquery-ui.css" rel="stylesheet" type="text/css" />
<link href="/path/to/jquery-lwd/themes/default/jquery-lwd.css" rel="stylesheet" type="text/css" />

<script type="text/javascript" src="/path/to/jquery-ui/jquery.min.js"></script>
<script type="text/javascript" src="/path/to/jquery-ui/jquery-ui.min.js"></script>
<script type="text/javascript" src="/path/to/jquery-lwd/jquery-lwd.js"></script>
```

#API
Basic window
```html
<div class="window">
    My Content
</div>
```
Title
```html
<div class="window" 
     data-title="My Title"
>
    My Content
</div>
```
Size
```html
<div class="window" 
     data-minWidth="200" 
     data-minHeight="100" 
     data-width="400" 
     data-height="200" 
     data-maxWidth="800" 
     data-maxHeight="400"
>
     My Content
</div>
```
Position
```html
<div class="window" 
     data-positionX="20"
     data-positionY="40"
>
    My Content
</div>
```
Resizable / Draggable
```html
<div class="window" 
     data-resizable="true"
     data-draggable="true"
>
    My Content
</div>
```
Appendation
```html
<div id="container"></div>

<div class="window" 
     data-appendTo="#container"
>
    My Content
</div>
```
Minimize / Maximizable
```html
<div class="window" 
     data-minimizable="true"
     data-minimized="false"
     data-maximizable="true"
     data-maximized="false"
>
    My Content
</div>
```
Icon
```html
<div class="window" 
     data-icon="/path/to/icon.png"
>
    My Content
</div>
```
Basic Taskbar
```html
<div id="taskbar"></div>
```
Taskbar-Clock
```html
<div id="taskbar"
     data-clock="true"
>
</div>
```

# Demos
<ul>
    <li><a target="_blank" href="https://mstellmacher.github.io/jquery-lwd/demo/1-windows_1-basic.html">Basic Window</a></li>
    <li><a target="_blank" href="https://mstellmacher.github.io/jquery-lwd/demo/1-windows_2-appendTo.html">Window appended to div</a></li>
    <li><a target="_blank" href="https://mstellmacher.github.io/jquery-lwd/demo/1-windows_3-size.html">Defined size</a></li>
    <li><a target="_blank" href="https://mstellmacher.github.io/jquery-lwd/demo/1-windows_4-title.html">Window title</a></li>
    <li><a target="_blank" href="https://mstellmacher.github.io/jquery-lwd/demo/1-windows_5-resize.html">Resize</a></li>
    <li><a target="_blank" href="https://mstellmacher.github.io/jquery-lwd/demo/1-windows_6-minSize.html">Minimal window size</a></li>
    <li><a target="_blank" href="https://mstellmacher.github.io/jquery-lwd/demo/1-windows_7-maxSize.html">Maximal window size</a></li>
    <li><a target="_blank" href="https://mstellmacher.github.io/jquery-lwd/demo/1-windows_8-position.html">Position</a></li>
    <li><a target="_blank" href="https://mstellmacher.github.io/jquery-lwd/demo/1-windows_9-closeFocus.html">Window Focus</a></li>
    <li><a target="_blank" href="https://mstellmacher.github.io/jquery-lwd/demo/1-windows_10-minimize-withoutTaskbar.html">Minimize without taskbar</a></li>
    <li><a target="_blank" href="https://mstellmacher.github.io/jquery-lwd/demo/1-windows_11-minimizeWithTaskbar.html">Minimize with taskbar</a></li>
    <li><a target="_blank" href="https://mstellmacher.github.io/jquery-lwd/demo/1-windows_12-minimizeFocus.html">Focus when minimize</a></li>
    <li><a target="_blank" href="https://mstellmacher.github.io/jquery-lwd/demo/1-windows_13-minimizeInitialized.html">Window initialized minimized</a></li>
    <li><a target="_blank" href="https://mstellmacher.github.io/jquery-lwd/demo/1-windows_14-maximize.html">Maximize</a></li>
    <li><a target="_blank" href="https://mstellmacher.github.io/jquery-lwd/demo/1-windows_15-icon.html">Window Icon</a></li>
    <li><a target="_blank" href="https://mstellmacher.github.io/jquery-lwd/demo/2-taskbar_1-basic.html">Basic taskbar</a></li>
    <li><a target="_blank" href="https://mstellmacher.github.io/jquery-lwd/demo/2-taskbar_2-focus.html">Taskbar focus</a></li>
    <li><a target="_blank" href="https://mstellmacher.github.io/jquery-lwd/demo/2-taskbar_3-restore.html">Taskbar window restore</a></li>
    <li><a target="_blank" href="https://mstellmacher.github.io/jquery-lwd/demo/2-taskbar_4-clock.html">Taskbar clock</a></li>
    <li><a target="_blank" href="https://mstellmacher.github.io/jquery-lwd/demo/3-themes_1-windows2000.html">Windows 2000 Theme</a></li>
</ul>
