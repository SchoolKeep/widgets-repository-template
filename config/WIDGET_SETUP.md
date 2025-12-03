# Widget Setup Guide

This guide explains how to create and manage widgets in the widgets repository.

## Overview

The widget registry system uses individual configuration files for each widget, which are then automatically merged into a single `widget_registry.json` file using the `config/build-registry.sh` script.

## File Structure

```
widgets-repo-template/
├── config/
│   ├── defaults.json        # Configuration and default values
│   ├── build-registry.sh    # Script to build widget_registry.json
│   └── WIDGET_SETUP.md      # This documentation file
├── widget_registry.json     # Generated registry (DO NOT EDIT MANUALLY)
└── widgets/
    ├── my_widget/
    │   ├── widget.json      # Widget-specific configuration
    │   └── content.html     # Widget HTML content
    └── another_widget/
        ├── widget.json
        └── content.html
```

## Configuration File

### defaults.json

This file contains both global configuration and default values for all widgets:

```json
{
  "repository": "gs-mrozmus/widgets-repo-template",
  "visibility": "public",
  "contentFile": "content.html",
  "contentMethod": "GET",
  "requiresAuthentication": false,
  "cacheStrategy": "no-cache",
  "containers": ["Full width"],
  "widgetsLibrary": true,
  "settings": {
    "configurable": true,
    "editable": true,
    "removable": true,
    "shared": false,
    "movable": false
  }
}
```

**Global Configuration Fields:**
- `repository` - GitHub repository in format `owner/repo` (required for public visibility)
- `visibility` - Endpoint generation mode: `"public"` or `"private"` (default: "public")
  - `"public"`: Generates GitHub raw URLs using `repository` and current Git branch
  - `"private"`: Generates relative paths (e.g., `./widgets/demo_widget/content.html`), ignores `repository` config
- `contentFile` - Name of the HTML content file (default: "content.html")
- `contentMethod` - HTTP method for fetching content (default: "GET")
- `requiresAuthentication` - Whether content requires auth (default: false)
- `cacheStrategy` - Cache strategy for content (default: "no-cache")

**Widget Default Fields:**
- `containers` - Available container types
- `widgetsLibrary` - Whether widget appears in library
- `settings` - Default widget behavior settings

**Note:** When using `"public"` visibility, the Git branch is automatically detected from your current checkout. This allows you to maintain separate widget registries on different branches. For `"private"` visibility, Git branch detection is skipped.

### widget.json

Widget-specific configuration (only unique fields needed):

```json
{
  "version": "1.0.0",
  "title": "My Widget",
  "description": "Description of what this widget does",
  "category": "Demo",
  "imageName": "my_widget"
}
```

**Required fields:**
- `version` - Semantic version (e.g., "1.0.0")
- `title` - Display name of the widget
- `description` - Brief description of the widget

**Optional fields:**
- `category` - Widget category (default from config/defaults.json)
- `imageName` - Image identifier (defaults to directory name)
- Any other field from config/defaults.json can be overridden

## Creating a New Widget

1. **Create a new directory** in `widgets/`:
   ```bash
   mkdir widgets/my_new_widget
   ```

2. **Create `widget.json`** with your widget configuration:
   ```bash
   cat > widgets/my_new_widget/widget.json << 'EOF'
   {
     "version": "1.0.0",
     "title": "My New Widget",
     "description": "A widget that does amazing things",
     "category": "Demo",
     "imageName": "my_new_widget"
   }
   EOF
   ```

3. **Create `content.html`** with your widget HTML:
   ```bash
   cat > widgets/my_new_widget/content.html << 'EOF'
   <div class="my-widget">
     <h1>My New Widget</h1>
     <p>Widget content goes here</p>
   </div>
   EOF
   ```

4. **Build the registry**:
   ```bash
   ./config/build-registry.sh
   ```

5. **Commit your changes**:
   ```bash
   git add widgets/my_new_widget/
   git commit -m "Add my_new_widget"
   git push
   ```

## Updating an Existing Widget

