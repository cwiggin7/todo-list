const todos = (title, description, dueDate, priority, projectID) => {
    const ID = crypto.randomUUID();
    const changePriority = (number) => {
        priority = number;
        localStorage.setItem(this.ID, JSON.stringify(this));
    };
    return { title, ID, description, dueDate, priority, projectID };
};

const projects = (title) => {
    const ID = crypto.randomUUID();
    return { title, ID };
};

function createNewProject(title) {
    var proj = projects(title);
    localStorage.setItem(proj.ID, JSON.stringify(proj));
}

function removeProject(ID) {
    localStorage.removeItem(ID);
}

function createNewTodo(title, description, dueDate, priority, projectID) {
    var todo = todos(title, description, dueDate, priority, projectID);
    localStorage.setItem(todo.ID, JSON.stringify(todo));
}

// (function () {

// })();

// const buttonTodayProjects = document.querySelector("#button-today-projects");
// buttonTodayProjects.addEventListener("click", () => {

// });