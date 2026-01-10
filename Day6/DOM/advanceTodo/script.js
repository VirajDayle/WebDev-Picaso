// ---------- DOM ----------
const todoList = document.querySelector(".todo-list");
const input = document.querySelector(".todo-input input");
const addBtn = document.querySelector("#addBtn");
const todoInputContainer = document.querySelector(".todo-input");

// ---------- Storage ----------
const STORAGE_KEY = "todos";

function loadTodos() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

function saveTodos() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

// ---------- State ----------
let todos = loadTodos();
let editId = null; // null = Add mode, number = Update mode

// ---------- Render ----------
function renderTodos() {
  todoList.innerHTML = "";

  const fragment = document.createDocumentFragment();

  todos.forEach(({ id, title, completed }) => {
    const li = document.createElement("li");
    li.dataset.id = id;
    if (completed) li.classList.add("completed");

    const spanEl = document.createElement("span");
    const divEl = document.createElement("div");
    const buttonEl = document.createElement("button");

    li.appendChild(spanEl);
    divEl.appendChild(buttonEl);

    li.appendChild(divEl);

    // span for todo text
    const span = document.createElement("span");
    span.className = "todo-text";
    span.textContent = title;

    // actions div
    const actionsDiv = document.createElement("div");
    actionsDiv.className = "actions";

    // done button
    const doneBtn = document.createElement("button");
    doneBtn.className = "done";
    doneBtn.setAttribute("aria-label", "Mark done");
    doneBtn.textContent = "✔";

    // delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete";
    deleteBtn.setAttribute("aria-label", "Delete");
    deleteBtn.textContent = "✖";

    // append buttons to actions
    actionsDiv.append(doneBtn, deleteBtn);

    // append everything to li
    li.append(span, actionsDiv);

    fragment.appendChild(li);
  });

  todoList.appendChild(fragment);
}

// ---------- Helpers ----------
function enterEditMode(todo, li) {
  editId = todo.id;
  input.value = todo.title;

  todoInputContainer.classList.add("update");
  addBtn.textContent = "Update";
  li.classList.add("update");
}

function resetEditMode() {
  editId = null;
  input.value = "";

  todoInputContainer.classList.remove("update");
  addBtn.textContent = "Add";

  document
    .querySelectorAll(".todo-list li.update")
    .forEach((li) => li.classList.remove("update"));
}

// ---------- Event Delegation ----------
todoList.addEventListener("click", (e) => {
  const li = e.target.closest("li");
  if (!li) return;

  const id = Number(li.dataset.id);
  const todo = todos.find((t) => t.id === id);

  // ✏️ Edit
  if (e.target.closest(".todo-text")) {
    enterEditMode(todo, li);
    return;
  }

  // 🗑 Delete
  if (e.target.closest(".delete")) {
    todos = todos.filter((t) => t.id !== id);
  }

  // ✅ Toggle complete
  if (e.target.closest(".done")) {
    todos = todos.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
  }

  saveTodos();
  renderTodos();
});

// ---------- Add / Update ----------
addBtn.addEventListener("click", () => {
  const value = input.value.trim();
  if (!value) return;

  if (editId === null) {
    // ➕ Add
    todos.push({
      id: Date.now(),
      title: value,
      completed: false,
      created: Date.now(),
    });
    input.value = "";
  } else {
    // ✏️ Update
    todos = todos.map((todo) =>
      todo.id === editId ? { ...todo, title: value } : todo
    );
    input.value = "";
    resetEditMode();
  }

  saveTodos();
  renderTodos();
});

// ---------- Init ----------
renderTodos();
