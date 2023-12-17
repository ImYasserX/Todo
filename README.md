# TODO Web App
#### Video Demo:  https://youtu.be/FTD1acz-txw
#### Description:

The Flask Todo App is a web application designed to help users manage their tasks. The application provides functionality for adding, editing, completing, and deleting tasks in a todo list. Built using Flask, HTML, CSS, and JavaScript, the project follows a simple yet effective structure.

##app.py
The app.py file serves as the backbone of the application, containing the Flask application code. It defines the various routes that handle user requests, such as adding new tasks, editing existing tasks, marking tasks as complete, and deleting tasks. Additionally, app.py interacts with a SQLite database to store and retrieve task data.

##templates/index.html
The index.html file, located in the templates directory, represents the main page of the application. This HTML file defines the structure of the user interface, showcasing the todo list along with options to add new tasks. It dynamically renders incomplete and completed tasks and provides links for actions like completing, editing, and deleting tasks.

##templates/edit.html
Within the templates directory, the edit.html file is dedicated to the editing functionality. When a user chooses to edit a task, this HTML file presents a form that allows modification of the task details. The form is submitted to the server for processing.

##static/style.css
The style.css file, located in the static directory, is responsible for enhancing the visual appeal of the application. It defines styles for the layout, color scheme, and animations, ensuring a clean and user-friendly interface. The styles are carefully crafted to provide a seamless and visually pleasing experience.

##static/script.js
In the static directory, the script.js file contains client-side JavaScript code that handles animations and interactions. It introduces subtle animations for user feedback and controls the behavior of the task list, enhancing the overall user experience.

##requirements.txt
The requirements.txt file lists the Python packages and their versions required to run the Flask application. By using this file, developers can easily install the necessary dependencies using the command pip install -r requirements.txt.

##Getting Started
To run the Flask Todo App locally, follow these steps:

Install the required dependencies: pip install -r requirements.txt
Run the Flask app: python app.py
Open the app in your web browser: http://127.0.0.1:5000/
Feel free to customize and expand upon this project based on your specific requirements.

Feel free to customize and extend this project according to your needs!
