import journalFront from "../../assets/journalFrontPage.jpg";
import veterinariaFront from "../../assets/veterinariaFront.jpg";
import observatoryFront from "../../assets/observatoryFront.jpg";
import monitoreoFront from "../../assets/monitoreo.jpg";
import gestionFront from "../../assets/gestion_front.jpg";
import wsiotramite from "../../assets/wsiotramite.png";

//const icon = (name, color = "fff") => `https://cdn.simpleicons.org/${name}/${color}`;
const icon = (name) => `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${name}.svg`;

export const projectsList = [
    {
        title: "Articulo publicado",
        content:
            "Software basado en Inteligencia Artificial que utiliza árboles de decisión y entropía para determinar niveles de obesidad y analizar sus causas principales en pacientes de centros de salud en Latinoamérica.",
        image: journalFront,
        techIcons: [{ label: "Python", svg: icon("python") }],
        links: [{ label: "DOI", href: "https://doi.org/10.48168/innosoft.s15.a156", icon: icon("doi") }],
    },
    {
        title: "Hub de Interoperabilidad Empresarial Multientidad",
        content:
            "Desarrollo de un sistema intermediario que centraliza la comunicación entre múltiples entidades y la Plataforma de Interoperabilidad del Estado (PIDE), permitiendo que diversas entidades operen mediante una única solución.",
        image: wsiotramite,
        techIcons: [
            { label: "Java", svg: icon("java") },
            { label: "Spring", svg: icon("spring") },
        ],
    },
    {
        title: "Sistema de Monitoreo de Salud Pública",
        content:
            "Plataforma para la vigilancia epidemiológica y el monitoreo de indicadores de salud pública, diseñada para centralizar datos sanitarios y facilitar el seguimiento de condiciones críticas en la población.",
        image: monitoreoFront,
        techIcons: [
            { label: "Java", svg: icon("java") },
            { label: "MySQL", svg: icon("mysql") },
        ],
        links: [
            {
                label: "GitHub",
                href: "https://github.com/MarcoQM/SistemaMonitoreoVigilanciaSaludPublica.git",
                icon: icon("github"),
            },
            {
                label: "Artículo",
                href: "https://drive.google.com/file/d/1rrPCYygMM-ouXxQRMFHYVEwictGCxPeD/view?usp=sharing",
                icon: icon("googledocs"),
            },
        ],
    },
    {
        title: "Observatorio de Salud Mental",
        content:
            "Aplicación web desarrollada con el stack MERN para la visualización y análisis de indicadores de salud mental, proporcionando herramientas para el monitoreo de datos estadísticos y soporte informativo.",
        image: observatoryFront,
        techIcons: [
            { label: "React", svg: icon("react") },
            { label: "Vite", svg: icon("vite") },
            { label: "Tailwind", svg: icon("tailwindcss") },
            { label: "MongoDB", svg: icon("mongodb") },
            { label: "Node.js", svg: icon("nodedotjs") },
            { label: "Express", svg: icon("express") },
        ],
        links: [
            { label: "GitHub", href: "https://github.com/GWRT/observatorio-mental-react.git", icon: icon("github") },
            { label: "Demo", href: "https://observatorio-mental.netlify.app/", icon: icon("googlechrome") },
        ],
    },
    {
        title: "Gestión Académica",
        content:
            "Sistema de gestión académica que permite la administración de procesos educativos, incluyendo el control de cursos, estudiantes y registros académicos.",
        image: gestionFront,
        techIcons: [
            { label: "Vue", svg: icon("vuedotjs") },
            { label: "Vite", svg: icon("vite") },
            { label: "Tailwind", svg: icon("tailwindcss") },
            { label: "MySQL", svg: icon("mysql") },
            { label: "Laravel", svg: icon("laravel") },
        ],
        links: [
            { label: "GitHub", href: "https://github.com/GWRT/academicoFront.git", icon: icon("github") },
            { label: "Demo", href: "https://academico-front.vercel.app/", icon: icon("googlechrome") },
        ],
    },
    {
        title: "Seguimiento de Pacientes y Veterinaria",
        content:
            "Aplicación web enfocada en la gestión de servicios veterinarios, permitiendo la programación de citas, el seguimiento de pacientes y la administración de registros.",
        image: veterinariaFront,
        techIcons: [
            { label: "React", svg: icon("react") },
            { label: "Vite", svg: icon("vite") },
            { label: "Tailwind", svg: icon("tailwindcss") },
        ],
        links: [
            { label: "GitHub", href: "https://github.com/GWRT/citas_react_vite", icon: icon("github") },
            { label: "Demo", href: "https://bright-tiramisu-f225de.netlify.app/", icon: icon("googlechrome") },
        ],
    },
];
