/******/ var __webpack_modules__ = ({

/***/ 315:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 55:
/***/ ((module) => {

module.exports = eval("require")("@actions/github");


/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __nccwpck_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	var threw = true;
/******/ 	try {
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 		threw = false;
/******/ 	} finally {
/******/ 		if(threw) delete __webpack_module_cache__[moduleId];
/******/ 	}
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat */
/******/ 
/******/ if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = new URL('.', import.meta.url).pathname.slice(import.meta.url.match(/^file:\/\/\/\w:/) ? 1 : 0, -1) + "/";
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
/* harmony import */ var _actions_core__WEBPACK_IMPORTED_MODULE_0__ = __nccwpck_require__(315);
/* harmony import */ var _actions_github__WEBPACK_IMPORTED_MODULE_1__ = __nccwpck_require__(55);



async function run() {
  try {
    // Get inputs from action metadata file
    const nameToGreet = _actions_core__WEBPACK_IMPORTED_MODULE_0__.getInput("who-to-greet");
    const token = _actions_core__WEBPACK_IMPORTED_MODULE_0__.getInput("github-token");
    const message =
      _actions_core__WEBPACK_IMPORTED_MODULE_0__.getInput("message") ||
      `👋 Hello ${nameToGreet}! This is the stupid job saying hi!`;

    // Create an authenticated GitHub client
    const octokit = (0,_actions_github__WEBPACK_IMPORTED_MODULE_1__.getOctokit)(token);

    // Log the greeting message
    _actions_core__WEBPACK_IMPORTED_MODULE_0__.info(`Hello ${nameToGreet}!`);

    // Get the current time and set it as an output variable
    const time = new Date().toTimeString();
    _actions_core__WEBPACK_IMPORTED_MODULE_0__.setOutput("time", time);

    // Check if this is a pull request event
    if (_actions_github__WEBPACK_IMPORTED_MODULE_1__.context.eventName === "pull_request") {
      try {
        // Add a comment to the PR
        const response = await octokit.rest.issues.createComment({
          ..._actions_github__WEBPACK_IMPORTED_MODULE_1__.context.repo,
          issue_number: _actions_github__WEBPACK_IMPORTED_MODULE_1__.context.payload.pull_request.number,
          body: message,
        });

        _actions_core__WEBPACK_IMPORTED_MODULE_0__.info(
          `Comment added to PR #${_actions_github__WEBPACK_IMPORTED_MODULE_1__.context.payload.pull_request.number}`
        );
        _actions_core__WEBPACK_IMPORTED_MODULE_0__.info(`Comment URL: ${response.data.html_url}`);
      } catch (commentError) {
        _actions_core__WEBPACK_IMPORTED_MODULE_0__.warning(`Failed to add comment to PR: ${commentError.message}`);
        // Don't fail the action if commenting fails
      }
    } else {
      _actions_core__WEBPACK_IMPORTED_MODULE_0__.info(
        `This event is not a pull_request event, skipping comment creation.`
      );
      _actions_core__WEBPACK_IMPORTED_MODULE_0__.info(`Event name: ${_actions_github__WEBPACK_IMPORTED_MODULE_1__.context.eventName}`);
    }

    // Log the payload for debugging
    const payload = JSON.stringify(_actions_github__WEBPACK_IMPORTED_MODULE_1__.context.payload, undefined, 2);
    _actions_core__WEBPACK_IMPORTED_MODULE_0__.debug(`The event payload: ${payload}`);
  } catch (error) {
    _actions_core__WEBPACK_IMPORTED_MODULE_0__.setFailed(error.message);
  }
}

run();

