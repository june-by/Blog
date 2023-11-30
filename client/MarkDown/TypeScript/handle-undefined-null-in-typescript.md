---
title: "TypeScript에서 undefined, null 처리하기"
date: "2022-05-26"
lastmod: "2022-05-26"
tags: ["undefined", "null"]
summary: "TypeScript에서 undefined, null을 처리하기 위한 4가지 방법에 대해 다룬 포스트입니다."
images:
  [
    "https://github.com/BY-juun/Blog/assets/78716842/9df27665-2857-40cc-860f-7e3bcd1a333d",
  ]
---

TypeScript를 사용하다보면, 다음과 같은 상황이 나타납니다.

```tsx
const submit = useCallback(() => {
  const isValid = validationCheck();
  if (!isValid) {
    return;
  }
  const reqData = {
    email: email.current.value,
    password: password.current.value,
    userName: userName.current.value,
    departMent: departMent.current.value,
    sex: sex,
    admission: admission.current.value,
  };
  signUpMutation.mutate(reqData);
}, [sex, signUpMutation, validationCheck]);
```

위 코드를 확인해보면, `validationCheck` 라는 함수를 통해, data의 타입이 `undefined`또는 `null`인 경우를 처리합니다.

분명, `validationCheck`함수를 통해 예외처리를 했는데, `reqData`의 `email, password, ... 프로퍼티`가 `undefined` 일 수도 있다고 나옵니다.

이떼, 다음과 같은 방법들을 통해 해결할 수 있습니다.

# 1️⃣ if를 통한 처리

if문을 통해, type의 safety를 보장해주면, 해결이 됩니다.

```ts
if (!emailRef?.current?.value) return;
```

그러나, 위에서는 `validationCheck`라는 함수를 통해, 이미 check를 하고 있기 때문에, 조건문을 통한 처리는 넘어갑니다.

# 2️⃣ 논리연산자 사용

```tsx
const reqData = {
  email: email?.current?.value || "",
  password: password?.current?.value || "",
  userName: userName?.current?.value || "",
  departMent: departMent?.current?.value || "",
  sex: sex,
  admission: admission?.current?.value || "",
};
```

논리 연산자를 사용해, 값이 `null` 또는 `undefined`라면, 값을 치환하도록 만들어, type safety를 보장해줍니다.

# 3️⃣ non-null assertion 연산자 사용

```tsx
const reqData = {
  email: email.current.value!,
  password: password.current.value!,
  userName: userName.current.value!,
  departMent: departMent.current.value!,
  sex: sex,
  admission: admission.current.value!,
};
```

끝에 `!` 를 붙힘으로써, TypeScript 컴파일러에게 변수가 `null` 또는 `undefined` 일 수 없음을 알려준다.

# 4️⃣ as 키워드 사용

`as` 키워드를 통해 값의 type을 `강제로 지정`해준다.

```tsx
const reqData = {
  email: email.current.value as string,
  password: password.current.value as string,
  userName: userName.current.value as string,
  departMent: departMent.current.value as string,
  sex: sex,
  admission: admission.current.value as string,
};
```
