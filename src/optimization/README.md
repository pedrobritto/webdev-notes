# Frontend Optimization Guidelines

### 1. Set performance budget
  - HTTP requests
  - Load Time
  
### 2. Measure performance
  - Chrome Dev Tools
  - Google PageSpeed

### 3. Optimize 
#### Images
- Set resolution to that used in the website (2x for high DPI)
- Reduce image size
  - RIOT
  - Photoshop's `Save for web...`
- Create sprite map for small images and/or `.svg` assets

#### JS
- Load before closing `<body>` tag
- Use hosted libraries
  - [Google Hosted Libraries](https://developers.google.com/speed/libraries/)
  - [CDN Js](https://cdnjs.com/)
- Use HTML's `async` attribute for independent scripts
- Combine and Minify
- Insert inline if a script is small (set threshold)

#### CSS
- Use hosted frameworks
- Combine and Minify
- Avoid `@import`

#### Fonts and icons
- Use hosted font service
- Load only font families and weights that are used
