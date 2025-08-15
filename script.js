// ===============
// UTILITIES
// ===============
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const storage = {
  get: (k, fallback = null) => {
    try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : fallback; }
    catch { return fallback; }
  },
  set: (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }
};

// ===============
// i18n TEXTS (EN default, then UK, RU)
// ===============
const I18N = {
  en: {
    brand: "SysAdmin",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contacts": "Contacts",
    title: "System Administrator",
    summary: "System administrator with over 8 years of experience working in public and private organizations. I have in-depth knowledge of IT infrastructure and information security. I am skilled at designing, configuring, and maintaining systems of any complexity. I specialize in working with Windows and Linux operating systems. I have experience in deploying turnkey IT infrastructure—from planning to full implementation and support.",
    "location.label": "Location:",
    "location.value": "Baku, Azerbaijan",
    "status.label": "Status:",
    "status.value": "Open to opportunities",
    "cta.contact": "Contact",
    "cta.viewSkills": "View skills",
    "skills.title": "Skills",
    "skills.core.title": "Infrastructure",
    "skills.core.li1": "Linux (RHEL/Debian), Windows Server",
    "skills.core.li2": "Active Directory, Group Policy, DNS/DHCP",
    "skills.core.li3": "Virtualization: VMware/Proxmox/Hyper-V",
    "skills.core.li4": "Backup and disaster recovery",
    "skills.net.title": "Networking & Security",
    "skills.net.li1": "L2/L3, VLAN, VPN, Firewall (pfSense/ASA)",
    "skills.net.li2": "Monitoring: Zabbix, Prometheus, Grafana",
    "skills.net.li3": "SIEM/logging: ELK, Wazuh",
    "skills.net.li4": "TLS, IAM, MFA, hardening",
    "skills.auto.title": "Automation & Cloud",
    "skills.auto.li1": "Bash, PowerShell, Python (scripts)",
    "skills.auto.li2": "Ansible/Terraform (IaC)",
    "skills.auto.li3": "Docker, Kubernetes (basic)",
    "skills.auto.li4": "AWS/Azure/GCP (fundamentals)",
    "projects.title": "Projects",
    "contacts.title": "Contacts",
    "contacts.note": "Open to remote work and relocation. Response within 24 hours.",
    "footer.name": "System Administrator",
    "footer.rights": "All rights reserved"
  },
  uk: {
    brand: "Системний адміністратор",
    "nav.about": "Про мене",
    "nav.skills": "Навички",
    "nav.projects": "Проєкти",
    "nav.contacts": "Контакти",
    title: "Системний адміністратор",
    summary: "Системний адміністратор з понад 8-річним досвідом роботи у державних та приватних організаціях. Глибокі знання у сфері IT-інфраструктури та інформаційної безпеки. Досвід розгортання IT-інфраструктури 'під ключ' — від планування до впровадження та підтримки.",
    "location.label": "Місцезнаходження:",
    "location.value": "Баку, Азербайджан",
    "status.label": "Статус:",
    "status.value": "Відкритий до пропозицій",
    "cta.contact": "Зв'язатися",
    "cta.viewSkills": "Переглянути навички",
    "skills.title": "Навички",
    "skills.core.title": "Інфраструктура",
    "skills.core.li1": "Linux (RHEL/Debian), Windows Server",
    "skills.core.li2": "Active Directory, Group Policy, DNS/DHCP",
    "skills.core.li3": "Віртуалізація: VMware/Proxmox/Hyper-V",
    "skills.core.li4": "Резервне копіювання та відновлення",
    "skills.net.title": "Мережі та безпека",
    "skills.net.li1": "L2/L3, VLAN, VPN, Firewall (pfSense/ASA)",
    "skills.net.li2": "Моніторинг: Zabbix, Prometheus, Grafana",
    "skills.net.li3": "SIEM/логування: ELK, Wazuh",
    "skills.net.li4": "TLS, IAM, MFA, захист",
    "skills.auto.title": "Автоматизація та хмари",
    "skills.auto.li1": "Bash, PowerShell, Python (скрипти)",
    "skills.auto.li2": "Ansible/Terraform (IaC)",
    "skills.auto.li3": "Docker, Kubernetes (базові знання)",
    "skills.auto.li4": "AWS/Azure/GCP (базові знання)",
    "projects.title": "Проєкти",
    "contacts.title": "Контакти",
    "contacts.note": "Відкритий до віддаленої роботи та релокації. Відповідь протягом 24 годин.",
    "footer.name": "Системний адміністратор",
    "footer.rights": "Всі права захищено"
  },
  ru: {
    brand: "Системный администратор",
    "nav.about": "Обо мне",
    "nav.skills": "Навыки",
    "nav.projects": "Проекты",
    "nav.contacts": "Контакты",
    title: "Системный администратор",
    summary: "Системный администратор с более чем 8-летним опытом работы в государственных и частных организациях. Обладаю глубокими знаниями в области IT-инфраструктуры и информационной безопасности. Умею проектировать, настраивать и сопровождать системы любой сложности. Специализируюсь на работе с операционными системами Windows и Linux. Имею опыт развертывания IT-инфраструктуры \"под ключ\" — от планирования до полного внедрения и поддержки.",
    "location.label": "Местоположение:",
    "location.value": "Баку, Азербайджан",
    "status.label": "Статус:",
    "status.value": "Открыт к предложениям",
    "cta.contact": "Связаться",
    "cta.viewSkills": "Посмотреть навыки",
    "skills.title": "Навыки",
    "skills.core.title": "Инфраструктура",
    "skills.core.li1": "Linux (RHEL/Debian), Windows Server",
    "skills.core.li2": "Active Directory, Group Policy, DNS/DHCP",
    "skills.core.li3": "Виртуализация: VMware/Proxmox/Hyper-V",
    "skills.core.li4": "Резервное копирование и восстановление",
    "skills.net.title": "Сети и безопасность",
    "skills.net.li1": "L2/L3, VLAN, VPN, Firewall (pfSense/ASA)",
    "skills.net.li2": "Мониторинг: Zabbix, Prometheus, Grafana",
    "skills.net.li3": "SIEM/логирование: ELK, Wazuh",
    "skills.net.li4": "TLS, IAM, MFA, hardening",
    "skills.auto.title": "Автоматизация и облака",
    "skills.auto.li1": "Bash, PowerShell, Python (скрипты)",
    "skills.auto.li2": "Ansible/Terraform (IaC)",
    "skills.auto.li3": "Docker, Kubernetes (базово)",
    "skills.auto.li4": "AWS/Azure/GCP (основы)",
    "projects.title": "Проекты",
    "contacts.title": "Контакты",
    "contacts.note": "Открыт для удалённой работы и релокации. Ответ в течение 24 часов.",
    "footer.name": "Системный администратор",
    "footer.rights": "Все права защищены"
  }
};

