# Widgets Repository Template

A repository for managing external widgets with automated registry generation.

## Features

**Automated Registry Generation** - Build `widget_registry.json` from individual widget configs

**Public/Private Visibility** - Generate GitHub raw URLs (public) or relative paths (private)

**Multi-Branch Support** - Maintain different widget registries on different Git branches (public visibility only)

**Validation** - Built-in validation ensures configs are correct

## Quick Start

### Configuring Script

By default, `visibility` is set to `"private"` which generates relative paths for endpoints. No additional configuration is needed.

For `"public"` visibility (GitHub raw URLs), update `./config/defaults.json`:
- Set `"visibility": "public"`
- Replace `"repository"` with your repository's owner/name (e.g., `"your-org/your-repo"`)

### Adding a New Widget

1. Create a directory in `widgets/` with your widget name
2. Add `widget.json` and `content.html` files
3. Run `./config/build-registry.sh` to generate the registry
4. Commit and push your changes

### Building the Registry

```bash
# Generate widget_registry.json (uses current Git branch for public visibility)
./config/build-registry.sh

# Preview without writing
./config/build-registry.sh --dry-run

# Validate existing registry
./config/build-registry.sh --validate
```

### Multi-Branch Registries (Public Visibility Only)

When using `"public"` visibility, you can create separate widget registries for different environments:

```bash
# Create a staging branch with different widgets
git checkout -b staging

# Add/modify widgets (manual work)

# Build registry (URLs will point to 'staging' branch)
./config/build-registry.sh

# Push the branch
git push origin staging
```

Each branch maintains its own `widget_registry.json` with URLs pointing to that branch's widgets. Perfect for staging, feature development, or environment-specific widgets.

**Note:** Multi-branch support is not available for `"private"` visibility since relative paths don't include branch information.

## Documentation

See [config/WIDGET_SETUP.md](config/WIDGET_SETUP.md) for complete documentation on:
- File structure and configuration
- Creating and updating widgets
- Build script usage
- Multi-branch workflow
- Troubleshooting

## Files

- `config/defaults.json` - Global configuration and default widget settings (includes `visibility` option for public/private endpoint generation)
- `config/build-registry.sh` - Registry build script
- `config/WIDGET_SETUP.md` - Complete setup and usage documentation
- `widget_registry.json` - Generated registry (auto-updated, do not edit manually)
- `widgets/` - Individual widget directories

## Requirements

- `jq` for JSON processing
  - macOS: `brew install jq`
  - Linux: `apt-get install jq` or `yum install jq`
