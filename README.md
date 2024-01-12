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

Story2:

The webp version of the image was templated to be displayed simply above the corresponding image.
The images were somewhat arbitrarily set to display at a size of 250x250. This is smaller that the images on zillow.com, but is similar to parts of amazon.com. No special attention was given for mobile devices, but a variety of window sizes typical to a PC were manually tested with no unexpected side effects.
