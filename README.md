# ByJuun.com 

## 🌟소개
<p align="center"><img src = "https://user-images.githubusercontent.com/78716842/149630300-f3d9144a-788c-443c-aacd-b89fe098cb67.png" width = "250"></p> 
👨‍💻 개인 블로그 👨‍💻  

<br/>
<br/>
<p align = "center">
     🛠 Tech 🛠
</p>
    

<p align = "center">
    <img src="https://img.shields.io/badge/React-v16.14.0-blue?logo=React"/></a>
     <img src="https://img.shields.io/badge/Antd-v4.16.8-blue?logo=Ant Design&logoColor=white"/></a>
    <img src="https://img.shields.io/badge/NextJs-v9.5.5-white?logo=Next.js&logoColor=white"/></a>
    <img src="https://img.shields.io/badge/Redux-v4.1.0-blueviolet?logo=Redux&logoColor=blueviolet"/></a>
    <img src="https://img.shields.io/badge/ReduxSaga-v1.1.3-violet?logo=Redux-saga&logoColor=violet"/></a>
    <img src="https://img.shields.io/badge/styled_components-v5.3.0-skyblue?logo=styled-components&logoColor=skyblue"/></a>
</p>
<p align = "center">
    <img src="https://img.shields.io/badge/Express-v4.17.1-important?logo=Express&logoColor=orange"/></a>
    <img src="https://img.shields.io/badge/mysql2-v2.3.0-blue?logo=MySQL&logoColor=blue"/></a>
    <img src="https://img.shields.io/badge/Sequelize-v6.6.5-9cf?logo=Sequelize&logoColor=9cf"/></a>
    <img src="https://img.shields.io/badge/Passport-v0.4.1-green?logo=Passport&logoColor=green"/></a>
</p>

## 🌟 주요페이지

### 😊 메인페이지
<p align = "center"><img src = "https://user-images.githubusercontent.com/78716842/149630732-5127571f-b1c3-43b4-b4eb-3f39a9dc81e1.png" width = "1300">
* 메인화면은 크게, 헤더, 사용자 정보와 카테고리,게시물 검색을 담당하는 좌측 영역, 메인게시물들을 화면에 보여주는 가운데 영역, 그리고 제 개인 연락처와 광고를 위한 우측 영역으로 나뉩니다.  
  

### 😊 카테고리 페이지와, 게시글 페이지
<p align = "center"><img src = "https://user-images.githubusercontent.com/78716842/149630889-67230da3-a140-4886-8669-5db88891aad5.png" width = "1300">
<p align = "center"><img src = "https://user-images.githubusercontent.com/78716842/149631056-071053ef-8e44-4619-9e9b-443d2c9168a7.png" width = "1300">
* 메인 게시물을 보여주는 가운데 영역을 제외한 부분은 화면 구성의 Layout이 되는 부분입니다.
* 이를 위해, children props를 이용했습니다.

```javascript
return (
    <AppLayout>
      <ListComponent Posts = {Posts} loading = {loadMainPostLoading}/>
      <div style = {{marginBottom : "15px"}}></div>
      <Global />
      <Pagination style = {{textAlign : "center", marginTop : "20px", marginBottom : "15px"}} current={current} onChange={onChange} total={20} />
    </AppLayout>
  );
```

* 위 code에서 나오는 LODA_MY_INFO_REQUEST 이 화면이 로딩되기전에 서버로 부터 현재 로그인 중인 사용자의 정보를 가져오 하는 action입니다.
* 추가로 현재 로그인을 했는지 판단하는 방법으로 Cookie를 사용했으며, 따라서 서버에 사용자의 정보를 요청 할 때 Cookie를 같이 실어서 보냅니다.

## 🌟 주요기능
  
###  👨‍💻 게시글 작성

<p align = "center"><img src = "https://user-images.githubusercontent.com/78716842/149631200-d775019b-d997-40d3-8dd2-2b41fce81e78.png" width = "700">

