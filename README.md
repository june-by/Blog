# ByJuun.com

## 🌟소개

<p align="center"><img src = "https://user-images.githubusercontent.com/78716842/149630300-f3d9144a-788c-443c-aacd-b89fe098cb67.png" width = "250"></p> 
👨‍💻 개인 블로그 👨‍💻  
<br/>
<br/>
✨ 후기 : https://byjuun.com/post/70 (개발을 하며 겪은 고민과 결론, 느낀점, 아쉬운 점, 추가하고 싶은 기능 서술)

<br/>
<br/>
<p align = "center">
     🛠 Tech 🛠
</p>

<p align = "center">
    <img src="https://img.shields.io/badge/React-v17.0.2-blue?logo=React"/></a>
    <img src="https://img.shields.io/badge/TypeScript-v4.6.4-skyblue?logo=TypeScript&logoColor=skyblue"/></a>
    <img src="https://img.shields.io/badge/NextJs-v12.1.6-white?logo=Next.js&logoColor=white"/></a>
    <img src="https://img.shields.io/badge/ReactQuery-v3.39.0-FF4154?style=flat-square&logo=ReactQuery&logoColor=#FF4154"/></a>
</p>
<p align = "center">
    <img src="https://img.shields.io/badge/Express-v4.17.1-important?logo=Express&logoColor=orange"/></a>
    <img src="https://img.shields.io/badge/mysql2-v2.3.0-blue?logo=MySQL&logoColor=blue"/></a>
    <img src="https://img.shields.io/badge/Sequelize-v6.6.5-9cf?logo=Sequelize&logoColor=9cf"/></a>
    <img src="https://img.shields.io/badge/Passport-v0.4.1-green?logo=Passport&logoColor=green"/></a>
</p>

## 🏃실행 방법

### 🌅 CLIENT(FRONTEND)
기본적으로 배포 서버(백엔드)와 연결되어 있도록 설정 되어 있음
```shell
cd client

모듈 설치
yarn

실행(dev mode)
yarn run dev


실행(production mode)
yarn run build
yarn run start

```

### 🌅 SERVER(BACKEND)

.env 파일 설정 필요 (DB_PASSWORD, COOKIE_SECRET)

```shell

DB 생성
npx sequelize db:create

실행
npm run dev
```

<br />
<br />

## 🌟 주요페이지 및 기능

### 💁‍♂️ 메인페이지

<p align = "center"><img src = "https://user-images.githubusercontent.com/78716842/218028300-431b2548-cc90-4cf5-80d7-f133aa08e6ab.png" width = "1300"> 
     
* 메인화면은 크게, 헤더, 컨텐츠 영역, 우측, 좌측의 추가 기능을 위한 사이드바 영역으로 나뉨.
* 헤더는 로그인, 회원가입, 로그아웃, 검색을 위한 메뉴 그리고 다크모드와 라이트모드 선택을 위한 버튼이 존재하는 영역.
* 모든 게시글 목록은 Infinite Scrolling이 적용 되어 있음.
     
<br/>
<br/>

### 🐣 로그인 및 회원가입

<p align = "center"><img src = "https://user-images.githubusercontent.com/78716842/218028603-0979cead-3b77-49a1-b987-b660261ab9e3.png" width = "1300">

- 자체 로그인 및 회원가입과 소셜 로그인 기능 제공.

<br/>
<br/>

### 👨‍💻 카테고리, 검색 결과, 태그를 이용한 filtering

<p align = "center"><img src = "https://user-images.githubusercontent.com/78716842/178764943-516efd44-3f0e-46b7-8857-34f3eb5c06a4.png" width = "1300">
<p align = "center"><img src = "https://user-images.githubusercontent.com/78716842/178765127-9c2523f0-4586-4251-9436-6c8fda606462.png" width = "1300">
     
     
* Version2에서는 Version1과 달리 카테고리, 검색 결과, 태그에 따른 게시글 목록을 보여주는 페이지를 따로 구성하지 않고, /filter라는 하나의 페이지에서 query string을 이용해 구분할 수 있도록 구현. (ex, /filter?category=javascript, /filter?search=검색어, /filter?tag=내가찾는태그) <a href="https://github.com/BY-juun/Blog/blob/master/client/pages/filter/index.tsx">https://github.com/BY-juun/Blog/blob/master/client/pages/filter/index.tsx</a>

<br/>
<br/>   
     
###  👨‍💻 태그 기능
     
