# 컴포넌트에서의 스타일

`<style>` 태그 안에 CSS를 통해 컴포넌트의 스타일을 지정할 수 있다. 그러나 이는 전역 스타일이므로 컴포넌트간 CSS 클라스 이름 중복이 발생할 수 있다. 이를 해결하려면 다음 2가지 방법 중 하나를 사용해야 한다. :

* Scoped CSS
* CSS Module

## Scoped CSS
`<style scoped>` 태그를 사용하여 Scoped CSS를 사용할 수 있다.

Scoped CSS가 적용되면 적용된 HTML Element에는 `data-v-3a2e0245`와 같이 Attribute가 추가된다. 또한 Style 클래스에도 추가된 값이 포함된다.

```
<div data-v-3a2e0245="" class="main">
    Child1
</div>

.main[data-v-3a2e0245] {
    border: solid 1px black;
    background-color: yellow;
}
```

### Scoped CSS 사용시 주의할 점
1. Scoped CSS는 특성 선택자(Attribute Selector)를 사용하기 때문에 브라우저에서 스타일을 적용하는 속도가 느리다. 따라서 속도가 빠른 ID, Class, Tag Name 선택자를 적용하도록 해야 한다.
2. 부모 컴포넌트에 적용된 Scoped CSS는 하위 컴포넌트에도 반영된다.


## CSS Module
`<style moduel>` 태그를 사용해 CSS Module을 사용할 수 있다. CSS Module은 CSS 스타일을 객체처럼 다룰 수 있게 해준다.

아래의 코드와 같이 Vue 인스턴스의 class 바인드(v-bind) 디렉티브 안에서 $style이라는 속성을 사용해 CSS를 적용할 수 있다.
```
<template>
    <div>
        <button :class="[$style.hand, $style.text]">CSS Module을 적용한 버튼</button>
    </div>
</template>

<script>
export default {
    created() {
        // 예 : {hand: "_1l2s2YbgGPFeFA2amkytu7_0", text: "_1XQBE5Na4bj8ljjEl8kPQR_0"}
        console.log(this.$style);
    }
}
</script>

<style module>
.hand {
    cursor: pointer;
    background-color: purple;
    color: yellow;
}
.hand:hover {
    background-color: darkgreen;
}
.text {
    font-size: 12px;
}
</style>
```