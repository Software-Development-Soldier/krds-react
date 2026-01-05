---
description: Workflow for creating a Pull Request on GitHub.
---

1.  **Commit Changes**: Ensure all changes are committed with a clear message.
2.  **Push Branch**: Push the local branch to the remote repository using `git push origin <branch-name>`.
3.  **Create PR**: Use `mcp_github_create_pull_request` to open a PR.
    *   **Base**: `main`
    *   **Head**: current branch name
    *   **Title**: Brief summary of changes.
    *   **Body**: Include "Resolves #<number>" to link the issue.
