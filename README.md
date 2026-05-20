
## Introduction

github repo for the *step-up* project.

## Rules

1. NEVER commit to the main branch. 
2. Write consistant code.
3. Write clear commit messages.

## Structure

/scripts - installation scripts 

/client - frontend; what the user sees 

/server - backend; handles requests

/database - DB scripts

/docs - Documentation 

## General Workflow

1. git pull 로 최신버전 업데이트
2. git branch '추가할 기능` 으로 브랜칭 (매우 중요!)
3. 할일 하기
4. git add '변경/추가파일' 
5. git commit -m '변경사항 설명' 또는 git commit 후 에디터에서 작성
6. git push --set-upstream origin add
