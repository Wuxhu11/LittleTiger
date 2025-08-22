// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "\* indicates my student, † indicates equal contribution",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "Theoretically profound and practically feasible",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Experience, Interest, and Future",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-team",
          title: "Team",
          description: "Leverage people&#39;s strengths and make up for their shortcomings",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-funding",
          title: "Funding",
          description: "Work hard",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-services",
          title: "Services",
          description: "Shape a Better World",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "news-we-are-organizing-an-international-workshop-on-federated-learning-with-generative-ai-at-ijcai-2025-together-with-prof-jindong-wang-dr-lingjuan-lyu-dr-dimitrios-dimitriadis-and-prof-han-yu-sparkles",
          title: 'We are organizing an International Workshop on Federated Learning with Generative AI at...',
          description: "",
          section: "News",},{id: "news-two-papers-on-collaborative-federated-learning-and-vision-language-models-are-accepted-to-icml-2025-in-collaboration-with-prof-han-yu-prof-qicheng-lao-dr-tiantian-he-dr-qiqi-liu-prof-yew-soon-ong-and-prof-yaochu-jin-sparkles",
          title: 'Two papers on collaborative federated learning and vision language models are accepted to...',
          description: "",
          section: "News",},{id: "news-our-paper-on-personalized-federated-learning-is-accepted-to-iccv-2025-in-collaboration-with-dr-qiqi-liu-prof-yaochu-jin-dr-lingjuan-lyu-and-prof-han-yu-sparkles",
          title: 'Our paper on personalized federated learning is accepted to ICCV 2025, in collaboration...',
          description: "",
          section: "News",},{id: "projects-federated-learning",
          title: 'Federated Learning',
          description: "Free-riding, market competition, collaboration formation, measuring data heterogeneity, personalization, multi-task learning, federated foundation models",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-mathematical-optimization",
          title: 'Mathematical Optimization',
          description: "Discrete optimization, algorithmic game theory, network economics",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project.html";
            },},{id: "projects-scenery",
          title: 'Scenery',
          description: "Cities where I ever stayed",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project.html";
            },},{id: "projects-machine-learning-optimization-amp-others",
          title: 'Machine Learning, Optimization &amp;amp; Others',
          description: "Foundation models, neural network, reinforcement learning, discrete optimization, algorithmic game theory, cloud/edge computing",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
