async function buscaRepositorios(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        const repos = await response.json();
        const repoList = document.querySelector(".portfolio");

        repoList.innerHTML = "";

        repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

        repos.forEach(repo => {
            repoList.innerHTML += `
                <li>
                    <span class="title github">${repo.name}</span>
                    <a href="${repo.html_url}" target="_blank">${repo.html_url}</a>
                </li>
            `;
        });
    } catch (error) {
        console.error("Erro ao buscar repositórios", error);
    }
}

buscaRepositorios("JoaoMoraisxD");
