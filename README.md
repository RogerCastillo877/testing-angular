# AngularTesting

How to use jest in Angular

## Guide to install jest

#### 1. Remove all references to Jasmine and Karma

```code
npm remove @types/jasmine jasmine-core karma karma-chrome-launcher karma-coverage karma-jasmine karma-jasmine-html-reporter
```

#### 2. Install Jest

```code
npm i -D jest jest-preset-angular @types/jest
```

#### 3. Create file config to Jest __config.jest.ts__

#### 4. And put in __config.jest.ts__

```code
import "jest-preset-angular/setup-jest";
```

#### 5. Add this object in __package.json__

```code
"jest": {
"preset": "jest-preset-angular",
"setupFilesAfterEnv": [
"<rootDir>/config.jest.ts"
],
"moduleNameMapper": {
"@app/(.)": "<rootDir>/src/app/$1",
"@src/(.)": "<rootDir>/src/$1"
}
}
```

#### 6. Replace in __tsconfig.spec.json__

```
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/spec",
    "types": [
      "jest" // Antes iba "jasmine"
    ]
  },
  "include": [
    "src/**/*.spec.ts",
    "src/**/*.d.ts"
  ]
}

```