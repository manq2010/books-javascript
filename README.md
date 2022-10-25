![](https://img.shields.io/badge/Microverse-blueviolet)

# Awesome books: plain JavaScript with objects


> The projects sets up a repo and prepare it for deplyment using linters. Also, it builds an awesome book website with plain JavaScript

## Built With

- Major languages : HTNL, JavaScript
- Technologies used

## Live Demo


## Getting Started

To get a local copy up and running follow these simple example steps.

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

- Node.js installed

### Setup

#### Set-up GitHub Actions

In the first commit of your feature branch create a .github/workflows folder and add a copy of [.github/workflows/linters.yml](https://github.com/microverseinc/linters-config/blob/master/html-css/.github/workflows/linters.yml) to that folder.

#### Set-up linters in your local env

```
# .gitignore
node_modules/
```

##### Lighthouse

An open-source, automated tool for improving the quality of web pages. It has audits for performance, accessibility, progressive web apps, SEO and more.

##### Webhint

1. Run

```
npm install --save-dev hint@7.x
```

2. Copy [.hintrc](https://github.com/microverseinc/linters-config/blob/master/html-css/.hintrc) to the root directory of your project.

1. Run

```
npx hint .
```

4. Fix validation errors.

##### Stylelint

1. Run

```
npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x
```

2. Copy [.stylelintrc.json](https://github.com/microverseinc/linters-config/blob/master/html-css/.stylelintrc.json) to the root directory of your project.
1. Run `npx stylelint "**/*.{css,scss}"` on the root of your directory of your project.
1. Fix linter errors.

### Install

```
sudo apt install nodejs
```


## Authors

👤 **Mancoba Sihlongonyane**

- GitHub: [@githubhandle](https://github.com/manq2010)
- Twitter: [@twitterhandle](https://twitter.com/mancoba_c)
- LinkedIn: [LinkedIn](https://linkedin.com/in/mancobasihlongonyane)

👤 **Festus Enning**

- GitHub: [@githubhandle](https://github.com/Enning94)
- Twitter: [@twitterhandle](https://twitter.com/nana_akyerefi)
- LinkedIn: [LinkedIn](https://linkedin.com/in/enning-festus)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc

## 📝 License

This project is [MIT](./MIT) licensed.

_NOTE: we recommend using the [MIT license](https://choosealicense.com/licenses/mit/) - you can set it up quickly by [using templates available on GitHub](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository). You can also use [any other license](https://choosealicense.com/licenses/) if you wish._