* 게시글 작성의 경우, 관리자만이 글을 작성할 수 있어야 하기 때문에, 해당 페이지는 관리자 Email로 로그인 한 유저만이 접근할 수 있도록 만들어져있습니다.  
* 게시글은 크게 타이틀, 카테코리, 해시태크, 내용으로 구성되며, 게시글 작성 페이지에서 사용자로 부터 입력을 받습니다.  
* 해시태그의 경우에는 하나의 큰 String형태로 사용자로부터 입력을 받아, 이를 # 을 기준으로 파싱 한 뒤 서버에 전송하게 됩니다.
* 내용의 경우에는, Text Editor를 통해 받게 되는데, Text Editor의 경우에는 CK Editor를 이용했습니다.  
* Next Js와 CK Editor를 연결하기 위해, next.config.js 파일을 통해 Next Js의 설정을 바꿔주었습니다.
* 마지막으로 등록 버튼을 누르게되면, Redux Saga를 통해, 서버로 요청을 보내 게시글을 데이터베이스에 저장하게 됩니다. 
  
```javascript
const onSubmitForm = useCallback(() => {
        if (id) {
            dispatch({
                type: UPDATE_POST_REQUEST,
                data: {
                    title, category, hashTag, content, id
                }
            })
        } else {
            dispatch({
                type: ADD_POST_REQUEST,
                data: {
                    title, category, hashTag, content,
                }
            })
        }
    }, [title, category, hashTag, content, id]);
```

###  👨‍💻 게시글 보기

<p align = "center"><img src = "https://user-images.githubusercontent.com/78716842/149631575-5fa41b6f-033e-4ced-bbfc-cc34ab16330e.png" width = "700">

* 게시글 작성을 통해, 게시글이 작성되었으면, 사용자는 메인페이지 혹은 카테고리 페이지를 통해 해당 게시글을 볼 수 있습니다.
* 백엔드 서버에 해당 게시글에 대한 ID와 함께 요청을 보내면, 이를 통해 해당 게시글의 정보를 모두 가져와, 이를 Redux 전역 스토어에 저장하게 됩니다.  

```javascript
export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    context.store.dispatch({
        type : LOAD_CURPOST_REQUEST,
        data : context.params.id,
    }) 
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  });
```

* 게시글 내용의 경우에는, HTML Tag의 형태로 오게 되는데, 이를 Parsing 하고 화면에 보여주기 위해 ReactHtmlParser를 이용했습니다.
```javascript
<div>{currentPost && ReactHtmlParser(currentPost.content)}</div>
```

###  👨‍💻 카테고리 별 게시글 목록 보기
<p align = "center"><img src = "https://user-images.githubusercontent.com/78716842/149631809-537d68fa-5ef2-4c4f-bdb5-8d6157ebc9b1.png" width = "700">

* 사용자가 원하는 카테고리를 클릭할 경우, 해당 카테고리 정보와 사용자의 현재 페이지네이션 정보를 함께 백엔드 서버로 요청을 보내, 해당 카테고리에 대한 게시글들은 8개씩 가져와 화면에 보여주게 됩니다.
```javascript
export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    context.store.dispatch({
        type : LOAD_POSTNUM_REQUEST,
        data : context.params.category,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);
```
```javascript
router.get('/load/:category/:page',async(req,res,next)=>{
    try{
        const posts = await Post.findAll({
            where : {category : req.params.category},
            order : [
                ['createdAt','DESC'],
            ],
            limit : 8,
            offset : (req.params.page-1)*8,
            attributes : ['id','title','category','createdAt']
        })
        res.status(200).json(posts);
    }catch(err){
        console.error(err);
        next(err);
    }
})
```

###  👨‍💻 게시글 검색
<p align = "center"><img src = "https://user-images.githubusercontent.com/78716842/149632091-130c755e-88e3-4112-84ab-7159d06c69a0.png" width = "700">
<p align = "center"><img src = "https://user-images.githubusercontent.com/78716842/149632025-2a65ff6a-a910-4097-9422-946bd5fa78d7.png" width = "300">

* 게시글 검색을 통해 사용자는 해당 키워드가 들어간 게시글을 검색할 수 있습니다.
* 백엔드 서버에서는 프론트 서버로 부터 해당 키워드를 받아, 해당 키워드가 들어간 게시글을 찾아, 프론트서버에 보내주게 됩니다.
  
```javascript
router.get('/search/:keyword',async(req,res,next)=>{
    try{
        const posts = await Post.findAll({
            where : { 
                title: {
                    [Op.like]: "%" + decodeURIComponent(req.params.keyword) + "%"
                }
            },
            order : [
                ['createdAt','DESC'],
            ]
        })
        res.status(200).json(posts);
    }catch(err){
        console.error(err);
        next(err);
    }
})
```
