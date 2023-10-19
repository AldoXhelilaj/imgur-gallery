## Getting started

To get the frontend running locally:

- Clone this repo
- `npm install` to install all required dependencies
- `npm run start` to start the local server (this project uses [Create React App](https://create-react-app.dev/))
- `npm run build` to build the project/output folder is `/build`

Local web server will use port 3000. but for some reason i can only use the api in my static address http://10.3.0.149:3000/

LIVE SITE: https://aldoxhelilaj.github.io/imgur-gallery/ but there is the same problem as in localhost



## Packages used

- React
- Redux (toolkit)
- Tailwind
- Tabler icons
- React router
- Axios

## Functionality overview

This app uses the Imgur API to show gallery data

**General functionality:**

- View all images or videos in a grid layout
- Clicking on an image or video card directs you to a detailed page
- The detail page includes the following information:
  - Title of the image or video
  - Count of comments
  - Upvotes (number of likes)
  - Downvotes (number of dislikes)
  - Tags associated with the image or video
- Implemented filter options:
  - Sorting functionality to organize images or videos
  - Sections for different categories of content
  - Window option, available when the section is set to top
  - Ability to toggle visibility of viral content
  - Ability to toggle display of mature content

The user interface is designed for easy navigation and a seamless browsing experience.

