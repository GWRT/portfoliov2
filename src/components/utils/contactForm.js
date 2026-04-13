(function () {
    const form = document.getElementById("contact-form");
    const submit = document.getElementById("cf-submit");
    const btnText = document.getElementById("cf-btn-text");
    const spinner = document.getElementById("cf-spinner");
    const feedback = document.getElementById("cf-feedback");

    const fields = {
        email: document.getElementById("cf-email"),
        subject: document.getElementById("cf-subject"),
        message: document.getElementById("cf-message"),
    };

    function setError(el, msg) {
        el.classList.add("!border-red-500/70");
        showFeedback(msg, "error");
    }

    function clearErrors() {
        Object.values(fields).forEach((el) => el.classList.remove("!border-red-500/70"));
    }

    function showFeedback(msg, type) {
        feedback.textContent = msg;
        feedback.className =
            type === "ok" ? "text-sm font-mono text-[var(--c-accent-light)]" : "text-sm font-mono text-red-400/80";
    }

    function setLoading(on) {
        submit.disabled = on;
        spinner.classList.toggle("hidden", !on);
        btnText.textContent = on ? "Enviando…" : "Enviar mensaje";
    }

    form.addEventListener("submit", async function (e) {
        e.preventDefault();
        clearErrors();

        let valid = true;
        if (!fields.email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.value)) {
            setError(fields.email, "Ingresa un correo válido.");
            valid = false;
        }
        if (!fields.subject.value.trim()) {
            setError(fields.subject, "El asunto es obligatorio.");
            valid = false;
        }
        if (!fields.message.value.trim()) {
            setError(fields.message, "El mensaje no puede estar vacío.");
            valid = false;
        }
        if (!valid) return;

        setLoading(true);

        try {
            const data = new FormData(form);
            const res = await fetch("https://formsubmit.co/ajax/gramosti20@gmail.com", {
                method: "POST",
                headers: { Accept: "application/json" },
                body: data,
            });

            if (res.ok) {
                showFeedback("¡Mensaje enviado! Te responderé pronto.", "ok");
                form.reset();
            } else {
                showFeedback("Error al enviar. Inténtalo de nuevo.", "error");
            }
        } catch (_) {
            showFeedback("Sin conexión. Inténtalo más tarde.", "error");
        } finally {
            setLoading(false);
        }
    });

    Object.values(fields).forEach((el) => {
        el.addEventListener("input", function () {
            el.classList.remove("!border-red-500/70");
        });
    });
})();
