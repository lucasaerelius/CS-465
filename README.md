#CS-465

1. Architecture:
-Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
-Why did the backend use a NoSQL MongoDB database?

HyperText Markup Language (HTML) is a webpage design language. HTML pages are static and lack interactivity. JavaScript, on the other hand, is a programming language used to enhance web pages by adding dynamism. It enables the creation of more interactive web pages. Single-page applications (SPAs) are simple webpages that can store and edit all the necessary information. SPAs can be employed as administration sites.

A NoSQL database is a type of database that does not impose a specific data structure. Consequently, each stored document can have different information compared to other data stored in the database. This project benefits from NoSQL databases as the documents are stored as JSON (JavaScript Object Notation) objects. JSON is a data format that can be easily accessed using JavaScript, the programming language utilized in this project.

2. Functionality:
-How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
-Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

JSON serves as a data format that ensures the stored information is presented in a readable manner. JavaScript, being a programming language, enables the creation of dynamic and interactive websites. Leveraging JavaScript, JSON can be easily accessed, making it a suitable format for transferring data from the frontend to the backend of the website.

During the project, code refactoring took place by transforming static HTML pages into dynamic JavaScript webpages. Following the Model-View-Controller (MVC) methodology, the original webpages were divided into a controller (handling page routing), a view (managing page appearance), and a model (managing stored data). This restructuring simplifies the web pages.

Another refactoring instance involved creating separate header and footer files, which control the appearance of these page components. This approach reduces code duplication throughout the project and facilitates making updates by requiring changes in only one file.

3. Testing:
-Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

Breaking down the project into distinct methods enhances its maintainability. If there is an issue with a specific method, developers can quickly locate and resolve it. Methods also facilitate testing by allowing individual functionality testing for each call. Testing methods ensures proper communication between the frontend and backend of the project, specifically the endpoints. Since data security is vital, testing helps ensure that only authorized individuals can access and modify the stored data. Users should be able to access the data without making changes, while the admin should have the ability to access and modify the data. It is essential to verify through testing that the project's authorization functions as intended.

4. Reflection:
-How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

This course provided valuable insights into the process of creating a large-scale website. Through this course, I learned how to integrate various technologies to develop a unified project. Unlike previous courses, which focused on a single technology, this experience allowed me to plan websites comprehensively, from inception to completion. Additionally, I acquired the knowledge and skills required to develop both the frontend and backend of a website.
