---
description: Standard workflow for solving a GitHub issue by fetching details, branching, implementing, and creating a PR.
---

Follow these steps to solve a GitHub issue from start to finish:

1. **Fetch Issue Details**:
   - Use `mcp_github_get_issue` to retrieve the details of the issue.
   - Understand the requirements and context provided in the issue description.

2. **Create a Development Branch**:
   - Create a new git branch locally (or via GitHub) using a naming convention like `feature/issue-<number>` or `fix/issue-<number>`.
   - Command: `git checkout -b feature/issue-<number>`

3. **Solve the Issue**:
   - **Research**: If the solution isn't immediate, use `grep_search` or `find_by_name` to understand relevant parts of the codebase.
   - **Implement**: Write the necessary code or documentation to address the issue.
   - **Test**: Verify your changes by running existing tests and adding new ones where appropriate.
     - Backend: Use `uv run pytest` in the `backend/` directory.
     - Frontend: Use `npm test` in the `frontend/` directory.
   - **Propose**: If the solution involves multiple complex steps, outline them for the user first.
   - **Commit**: Commit your changes with a clear message referencing the issue (e.g., `docs: add documentation (#<number>)`).

4. **Create a Pull Request**:
   - Push the branch to the remote repository.
   - Use `mcp_github_create_pull_request` to open a PR against the `main` branch.
   - Include "Resolves #<number>" in the PR body to automatically link the issue.

5. **Review and Comment**:
   - Use `mcp_github_add_issue_comment` to notify the user or stakeholders about the technical decisions made.
   - Use `mcp_github_create_pull_request_review` (as a comment or review) to self-verify the changes or summarize the implementation details.