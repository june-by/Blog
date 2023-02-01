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

## 🌟 주요페이지 및 기능

### 😊 메인페이지

<p align = "center"><img src = "https://user-images.githubusercontent.com/78716842/178763651-ff410e59-ba47-4b77-b787-9da7bb6f2bb1.png" width = "1300"> 
     
* 메인화면은 크게, 헤더, 컨텐츠 영역, 우측의 추가 기능(현재는 방문자 카운팅만 존재) 그리고 하단의 페이지네이션 영역으로 나뉩니다.
* 헤더는 로그인, 회원가입, 로그아웃, 검색을 위한 메뉴 그리고 다크모드와 라이트모드 선택을 위한 버튼이 존재하는 영역입니다.  
* 컨텐츠 영역은 각 페이지에 맞게 서버에서 가져온 게시글들을 PostCard라는 컴포넌트를 재활용해 화면에 보여주는 영역입니다.
* 우측 영역은 메인 컨텐츠(게시글 목록)외에 블로그의 추가 정보를 보여주는 영역입니다. 현재는 금일, 총 방문자 수를 카운팅 하는 기능만 존재합니다.
     
<br/>
<br/>

### 😊 로그인 및 회원가입

<p align = "center"><img src = "https://user-images.githubusercontent.com/78716842/178764545-9affad6b-d30d-4c02-8e6d-8a50eb04b729.png" width = "1300">

- 이전 Version1에서는 로그인과 회원가입을 위한 페이지를 각각 따로 두었습니다.
- 제 블로그의 메인 기능이 로그인과 회원가입이 아니며, 저를 제외한 글을 보는 사람에 입장에서 로그인과 회원가입은 댓글을 달기 위한 것일뿐이므로 모달을 이용해 구현했습니다.
- 모달을 이용해 구현함으로서 얻은 장점은, 회원가입 및 로그인을 위해 페이지를 이동하지 않아도 되는 점과
- 로그인 및 회원가입을 하더라도, 이전에 보고있던 게시글이나 페이지를 그대로 이어서 볼 수 있다는 점입니다.
- 모달의 경우 util 폴더에 모달의 틀이 되는 컴포넌트를 만들어 놓고, 각 모달 컴포넌트에서 이에 children props를 통해 내용을 구성할 수 있도록 만들었습니다.
- 로그인은 세션을 통해 이루어지기 때문에, 클라이언트에서는 사용자의 정보를 가져오는 API를 통해 사용자의 로그인 여부를 파악할 수 있습니다.
- 물론 해당 API는 useQuery의 캐싱 옵션을 통해, 사용자가 로그인 혹은 로그아웃을 하지 않는 이상 재요청 하지 않도록 만들었습니다.

<br/>
<br/>

### 😊 페이지네이션

<p align = "center"><img src = "https://user-images.githubusercontent.com/78716842/178764388-82ba24a4-d7cb-46e9-b482-6b7850638152.png" width = "1300">
     
* 전체 게시글들과 각 카테고리별 게시글들을 가져오는 경우에는 페이지네이션을 이용하게 됩니다.
* 프론트에서는 useRouter의 query를 통해 현재 페이지를 파악하고, 이를 체크해 서버에 요청하게 되며, 서버에서는 페이지 당 16개의 게시글을 잘라서 보내주게 됩니다. 
* 후에 게시글의 개수가 200개 이상이 되는 시점에 Pagination이 아닌 Infinite Scrolling 방식으로 변경할 예정입니다.
* 화면에는 현재 페이지에 맞는 게시글들을 서버로 부터 가져와 보여주게 됩니다.

- 서버에서는 메인페이지 혹은 카테고리에 맞는 전체 게시글의 숫자를 보내주게 되는데, 이에 맞춰 적절한 페이지의 개수를 통해 화면에 선택할 수 있는 페이지 버튼을 구성했습니다.

<br/>
<br/>

### 👨‍💻 카테고리, 검색 결과, 태그를 이용한 filtering

<p align = "center"><img src = "https://user-images.githubusercontent.com/78716842/178764943-516efd44-3f0e-46b7-8857-34f3eb5c06a4.png" width = "1300">
<p align = "center"><img src = "https://user-images.githubusercontent.com/78716842/178765127-9c2523f0-4586-4251-9436-6c8fda606462.png" width = "1300">
     
     
* Version2에서는 Version1과 달리 카테고리, 검색 결과, 태그에 따른 게시글 목록을 보여주는 페이지를 따로 구성하지 않고, /filter라는 하나의 페이지에서 query string을 이용해 구분할 수 있도록 해주었습니다. (ex, /filter?category=javascript, /filter?search=검색어, /filter?tag=내가찾는태그)
* 처음에는, 카테고리, 검색 결과, 태그에 따른 게시글들을 각각 다른페이지에서 보여줬었지만, 같은 화면 구성을 취하고 있고, 그 안에 들어가는 데이터만 조금씩 다른데 다른 페이지에서 보여준다는게 낭비라는 생각이 들었고, 그 결과 같은 페이지에서 query string에 따라 다른 결과를 보여주도록 했습니다.
     
