import { BaseGenerator } from "../core.mjs"

/*
The available priorities are (in running order):

    initializing - Your initialization methods (checking current project state, getting configs, etc)
    prompting - Where you prompt users for options (where you’d call this.prompt())
    configuring - Saving configurations and configure the project (creating .editorconfig files and other metadata files)
    default - If the method name doesn’t match a priority, it will be pushed to this group.
    writing - Where you write the generator specific files (routes, controllers, etc)
    conflicts - Where conflicts are handled (used internally)
    install - Where installations are run (npm, bower)
    end - Called last, cleanup, say good bye, etc
*/

export default class extends BaseGenerator {
    prompting() {
        return super.prompting()
    }

    configuring() {
        if (this.config.get("packageManager") === "pnpm") {
            this._configurePnpm()
        }

        if (this.config.get("backend") === "rust") {
            this._configureRust()
        }
    }

    _configurePnpm() {
        this.fs.copyTpl(
            this.templatePath("pnpm-workspace.yaml"),
            this.destinationPath("pnpm-workspace.yaml"),
            { directory: this.config.get("frontendDirectory") },
        );
    }

    _configureRust() {
        this.fs.copyTpl(
            this.templatePath("Cargo.toml"),
            this.destinationPath("Cargo.toml"),
            { directory: this.config.get("backendDirectory") },
        );
    }

    writing() {

    }
}
