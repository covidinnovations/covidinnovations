# Content Management Guide

This document is written for users who want to write content for the COVID innovations website. For
developers who want to make code changes, please refer to the [Development
Guide](dev-guide.md)

## Prerequisites

### Markdown
Pages are authored in Markdown format, so you will need to be familiar with it. It is
easy to learn and use immediately for basic content. You can use [this Markdown
guide](https://www.markdownguide.org/cheat-sheet/) for reference. You can use Visual Studio Code or
other text editor that has Markdown support to edit your files. It also allows you to preview your
changes as rich text.

### Github
If you know how to use `git` to submit content and changes, you can branch or
fork this repository to submit a `pull request` (PR). If not, you can write your content in a
Markdown file and request help in submitting your content.

## Website Framework

This website uses the Hugo framework [https://gohugo.io/](https://gohugo.io/) for generating the
site as static HTML. This means the website code is based on hundreds of files that are used to
build the site. That also means you will need to navigate through a complex set of folders and files
to contribute content through Github.

If you have good technical skills, you can also run the website on your computer, so that you can
preview your content. This requires some setup on your computer. Please refer to the [Development
Guide](dev-guide.md), which has this information.

## Organization of Files

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

The website code is located in the `www` folder, and all Markdown files are located in the `content`
subfolder. You can ignore most of the other folders. Initially, the content folder contains the following:

```
├── 404
├── _index.md
├── about
├── contact
├── solutions
└── tenders
```

There is a top-level `_index.md` file, which contains the text content of the homepage. However, it
is important to note that web pages in Hugo are assembled from multiple sources and many pages use
other sources of content to build a page. In fact, many of the Markdown files you may see are mostly
empty, since they are not pages that have much text on them. They are just placeholders that help
generate the site.

Each of the folders in the list above represents a section of the site. These match the URL path
that you see when browsing the website. For example, the `solutions` folder has content for the
"/solutions" URL path.

### Main Pages

A "main page" is the first page in a section. It always has the filename `_index.md`.

### Subpages

A subpage creates a web page with the same name. For example, in the `solutions` folder, there is a
page called `browse.md`, which creates the `/solutions/browse` page. This file is mostly empty
except for the title, since the page does not have much content. As noted above, these *empty* files
are necessary for generating the website, as they act as flags for the Hugo site generator.

### Front Matter

Each Markdown file has a few lines of text in the header that look like this:

```
---
title: 'Contact'
date: 2020-03-22
draft: false
---
```

This is called the "front matter", which provides essential metadata for the Hugo framework when
building the site. The `title` is what is displayed in the generated HTML page. The `date` field is
displayed on some pages if desired. It can also be used to schedule a date when a page should appear
when the site is generated again. A date in the future means that the page will not be created. The
`draft` field also controls if a page should be displayed in the same way.


## Multi-Language Support

You probably have noticed the the website defaults to English and shows `/en` on the URL path. The
site can also support multiple languages if configured for it. Our intention is to add several
language translations to the site, so that they can be accessed through language-specific URL paths
such as `/cn` and others.

To create pages in other languages, you have to add copies of Markdown files in the same folder. For
example, the first step to having a home page in Chinese is to create a copy of _index.md in the
top-level "content" folder called `_index.cn.md`. This process is repeated for every file in the
subfolders.