```javascript
     
//페이지의 query에 따라 다른 요청을 보내고 그 결과 데이터를 페이지에 넣어줌.
const useGetPosts = ({ pageNum }: Props): ReturnTypes => {
  const { query } = useRouter();
  const { data: CategoryPost, isLoading: categoryLoading } = useGetCategoryPosts(query.category, pageNum);
  const { data: SearchPosts, isLoading: searchLoading } = useGetSearchPosts(query.search);
  const { data: TagPost, isLoading: tagLoading } = useGetTagPosts(query.tag);
  if (query.category) return [CategoryPost, categoryLoading];
  else if (query.search) return [SearchPosts, searchLoading];
  else if (query.tag) return [TagPost, tagLoading];
  else return [[DummyPosts], true];
};
     
```

- 물론 각 API 단에서 undefined를 매게변수로 받을 경우, API요청을 하지 않도록 만들었기 때문에, 불필요한 API 요청을 보내지 않습니다.

<br/>
<br/>   
     
###  👨‍💻 태그 기능
     
* Version1의 경우에도 해시태그 기능이 있었지만, 특정 역할을 하지는 않았습니다.
* Version2의 경우에는 태그 테이블을 데이터베이스에 따로 만들고, 해당 테이블을 게시글 테이블과 연결해, 태그와 게시글이 다대다 관계를 가질 수 있도록 만들었습니다.  
* 각 태그를 이용해 게시글을 검색할 수 있도록 만들었습니다.

<br/>
<br/>   
     
###  👨‍💻 게시글 작성 및 수정

<p align = "center"><img src = "https://user-images.githubusercontent.com/78716842/170835959-9283f51f-0d7d-4e64-a2f8-a89a9d6cc883.png" width = "1300">

- 먼저 게시글 작성 및 수정 역시 하나의 페이지를 동시에 사용하며, query string을 통해 게시글 작성 모드인지, 수정 모드인지 판단할 수 있도록 만들었습니다. (/Write?mode=Write, /Write?mode=Edit?id=70)
- 게시글 작성의 경우, 관리자만이 글을 작성할 수 있어야 하기 때문에, 관리자 여부를 판단해주는 Custom Hook을 사용했습니다.
- 게시글은 크게 타이틀, 카테코리, 태그, 내용, 썸네일로 구성되며, 각각을 입력받아, 서버에 전송하게 됩니다.
- 태그의 경우에는 Version1에서는 하나의 스트링을 받아, 이를 #을 기준으로 파싱한 뒤 서버에 전송하는 형태였지만,
- Version2에서는 입력 단계부터 form을 이용해 각각을 받아 배열에 저장하도록 만들었습니다.

<br/>
<br/>

### 👨‍💻 게시글 보기

<p align = "center"><img src = "https://user-images.githubusercontent.com/78716842/178765737-a9d0d50a-b3d1-477e-ae72-93bc5b2f1f65.png" width = "1300">

- 이번 Version2를 만들면서 어떤 기능이 있어야 다른 사람들이 조금 더 글을 편하게 볼 수 있을지 고민했습니다.
- 다른 여러 블로그 플랫폼을 살펴보았고, 그 결과 스크롤에 따른 헤더바 가리기와, 데크스탑에서만 볼 수 있는 주제별 사이드 메뉴바를 만들게 되었습니다.
- 헤더바 가리기에 경우에는, 이전 화면 위치와 현재 화면 위치의 비교를 통해, 화면을 아래로 내리는 상황에는 헤더를 가릴 수 있도록 만들었습니다. (전역 document 객체에 eventListner를 달아주는 방식 사용 -> Custom Hook으로 빼놓음)
- 주제별 사이드 메뉴바는 전체 게시글 내용을 h1, h2태그를 가진 element들만 빼낸 후 배열에 넣고, 해당 element들을 화면의 위치 기준으로 정렬했습니다.
- h2 태그의 경우에는 h1 태그의 하위 메뉴인 경우가 많기 때문에, h2, h3 태그들의 요소에는 margin-left를 넣어주어, 하위 메뉴라는 사실을 보여줄 수 있도록 했습니다.
- 이렇게 파싱한 각 태그배열을 화면에 보여주고, 각 요소에 onClick 콜백함수로 scrollIntoView 함수를 넣어주어, 클릭시 해당 위치로 이동할 수 있는 기능을 만들었습다.
- 추가로 현재 사용자가 게시글을 보고 있는 스크롤 위치를 파악하고 이를 통해, 현재 위치하고 있는 태그 위치를 하이라이팅 해주도록 만들었습니다.
- 사이드바의 경우에는, position : sticky 를 적용해, 처음에는 게시글 내용 옆에 위치하고, 사용자가 스크롤을 아래로 내리면, position : fixed와 같이 따라 갈 수 있도록 만들었습니다.

- 추가로, 현재 보고 있는 게시글과 같은 카테고리의 앞, 뒤 게시글을 가져와 사용자가 선택할 수 있도록 만들었습니다. 해당 기능은 LEAD 쿼리와 LAG 쿼리를 이용해 구현했습니다.

