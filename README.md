# gh-actions-test

A repository demonstrating automated GitHub Actions workflows for pull request management.

## PR Template Handler

This workflow automatically applies the appropriate PR template based on branch naming conventions when a new pull request is opened.

### Supported PR Types

| PR Type | Branch Pattern | Target Branch | Template Used |
|---------|---------------|--------------|---------------|
| Release | `releases/*` | `main` | `release_to_master.md` |
| Hotfix | `hotfix/*` | `main` | `hotfix_to_master.md` |
| Feature | any | `dev` | `feature_to_develop.md` |

### How It Works

1. When a pull request is opened, the workflow is triggered
2. It checks the head (source) and base (target) branch names
3. It selects the appropriate PR template from the `.github/PULL_REQUEST_TEMPLATE/` directory
4. It automatically updates the PR description with the template content
5. It adds a comment to notify the user which template has been applied

### Benefits

- Enforces consistent PR formatting
- Saves time for developers
- Ensures all required information is included in PRs
- Improves code review process

## Setup and Configuration

### Branch Naming Conventions

To leverage this workflow, use these branch naming patterns:
- Release branches: `releases/[version]` (e.g., `releases/v1.2.3`)
- Hotfix branches: `hotfix/[issue-description]` (e.g., `hotfix/fix-login-bug`)
- Feature branches: Any name, but target the `dev` branch

### PR Templates

Templates are stored in `.github/PULL_REQUEST_TEMPLATE/` and contain structured formats for different types of changes.
