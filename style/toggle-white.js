document.addEventListener("DOMContentLoaded", () => {
    // Inicializa o EmailJS com a Public Key

    // Configuração do botão de alternância do modo escuro
    const toggleButton = document.getElementById("dark-mode-toggle");
    const darkModeIcon = document.getElementById("dark-mode-icon");
    const body = document.body;

    if (toggleButton && darkModeIcon) {
        // Verifica se o modo escuro está ativado no localStorage
        const isDarkMode = localStorage.getItem("dark-mode") === "true";
        if (isDarkMode) {
            body.classList.add("dark-mode");
            toggleButton.classList.add("dark");
            darkModeIcon.textContent = "🌙"; // Ícone para o modo claro
        }

        // Alterna o modo escuro ao clicar no botão
        toggleButton.addEventListener("click", () => {
            body.classList.toggle("dark-mode");
            toggleButton.classList.toggle("dark");

            // Atualiza o ícone e salva o estado no localStorage
            if (body.classList.contains("dark-mode")) {
                darkModeIcon.textContent = "🌙"; // Ícone para modo claro
                localStorage.setItem("dark-mode", "true");
            } else {
                darkModeIcon.textContent = "☀️"; // Ícone para modo escuro
                localStorage.setItem("dark-mode", "false");
            }
        });
    }

  });
