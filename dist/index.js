const core = require("@actions/core");
const github = require("@actions/github");

// Execute the stupid job
async function run() {
  try {
    // `who-to-greet` input defined in action metadata file
    const nameToGreet = core.getInput("who-to-greet");
    core.info(`Hello ${nameToGreet}!`);

    // Get the current time and set it as an output variable
    const time = new Date().toTimeString();
    core.setOutput("time", time);

    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2);
    core.info(`The event payload: ${payload}`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

module.exports = { StupidJobHandler, run };
