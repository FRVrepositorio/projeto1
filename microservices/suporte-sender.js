document.addEventListener("DOMContentLoaded", () => {
    // Inicializa o EmailJS com a Public Key
    emailjs.init("3InQchWdkZCxGWYjt"); // Substitua pela sua Public Key

    

    // Configuração do formulário de contato
    const form = document.getElementById("contactForm");
    const statusMessage = document.getElementById("status-message");

    if (form && statusMessage) {
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
            emailjs
                .send("service_qpkjng3", "template_3z5epsj", formData)
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
    }
});
