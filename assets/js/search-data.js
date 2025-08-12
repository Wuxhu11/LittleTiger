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
          description: "A growing collection of your cool projects.",
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
        },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "news-announcements-and-news-can-be-much-longer-than-just-quick-inline-posts-in-fact-they-can-have-all-the-features-available-for-the-standard-blog-posts-see-below-jean-shorts-raw-denim-vice-normcore-art-party-high-life-pbr-skateboard-stumptown-vinyl-kitsch-four-loko-meh-8-bit-tousled-banh-mi-tilde-forage-schlitz-dreamcatcher-twee-3-wolf-moon-chambray-asymmetrical-paleo-salvia-sartorial-umami-four-loko-master-cleanse-drinking-vinegar-brunch-pinterest-diy-authentic-schlitz-hoodie-intelligentsia-butcher-trust-fund-brunch-shabby-chic-kickstarter-forage-flexitarian-direct-trade-cold-pressed-meggings-stumptown-plaid-pop-up-taxidermy-hoodie-xoxo-fingerstache-scenester-echo-park-plaid-ugh-wes-anderson-freegan-pug-selvage-fanny-pack-leggings-pickled-food-truck-diy-irony-banksy-hipster-list-brunch-fixie-raybans-messenger-bag-hoodie-thundercats-retro-tote-bag-8-bit-godard-craft-beer-gastropub-truffaut-tumblr-taxidermy-raw-denim-kickstarter-sartorial-dreamcatcher-quinoa-chambray-slow-carb-salvia-readymade-bicycle-rights-90-s-yr-typewriter-selfies-letterpress-cardigan-vegan-pug-heirloom-high-life-vinyl-swag-single-origin-coffee-four-dollar-toast-taxidermy-reprehenderit-fap-distillery-master-cleanse-locavore-est-anim-sapiente-leggings-brooklyn-ea-thundercats-locavore-excepteur-veniam-eiusmod-raw-denim-truffaut-schlitz-migas-sapiente-portland-vhs-twee-bushwick-marfa-typewriter-retro-id-keytar-we-do-not-grow-absolutely-chronologically-we-grow-sometimes-in-one-dimension-and-not-in-another-unevenly-we-grow-partially-we-are-relative-we-are-mature-in-one-realm-childish-in-another-anais-nin-fap-aliqua-qui-scenester-pug-echo-park-polaroid-irony-shabby-chic-ex-cardigan-church-key-odd-future-accusamus-blog-stumptown-sartorial-squid-gastropub-duis-aesthetic-truffaut-vero-pinterest-tilde-twee-odio-mumblecore-jean-shorts-lumbersexual",
          title: 'Announcements and news can be much longer than just quick inline posts. In...',
          description: "",
          section: "News",},{id: "news-two-papers-on-collaborative-federated-learning-and-vision-language-models-are-accepted-to-icml-2025-in-collaboration-with-prof-han-yu-prof-qicheng-lao-dr-tiantian-he-dr-qiqi-liu-prof-yew-soon-ong-and-prof-yaochu-jin-sparkles",
          title: 'Two papers on collaborative federated learning and vision language models are accepted to...',
          description: "",
          section: "News",},{id: "news-our-paper-on-personalized-federated-learning-is-accepted-to-iccv-2025-in-collaboration-with-dr-qiqi-liu-prof-yaochu-jin-dr-lingjuan-lyu-and-prof-han-yu-sparkles",
          title: 'Our paper on personalized federated learning is accepted to ICCV 2025, in collaboration...',
          description: "",
          section: "News",},{id: "projects-federated-learning",
          title: 'Federated Learning',
          description: "An Overview of my Research",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project.html";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project.html";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project.html";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project.html";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project.html";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project.html";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project.html";
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
