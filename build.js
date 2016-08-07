({
    baseUrl: "./",
    dir: "./build",
    mainConfigFile: "main.js",
    findNestedDependencies: false,
    removeCombined: true,
    fileExclusionRegExp: /^(r|build).js/,
    modules: [
        {
            name: "main"
        },
        {
            name: "hello",
            create: true,
            include: [
                "module/hello"
         
            ],
            exclude: ["main"]
        },
          {
            name: "world",
            create: true,
            include: [
                "module/world"
            ],
            exclude: ["main"]
        }
    ]
})