
## Introduction

github repo for the *step-up* project.

## Rules

1. 절대 `main` 브랜치에 commit 하지 말것 
2. commit 시 변경사항을 명확하게 밝힐 것
3. branch 이름은 `kebab-case` 로 지을 것 ex) `features/new-feature`
4. 그 외 변수명, 함수명, 파일명 등의 작명법은 팀별로 통일할것 (린터 권장)


## Structure

/scripts - installation scripts 

/client - frontend; what the user sees 

/server - backend; handles requests

/database - DB scripts

/docs - Documentation 

## General Workflow

1. `git pull origin main` 로 업데이트
2. `git checkout -b '브랜치 이름'` 으로 브랜칭 및 전환 (매우 중요!!)
3. 할일 하기
4. `git add .`
5. `git commit -m '변경사항'` 또는 `git commit` 후 에디터에서 작성
6. `git pull origin main` 로 다시 업데이트(및  충돌 시 해결)
7. `git push -u origin` 로 현재 브랜치 업로드하기
8. github 접속해서 pull request 요청

