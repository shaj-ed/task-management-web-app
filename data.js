const data = [
  {
    id: crypto.randomUUID(),
    name: "Launch a SASS",
    isActive: true,
    columns: [
      {
        id: crypto.randomUUID(),
        name: "todo",
        tasks: [
          {
            id: crypto.randomUUID(),
            title: "build frontend auth",
            description:
              "Et accusamus non suscipit rerum vel id quidem quia. Ut excepturi neque qui aut.",
            subtasks: [
              {
                id: crypto.randomUUID(),
                title: "sign in page",
                isCompleted: false,
              },
              {
                id: crypto.randomUUID(),
                title: "sign up page",
                isCompleted: false,
              },
              {
                id: crypto.randomUUID(),
                title: "use firebase auth",
                isCompleted: false,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "build REST API",
            description:
              "Lectus proin nibh nisl condimentum id. Auctor elit sed vulputate mi sit.",
            subtasks: [
              {
                id: crypto.randomUUID(),
                title: "getting knowledge from others",
                isCompleted: true,
              },
              {
                id: crypto.randomUUID(),
                title: "posuere lorem ipsum",
                isCompleted: false,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "pellentesque nec nam aliquam",
            description:
              " Facilisi nullam vehicula ipsum a arcu cursus vitae. Id donec ultrices tincidunt arcu non sodales neque sodales",
            subtasks: [
              {
                id: crypto.randomUUID(),
                title: "proin fermentum",
                isCompleted: true,
              },
              {
                id: crypto.randomUUID(),
                title: "complete the letter",
                isCompleted: true,
              },
              {
                id: crypto.randomUUID(),
                title: "in metus vulputate eu",
                isCompleted: false,
              },
              {
                id: crypto.randomUUID(),
                title: "urna et pharetra",
                isCompleted: false,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "amet risus nullam eget",
            description: "turpis tincidunt id aliquet risus",
            subtasks: [
              {
                id: crypto.randomUUID(),
                title: "imperdiet proin fermentum",
                isCompleted: true,
              },
              {
                id: crypto.randomUUID(),
                title: "risus nullam ege",
                isCompleted: false,
              },
            ],
          },
        ],
      },
      {
        id: crypto.randomUUID(),
        name: "doing",
        tasks: [
          {
            id: crypto.randomUUID(),
            title: "managing all tools",
            description:
              "on quam lacus suspendisse faucibus interdum posuere lorem ipsum",
            subtasks: [
              {
                id: crypto.randomUUID(),
                title: "all tools generating",
                isCompleted: true,
              },
              {
                id: crypto.randomUUID(),
                title: "teams tools",
                isCompleted: true,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "add account system",
            description: "tempor id eu nisl nunc tempor id eu nisl nunc.",
            subtasks: [
              {
                id: crypto.randomUUID(),
                title: "venenatis lectus",
                isCompleted: true,
              },
              {
                id: crypto.randomUUID(),
                title: "tellus pellentesque ",
                isCompleted: false,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "setting up the log auth",
            description: "",
            subtasks: [
              {
                id: crypto.randomUUID(),
                title: "tempor id eu nisl nunc",
                isCompleted: true,
              },
              {
                id: crypto.randomUUID(),
                title: "tellus pellentesque ",
                isCompleted: true,
              },
              {
                id: crypto.randomUUID(),
                title: "Id nibh tortor id ",
                isCompleted: false,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "Complete the whole ui and ux",
            description: "",
            subtasks: [
              {
                id: crypto.randomUUID(),
                title: "get mark for the ui",
                isCompleted: true,
              },
              {
                id: crypto.randomUUID(),
                title: "get moris for the ux",
                isCompleted: true,
              },
              {
                id: crypto.randomUUID(),
                title: "final output",
                isCompleted: false,
              },
            ],
          },
        ],
      },
      {
        id: crypto.randomUUID(),
        name: "done",
        tasks: [
          {
            id: crypto.randomUUID(),
            title: "get ui inspiration",
            description:
              "Vitae sapien pellentesque habitant morbi tristique senectus et. Vitae nunc sed velit dignissim sodales ut. Eleifend donec pretium vulputate sapien nec",
            subtasks: [
              {
                id: crypto.randomUUID(),
                title: "visit behance, dribble, pinterest",
                isCompleted: true,
              },
              {
                id: crypto.randomUUID(),
                title: "complete a spitting image on ui",
                isCompleted: true,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "create prototype and wireframe",
            description:
              "Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated.",
            subtasks: [
              {
                id: crypto.randomUUID(),
                title: "wireframe analysis",
                isCompleted: true,
              },
              {
                id: crypto.randomUUID(),
                title: "prototype analysis",
                isCompleted: true,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "meeting with teams",
            description:
              "Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated.",
            subtasks: [
              {
                id: crypto.randomUUID(),
                title: "give a good brief",
                isCompleted: true,
              },
              {
                id: crypto.randomUUID(),
                title: "research with teamates",
                isCompleted: true,
              },
              {
                id: crypto.randomUUID(),
                title: "get teamates thoughts",
                isCompleted: true,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "search marketplace",
            description:
              "Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated.",
            subtasks: [
              {
                id: crypto.randomUUID(),
                title: "search on social medias",
                isCompleted: true,
              },
              {
                id: crypto.randomUUID(),
                title: "get others thoughts through social media",
                isCompleted: true,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "get some ideas and searching",
            description:
              "Real written text, but is random or otherwise generated.",
            subtasks: [
              {
                id: crypto.randomUUID(),
                title: "research on some ideas",
                isCompleted: true,
              },
              {
                id: crypto.randomUUID(),
                title: "find one specific idea",
                isCompleted: true,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "job community",
    isActive: false,
    columns: [
      {
        id: crypto.randomUUID(),
        name: "todo",
        tasks: [
          {
            id: crypto.randomUUID(),
            title: "Quis ipsum suspendisse ultrices gravida",
            description:
              " Eu scelerisque felis imperdiet proin fermentum leo. Ultricies lacus sed turpis tincidunt id aliquet",
            subtasks: [
              {
                id: crypto.randomUUID(),
                title: "estibulum mattis",
                isCompleted: true,
              },
              {
                id: crypto.randomUUID(),
                title: "ullamcorper velit sed",
                isCompleted: false,
              },
              {
                id: crypto.randomUUID(),
                title: "ullamcorper velit sed",
                isCompleted: false,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "React can be used",
            description:
              "It is maintained by Meta and a community of individual developers and companies",
            subtasks: [
              {
                id: crypto.randomUUID(),
                title: "mattis maintained",
                isCompleted: true,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "Quis ipsum suspendisse ultrices gravida",
            description:
              " Eu scelerisque felis imperdiet proin fermentum leo. Ultricies lacus sed turpis tincidunt id aliquet",
            subtasks: [
              {
                id: crypto.randomUUID(),
                title: "estibulum mattis",
                isCompleted: true,
              },
              {
                id: crypto.randomUUID(),
                title: "ullamcorper velit sed",
                isCompleted: false,
              },
              {
                id: crypto.randomUUID(),
                title: "ullamcorper velit sed",
                isCompleted: false,
              },
            ],
          },
        ],
      },
      {
        id: crypto.randomUUID(),
        name: "doing",
        tasks: [
          {
            id: crypto.randomUUID(),
            title: "Sit a suspendisse elit pretium.",
            description:
              "Tortor suscipit ac. Quisque curabitur, commodo. Scelerisque eros. Cum metus eu. Quam diam auctor, suspendisse. Erat parturient, praesent senectus imperdiet.",
            subtasks: [
              {
                id: crypto.randomUUID(),
                title: "estibulum mattis",
                isCompleted: true,
              },
              {
                id: crypto.randomUUID(),
                title: "ullamcorper velit sed",
                isCompleted: true,
              },
              {
                id: crypto.randomUUID(),
                title: "ullamcorper velit sed",
                isCompleted: false,
              },
            ],
          },
        ],
      },
      {
        id: crypto.randomUUID(),
        name: "done",
        tasks: [],
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "personal",
    isActive: false,
    columns: [
      {
        id: crypto.randomUUID(),
        name: "todo",
        tasks: [
          {
            id: crypto.randomUUID(),
            title: "learn driving",
            description:
              "Et accusamus non suscipit rerum vel id quidem quia. Ut excepturi neque qui aut.",
            subtasks: [
              {
                id: crypto.randomUUID(),
                title: "search for driving school",
                isCompleted: true,
              },
              {
                id: crypto.randomUUID(),
                title: "get addmession",
                isCompleted: false,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "watch a classic movie",
            description:
              "Et accusamus non suscipit rerum vel id quidem quia. Ut excepturi neque qui aut.",
            subtasks: [
              {
                id: crypto.randomUUID(),
                title: "search for good one",
                isCompleted: true,
              },
              {
                id: crypto.randomUUID(),
                title: "set a time",
                isCompleted: false,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title:
              "write a thank you letter to an influential person in my life",
            description:
              "Et accusamus non suscipit rerum vel id quidem quia. Ut excepturi neque qui aut.",
            subtasks: [
              {
                id: crypto.randomUUID(),
                title: "taking notes about what i learn from him",
                isCompleted: false,
              },
              {
                id: crypto.randomUUID(),
                title: "complete the letter",
                isCompleted: false,
              },
            ],
          },
        ],
      },
      {
        id: crypto.randomUUID(),
        name: "doing",
        tasks: [
          {
            id: crypto.randomUUID(),
            title: "create a cookbook with favorite recipes",
            description: "",
            subtasks: [
              {
                id: crypto.randomUUID(),
                title: "collect data",
                isCompleted: true,
              },
              {
                id: crypto.randomUUID(),
                title: "write down all information about this recipe",
                isCompleted: true,
              },
              {
                id: crypto.randomUUID(),
                title: "go to book publisher company",
                isCompleted: true,
              },
              {
                id: crypto.randomUUID(),
                title: "publish the book",
                isCompleted: false,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "go to the hospital with my sweet mother",
            description: "",
            subtasks: [
              {
                id: crypto.randomUUID(),
                title: "search good nearest dr.",
                isCompleted: true,
              },
              {
                id: crypto.randomUUID(),
                title: "set an appointment",
                isCompleted: true,
              },
              {
                id: crypto.randomUUID(),
                title: "complete the appointment",
                isCompleted: true,
              },
            ],
          },
        ],
      },
      {
        id: crypto.randomUUID(),
        name: "done",
        tasks: [
          {
            id: crypto.randomUUID(),
            title: "take a hike at local park",
            description:
              "Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated.",
            subtasks: [
              {
                id: crypto.randomUUID(),
                title: "buy hiking accessories",
                isCompleted: true,
              },
              {
                id: crypto.randomUUID(),
                title: "check the time wallet before go",
                isCompleted: true,
              },
              {
                id: crypto.randomUUID(),
                title: "have fun with hiking",
                isCompleted: true,
              },
            ],
          },
        ],
      },
    ],
  },
];

export default data;
