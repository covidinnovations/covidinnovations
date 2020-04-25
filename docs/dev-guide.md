# Website Development Guide

> WIP. Not complete.

## Getting Started

This website uses the Hugo framework which requires that you have the Go SDK installed on your
computer. Go and Hugo can be installed on MacOS, Windows, and Linux.

- Go Language
  - [Install Go](https://golang.org/doc/install)
- Hugo Framework
  - [Install Hugo](https://gohugo.io/getting-started/installing)
  - [Documentation](https://gohugo.io/documentation/)

# Organization of Files

The main folders in this repo are structured like this:

```
├── art
├── docs
├── public
└── www
    ├── archetypes
    ├── assets
    ├── content
    ├── data
    ├── i18n
    ├── layouts
    ├── resources
    ├── static
    └── themes
```

## Top-Level Folders

- **art**: Some source files and other art assets.
- **docs**: Where this document and others are located.
- **public**: This is the generated HTML website. It is overwritten frequently, so don't edit any
  files in here.
- **www**: This is the codebase for the website. All development happens here. Also note that
  the `content` directory is where most content is created and edited as Markdown files.

## Folders in `www`

- archetypes: This is generally unimportant.
- **assets**: This contains `scss` files

## Running localhost

- Run `cd www && hugo server` and open a browser in localhost:1313

## Generating html for production

`$ hugo`
