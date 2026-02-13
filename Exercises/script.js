document.addEventListener("DOMContentLoaded", () => {
    const addBtn = document.getElementById("addBtn");
    const list = document.getElementById("list");
    let itemCount = list.children.length;

    addBtn.addEventListener("click", () => {
        itemCount++;
        const li = document.createElement("li");
        li.textContent = `Item ${itemCount}`;
        list.appendChild(li);
    });
});
