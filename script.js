/**
 * Interatividade do portfólio: menu mobile, tema claro/escuro, digitação
 * no terminal, aba ativa durante a rolagem e validação do formulário.
 * JavaScript puro, sem dependências externas.
 */

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initThemeToggle();
  initTypedIntro();
  initActiveTabOnScroll();
  initContactForm();
  initModal();
});

// menu mobile: no celular a barra de abas vira um menu suspenso
function initMobileMenu() {
  const menuToggle = document.getElementById("menu-toggle");
  const tabBar = document.getElementById("tab-bar");

  menuToggle.addEventListener("click", () => {
    const isOpen = tabBar.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // fecha o menu automaticamente ao clicar em um link de navegação
  tabBar.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      tabBar.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// tema claro/escuro, preferência salva no localStorage
function initThemeToggle() {
  const body = document.body;
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");

  // recupera tema salvo, se existir; padrão é o dark definido no HTML
  const savedTheme = localStorage.getItem("portfolio-theme");
  if (savedTheme) {
    body.setAttribute("data-theme", savedTheme);
  }
  updateThemeIcon();

  themeToggle.addEventListener("click", () => {
    const current = body.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    body.setAttribute("data-theme", next);
    localStorage.setItem("portfolio-theme", next);
    updateThemeIcon();
  });

  function updateThemeIcon() {
    const isDark = body.getAttribute("data-theme") === "dark";
    themeIcon.textContent = isDark ? "☾" : "☀";
  }
}

// efeito de digitação no terminal da seção sobre mim
function initTypedIntro() {
  const commandEl = document.getElementById("typed-command");
  const outputEl = document.getElementById("typed-output");

  const command = "whoami";
  const output = "Gui, dev júnior .NET/C#, aprendendo todo dia.";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    commandEl.textContent = command;
    outputEl.textContent = output;
    return;
  }

  typeText(commandEl, command, 90, () => {
    setTimeout(() => typeText(outputEl, output, 25), 200);
  });

  function typeText(el, text, speed, onDone) {
    let i = 0;
    el.textContent = "";
    const interval = setInterval(() => {
      el.textContent += text.charAt(i);
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        if (onDone) onDone();
      }
    }, speed);
  }
}

// marca a aba ativa (e a barra de status) conforme a seção visível na rolagem
function initActiveTabOnScroll() {
  const sections = document.querySelectorAll(".pane");
  const tabs = document.querySelectorAll(".tab");
  const currentSectionLabel = document.getElementById("current-section");

  const fileNames = {
    sobre: "sobre.js",
    formacao: "formacao.json",
    portfolio: "portfolio.md",
    contato: "contato.html",
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const id = entry.target.id;

        tabs.forEach((tab) => {
          tab.classList.toggle("is-active", tab.dataset.tab === id);
        });

        if (currentSectionLabel && fileNames[id]) {
          currentSectionLabel.textContent = fileNames[id];
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" } // considera "ativa" a seção próxima do centro da tela
  );

  sections.forEach((section) => observer.observe(section));
}

// validação e envio simulado do formulário de contato
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const fields = {
    nome: {
      input: document.getElementById("nome"),
      error: document.getElementById("error-nome"),
      validate: (value) => value.trim().length > 0,
      message: "Preencha o seu nome.",
    },
    email: {
      input: document.getElementById("email"),
      error: document.getElementById("error-email"),
      // regex simples para formato usuario@dominio.com
      validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),
      message: "Informe um e-mail válido (ex: usuario@dominio.com).",
    },
    mensagem: {
      input: document.getElementById("mensagem"),
      error: document.getElementById("error-mensagem"),
      validate: (value) => value.trim().length > 0,
      message: "Escreva uma mensagem antes de enviar.",
    },
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // impede o envio real / recarregamento da página

    let isFormValid = true;

    Object.values(fields).forEach((field) => {
      const value = field.input.value;
      const valid = field.validate(value);
      const group = field.input.closest(".form-group");

      if (!valid) {
        isFormValid = false;
        group.classList.add("has-error");
        field.error.textContent = field.message;
      } else {
        group.classList.remove("has-error");
        field.error.textContent = "";
      }
    });

    if (!isFormValid) return;

    // simulação de envio: limpa o formulário e exibe confirmação
    form.reset();
    showModal("console.log()", "Mensagem enviada com sucesso! Em breve retorno o contato.");
  });
}

// modal de confirmação, reaproveitado pelo formulário de contato
let modalElements = null;

function initModal() {
  modalElements = {
    overlay: document.getElementById("modal-overlay"),
    title: document.getElementById("modal-title"),
    message: document.getElementById("modal-message"),
    closeBtn: document.getElementById("modal-close"),
  };

  modalElements.closeBtn.addEventListener("click", hideModal);

  // fecha ao clicar fora da caixa do modal
  modalElements.overlay.addEventListener("click", (event) => {
    if (event.target === modalElements.overlay) hideModal();
  });

  // fecha com a tecla Esc
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modalElements.overlay.hidden) hideModal();
  });
}

function showModal(title, message) {
  modalElements.title.textContent = title;
  modalElements.message.textContent = message;
  modalElements.overlay.hidden = false;
  modalElements.closeBtn.focus();
}

function hideModal() {
  modalElements.overlay.hidden = true;
}
