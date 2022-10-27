## Image-API
This porject is a part of Advanced fullstack nano degree offered by Udacity. The project aims to build an API using nodejs and express on the top of typescript coupled with jasmine as a testing framework to ensure code sustainablity.

##npm scripts 
npm run start (to start the server)
npm run test (to start the testing process of the functions and endpoints)
npm run build (to have the typescript compiled)

## API 
the API has a processing functionality coupled using queries upon request.
ex : http://localhost:3000/api/images?width=500&height=500&filename=fjord.jpg
the previous examble shows the API parameters such as height and width while having the file name specified.
the API return the image processed if availble and provide clear feedback to the user upon having unintended queries.
API can handle courner cases such as width , height and file non existing.

## Images folders 
the stored images are stored in the following directory ./public/images
the resulting processed images are stored in the following directory ./public/thumb
