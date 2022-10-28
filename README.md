## Image-API
This project is a part of Advanced fullstack nano degree offered by Udacity. The project aims to build an API using nodejs and express on the top of typescript coupled with jasmine as a testing framework to ensure code sustainability.

## npm scripts 
npm run start (to start the server)  <br/>
npm run test (to start the testing process of the functions and endpoints) <br/>
npm run build (to have the typescript compiled) <br/>

## API 
the API has a processing functionality coupled using queries upon request. <br/>
ex : http://localhost:3000/api/images?width=500&height=500&filename=fjord.jpg <br/>
the previous example shows the API parameters such as height and width while having the file name specified. <br/>
the API return the image processed if available and provide clear feedback to the user upon having unintended queries.  <br/>
API can handle corner cases such as width , height and file non existing. <br/>

## Images folders 
the images are stored in the following directory ./public/images  <br/>
the resulting processed images are stored in the following directory ./public/images/thumb  <br/>
