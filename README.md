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
        </ul>
    </li>
</ul>

# Install
Insert before &lt;/head&gt;-Tag:
```html
<link href="../lib/jquery-ui/jquery-ui.structure.min.css" rel="stylesheet" type="text/css" />
<link id="themecss" href="../src/jquery-lwd/themes/jquery-ui-mintchoc/jquery-ui.theme.css" rel="stylesheet" type="text/css" />
<link href="../src/jquery-lwd/jquery-lwd.structure.css" rel="stylesheet" type="text/css" />

<script type="text/javascript" src="../lib/jquery-ui/jquery.min.js"></script>
<script type="text/javascript" src="../lib/jquery-ui/jquery-ui.min.js"></script>
<script type="text/javascript" src="../src/jquery-lwd/jquery-lwd.js"></script>
```

# Usage
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
    <li><a href="https://mstellmacher.github.io/jquery-lwd/demo/desktop.html" target="_blank">Basic Desktop</a></li>
</ul>
