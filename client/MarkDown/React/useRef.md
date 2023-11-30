---
title: "useRef"
date: "2022-05-26"
lastmod: "2022-05-26"
tags: ["hook", "useRef"]
summary: useRef훅의 사용벙법에 대해 작성한 포스트입니다.
images:
  [
    "https://github.com/BY-juun/Blog/assets/78716842/7b604f3f-0c71-444c-81fd-bb6b2327855a",
  ]
---

> `useRef` hook에 대해서 배워보겠습니다.

<br />

# 1️⃣ DOM선택

React를 통해 코딩을 하게 되는 상황에 특정 `DOM`(Document Object Model)을 선택해야 하는 상황이 발생합니다.

예를 들면, 특정 input을 선택해 focus 해주어야 하는 상황이 발생할 수 있습니다.

자바스크립트에서는 다음과 같은 상황에서 `querySelector` 혹은 `getElementById` 같은 함수를 사용합니다.

React에서는 이와 다르게, 특정 DOM을 `useRef` hook을 통해 선택하게 됩니다.

<br />

input을 입력한 후, 해당 input을 초기화하는 버튼을 통해 초기화와 동시에 focus 하는 예제를 통해 알아보겠습니다.

```tsx title="123"
const Sample = () => {
  const inputRef = useRef();
  const [input, setInput] = useState(""); //input으로 사용할 state
  const InputRef = useRef(); //DOM선택을 위한 변수

  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  const onReset = () => {
    setInput("");
    InputRef.current.focus();
  };

  return (
    <div>
      <input
        name="name"
        placeholder="Input"
        onChange={onChangeInput}
        value={input}
        ref={InputRef}
      />
      <button onClick={onReset}>Reset</button>
    </div>
  );
};
```

먼저, `useRef` hook을 통해서, `Ref객체(InputRef)` 를 만들게 됩니다.  
해당 객체를 선택하고 싶은 DOM에 `ref = {Ref객체}` 를 통해 ref값으로 설정해주면 됩니다.  
그러면 해당 Ref객체를 `current property`를 통해, 원하는 DOM을 선택할 수 있게 됩니다.

위 예제에서는 원하는 DOM을 선택하고 `focus()` 를 통해 해당 DOM에 focus 할 수 있도록 해주었습니다.

# 2️⃣ 컴포넌트 안의 변수 만들기

`useRef`를 사용하면, 위 1️⃣ 과 같이 DOM을 선택할 수 있을 뿐만 아니라, 컴포넌트 내부에서 조회 및 수정할 수 있는 변수를 사용하고 관리할 수 있습니다.

`useRef`를 통해 관리하는 변수는 값이 변하더라도, 해당 변수를 사용하는 컴포넌트가 리랜더링되지 않습니다.

`useRef`를 사용할 경우 렌더링 이후, 업데이트된 값을 조회하는 것이 아닌 설정 후 바로 조회할 수 있습니다.

```tsx
const Sample = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const refId = useRef(0);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      axios
        .post("http://localhost:3000/", {
          email,
          password,
          id: refId.current,
        })
        .then((response) => {
          console.log(response);
          refId.current += 1;
        })
        .catch((err) => {
          console.error(err.response);
        })
        .finally(() => {});
    },
    [email, password]
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input placeholder="email" onChange={onChangeEmail} value={email} />
        <input
          placeholder="password"
          onChange={onChangePassword}
          value={password}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Sample;
```

위 예제는 사용자로 부터 Id,password 를 입력 받고 이와 함께 Id를 서버에 보내는 예제입니다.

`.current` 프로퍼티를 통해 값을 수정하고 조회 할 수 있습니다.

다시 한번 강조하면, `useRef` 를 통해 관리하는 변수를 값이 변하더라도, 컴포넌트가 리랜더링 되지 않습니다.

<br />

# 3️⃣ Rerendering 방지

마지막으로 useRef를 사용하면 리랜더링을 방지할 수 있습니다.

위 예제에서는 `onChangeEmail`, `onChangePassword` 함수를 사용하기 때문에,

email, password값이 바뀌면, 컴포넌트가 리랜더링 되게 됩니다.

`onChange` 구현을 ref를 통해 대체할 수 있습니다.

```tsx
const Sample = () => {
  const refId = useRef(0);
  const emailRef = useRef(""); //변경점
  const passwordRef = useRef(""); //변경점
  const passwordRef = useRef("");

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000", {
        email: emailRef.current,
        password: passwordRef.current, //변경점
        id: refId.current,
      })
      .then((response) => {
        emailRef.current = ""; //변경점
        passwordRef.current = ""; //변경점
        refId.current += 1;
      })
      .catch((err) => {
        console.error(err.response);
      })
      .finally(() => {});
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          placeholder="email"
          ref={emailRef} //변경점
        />
        <input
          placeholder="password"
          ref={passwordRef} // 변경점
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
```

하지만, 만약 `input`에 따라 화면이 달라져야한다면, `ref`가 아닌 `state`를 사용해야합니다!!  
(`Proxy`를 사용할수도 있습니다 - `React-Hook-Form`이 해당 방식으로 구현댐)
