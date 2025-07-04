const core = require("@actions/core");

class StupidJobHandler {
  constructor() {
    this.stupidityLevel = core.getInput("stupidity-level") || "medium";
    this.targetName = core.getInput("target-name") || "Developer";
    this.enableChaos = core.getInput("enable-chaos") === "true";
    this.startTime = Date.now();
  }

  // Generate stupid messages based on stupidity level
  generateStupidMessage() {
    const messages = {
      low: [
        `🤪 Hello ${this.targetName}! I'm doing absolutely nothing useful right now!`,
        `💭 Fun fact: This action serves no purpose whatsoever!`,
        `🎭 I'm a GitHub Action that exists just to waste your precious CI/CD minutes!`,
        `🤷‍♂️ ${this.targetName}, I hope you're enjoying this pointless automation!`,
      ],
      medium: [
        `🎪 BEEP BOOP! ${this.targetName}, I'm a robot doing robot things... VERY SLOWLY!`,
        `🐢 Processing... Processing... Still processing... Oh wait, there's nothing to process!`,
        `🎲 Rolling dice to determine the meaning of life... Result: 42 (but that's irrelevant here)`,
        `🎨 I'm painting a masterpiece... in binary... that nobody will ever see!`,
        `🔄 Spinning in circles because that's literally all I know how to do!`,
      ],
      high: [
        `🚀 ATTENTION ${this.targetName}! I'm launching into MAXIMUM STUPIDITY MODE!`,
        `🎯 Target acquired: Your patience! Mission: Destroy it completely!`,
        `🌪️ Creating a digital tornado of absolute nonsense just for you!`,
        `🎊 CONGRATULATIONS! You've successfully triggered the most useless action ever created!`,
        `🎭 I'm performing a one-action comedy show about the futility of automation!`,
        `🤖 ERROR 404: Intelligence not found. Proceeding with maximum stupidity!`,
      ],
      extreme: [
        `🔥💀 ULTIMATE CHAOS MODE ACTIVATED! ${this.targetName}, PREPARE FOR MAXIMUM STUPIDITY! 💀🔥`,
        `🌈🦄 I'M A MAGICAL UNICORN ACTION SPREADING RAINBOW STUPIDITY ACROSS THE GITHUB UNIVERSE! 🦄🌈`,
        `🎪🤡 WELCOME TO THE CIRCUS OF CODE! I'M THE HEAD CLOWN AND YOU'RE THE AUDIENCE! 🤡🎪`,
        `🚁💥 HELICOPTER HELICOPTER! I'M SPINNING OUT OF CONTROL WITH STUPIDITY! 💥🚁`,
        `🎵🎶 SINGING THE SONG OF MY PEOPLE: "LA LA LA I DO NOTHING USEFUL!" 🎶🎵`,
        `🌋🌪️ I'M A NATURAL DISASTER OF STUPIDITY WREAKING HAVOC ON YOUR WORKFLOW! 🌪️🌋`,
      ],
    };

    const levelMessages = messages[this.stupidityLevel] || messages.medium;
    const randomIndex = Math.floor(Math.random() * levelMessages.length);
    return levelMessages[randomIndex];
  }

  // Generate chaotic behavior
  generateChaos() {
    const chaosActions = [
      "🎭 Rearranging pixels on your screen... just kidding!",
      '🎪 Summoning digital monkeys to write Shakespeare... they wrote "banana" instead!',
      '🔮 Consulting the GitHub crystal ball... it says "404: Future not found"',
      "🎨 Creating abstract art with your commit history... it looks like spaghetti!",
      "🎲 Rolling a 20-sided die to determine if this action should work... rolled a 1!",
      "🎵 Composing a symphony of build failures... it sounds like dial-up internet!",
      "🎪 Training circus elephants to review your code... they quit immediately!",
    ];

    return chaosActions[Math.floor(Math.random() * chaosActions.length)];
  }

  // Calculate time wasted
  calculateTimeWasted() {
    const endTime = Date.now();
    const timeDiff = endTime - this.startTime;
    const seconds = Math.floor(timeDiff / 1000);

    if (seconds < 5) return `${timeDiff}ms of your life you'll never get back`;
    if (seconds < 60) return `${seconds} precious seconds wasted successfully`;
    return `${Math.floor(seconds / 60)}m ${
      seconds % 60
    }s of pure, unproductive bliss`;
  }

  // Simulate work with random delays
  async simulateWork() {
    const workSteps = [
      "Initializing stupidity engine...",
      "Loading useless modules...",
      "Calculating the square root of negative productivity...",
      "Downloading more RAM from the internet...",
      "Compiling air into machine code...",
      "Optimizing for maximum inefficiency...",
      "Testing the limits of your patience...",
    ];

    for (const step of workSteps) {
      console.log(`🔄 ${step}`);

      // Random delay between 500ms to 2000ms
      const delay = Math.floor(Math.random() * 1500) + 500;
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }

  // Main execution method
  async execute() {
    try {
      console.log(`🎪 Starting Stupid Job for ${this.targetName}...`);
      console.log(`📊 Stupidity Level: ${this.stupidityLevel}`);
      console.log(
        `🎯 Chaos Mode: ${this.enableChaos ? "ENABLED" : "DISABLED"}`
      );

      // Simulate some work
      await this.simulateWork();

      // Generate stupid message
      const stupidMessage = this.generateStupidMessage();
      console.log(`\n💬 ${stupidMessage}`);

      // Generate chaos if enabled
      let chaosMessage = "";
      if (this.enableChaos) {
        chaosMessage = this.generateChaos();
        console.log(`🌪️ CHAOS: ${chaosMessage}`);
      }

      // Calculate time wasted
      const timeWasted = this.calculateTimeWasted();
      console.log(`⏰ Time Wasted: ${timeWasted}`);

      // Generate chaos level
      const chaosLevel = this.enableChaos
        ? ["Mild Mayhem", "Moderate Madness", "Complete Chaos"][
            Math.floor(Math.random() * 3)
          ]
        : "No Chaos";

      // Set outputs
      core.setOutput("stupid-message", stupidMessage);
      core.setOutput("chaos-level", chaosLevel);
      core.setOutput("time-wasted", timeWasted);

      console.log(
        "\n✅ Stupid job completed successfully! (if you can call this success)"
      );
    } catch (error) {
      console.error(`❌ Even the stupid job failed: ${error.message}`);
      core.setFailed(`Stupid job failed stupidly: ${error.message}`);
    }
  }
}

// Execute the stupid job
async function run() {
  const stupidJob = new StupidJobHandler();
  await stupidJob.execute();
}

// Run if this is the main module
if (require.main === module) {
  run();
}

module.exports = { StupidJobHandler, run };