// ===============
// INIT
// ===============
const yearEl = $("#year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const themeToggle = $("#theme-toggle");
const langButtons = $$(".lang-flag");

// defaults: theme from system, language = EN
const savedTheme = storage.get("theme", prefersDark() ? "dark" : "light");
const savedLang  = storage.get("lang", detectLang());

// apply
document.documentElement.setAttribute("data-theme", savedTheme);
setPressed(themeToggle, savedTheme === "dark");
setActiveFlag(savedLang);
applyLanguage(savedLang);

// theme toggle
themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", next);
  storage.set("theme", next);
  setPressed(themeToggle, next === "dark");
});

// language via flags
langButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.dataset.lang; // en / uk / ru
    applyLanguage(lang);
    setActiveFlag(lang);
    storage.set("lang", lang);
  });
});

// IntersectionObserver for project items
const observer = new IntersectionObserver((entries) => {
  entries.forEach((ent) => {
    if (ent.isIntersecting) {
      ent.target.classList.add('visible');
      observer.unobserve(ent.target);
    }
  });
}, { threshold: 0.1 });

window.addEventListener('load', () => {
  $$('.timeline-item').forEach((item) => observer.observe(item));
});

// ===============
// HELPERS
// ===============
function prefersDark() {
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
}
function setPressed(btn, pressed) {
  btn.setAttribute("aria-pressed", String(pressed));
}
function detectLang() {
  const nav = (navigator.language || "en").toLowerCase();
  if (nav.startsWith("uk")) return "uk";
  if (nav.startsWith("ru")) return "ru";
  return "en"; // default
}
function setActiveFlag(lang) {
  langButtons.forEach(b => b.classList.toggle('is-active', b.dataset.lang === lang));
}
function applyLanguage(lang) {
  const dict = I18N[lang] || I18N.en;
  $$("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
  // document lang attribute
  document.documentElement.lang = (lang === "ru") ? "ru" : (lang === "uk" ? "uk" : "en");
}

// Smooth anchor scrolling
$$('a[href^="#"]').forEach(a => {
  a.addEventListener("click", (e) => {
    const href = a.getAttribute("href");
    const target = href && href !== "#" ? $(href) : null;
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", href);
    }
  });
});
