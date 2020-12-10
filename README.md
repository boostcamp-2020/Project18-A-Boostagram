# ![](https://i.imgur.com/l1PA300.png) Boostagram

Project18 A조의 Instagram 클론 프로젝트

<br>

## 🧑‍🤝‍🧑 A18 팀

| J157 | J202 | J223 |
| ---- | ---- | ---- |
| 이주현[(JuHyeon-Lee)](https://github.com/JuHyeon-Lee) | 차효준[(chahtk)](https://github.com/chahtk) | 김병국[(rlaqudrnr810)](https://github.com/rlaqudrnr810) |

📚 [Team Wiki](https://github.com/boostcamp-2020/Project18-A-Boostagram/wiki)

<br>
<br>

## 🚀 배포 서버

👉 [클릭!](http://118.67.128.232) 👈

<br>
<br>

### 현재 사용법
- 기본적으로 인스타와 같은 기능들을 이용 할 수 있습니다.
- 그러나 안되는게 몇 가지 있는데요
  - DM
  - 알림
  - 대댓글
  - 댓글 좋아요
  - 영상 업로드
  - 스토리
  - 사용자 추천
  - 추천 게시글 (전체 게시글 조회로 대체 -> 헤더의 나침반 아이콘 클릭)
  - 태그 기능
  - 태그 검색 기능 (사용자 검색 기능만 가능)
- 그 외의 모든 기능을 인스타와 같이 누릴 수 있습니다.
- 버그를 발견하게 되면 언제든지 DM 주세용!


<br>
<br>

## 🔧 기술 스택

![image](https://user-images.githubusercontent.com/44664867/99925719-87117a00-2d82-11eb-97c5-8b96938af809.png)

## 🗂 디렉토리 구조
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