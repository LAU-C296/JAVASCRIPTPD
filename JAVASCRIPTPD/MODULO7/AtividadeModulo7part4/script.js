const form = document.getElementById("postForm");
const textarea = document.getElementById("postText");
const feed = document.getElementById("feed");

let posts = [];

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const text = textarea.value;

    // pegar imagem de gato
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await response.json();
    const catImage = data[0].url;

    const post = {
        data: new Date(),
        usuario: "@laura",
        avatar: "https://i.pravatar.cc/150?img=5",
        texto: text,
        imagem: catImage,
        likes: 0
    };

    posts.unshift(post);
    renderPosts();

    textarea.value = "";
});

function renderPosts() {
    feed.innerHTML = "";

    posts.forEach((post, index) => {
        const li = document.createElement("li");
        li.classList.add("post");

        li.innerHTML = `
            <div class="user-info">
                <img src="${post.avatar}">
                <strong>${post.usuario}</strong>
            </div>

            <p class="post-text">${post.texto}</p>

            <img class="post-image" src="${post.imagem}">

            <div class="post-actions">
                <button class="like-btn" onclick="likePost(${index})">Curtir ❤️</button>
                <span>${post.likes}</span>
            </div>
        `;

        feed.appendChild(li);
    });
}

function likePost(index) {
    posts[index].likes++;
    renderPosts();
}