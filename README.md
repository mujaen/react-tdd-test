# React TDD TEST
React + Typescript + Jest + Cypress

## Motivation

기존 Vue(vue-cli-service)로 제작된 호스트용 어드민을   
React로 마이그레이션 해야 하는 상황이 발생.

stable인 React17과 Typescript를 적용하는 중 TDD의 중요함을  
깨달아 본격적으로 셋업하고 테스트하기 위해 만들어봄

### 고려해야 할 부분
1. 빌드 도구 선정에 있어 검증 필요
2. 협업으로 인한 컨벤션이 필요할지?

### 테스트 도구
Type                |  Tool   |
|:--------------------|:--------|
| 통합 테스트(Integration) |         |
| 단위 테스트(Unit)        | Jest    |
| 기능 테스트(E2E)         | Cypress |

## Set up

1. Node는 현재 기준 LTS인 16.15.0를 사용한다
```
nvm use 16.15.0
(npm v8.5.5)
```

2. Package Manager는 yarn(berry)를 기본으로 사용한다
```
yarn set version berry
```

## Getting Started
```
yarn run test
```