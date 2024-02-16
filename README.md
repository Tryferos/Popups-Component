# Search Popup Component

[Install the package for npm here.](https://www.npmjs.com/package/@tryferos/popups)

[Source code on Github.](https://github.com/Tryferos/Popups-Component)

This is a **react component** delivering customizable **Popups Layout** that you can use in your projects, which also adds **types** support using Typescript.

You can create your own Popups and add them to the popup list.

The project is build using **React, Typescript and Tailwindcss**. Tailwindcss is compiled into css, meaning you do not need it as a depedency.

All files are bundled into 3 seperate files for both cjs, esm and dts using the Rollup bundler. (commonjs, esmodules and declaration for ts types).


## :dart: Features

-   :white_check_mark: Typescript support
-   :white_check_mark: **FULLY** Customizable to your needs
-   :white_check_mark: Create as many Popups.
-   :white_check_mark: Light/dark Mode.
-   :white_check_mark: Animations.


##

Install @tryferos/Popups using

```bash
  npm install @tryferos/Popups@1.0.0
```

Remember that you need to have react and react-dom already installed

```bash
  npm install react@^18.0.1 react-dom@^18.0.1
```

This package is build using react 18, you can use with different versions of react at your own risk.

```bash
  npm install @tryferos/Popups@1.0.0 --force
```

Import the components

```javascript
import { PopupItem, PopupWrapper, usePopup } from "@tryferos/Popups";
```

Usage

Wrap your Application in PopupWrapper.

```javascript
const { popup, changePopup, title, closePopup} = usePopup();

<PopupWrapper>
    <PopupElement popups={Object.values(MyPopupsEnum)}>
        <PopupItem popup={MyPopupsEnum.Login} element={<MyLoginPopupComponent/>}/>
        <PopupItem popup={MyPopupsEnum.Payment} element={<MyPaymentPopupComponent/>} />
        ...
    <PopupElement/>
    <App/> //Your Application's normal Components here
</PopupWrapper>
```



## 👨‍💻 Authors

- [@Trifon Mazarakis](https://www.github.com/Tryferos)
