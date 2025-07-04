// scripts/github-actions.js
module.exports = async ({ github, context, core }) => {
  try {
    console.log("Hello from external JavaScript file!");

    // ดึงข้อมูล repository
    const repo = await github.rest.repos.get({
      owner: context.repo.owner,
      repo: context.repo.repo,
    });

    console.log(`Repository: ${repo.data.full_name}`);
    console.log(`Stars: ${repo.data.stargazers_count}`);

    // สร้าง issue
    const issue = await github.rest.issues.create({
      owner: context.repo.owner,
      repo: context.repo.repo,
      title: "Automated Issue",
      body: "This issue was created by GitHub Actions!",
    });

    console.log(`Created issue #${issue.data.number}`);

    // ส่งข้อมูลกลับ
    return {
      repository: repo.data.full_name,
      stars: repo.data.stargazers_count,
      issueNumber: issue.data.number,
    };
  } catch (error) {
    core.setFailed(`Script failed: ${error.message}`);
    throw error;
  }
};