* 태그 테이블을 데이터베이스에 따로 만들고, 해당 테이블을 게시글 테이블과 연결해, 태그와 게시글이 다대다 관계를 가질 수 있도록 구현.
* 각 태그를 이용해 게시글을 검색할 수 있도록 만들었습니다.

<br/>
<br/>   
     
###  👨‍💻 게시글 작성 및 수정

<p align = "center"><img src = "https://user-images.githubusercontent.com/78716842/170835959-9283f51f-0d7d-4e64-a2f8-a89a9d6cc883.png" width = "1300">

- 먼저 게시글 작성 및 수정 역시 하나의 페이지를 동시에 사용하며, query string을 통해 게시글 작성 모드인지, 수정 모드인지 판단할 수 있도록 구현. (/Write?mode=Write, /Write?mode=Edit?id=70)
- 관리자만, 작성 및 수정을 할 수 있도록 HOC 패턴을 이용해 validation을 구현 : <a href="https://github.com/BY-juun/Blog/blob/master/client/components/_hoc/withAdminValidation.tsx">https://github.com/BY-juun/Blog/blob/master/client/components/_hoc/withAdminValidation.tsx</a>


<br/>
<br/>

### 👨‍💻 게시글

<p align = "center"><img src = "https://user-images.githubusercontent.com/78716842/178765737-a9d0d50a-b3d1-477e-ae72-93bc5b2f1f65.png" width = "1300">

- SSR방식에서 SSG 방식으로변경 : <a href="https://byjuun.com/post/143">블로그 게시글 페이지 SSR → SSG 전환기</a>
- scroll 이벤트를 이용한 TableOfContents 구현 : <a href="https://github.com/BY-juun/Blog/blob/master/client/components/Block/Post/TableOfContents/useTableOfContents.ts">https://github.com/BY-juun/Blog/blob/master/client/components/Block/Post/TableOfContents/useTableOfContents.ts</a>
- Dynamic META Tag를 적용해, SEO 최적화 
```html
 <Head>
   <meta charSet="utf-8"></meta>
   <title>{Post?.title}</title>
   <link rel="shortcut icon" href="/favicon.ico" />
   <meta name="description" content={Post?.content.substring(0, 100)} />
   <meta property="og:title" content={Post?.title} />
   <meta property="og:image" content={getOgImage(Post?.thumbNailUrl, String(Post?.category))} />
   <meta property="og:url" content={`https://byjuun.com/post/${router.query.id}`} />
 </Head>
```

<br/>
<br/>

### 👨‍💻 페이지 이동에 따른 스켈레톤 화면

 NextJs에서 제공하는 routerChangeStart, routeChangeComplete, routeChangeError 이벤트들을 이용해, 페이지 이동을 감지. : <a href="https://github.com/BY-juun/Blog/blob/master/client/Hooks/useSetProgressState.ts">https://github.com/BY-juun/Blog/blob/master/client/Hooks/useSetProgressState.ts</a>
- 이를 통해, 페이지 이동중인 상황에서는 스켈레톤 컴포넌트를 보여줄 수 있도록 했으며, 앞으로 이동할 페이지에 맞춰 각각 다른 스켈레톤 컴포넌트를 보여줄 수 있도록 구현.

<br/>
<br/>

### 👨‍💻 다크모드

- 서버 렌더링 단계에서도, 다크모드가 적용될 수 있도록, CSS Variable과 Cookie사용
- 서버 생성 HTML 파일 : <a href="https://github.com/BY-juun/Blog/blob/master/client/pages/_document.tsx">https://github.com/BY-juun/Blog/blob/master/client/pages/_document.tsx</a>
- css variabe : <a href="https://github.com/BY-juun/Blog/blob/master/client/styles/globals.css">https://github.com/BY-juun/Blog/blob/master/client/styles/globals.css</a>
- cookie setting : <a href="https://github.com/BY-juun/Blog/blob/master/client/components/Atom/DarkModeBtn/useDarkMode.ts">https://github.com/BY-juun/Blog/blob/master/client/components/Atom/DarkModeBtn/useDarkMode.ts</a>


<br/>
<br/>

### 👨‍💻 방문자 카운팅 기능

- client 렌더링 이후 localStorage를 이용해 금일 방문 여부 체크 후 서버에 방문자를 늘리도록 요청 : <a href="https://github.com/BY-juun/Blog/blob/master/client/Hooks/useCheckVisitor.ts">https://github.com/BY-juun/Blog/blob/master/client/Hooks/useCheckVisitor.ts</a>
