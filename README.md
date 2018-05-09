# noschoolviolence

### About the Project

This codebase was created in collaboration with Microsoft team members as part of No School Violence's corporate sponsorship program. The NSV team is immensely grateful to Microsoft for being so generous with their time and expertise.

For more information about the project and NSV's ongoing mission, please visit the organization's [website](https://www.noschoolviolence.org/).

***

### Goals

The partnership has 3 main objectives:

1. Set up a scalable storage environment for NSV's existing research corpus & create an API so that data tables may be queried by various components of the application.
2. Create a chatbot which can interact with end users and facilitate better usage of the application by folks who may not have a background in behavioral psychology.
3. Implement machine learning and natural language processing algorithms to aid in data extraction and analysis.

As part of their partnership with NSV, Microsoft has offered access to Azure's cloud computing platform; all components of this project are being designed and implemented with this resource in mind.

***

### Technical Requirements

#### Chatbot

The NSV chatbot is built on Microsoft's [BotBuilder](https://github.com/Microsoft/BotBuilder) framework, with added functionality from [Topical](https://github.com/billba/topical) and NLP support from [Luis](https://www.luis.ai/home). 

To use and test this feature outside of NSV's web application, please install the following libraries to your local machine:

* [Node.js](https://nodejs.org/) : `apt-get install nodejs`
* [npm](https://www.npmjs.com/get-npm) : `apt-get install npm`
* [TypeScript](https://www.typescriptlang.org) : `npm install typescript` or `npm i typescript`

_Note:_ You will probably need to symlink the node.js executable in your machine. In Linux, use `ln -s "$(which nodejs)" /usr/local/bin/node`
_Note:_ Installation commands provided here are specific to Linux UFN; feel free to add additional notes for other operating systems.

Special thanks to [@codefoster](https://github.com/codefoster) for holding our hands and being generally great.
