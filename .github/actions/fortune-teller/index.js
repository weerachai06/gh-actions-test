const core = require("@actions/core");

async function run() {
  try {
    const name = core.getInput("name");
    const mood = core.getInput("mood");

    // Array ของคำทำนายโง่ ๆ
    const fortunes = [
      "วันนี้คุณจะเจอบักใน production แน่นอน! 🐛",
      "โค้ดที่คุณเขียนวันนี้จะทำงานได้ครั้งแรก (ไม่น่าเป็นไปได้) ✨",
      "วันนี้คุณจะกดปุ่ม Ctrl+Z มากกว่า 50 ครั้ง 🔄",
      "คุณจะลืมใส่ semicolon อย่างน้อย 3 ครั้ง 😅",
      "วันนี้ Stack Overflow จะเป็นเพื่อนที่ดีที่สุดของคุณ 📚",
      "คุณจะเปิด 47 tabs ใน browser และลืมว่าทำไม 🌐",
      'วันนี้คุณจะเขียนคอมเมนต์ "// TODO: fix this later" 🤔',
      "คุณจะใช้เวลา 2 ชั่วโมงหาบักที่เกิดจาก typo ตัวเดียว 🔍",
    ];

    const moods = {
      happy: "😊",
      sad: "😢",
      angry: "😠",
      excited: "🤩",
      tired: "😴",
      confused: "😵",
    };

    // สุ่มคำทำนาย
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    const luckyNumber = Math.floor(Math.random() * 100) + 1;
    const moodEmoji = moods[mood] || "🤷";

    console.log("🔮 ===== FORTUNE TELLER =====");
    console.log(`👋 สวัสดี ${name}! วันนี้คุณรู้สึก ${mood} ${moodEmoji}`);
    console.log(`🎯 คำทำนายของคุณวันนี้: ${randomFortune}`);
    console.log(`🍀 เลขนำโชคของคุณ: ${luckyNumber}`);
    console.log("================================");

    // เพิ่มความโง่ ๆ อีกนิด
    const currentTime = new Date();
    const hour = currentTime.getHours();

    if (hour < 12) {
      console.log("🌅 เช้านี้เหมาะกับการดื่มกาแฟและเขียนโค้ด!");
    } else if (hour < 18) {
      console.log("☀️ บ่ายนี้เหมาะกับการ debug!");
    } else {
      console.log("🌙 ค่ำนี้เหมาะกับการ deploy (ความเสี่ยงสูง)!");
    }

    // Set outputs
    core.setOutput("fortune", randomFortune);
    core.setOutput("lucky-number", luckyNumber);

    // สร้าง summary
    await core.summary
      .addHeading("🔮 Daily Fortune")
      .addTable([
        [
          { data: "Name", header: true },
          { data: "Mood", header: true },
          { data: "Fortune", header: true },
          { data: "Lucky Number", header: true },
        ],
        [name, `${mood} ${moodEmoji}`, randomFortune, luckyNumber.toString()],
      ])
      .write();
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
