# InterviewWebProject

Introduction: I chose to do this project using the Angular CLI and VS Code. In the last few weeks I had been working through the tutorials on anuglar.io and there is significant overlap between the "Homes" tutorial and the requirements for this project. My VS Code set up, Angular CLI, Node version, etc were all configured and known to be working.

Requirements to run the project:
This project is built using the following versions, other versions may work but testing version compatibility is out of scope:
VS Code 1.85.1
Node 20.11.0
Windows 10 PC
Chrome 120.0.6099.217
Angular CLI
TypeScript 4.9.5

Runing the project (from /InterviewWebProject/webProject ):
ng serve --open

This will build and serve the application, as well as launch the default broser to the project.

Story 1
The Angular.IO "homes" tutorial was used as a guide to scaffold this app, but the work done here is my own.

There are no requirements on how the images are listed, any styling or responsiveness. This seems to be a "check point" type of story that is not shippable in itself. I will not spend any time on the following details at this time:

1. Hard Coded English Strings
2. CSS to make this look good. As this page evolves a little bit, more work into HTML structure and styling may be needed, but his does not seem like the right time to do it.
3. Pagination is ignored at this time

Open Question: The constructor of ImageListComponent having async code seems like a code smell. I would like to work around that or convince myself it is okay since it is a component if possible and time permits.

Story 2:

The webp version of the image was templated to be displayed simply above the corresponding image.
The images were somewhat arbitrarily set to display at a size of 250x250. This is smaller that the images on zillow.com, but is similar to parts of amazon.com. No special attention was given for mobile devices, but a variety of window sizes typical to a PC were manually tested with no unexpected side effects.

Story 3
Assumption: No back button is needed as the browser navigation works to return to the images list.
Assumption: The details page shows the full size of the image. Product management might want to set a maximum size on this, but as a developer I don't really know the use case. If this was medical imaging, than the maximum size might be ideal.

Story 5
The Checkbox to only show important images is fixed at the top of the page and could go off of screen if the user scrolls. There may be an additional requirement that the header stays fixed as the images scroll that was not addressed in this project exercise.

The styling of the "filters area", if it evolves into that would need to be discussed.

Story 6
Assumed that filtering on both Author and Important should be done at the same time. Needed a singleton service to store teh filter values when navigating into the list page and into the details since the images list gets recreated and the constructor was re-initializing the filter values.

Conclusions:
The three main areas I would have spent more time on for production code would have been:

1. Style. This is definantly not my strong point, but I understand the importance of it and would work with PM/Dev managers to understand the initial design and get approval as the work progressed.
2. String Localization. In my previous job this was always a requirements and I would have worked with PM/Dev Managers to get approval for the english strings as well as do the work neccessary for the strings to be localized into all supported languages.
3. Unit tests. Much of the filtering logic was moved into a service, but I did not get unit tests around that functionality.

This app only ever fetches the first 30 of the random images, and the first requirement states to be able to list all of the images from https://picsum.photos/v2/list. This would probably include dealing with pagination in a production web app.

Doing a paginated UI would have been easier than doing something like an infinite scroll, but the later seems like the current UI trend. I have recently done some work with infinite scroll in preact with intersection observers, but would have stumbled getting off the ground in Angular.

The combination of pagination with clientside filtering can be quite complex to make performant and memory efficient. I probably would not have had time to fully solve that aspect in 4 hours even had I framed that as the most important piece.
