# gh-actions-test

A repository demonstrating automated GitHub Actions workflows for pull request management.

## PR Template Handler

This workflow automatically applies the appropriate PR template based on branch naming conventions when a new pull request is opened.

## Stupid Job PR Commenter

This custom GitHub Action comments on pull requests when they're opened, reopened, or synchronized using the GitHub SDK directly rather than the github-script action.

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

## Stupid Job PR Commenter

This is a custom GitHub Action that demonstrates how to comment on pull requests using the GitHub SDK directly.

### Features

- Automatically comments on PRs when they are opened, reopened, or synchronized
- Uses the GitHub SDK instead of the github-script action
- Greets the PR creator with a customizable message
- Records the time when the action was run

### How It Works

1. The workflow is triggered when a PR is opened, reopened, or has new commits pushed
2. It checks out the code and builds the action
3. The action uses the GitHub SDK to post a comment on the PR
4. It outputs the time when the action was executed

### Configuration

The action accepts the following inputs:

| Input | Description | Required | Default |
|-------|-------------|---------|---------|
| `who-to-greet` | Name of the person to greet | Yes | World |
| `github-token` | GitHub token for API authentication | Yes | `${{ github.token }}` |
| `message` | Custom message to post on the PR | No | *Generated greeting* |

### Example Usage

```yaml
- name: Run Stupid Job action
  uses: ./
  with:
    who-to-greet: "PR Creator"
    github-token: ${{ secrets.GITHUB_TOKEN }}
    message: "Hello from the Stupid Job! 👋"
```
