# 컴포넌트 만들기

리액트의 본질은 사용자 정의 태그를 만드는 것입니다.

> 사용자 정의태그란? 사용자가 직접 정의하여 사용할 수 있는 태그입니다!

```js
function App() {
    return (
        <div>
            <header>
                <h1>
                    <a href='/'>WEB</a>
                </h1>
            </header>
            <nav>
                <ol>
                    <li>
                        <a href=''>HTML</a>
                    </li>
                    <li>
                        <a href=''>CSS</a>
                    </li>
                    <li>
                        <a href=''>JS</a>
                    </li>
                </ol>
            </nav>
            <article>
                <h2>Welcome</h2>
                Hello,WEB
            </article>
        </div>
    );
}
```

위와 같이 간단하게 html태그를 작성을 해주었는데 만약 우리가 작성한 저런 태그가  
각 1억개씩 총 3억개가 있다고 생각해봅시다.

그렇게 된다면 그 3억개의 태그를 파악하는 것이 너무나도 힘이듭니다.

이를 파악하기 쉽게 하나의 태그로 묶어 사용자 정의 태그를 만들어 주는 것입니다.  
이것이 `React` 에서 가장 중요한 개념이라고 할 수 있습니다.

---

## 사용자 정의 태그 만들기

`React` 에서 사용자 정의태그를 만들어 줄 때에는 `function`을 사용하며 반드시  
첫 시작을 대문자로 만들어주도록 합니다.

위에서 만들어준 html태그에서 소문자 `header`는 html태그이고 `function Header`  
와같이 만들어주면 이것은 `React` 에서 사용자 정의태그가 되는 것입니다.

```js
function Header() {
    return (
        <header>
            <h1>
                <a href='/'>WEB</a>
            </h1>
        </header>
    );
}
```

기존에 작성했던 태그를 위와 같이 사용자 정의태그로 만들어 주었습니다.

```js
function App() {
    return (
        <div>
            <Header></Header>
            <Header></Header>
            <Header></Header>
            <nav>
                <ol>
                    <li>
                        <a href=''>HTML</a>
                    </li>
                    <li>
                        <a href=''>CSS</a>
                    </li>
                    <li>
                        <a href=''>JS</a>
                    </li>
                </ol>
            </nav>
            <article>
                <h2>Welcome</h2>
                Hello,WEB
            </article>
        </div>
    );
}
```

그 뒤 위와 같이 사용을 해주면 우리의 코드는 훨씬 간결하고 함수에서 `WEB` 이라고  
적어준 부분을 `React` 로 바꾸어주면 사용자 정의 태그를 쓴 모든 태그들에서  
`React` 로 바뀌는 폭발적인 효과를 체감할 수 있게 되는 것입니다.

이것이 `React` 에서 말하는 `컴포넌트` 라는 것입니다.  
즉, `React` 에서의 사용자 정의 태그는 `컴포넌트` 다! 라고 정리할 수 있겠습니다.

```js
function App() {
    return (
        <div>
            <Header></Header>
            <Header></Header>
            <Header></Header>
            <Nav></Nav>
            <Article></Article>
        </div>
    );
}
```

모든 태그들을 `컴포넌트`로 만들어 우리의 코드를 위와 같이 매우 직관적이고  
간결하게 바꾸어줄 수 있습니다.
