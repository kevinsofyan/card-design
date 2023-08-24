# Challenge Submission

## React Card Design Component

This repository contains my solution for the coding challenge. The challenge involved creating a React component, styling it according to a provided design using SCSS, and implementing specific functionalities.

### Functionality Implemented

1. Hiding description until the button is clicked.
2. Hiding description after page load for SEO purposes.
3. Anonymizing Singapore phone numbers as specified.
4. Displaying line breaks in the description text.
5. Clicking on a phone number reveals the real number.
6. Using responsive image srcset for specific width, and lazyload the image

### Design Styling

I implemented the design provided in the Figma design. You can view the design [here](https://www.figma.com/file/zT67hKBce1jfyZPkx5cGrg/FE-challenge---Project-card-design).

### How to Run

1. Clone this repository: `git clone https://github.com/kevinsofyan/card-design`
2. Navigate to the project directory: `cd card-design`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`

### Further Improvements

**Optimizing Main Image**
For this project the image is to big for the container size, its about 2000px width, but since i notice that the image is already support resizing the image, i use that function with srcset to request image size that more suitable for the container.

**If the image size cannot change these are my suggestion:**

- use CDN that deliver image geographically closer to the user
- use WebP format for the image
- Configure your server to set appropriate caching headers for images.
