var webpack = require('webpack');
module.exports = {
    entry: {
        // 처음 로드하는 파일 지정
        // 단일 파일은 문자열, 복수 파일은 객체 형태로 파일 경로 지정
        // 
        // * 단일 진입 파일 *
        // entry: __dirname + '/src/index.js'
        //
        // * 다중 진입 파일 *
        // entry: {
        //   main: __dirname + '/src/index.js',
        //   app: __dirname + '/src/main.js   
        // }
    },
    output: {
        // 번들링 된 결과물의 출력 방법 지정
        //  - path : 번들링 된 파일의 저장 경로
        //  - publicPath : 웹서버에서 이용될 때의 사용 경로
        //  - filename : 생성하는 파일의 파일명
        //
        // output: {
        //   path: __dirname + '/public/dist/'
        //   filename: '[name].js'  --> [name]은 entry 이름이 파일명으로 반영하기 위한 값
        //   publicPath: '/dist/'   
        // }
    },
    module: {
        // 프로젝트 내부에서 사용하는 다양한 유형의 모듈을 수행하는 방법을 지정
        // ES2015를 이전 버전의 자바스크립트로 트랜스파일하는 babel-loader 사용 예제
        rules: [{
                test: /\.js$/, // 파일명이 .js로 끝나는 경우로 한정
                loader: 'babel-loader',
                exclude: /node_modules/
            }

        ]
    },
    plugins: [
        // 코드 난독화와 압축 기능을 제공하는 UglifyJsPlugin 추가 예제
        new webpack.optimize.UglifyJsPlugin()
    ],
    // ...
}