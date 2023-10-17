# CS465
## Architecture
### Frontend Development
In our full-stack project, we used a combination of frontend technologies including HTML, JavaScript, and Single-Page Application (SPA) principles.

Angular: We used the Angular framework to build the frontend of our application. Angular is a powerful framework that enabled us to easily create a Single-Page Application (SPA).

HTML: HTML was used for creating the structure of web pages. It allowed us to define the layout, elements, and content of our web application.

TypeScript: JavaScript was used for adding interactivity to our web application. It was used to handle user interactions, perform client-side validation, and make asynchronous requests to the backend.

### Backend and NoSQL MongoDB
Our backend was built using a NoSQL MongoDB database for a few different reasons.

Flexibility: MongoDB's schema-less design allows us to store data with varying structures, making it easily adaptable to scalable projects.

Scalability: MongoDB is scalable, making it suitable for handling large amounts of data and high-traffic applications.

Speed: MongoDB's document-oriented nature is in charge of fast data retrieval and indexing, which is needed for our application.

JSON Compatibility: MongoDB stores data in a format similar to JSON (BSON), which integrates well with our frontend, reducing the headache of data transformation.

## Functionality
### JSON vs. JavaScript
JSON (JavaScript Object Notation) is a lightweight data-interchange format, whereas JavaScript is a full programming language. JSON is a subset of JavaScript and provides a structured way to represent data. JSON acts as a bridge between frontend and backend development by allowing data to be transferred in a standardized format. JavaScript, on the other hand, is used for processing and manipulating data within the frontend, api, and backend.

### Code Refactoring
Throughout the full-stack development process, we used code refactoring to improve functionality and efficiency. There was one point where we had to add a callback to get a user for authentication purposes. We still used the same code in our POST/PUT methods for trips, but added an extra step for getting  the user for authentication to ensure that there's layered security within the application. Refactoring involved restructuring code to enhance readability, maintainability, and performance. The benefits of reusable UI components include reduced duplication of code, easier maintenance, and consistent user experiences.

## Testing
### API Testing
API testing in a full-stack application involves examining various methods, endpoints, and authentication layers.

Methods: We tested HTTP methods such as GET, POST, PUT, and DELETE to ensure that data manipulation was accurate and secure. 

Endpoints: Each endpoint was rigorously tested to validate its functionality, including data retrieval, storage, and updates. Postman was used to ensure data was accurately shown by endpoints.

Security: Security testing was done by identifying vulnerabilities such as unauthorized access.

### Reflection
This course has significantly contributed to my professional growth and marketability in the field. I've honed various skills, including:

Full Stack Development: I now possess a better understanding of both frontend and backend development, enabling me to work on end-to-end solutions.

Database Management: The use of MongoDB has familiarized me with NoSQL databases, which are increasingly popular in modern applications.

API Testing: My proficiency in API testing methods and security measures has made me well-equipped to build secure and robust applications.
