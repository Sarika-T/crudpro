### TaskMate(CRUD Operations)

TaskMate is a task management application that allows users to efficiently manage their daily responsibilities, long-term goals, and collaborative projects. Built with React and Material-UI, TaskMate provides an intuitive interface and powerful features to enhance productivity.

### Features

**Responsive Design** : Optimized for both mobile and desktop devices.

**Dynamic Sidebar**: Navigate between pages with a collapsible sidebar.

**Task Management**: Add, edit, and delete tasks with a user-friendly modal interface.

**Custom Styling**: Styled using Material-UI and additional custom CSS for a polished look.

**Dynamic Content Rendering**: Pages load dynamically based on navigation.

### Project Structure

TaskMate
├── src
│   ├── assets
│   │   └── icon.js :  it contains icons.
│   ├── components
│   │   ├── common  :    Reusable compononents like Drawer, Modal and FormProvider.
│   │   │   ├── Drawer.js
│   │   │   ├── ModalContainer.js
│   │   │   ├── FormProvider.js
│   │   │   └── common.css
│   │   ├── MainPage     :   Mainpage of the appliaction where we can handle Home , Tasks and About.
│   │   │   ├── MainPage.js
│   │   │   ├── Tasks.js
│   │   │   ├── Home.js
│   │   │   ├── About.js
│   │   │   └── MainPage.css
│   ├── utils   :    here we use utility functions like validations.
│   │   └── Validation.js
│   └── index.js
└── README.md

### Installation

Clone the Repository:

git clone (https://github.com/Sarika-T/crudpro.git)

### Install Dependencies:

npm install

### Run the Application:

npm start

### Usage

Navigate through the app using the sidebar (Home, Tasks, About).

Manage tasks by clicking the "Add Task" button.

Add new tasks with a title, description, and status.

Edit or delete existing tasks.

Explore the Home and About pages for additional information.


### Technologies Used

React: Component-based UI development.

Material-UI: Styling and responsive design.

React Hook Form: Form management.

Custom CSS: Additional styling.



### Pages

Home Page: Welcoming introduction and overview.

Tasks Page: Task cards with add/edit/delete functionality.

About Page: Mission and vision of TaskMate.

### Screenshot
![Alt Text] (my-app/home.png)

### Contributing
Contributions are welcome! Please follow these steps:

1.Fork the repository.
2.Create a new branch (git checkout -b feature-branch).
3.Commit your changes (git commit -m "Add new feature").
4.Push to the branch (git push origin feature-branch).
5.Open a pull request.

### License
This project is licensed under the MIT License. See the LICENSE file for details.

### Github link:

Email: talarisarika22@gmail.com

GitHub: https://github.com/Sarika-T/crudpro

### line demo

link:  https://sarika-t.github.io/crudpro/

Let TaskMate be your partner in productivity!


