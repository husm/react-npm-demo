# Boilerplate for creating React Npm packages with ES2015

This boilerplate is based on [react-npm-boilerplate](https://github.com/juliancwirko/react-npm-boilerplate). And a react D3 component is added to the project.

## How to use it

1. Clone this repo
2. Inside cloned repo run `npm install && rm -rf .git && git init` and update `package.json` with your package name.
3. If you want to run tests: `npm test` or `npm run testonly` or `npm run test-watch`. You need to write tests in `__tests__` folder. You need at least Node 4 on your machine to run tests.
4. If you want to run linting: `npm test` or `npm run lint`. Fix bugs: `npm run lint-fix`. You can adjust your `.eslintrc` config file.
5. If you want to run transpilation to ES5 in `dist` folder: `npm run prepublish` (standard npm hook).
6. An react D3 arc progress component `./src/ArcProgress.js` is add to the project, and exported as `ArcProgress`. You can use the Arc Progress chart by intalling the `react-npm-demo`.

* Step 1: Install the `react-npm-demo`

```console
npm install react-npm-demo --save
```

* Step 2: Import `AcrProgress` in your project

```Javascript
import React, {Component} from 'react';
import {ArcProgress} from 'react-npm-demo';

class Demo extends Component {
    constructor() {
        super();

        this.state = {
            percentComplete: 0.3
        };
        this.togglePercent = this.togglePercent.bind(this);
    }

    render() {
        return (
            <div>
                <div>My Demo</div>
                <MyComponent />
                <NextButton />
                <div>
                    <a onClick={this.togglePercent}>Toggle Arc</a>
                    <ArcProgress
                        height={300}
                        width={300}
                        innerRadius={109}
                        outerRadius={110}
                        id="d3-arc"
                        backgroundColor="#e6e6e6"
                        foregroundColor="#00ff00"
                        percentComplete={this.state.percentComplete}
                    />
                </div>
            </div>
        );
    }

    togglePercent() {
        const percentage = this.state.percentComplete === 0.3 ? 0.7 : 0.3;
        this.setState({
            percentComplete: percentage,
        });
    }
}

export default Demo;
```

The result should be like the below.

![](https://raw.githubusercontent.com/husm/react-npm-demo/master/demo/assets/ArcProgress.png)