1. **Edit the widget files**:
   - Modify `widgets/my_widget/widget.json` (don't forget to bump version!)
   - Or modify `widgets/my_widget/content.html`

2. **Rebuild the registry**:
   ```bash
   ./config/build-registry.sh
   ```

3. **Commit your changes**:
   ```bash
   git add widgets/my_widget/
   git add widget_registry.json
   git commit -m "Update my_widget to v1.0.1"
   git push
   ```

## Build Script Usage

The `config/build-registry.sh` script supports several options:

### Standard Build
```bash
./config/build-registry.sh
```
Generates `widget_registry.json` from all widget configurations.

### Dry Run
```bash
./config/build-registry.sh --dry-run
```
Preview the output without writing to the file.

### Validate
```bash
./config/build-registry.sh --validate
```
Validates the existing `widget_registry.json` file.

### Help
```bash
./config/build-registry.sh --help
```
Display usage information.

## How It Works

1. **Reads** global configuration from `config/defaults.json`
2. **Detects** the current Git branch automatically (public visibility only)
3. **Scans** the `widgets/` directory for subdirectories
4. **Reads** each widget's `widget.json` configuration
5. **Merges** widget-specific defaults and config:
   - Widget-specific default values from `config/defaults.json` (excludes global config fields)
   - Widget-specific values from `widget.json`
   - Auto-generated values (type, endpoint URL)
6. **Validates** required fields are present
7. **Generates** the final `widget_registry.json`

### Auto-Generated Fields

- `type`: Derived from the directory name (e.g., `my_widget`)
- `content.endpoint`: Generated based on `visibility` setting in `config/defaults.json`
  - **Public visibility** (default):
    - Format: `https://raw.githubusercontent.com/{repo}/refs/heads/{branch}/widgets/{type}/content.html`
    - The `{branch}` is automatically detected from your current Git checkout
    - The `{repo}` comes from the `repository` field in `config/defaults.json`
  - **Private visibility**:
    - Format: `./widgets/{type}/content.html`
    - Uses relative paths, does not require Git repository or `repository` config

## Multi-Branch Workflow (Public Visibility Only)

When using `"public"` visibility, this system supports maintaining different widget registries on different Git branches. This is useful for:
- **Staging vs Production**: Test widgets on a `staging` branch before merging to `main`
- **Feature Development**: Create feature branches with experimental widgets
- **Environment-Specific Widgets**: Different widgets for different environments

**Note:** Multi-branch support is not available for `"private"` visibility since relative paths (e.g., `./widgets/demo_widget/content.html`) don't include branch information.

### Example: Creating a Staging Registry

```bash
# Create and switch to a staging branch
git checkout -b staging

# Add or modify widgets
mkdir widgets/staging_widget
cat > widgets/staging_widget/widget.json << 'EOF'
{
  "version": "1.0.0",
  "title": "Staging Widget",
  "description": "A widget only available on staging",
  "category": "Test"
}
EOF

cat > widgets/staging_widget/content.html << 'EOF'
<h1>Staging Widget</h1>
<p>This widget is only on the staging branch</p>
EOF

# Build the registry (will use 'staging' branch in URLs)
./config/build-registry.sh

# Commit and push
git add .
git commit -m "Add staging widget"
git push origin staging
```

Now your `widget_registry.json` on the `staging` branch will have endpoints pointing to:
```
https://raw.githubusercontent.com/{repo}/refs/heads/staging/widgets/staging_widget/content.html
```

While the `main` branch registry will have endpoints pointing to:
```
https://raw.githubusercontent.com/{repo}/refs/heads/main/widgets/*/content.html
```

## Validation Rules

The build script validates:

- Required files exist (`widget.json`, `content.html`)
- JSON is valid
- Required fields are present (`version`, `title`, `description`)
- Generated registry is valid JSON

## Troubleshooting

### Script fails with "jq: command not found"

Install jq:
- **macOS**: `brew install jq`
- **Linux**: `sudo apt-get install jq` or `sudo yum install jq`

### Script fails with "Missing required field"

Ensure your `widget.json` includes all required fields:
- `version`
- `title`
- `description`

### Generated URLs are incorrect (Public Visibility)

Check the following:
- Verify `visibility` is set to `"public"` in `config/defaults.json`
- Verify `repository` in `config/defaults.json` is correct (format: `owner/repo`)
- Ensure `contentFile` in `config/defaults.json` matches your HTML file name
- Verify you're on the correct Git branch (run `git branch --show-current`)
- The script auto-detects the current branch and uses it in URLs

**Note:** For `"private"` visibility, endpoints are relative paths and don't depend on repository or branch settings.

### Widget not showing up in registry

1. Check directory structure is correct
2. Verify `widget.json` exists and is valid JSON
3. Verify `content.html` exists
4. Run with `--dry-run` to see detailed error messages

## Best Practices

1. **Always bump version** when making changes to a widget
2. **Use semantic versioning** (MAJOR.MINOR.PATCH)
3. **Run the build script** before committing
4. **Don't edit `widget_registry.json` manually** - it will be overwritten
5. **Keep widget names simple** - they become the `type` field (use lowercase, underscores)
6. **Test locally** with `--dry-run` before pushing

## Examples

See the existing widgets for examples:
- `widgets/demo_widget/` - Demo widget
