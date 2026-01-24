// src/data/siteContent.js
export const siteContent = {
  header: {
    logo: { line1: "Galactic Dynamics", line2: "Group · SHAO" },
    navLinks: [
      { name: 'About', href: '#about' },
      { name: 'Research', href: '#research' },
      { name: 'Members', href: '#member' },
      { name: 'Opportunities', href: '#opportunities' },
    ]
  },
    hero: {
        title: { main: "Galactic Dynamics", sub: "Structure and Evolution" },
        description: "Decoding the mysteries of the universe through numerical simulations and dynamical modelling.",
        buttons: [
        { text: "Explore Research", targetId: "research" },
        { text: "Our Team", targetId: "member" }
        ],
        sideLabel: "Galactic Dynamics Group · SHAO"
    },

  about: {
    sectionNum: "01",
    sectionTitle: "Mission",
    description: "The Galaxy Structure and Dynamics group at Shanghai Astronomical Observatory (SHAO) focuses on understanding the formation and evolution of galaxies through state-of-the-art numerical simulations and advanced dynamical modelling. Our research bridges the gap between theoretical frameworks and multi-wavelength observational data.",
    coreFields: ["Numerical Simulations", "Dark Matter Dynamics", "Galactic Archaeology"]
  },

  opportunities: {
    sectionNum: "04",
    sectionTitle: "Opportunities",
    content: "We are constantly seeking motivated postdocs and students who are interested in galaxy dynamics and evolution. Our group provides a collaborative environment with access to state-of-the-art computational resources and world-class observational data.",
    email: "lzhu@shao.ac.cn",
    buttonText: "Send Application"
  },

  footer: {
    about: {
      title: "Galactic Dynamics @ SHAO",
      description: "Advancing our understanding of galaxy structure and evolution through cutting-edge dynamical modelling and simulations."
    },
    copyright: "© {year} Galactic Dynamics Group. All rights reserved.",
    tagline: "Engineered with Precision"
  }
};