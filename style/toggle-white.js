document.addEventListener("DOMContentLoaded", () => {
    // Configuração do modo escuro para múltiplos botões
    const toggleButtons = document.querySelectorAll("#dark-mode-toggle");
    const darkModeIcon = document.querySelectorAll("#dark-mode-icon");
    const body = document.body;

    // Verifica se o modo escuro está ativado no localStorage
    const isDarkMode = localStorage.getItem("dark-mode") === "true";
    if (isDarkMode) {
        body.classList.add("dark-mode");
        toggleButtons.forEach((btn) => btn.classList.add("dark"));
        darkModeIcon.forEach((icon) => (icon.textContent = "🌙"));
    }

    // Alterna o modo escuro em todos os botões ao clicar
    toggleButtons.forEach((button) => {
        button.addEventListener("click", () => {
            body.classList.toggle("dark-mode");
            toggleButtons.forEach((btn) => btn.classList.toggle("dark"));

            // Atualiza o ícone em todos os botões
            darkModeIcon.forEach((icon) => {
                if (body.classList.contains("dark-mode")) {
                    icon.textContent = "🌙"; // Ícone para modo claro
                    localStorage.setItem("dark-mode", "true");
                } else {
                    icon.textContent = "☀️"; // Ícone para modo escuro
                    localStorage.setItem("dark-mode", "false");
                }
            });
        });
    });
});

