function fetchBtn() {
    document.querySelector("#fetchBtn");
    const url = "fetch('https://jsonplaceholder.typicode.com/todos/1')";
    fetch(url).then(response => response.json()).then
    
}
