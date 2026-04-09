Aaron Lutz Website

File Structure:

Project Folder: A2_ry797166
|
|
|--index.html
|--page2.html
|--page3.html
|
|--style.css
|
|--main.js
|--home.js
|
|--Photos
|  |--europe-map.png
|  |--globe-icon.png
|  |--lake-bohinj.jpg
|  |--legislative-assembly-of-BC.jpg
|  |--mostar.jpg
|  |--nuremburg-castle.jpg
|  |--overhanging-rock-gabriola-island.jpg
|  |--vancouver-island-map.png
|  |--world-map.png
|  |--WW2-plane.jpg
|
|--Videos
|  |--orca-video.mp4
|
|--Audio
|  |--language-sample-bosnian.mp3
|  |--language-sample-slovenian.mp3
|  |--language-sample-german.mp3
|
|--README.txt


Code updated and reused from Assignment 1:

    This is a simple website that shows off travel photography.
The home page includes a map of where I hava been travelling recently.
Any Subsequent pages represent one trip and the photos taken on them with descriptions.

    The website uses a <nav> section as a sidebar that has links to any of the three current pages. 
There is also header on each page featuring the location and year of any given trip, or the title for the home page.

    The trip pages use <div> to seperate all of the different photos with descriptions from the same trip.
Inside each the photo is displayed using <img> and there is a short description for each photo using <p>
Each photo has an alternative description in case the image doesn't load, as well as a specified height and width.
Occasionally these photos link to external relevant websites using <a> tags around the <img>.
Both current travel pages feature a video. one is simply a an mp4 using the relative path in <source>. The other is a YouYube video using <iframe>
and the embedded code directly from YouTube.

    On the home page below the image, there is a nested list showing links to the specific sections of each travel page using the <a> tag
and the href="#exampleSectionID". Below that is an ordered list of text featuring places that I would like to visit in the future.
Below that is a table featuring audio files of samples of the european languages of the countries I visited in 2023. This is done using <source>. 


New code Assignment 2:

    Assignment 2 adds javaScript and CSS, therefore the html files each use the <style> and <script> tags to upload the style.css file and the main.js file.
There is an additional home.js file only uploaded to index.html as its contents would cause errors for the other pages.

    to update the website from assignment 1, CSS is used primarily to format the desktop version of the website. The header is fixed at the top, the navigation
bar id fixed at the side, and the main part of each page can be scrolled through in the remaining space. Colour is also added to every part of the website.
Buttons are added to the nav that change the colour scheme of the website. There are 3 colour schemes.

    To change the colour scheme, event listeners are used to detect the colour buttons being pressed which calls one of three functions. each colour change function
changes the colours of the nav, header, and main (background an text), as well as sets the colour of the button being used to yellow.
SessionStorage is used to keep track of the colour scheme being used so that it won't change if the page reloads or if you move to a different page, and automatically 
displays colour scheme 1 when the website is first opened.

    The world map has been updated from assignment 1 to display a zoomed in version of the travelled areas on the map. This is done using a button for each of the 2
current areas, and a reset button. When either button is pressed, the world map dissapears and in its place, the respective zoomed in version appears. 
This is done by adding and removing the class: hidden, which uses css to hide whatever image its assigned to.

    The notofication is displayed by adding a new <div> element only the first time the session loads using window.addEventListener and session storage. 
It can be closed using a clickable character "X" using an event lsitener with <span>. This removes the notification element for the duration of the session.

    The Conditional works after the user is asked a question about the ordered list (if they've been to any of the listed locations). The user can select yes or no by clicking
the respective button only once per session, again using an event listener, as well as session storage to make sure the answer is displayed correctly only once per session.
There is an if statement that checks if the user has chosen yes or no, and adds text using .innertext with an appropriate response.


Assignment 3:


Selector Uses:

o Universal selector
    > Used to make sure the browser includes border and padding when calculating total height and width
         using: box-sizing: border-box;

o Multiple selector 
    > Used to change the font for multiple sections: .unordered-list, .ordered-list, .table, .video-container

o Child selector 
    > Used to bold the list items in the nested list only by using: .unordered-list > ul > li > ul

o Sibling selector 
    > Used to resize font of any text from a <p> tag that is anywhere following .location-image under the same parent

o Adjacent Sibling selector 
    > Used to resize font of any text from a <p> tage that directly follows either <iframe> or <video>

o Attribute Selector 
    > Used to change all classes that begin with "button", to a different font

o Pseudo-element Selector  
    > Used to make the first letter  bigger for the text in each list item of the ordered list 
        using .ordered-list li::first-letter

Bonus: Free Hosting available @ aaronlutz777-cyber.github.io


Citations:

Unknown.(retrieved 2026).Serbo-Croatian Bosnian - A Clean Heart.[Audio file].globalrecordings.https://globalrecordings.net/en/language/bos

Unknown.(retrieved 2026).Have a nice day.[Audio file].omniglot.https://omniglot.com/language/phrases/slovenian.php#google_vignette

Unknown.(retrieved 2026).On the farm.[Audio file].lightbulblanguages.https://www.lightbulblanguages.co.uk/resources-ge-sound-files.htm

Whiting, Matt.(2022, December 4).ICY DAY at LAKE BOHINJ, SLOVENIA (+Waterfall Savica).[Video].YouTube.https://www.youtube.com/watch?v=-l8E_1CXjfk

All photos and orca video taken by me.