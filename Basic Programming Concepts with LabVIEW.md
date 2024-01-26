# Basic Programming Concepts in LabVIEW: Strings

***In the beginning, we all said "hello, world!"***

Something I found a little frustrating when going through LabVIEW’s training modules was the lack of coverage regarding the most basic programming concepts. The assumption is that the user already knows at least some programming basics, and that may be true in most cases; however, LabVIEW is a great teaching tool for these basic concepts because there is no syntax to learn and you can visualize what the code is doing. You also don’t need to worry about building a user interface because it is built right alongside the code in LabVIEW.

Most beginner guides to programming languages begin with simple strings, so I will follow that example and show you a simple string output in LabVIEW.

To begin, open a new VI in LabVIEW with **CTRL+N** from the splash screen. This will open two windows: the Front Panel and the Block Diagram, as seen in the image below.

![blank front panel](images/strings_front%20panel.png)

We’re going to put a string output on the front panel by right-clicking anywhere in the front panel window to bring up the palette. Hover over String and Path and select String Indicator from the String and Path palette that appears.

![string indicator on the palette](images/strings_string%20indicator.png)

Place the indicator anywhere on the front panel and press **CTRL+E** to switch to the block diagram.

![string indicator on the block diagram](images/strings_block%20diagram.png)

As you can see, a node corresponding to the indicator you placed on the front panel has appeared on the block diagram. Since this is an indicator, an input needs to be wired to the right-hand side. LabVIEW reads code left to right.

We are going to input a string constant to our string indicator. To place a string constant on the block diagram, right-click anywhere on the block diagram to bring up the programming palette. Hover over String and select String Constant from the String palette.

![string palette on the block diagram](images/strings_string%20palette.png)

Place the constant to the right of the string indicator.  
**To wire the constant to the indicator:**
1. Hover over the left edge of the constant (the tool will automatically change to the wiring tool).
2. Click on the constant with the wiring tool and drag the wire to the string indicator.
3. Connect the wire to the string indicator by clicking on it.

![wiring the string on the block diagram](images/strings_wiring%20the%20string.png)

Now that the constant is wired, we can write something in it. Hover over the inside of the constant to automatically change to the text tool. Type “Hello, World!” in the constant.

![hello world string](images/strings_hello%20world.png)

Now we run our very simple program to display *Hello, World!* in our string indicator that we placed on the front panel.

Press **CTRL+E** to switch to the front panel and click the **Run** button (see below image) in the upper left corner of the window.

![run button](images/strings_run%20arrow.png)

“Hello, World!” will appear in the string constant we placed on the front panel.

![hello world output on the front panel](images/strings_hello%20world%20output.png)

And that’s it! This is the very first program taught to most beginning programmers. The next post in this series will cover user input strings and adding multiple strings together (concatenating).