<br/>
<br/>

### 👨‍💻 게시글 Dynamic Meta Tag

- 다른 페이지의 경우 SSR을 사용하지 않았지만, 게시글 페이지의 경우에는 NextJs의 getServerSideProps를 이용해 동적으로 meta tag를 생성할 수 있도록 만들었습니다.

```javascript
const Post = ({ Post }: { Post: PostType }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <title>{Post?.title}</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="description" content={Post?.content.substring(0, 100)} />
        <meta property="og:title" content={Post?.title} />
        <meta property="og:image" content={getOgImage(Post.thumbNailUrl, Post.category)} />
        <meta property="og:url" content={`https://byjuun.com/post/${router.query.id}`} />
      </Head>
      <div className={styles.Post}>
        <PostTop Post={Post} />
        <PostContent content={Post.content} />
        <CommentForm />
        <CommentList Comments={Post.Comments} />
        <ScrollBtn />
      </div>
    </>
  );
};
```

<br/>
<br/>

### 👨‍💻 페이지 이동에 따른 스켈레톤 화면

- 페이지 이동에 따라 스켈레톤 화면을 보여주기 위해서는, 현재 페이지가 이동중인지 확인하는 작업이 필요했습니다.
- 이를 위해, NextJs에서 제공하는 routerChangeStart, routeChangeComplete, routeChangeError 이벤트들을 이용해, 페이지 이동을 감지했습니다. (Hooks디렉토리 useSetProgressState.ts)
- 이를 통해, 페이지 이동중인 상황에서는 스켈레톤 컴포넌트를 보여줄 수 있도록 했으며, 앞으로 이동할 페이지에 맞춰 각각 다른 스켈레톤 컴포넌트를 보여줄 수 있도록 만들었습니다. (\_app.tsx에서 Loading)

<br/>
<br/>

### 👨‍💻 다크모드

- 다크 모드의 경우 여러 가지 방식을 사용할 수 있지만, 서버에서 렌더링 되는 방식으로 렌더링 되기 때문에, 쿠키와 body의 data-theme attribute 그리고 CSS Variable을 활용했습니다.
- 사용자가 Theme Mode를 바꿀 경우, 이를 쿠키에 Set하고 body의 data-theme을 변경시킵니다..
- 이를 통해, css의 variable이 변경되며, 페이지 이동 중인 상황에서도 Cookie를 통해 사용자가 선택한 Theme Mode를 사용하는 스켈레톤 컴포넌트를 보여줄 수 있도록 했습니다.

```css
body[data-theme="dark"] {
  background: black;
  color: white;
  --header-background: #121212;
  --header-color: white;
  --menu-icon-color: white;
  --input-background: #1e1e1e;
  --icon-color: white;
  --github-icon-color: #6185e5;
  --text-color: white;
  --button-background: #3e4756;
  --modal-background: #2e2e2e;
  --box-shadow-color: white;
  --post-card-background: #2e2e2e;
  --post-card-border: #2a2a2a;
}

body[data-theme="light"] {
  background: white;
  color: black;
  --header-background: #dedce0;
  --header-color: #615f63;
  --menu-icon-color: black;
  --input-background: #f5f5f5;
  --icon-color: black;
  --text-color: black;
  --github-icon-color: #0099fa;

  --button-background: #0099fa;
  --modal-background: white;
  --box-shadow-color: #333d4b26;
  --post-card-background: white;
  --post-card-border: #c8c8c8;
}
```

```javascript
function useDarkMode(mode: boolean, ref: React.RefObject<HTMLButtonElement>) {
  useEffect(() => {
    if (!ref.current) return;
    if (mode === LIGHT) {
      ref.current.style.left = DARK_MODE_POS;
      document.body.dataset.theme = "dark";
      document.cookie = `theme=dark;`;
    } else {
      ref.current.style.left = LIGHT_MODE_POST;
      document.body.dataset.theme = "light";
      document.cookie = `theme=light;`;
    }
  }, [mode, ref]);
}
```

<br/>
<br/>

### 👨‍💻 방문자 카운팅 기능

- 방문자 카운팅의 경우에는, CSR단계에서 구현해도 문제가 없기 때문에, localStorage를 이용해 구현했습니다.
- localStorage에 방문 기록이 없으면, 현재 시간을 기록하고 서버에 방문 기록 추가 요청을 보내게 됩니다.
- 방문 기록이 있을 경우, 이전 방문 시간과 현재 방문 시간을 비교하고, 오늘이 아닐 경우 현재 방문 시간을 새롭게 기록하고 서버에 방문 기록 추가 요청을 보내게 됩니다.
- 서버에서는 방문 테이블에 방문기록 하나당 하나의 row를 추가하게 됩니다. 해당 row에는 방문 시간을 기록한 데이터가 기록되어 있습니다.
- 방문 테이블 전체 row의 개수가 전체 방문자수가 되고, 현재 날짜와 같은 row의 개수가 오늘 방문자의 수가 됩니다. 이는 count 쿼리를 이용해 구현했습니다.
