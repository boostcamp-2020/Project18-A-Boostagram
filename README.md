# ![](https://user-images.githubusercontent.com/24909656/101751559-bdd1e900-3b13-11eb-99f0-a2ef6b92d70b.PNG)

![mongoDB](https://img.shields.io/badge/mongoDB-v2.6.10-green?logo=mongoDB)
![express](https://img.shields.io/badge/express-v4.17.1-green?logo=express)
![react](https://img.shields.io/badge/react-v17.0.1-9cf?logo=react)
![NodeJS](https://img.shields.io/badge/node.js-v12.18.2-green?logo=node.js)

![Javascript](https://img.shields.io/badge/JavaScript-ES6+-9cf?logo=javascript)
![TypeScript](https://img.shields.io/badge/TypeScript-v4.0.5-green?logo=TypeScript)
![Webpack](https://img.shields.io/badge/Webpack-v5.5.1-9cf?logo=Webpack) 
![Babel](https://img.shields.io/badge/@babel/core-v7.12.3-9cf?logo=babel) 

📚 [Team Wiki](https://github.com/boostcamp-2020/Project18-A-Boostagram/wiki)

18-A-WEB 팀의 Instagram 클론 프로젝트입니다

일상 사진들을 업로드해서 다른 사람들과 공유해보세요!

마음에 드는 사진에 좋아요나 댓글을 달 수 있습니다 😊

<br>

## 🚀 Product

👉 [Click!](http://118.67.128.232) 👈

<br>

## 📃 Pages

### 🏠 Home

> 팔로우한 사용자들의 게시글을 볼 수 있고, 댓글/좋아요를 남길 수 있습니다.

![홈 화면](https://user-images.githubusercontent.com/24909656/102031870-a6884980-3dfa-11eb-9661-bc67935650f0.gif)

<br>

### 🧭 Explore

> 모든 사용자의 게시글을 볼 수 있습니다.
>
> 게시글에 마우스를 올리면 해당 게시글의 좋아요/댓글 수가 나타납니다.
>
> 게시글을 클릭하면 게시글의 상세정보를 볼 수 있습니다.

![탐색 화면](https://user-images.githubusercontent.com/24909656/102031866-a4be8600-3dfa-11eb-9937-46ec38d7cc1c.gif)

<br>

### 🙍‍♂️ Profile

> 특정 사용자의 정보와 게시글을 볼 수 있습니다.
>
> 게시글을 눌러 상세정보를 확인할 수 있습니다.

![프로필 화면](https://user-images.githubusercontent.com/24909656/102031868-a5efb300-3dfa-11eb-95de-54ca6da28098.gif)

<br>

### ✍️ New Feed

> 여러 장의 사진을 업로드하고 글을 작성 할 수 있습니다.

![글 작성 화면](https://user-images.githubusercontent.com/24909656/102031854-a0926880-3dfa-11eb-9f95-0d87cdc7e518.gif)

<br>

### 🔍 Feed Detail

> 게시글의 정보를 확인할 수 있습니다.
>
> 게시글에 댓글/좋아요를 남길 수 있습니다.

![글 상세 화면](https://user-images.githubusercontent.com/24909656/102031871-a6884980-3dfa-11eb-885c-769f7e96d9de.gif)

<br>

## 💡 Features

### 🖱️ 무한스크롤

> 맨 아래까지 스크롤하면 더 많은 게시글을 불러옵니다.

![무한스크롤](https://user-images.githubusercontent.com/24909656/102031858-a25c2c00-3dfa-11eb-9966-fbf2c8486414.gif)

<br>

### 💖 게시글 좋아요 / 댓글 작성

> 게시글에 좋아요와 댓글을 남길 수 있습니다.

![좋아요 및 댓글](https://user-images.githubusercontent.com/24909656/102031864-a425ef80-3dfa-11eb-86a5-7e52ddfd674c.gif)

<br>

### 🤲 팔로우/언팔로우

> 다른 사용자를 팔로우하여 홈에서 원하는 사용자의 게시글을 받아 볼 수 있습니다.

![팔로우](https://user-images.githubusercontent.com/24909656/102031867-a5571c80-3dfa-11eb-8c51-68c5de4fc2d9.gif)

<br>

### 🔍 사용자 검색

> 상단바에서 사용자를 검색할 수 있습니다.

![사용자 검색](https://user-images.githubusercontent.com/24909656/102031861-a38d5900-3dfa-11eb-869f-22dc256574af.gif)

<br>

### ❗ 실시간 알림

> 다른 사용자가 좋아요를 누르면 실시간 알림을 받을 수 있습니다.

![실시간 알림](https://user-images.githubusercontent.com/24909656/102708933-87515680-42e9-11eb-8ebc-cb9f21a62beb.gif)

<br>

## 🔧 기술 스택

![기술 스택](https://user-images.githubusercontent.com/24909656/102708938-8caea100-42e9-11eb-86db-79d345fc6fe3.PNG)

## 🗂 Directory Structure
```
🗃 Project Folder  
📁.github  
📁client  
├── 📁src    
│   ├── index.html  
│   ├── index.js  
│   ├── 📁api
│   ├── 📁components
│   │   ├── App.js  
│   │   ├── 📁common  
│   │   ├── 📁feedDetail  
│   │   ├── 📁home  
│   │   ├── 📁login  
│   │   ├── 📁newFeed  
│   │   ├── 📁profile  
│   │   ├── 📁search  
│   │   └── 📁style  
│   │   📁constants  
│   │   📁context  
│   │   📁hooks    
│   │   📁public    
│   └── 📁utils  
📁server  
├── 📁src  
│   ├── app.ts  
│   ├── .env  
│   ├── 📁controllers  
│   ├── 📁lib  
│   ├── 📁models  
│   ├── 📁passport  
│   ├── 📁routes  
│   └── 📁services  
└── 📁uploads  
```
각 컴포넌트는 `container`와 `presentational`로 분리가 되어있습니다. 

<br>

## 🧑‍🤝‍🧑 Team

| J157 | J202 | J223 |
| ---- | ---- | ---- |
| 이주현[(JuHyeon-Lee)](https://github.com/JuHyeon-Lee) | 차효준[(chahtk)](https://github.com/chahtk) | 김병국[(rlaqudrnr810)](https://github.com/rlaqudrnr810) |
