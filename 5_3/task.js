function generateHTML(tasks) {
    let html = '<ul>\n';
    for (let i = 0; i < tasks.length; i++) {
        let b = '';

        if (tasks[i].completed == true) {
            b = 'completed';
        }
        html += `<li class="${b}">${tasks[i].title}</li>\n`;
    }
    html += "</ul>";

    return html;
}

const tasks = [
    { id: 1, title: 'Task 1', completed: true },
    { id: 2, title: 'Task 2', completed: false }
];