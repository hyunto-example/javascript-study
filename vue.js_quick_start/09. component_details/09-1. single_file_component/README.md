# 단일 파일 컴포넌트

## 전역 수준 컴포넌트의 문제점
* 빌드 단계가 없기 때문에 ES6, TypeScript와 같은 최신 자바스크립트 문법 사용 불가. 따라서 HTML 내부에 ES6 이전 자바스크립트 코드 작성해야 함.
* CSS 스타일을 빌드하고 모듈화 할 수 있는 기능 미제공.
* HTML 파일 안에 다수의 <template> 태그가 존재하기 때문에 구분이 쉽지 않음.

## vue-loader
vue-cli가 제공하는 webpack, webpack-simple, pwa 템플릿에는 vue-loader가 존재한다. vue-loader는 .vue 파일 내의 <template />, <script />, <style /> 태그를 파싱하고, 다른 로더들을 활용해 하나의 모듈로 조합한다. 특히 css-loader로 CSS 스타일을 처리하고 모듈화한다.