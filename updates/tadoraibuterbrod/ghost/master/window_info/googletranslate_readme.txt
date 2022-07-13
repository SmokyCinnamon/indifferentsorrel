-----------------------------------
■ "window_info": SAORI that enumerates and acquires information on currently open windows
■ Written by CSaori Project
Http://code.google.com/p/csaori/
-------------------------------------------------- -------------------------------------------------- --------------------

■ What does this do

SAORI for enumerating and acquiring information on currently open windows.

■ Operating environment

・ Win98 / NT4 or above

■ How to use

·call:
Argument0 not specified or enum

·result
Result: Number of windows that could be listed
Value0 ~: Window titles in order


·call:
Argument0 info
Argument1 hwnd value

·result
Result: (None)
Value0: Window title
Value1: Class name
Value2: Window coordinates (left, top, right, bottom)
Value3: Client coordinates (left, top, right, bottom)
Value4: Coordinates of the work area to which the window belongs (left, top, right, bottom)
Value5: Window style
Value6: Window expansion style
Value7: 0 for the hwnd top level of the parent window
Value8: normal / minimized / maximized

■ Distribution conditions, etc.

See license.txt.

■ Update history

・ 2008/8/16 Initial Release (as a substitute for Kushigahama Goat's enum windows)
・ 2010/8/14 Function expansion: info 