![d2c](https://user-images.githubusercontent.com/29969315/188563671-be752621-1002-426f-bbd5-d7dc8f661846.png)

# D2C_Tokenizer

D2C framework automates the iOS color & font tokens from figma to your live project.

To automate the tokens we need to config the project path in Package.json file.

Example
```
"scripts": {
"test": "echo "Error: no test specified" && exit 1",
"path": "/Users/yourname/Desktop/dummy/dummy",
"projectName": "ProjectName"
}
```

This framework communicates with "D2C Tokenizer" plugin in Fimga

<img width="503" alt="Screenshot 2022-10-21 at 6 42 33 AM" src="https://user-images.githubusercontent.com/29969315/197088266-4a421663-b772-40bb-90a2-01cffa1d74d8.png">


# Project Setup

**Step 1: Download the project**

**Step 2: Configure the project path in package.json**
<img width="1596" alt="Screenshot 2022-10-21 at 7 08 58 AM" src="https://user-images.githubusercontent.com/29969315/197091053-840e4278-b661-4fcc-acb3-255a9493dcd0.png">


**Step 3: Install the dependence packages**
```
npm update
```
**Step 4: Run the package**
```
node index.js
```
<img width="1006" alt="Screenshot 2022-10-21 at 7 04 00 AM" src="https://user-images.githubusercontent.com/29969315/197090892-1a1ef74a-b7a7-40e4-97fe-b583f9065fca.png">

# How to run?

Step 1: Once project is setup. Run the following command on the ternimal ```node index.js```

Step 2: Install the figma App on Desktop & add "D2C Tokenizer" plugin from community tab

Step 3: Select the figma project that needs to be tokenized & run the "D2C Tokenizer" 
```Figma -> Plugin -> D2C Tokenizer```

Step 4: Generate the code

# Additional setup on XCode
- Font tokens are structed using YMatterType. So please use this package (https://github.com/yml-org/YMatterType) before running the code 
