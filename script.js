document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const statusMessage = document.getElementById("status-message");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Impedir recarregamento da página

        // Capturar os dados do formulário
        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
        };

        // Exibir mensagem de status enquanto processa
        statusMessage.style.color = "#4CAF50";
        statusMessage.textContent = "Enviando...";

        // Enviar os dados ao EmailJS
        emailjs.send("service_9miijto", "template_n1dmexh", formData)
            .then(() => {
                // Se enviado com sucesso
                statusMessage.textContent = "Mensagem enviada com sucesso!";
                statusMessage.style.color = "#4CAF50";
                form.reset(); // Limpar o formulário após o envio
            })
            .catch((error) => {
                // Se ocorrer erro
                console.error("Erro ao enviar mensagem:", error);
                statusMessage.textContent = "Erro ao enviar a mensagem. Tente novamente.";
                statusMessage.style.color = "#FF0000";
            });
    });
});
    const toggleButton = document.getElementById("dark-mode-toggle");
    const darkModeIcon = document.getElementById("dark-mode-icon");
    const body = document.body;

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
    //ass:vp