import Generator from "yeoman-generator"

export class BaseGenerator extends Generator {
    constructor(args, opts) {
        super(args, opts)
    }

    prompting() {
        console.log("prompting", this.prompts())
        return this.prompt(this.prompts(), this.config)
    }

    prompts() {
        return [
            {
                name: "projectName",
                message: "What is your project name?",
                default: this.appname
            },
            {
                name: "backend",
                type: "list",
                message: "What is your backend?",
                default: "rust",
                choices: ["rust"]
            },
            {
                name: "frontend",
                type: "list",
                message: "What is your frontend?",
                default: "angular",
                choices: ["angular"]
            },
            {
                name: "packageManager",
                type: "list",
                message: "What is your package manager?",
                default: "pnpm",
                choices: ["pnpm"]
            },
            {
                name: "frontendDirectory",
                message: "What is your frontend directory?",
                default: "frontend"
            },
            {
                name: "backendDirectory",
                message: "What is your backend directory?",
                default: "backend"
            }
        ]
    }
}
