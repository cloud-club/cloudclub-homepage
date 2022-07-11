# Documents

### Installation

#### Prerequisite
- yarn >= 1.22.18
- node >= 16.13.0

#### Dev Environment Setup
```
  yarn install
  yarn dev
```

#### Prod Environment Setup
```
  yarn build
  yarn start
```

### Add New Page
1. 추출한 markdown 폴더를 `src/assets/contents` 경로에 복사
2. `src/assets/contents/sturcture.json` 파일에 추가할 페이지에 대한 정보 추가
3. `src/pages` 경로에 `${PageName}.jsx` 파일을 생성
4. `src/assets/contents/{PageName}`로 복사한 파일들 import
5. `src/components/Markdown/Markdown.jsx`를 사용하여 새 페이지 jsx파일 생성
6. `App.jsx`에서 라우트 추가

### Markdown Component Usage
```
  <Markdown contentsFile={} coverImageFile={} />

  contentsFile: 추가할 페이지에 대한 markdown 파일 변수
  coverImageFile: 추가할 페이지 커버에 대한 파일 변수
```

---