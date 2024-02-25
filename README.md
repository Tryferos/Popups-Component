# Popup & Toast Handler and Layout Component

[Install the package for npm here.](https://www.npmjs.com/package/@tryferos/popups)

[Source code on Github.](https://github.com/Tryferos/Popups-Component)

This is a **react component** delivering customizable **Popups Layout** that you can use in your projects, which also adds **types** support using Typescript.

You can create your own Popups and add them to the popup list.

**VERSION 1.1** 
You can create your own Toasts and add them to the toasts list.

The project is build using **React, Typescript and Tailwindcss**. Tailwindcss is compiled into css, meaning you do not need it as a depedency.

All files are bundled into 3 seperate files for both cjs, esm and dts using the Rollup bundler. (commonjs, esmodules and declaration for ts types).


## :dart: Features

-   :white_check_mark: Typescript support
-   :white_check_mark: **FULLY** Customizable to your needs
-   :white_check_mark: Create as many Popups.
-   :white_check_mark: Create as many Toasts.
-   :white_check_mark: Light/dark Mode.
-   :white_check_mark: Animations.


##

Install @tryferos/Popups using

```bash
  npm install @tryferos/Popups@1.0.3
```

Remember that you need to have react and react-dom already installed

```bash
  npm install react@^18.0.1 react-dom@^18.0.1
```

This package is build using react 18, you can use with different versions of react at your own risk.

```bash
  npm install @tryferos/Popups@1.0.3 --force
```

Import the components

```javascript
{/*! Version 1.0*/}
import { PopupItem, PopupWrapper, PopupElement, usePopup } from "@tryferos/Popups";
{/*! Version 1.1*/}
import {ToastItem, PopupToastElement, useToast} from "@tryferos/Popups"
```

Usage

Wrap your Application in PopupWrapper.

```javascript
{/*! Version 1.0*/}
const { popup, changePopup, title, closePopup} = usePopup();
{/*! Version 1.1*/}
const { toast, changeToast, title, closeToast} = useToast();
<PopupWrapper>
    {/*! Version 1.1*/}
    <PopupToastElement position={'top-center'} toasts={Object.values(myToastsEnum)}>
        <ToastItem toast={myToastsEnum.Error} element={<MyErrorToastComponent/>} />
        <ToastItem toast={myToastsEnum.Success} element={<MySuccessToastComponent/>} />
        ...
    </PopupToastElement>
    {/*! Version 1.0*/}
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
