import * as core from "@actions/core";
import { getOctokit, context } from "@actions/github";

async function run() {
  try {
    // Get inputs from action metadata file
    const nameToGreet = core.getInput("who-to-greet");
    const token = core.getInput("github-token");
    const message =
      core.getInput("message") ||
      `👋 Hello ${nameToGreet}! This is the stupid job saying hi!`;

    // Create an authenticated GitHub client
    const octokit = getOctokit(token);

    // Log the greeting message
    core.info(`Hello ${nameToGreet}!`);

    // Get the current time and set it as an output variable
    const time = new Date().toTimeString();
    core.setOutput("time", time);

    // Check if this is a pull request event
    if (context.eventName === "pull_request") {
      try {
        // Add a comment to the PR
        const response = await octokit.rest.issues.createComment({
          ...context.repo,
          issue_number: context.payload.pull_request.number,
          body: message,
        });

        core.info(
          `Comment added to PR #${context.payload.pull_request.number}`
        );
        core.info(`Comment URL: ${response.data.html_url}`);
      } catch (commentError) {
        core.warning(`Failed to add comment to PR: ${commentError.message}`);
        // Don't fail the action if commenting fails
      }
    } else {
      core.info(
        `This event is not a pull_request event, skipping comment creation.`
      );
      core.info(`Event name: ${context.eventName}`);
    }

    // Log the payload for debugging
    const payload = JSON.stringify(context.payload, undefined, 2);
    core.debug(`The event payload: ${payload}`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
