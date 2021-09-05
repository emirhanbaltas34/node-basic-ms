const chalk = require("chalk");

/**
 *
 * @class
 */
class ErrorManager extends Error {
    /**
     * @constructor
     * @param {string} message
     */
    constructor(message) {
        const errorMessage = `${chalk.red("[ BasicMS ]")} ${chalk.blue("=>")} ${chalk.gray(
            message
        )}`;
        super(errorMessage);
    }
}

module.exports = ErrorManager;
