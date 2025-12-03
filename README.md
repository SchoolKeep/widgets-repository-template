# Widgets Repository Template

A repository for managing external widgets with automated registry generation.

## Features

- **Automated Registry Generation** - Build `widget_registry.json` from individual widget configs
- **Validation** - Built-in validation ensures configs are correct
- **Relative Path Endpoints** - Generates relative paths for widget content files

## Documentation

For complete documentation on creating widgets, configuration, and usage, see [config/WIDGET_SETUP.md](config/WIDGET_SETUP.md).

## Files

- `bin/build-registry.sh` - Registry build script
- `config/defaults.json` - Global configuration and default widget settings
- `config/WIDGET_SETUP.md` - Complete setup and usage documentation
- `widget_registry.json` - Generated registry (auto-updated, do not edit manually)
- `widgets/` - Individual widget directories

## Requirements

- `jq` for JSON processing
  - macOS: `brew install jq`
  - Linux: `apt-get install jq` or `yum install jq`
