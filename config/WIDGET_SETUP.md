# Widget Setup Guide

This guide explains how to create and manage widgets in the widgets repository.

## What is This?

This repository provides a system for managing widget configurations. Each widget is defined by:
- A `widget.json` configuration file with metadata (title, description, version, etc.)
- A `content.html` file containing the widget's HTML content
- Optional additional files (for React widgets, build configurations, etc.)

The build script automatically scans all widgets, validates their configurations, and generates a unified `widget_registry.json` file that can be consumed by applications that need to display or manage these widgets.

## Overview

The widget registry system uses individual configuration files for each widget, which are then automatically merged into a single `widget_registry.json` file using the `bin/build-registry.sh` script. This approach provides:

- **Centralized Management**: All widgets are organized in the `widgets/` directory
- **Automatic Validation**: The build script ensures all configurations are valid
- **Version Control**: Each widget can be versioned independently
- **Easy Maintenance**: Add, update, or remove widgets without manually editing the registry

## File Structure

```
widgets-repo-template/
├── bin/
│   └── build-registry.sh    # Script to build widget_registry.json
├── config/
│   ├── defaults.json        # Configuration and default values
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

## Prerequisites

Before creating widgets, ensure you have:

- `jq` installed for JSON processing
  - macOS: `brew install jq`
  - Linux: `sudo apt-get install jq` or `sudo yum install jq`
- Basic knowledge of HTML/CSS/JavaScript (depending on your widget type)
- Git (for version control, if using)

## Configuration File

### defaults.json

This file contains both global configuration and default values for all widgets:

```json
{
  "visibility": "private",
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
- `visibility` - Endpoint generation mode (must be `"private"`)
  - Generates relative paths (e.g., `./widgets/demo_widget/content.html`)
- `contentFile` - Name of the HTML content file (default: "content.html")
- `contentMethod` - HTTP method for fetching content (default: "GET")
- `requiresAuthentication` - Whether content requires auth (default: false)
- `cacheStrategy` - Cache strategy for content (default: "no-cache")

**Widget Default Fields:**
- `containers` - Available container types
- `widgetsLibrary` - Whether widget appears in library
- `settings` - Default widget behavior settings

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
   ./bin/build-registry.sh
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
   ./bin/build-registry.sh
   ```

3. **Commit your changes**:
   ```bash
   git add widgets/my_widget/
   git add widget_registry.json
   git commit -m "Update my_widget to v1.0.1"
   git push
   ```

## Build Script Usage

The `bin/build-registry.sh` script supports several options:

### Standard Build
```bash
./bin/build-registry.sh
```
Generates `widget_registry.json` from all widget configurations.

### Dry Run
```bash
./bin/build-registry.sh --dry-run
```
Preview the output without writing to the file.

### Validate
```bash
./bin/build-registry.sh --validate
```
Validates the existing `widget_registry.json` file.

### Help
```bash
./bin/build-registry.sh --help
```
Display usage information.

## How It Works

1. **Reads** global configuration from `config/defaults.json`
2. **Scans** the `widgets/` directory for subdirectories
3. **Reads** each widget's `widget.json` configuration
4. **Merges** widget-specific defaults and config:
   - Widget-specific default values from `config/defaults.json` (excludes global config fields)
   - Widget-specific values from `widget.json`
   - Auto-generated values (type, endpoint URL)
5. **Validates** required fields are present
6. **Generates** the final `widget_registry.json`

### Auto-Generated Fields

- `type`: Derived from the directory name (e.g., `my_widget`)
- `content.endpoint`: Generated as a relative path
  - Format: `./widgets/{type}/content.html`
  - Uses relative paths for local widget content

## Validation Rules

The build script validates:

- Required files exist (`widget.json`, `content.html`)
- JSON is valid
- Required fields are present (`version`, `title`, `description`)
- Generated registry is valid JSON

## Troubleshooting

### Script fails with "jq: command not found"

The build script requires `jq` for JSON processing. Install it:

- **macOS**: `brew install jq`
- **Linux**: `sudo apt-get install jq` or `sudo yum install jq`
- **Windows**: Download from [jq's official website](https://stedolan.github.io/jq/download/)

### Script fails with "Missing required field"

Ensure your `widget.json` includes all required fields:
- `version`
- `title`
- `description`

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

See the existing widgets in the `widgets/` directory for examples:

- `widgets/demo_widget/` - A simple widget example with basic HTML content
  - Demonstrates the minimal required structure: `widget.json` and `content.html`
  - Good starting point for understanding the basic widget format

- `widgets/react_hello_world/` - A React-based widget example using Vite
  - Shows how to integrate a modern JavaScript framework
  - Includes build configuration (`vite.config.ts`, `package.json`)
  - Demonstrates how to bundle React components into a widget
