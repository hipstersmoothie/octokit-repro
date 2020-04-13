import { Octokit } from "@octokit/rest";

async function main() {
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });
  
  const args = {
    owner: "octokit",
    repo: "rest",
  };
  
  const labels = await octokit.paginate(
    octokit.issues.listLabelsForRepo.endpoint(args)
  );
}
