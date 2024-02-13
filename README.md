# Progressive Web Applications (PWA) Challenge: Text Editor

## Overview

This project involves building a text editor web application that operates as a Progressive Web App (PWA). The app allows developers to create and manage notes or code snippets with or without an internet connection, ensuring reliable access to the content for later use.


## Table of Contents
- [Overview](#overview)
- [Project Requirements](#project-requirements)
  - [Acceptance Criteria](#acceptance-criteria)
- [Instructions](#instructions)
- [Screenshots](#screenshots)
- [Author](#author)

## Project Requirements

### Acceptance Criteria

Given a text editor web application:
- When opened in an editor, the application should exhibit a client-server folder structure.
- Running `npm run start` from the root directory should start up the backend and serve the client.
- Executing the text editor application from the terminal should show that JavaScript files have been bundled using webpack.
- Running webpack plugins should generate an HTML file, service worker, and a manifest file.
- Using next-gen JavaScript in the application should result in the text editor functioning in the browser without errors.
- Opening the text editor should immediately create a database storage using IndexedDB.
- Entering content and subsequently clicking off the DOM window should save the content in the text editor with IndexedDB.
- Reopening the text editor after closing it should retrieve the content from IndexedDB.
- Clicking on the Install button should download the web application as an icon on the desktop.
- Loading the web application should have a registered service worker using workbox.
- Registering a service worker should pre-cache static assets upon loading, along with subsequent pages and static assets.
- Deploying to Render should include proper build scripts for a webpack application.

## Instructions

1. Clone the starter code repository.
2. Create your own repository with the starter code.
3. Follow the acceptance criteria to ensure the correct functioning of the text editor web application.
4. Deploy the application to Render using proper build scripts for webpack.

## Screenshots

**Browser Version of the Application**
  - ![browserVersion](/client/src/images/browserVersion.png)

**Browser Alert to Install**
  - ![AlertToInstall](/client/src/images/AlertToInstall.png)

**Application Location Post-Install**
  - ![appLocation](/client/src/images/appLocation.png)

**Installed Version of the Application**
  - ![installedApp](/client/src/images/installedApp.png)

## Author

Kevin Mead