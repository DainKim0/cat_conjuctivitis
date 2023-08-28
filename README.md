프로젝트 소개:
사전에 학습시킨 AI로 고양이가 결막염에 걸렸는지 여부를 확인할 수 있는 프로그램이다.

FRONTEND
언어:REACT

BACKEND
언어: DJANGO

실행시키는 법

1. 가상환경을 설치
   `python -m venv myvenv`
2. git bash로 전환
3. 가상환경 실행
   `source myvenv/Scripts/activate`
4. requirements.txt 위치로 이동
   `cd backend/`
   `pip install -r requirements.txt`

5. 파이썬 실행해보기
   `cd dj_pr`
   `python manage.py runserver`

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6275e49f-78f4-438d-a53f-efc0f69b7f6b/Untitled.png)

발생할 수 있는 에러 대처

1. 장고 모듈 미설치 에러

   ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/64bfb640-b023-442e-b8a3-7e5310dfc049/Untitled.png)

   pip install Django==3.2.20

2. environ 미설치 에러

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2cbdc4df-789e-4f0c-be1d-43b74b136282/Untitled.png)

pip install django-environ

1.  drf_yasg 미설치 에러

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/96b96cc0-fa98-49a9-83b6-049d6ade5ec6/Untitled.png)

pip install drf_yasg

1. cors-headers 미설치 에러

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bf87a71a-8c01-4dd3-807d-b955b20b1783/Untitled.png)

pip install django-cors-headers

1. 장고 버전 에러

   ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b2f7e4cd-2109-461a-a464-aecdd13fc1c4/Untitled.png)

pip uninstall Django
pip install Django==3.2.20

1. db 미설치 에러

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/915507be-f0b7-4932-836e-19061bd5ad95/Untitled.png)

[PostgreSQL](https://www.postgresql.org/)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/17700624-fe19-4d89-8108-64c3da1338c9/Untitled.png)

pip install azure.storage.blob
python -m pip install Pillow

1.
2. postgresql 홈페이지 들어가

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2c3da5b4-5681-4fb1-93c8-3eac6de27f7f/Untitled.png)

1. 들어가서 다운로드 버튼 클릭
2. 본인에 맞는 운영체재 클

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/70c32421-0322-4317-a0df-402408dab6b1/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/37abd233-618f-424b-bfe4-817c3a49b4c7/Untitled.png)

1. 만약 이 에러가 나면 exe 파일 공식 페이지말고 다른 곳에서 찾아야함
   (연락바)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d4811778-a34c-4182-a658-4de707dc4f6d/Untitled.png)

1.  exe 파일 실행해서 다운로드를 완료하기

    1.  next 누리기

        ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d158495a-0683-49fd-9257-3de9ceb3b6da/Untitled.png)

    2.  next 누르

        ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/03ca9492-cf7e-49c0-be61-30d66dbd26af/Untitled.png)

    3.  “stack builder” 제외 한 후 next 누르기
        stack builder는 postrestql에서 제공하는 다양한 유용한 메소드를 설치할 수 있는 소프트웨어
        ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f0d797ad-4056-4785-9baf-76ba665b81b3/Untitled.png)
    4.  next 누르기

        ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1fc6baf6-d0b7-42d2-9bf2-eeb0256f6d20/Untitled.png)

    5.  password 중요하니깐 무조건 기억하기

        ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cebf182a-b7c0-4420-b928-d41fece91da8/Untitled.png)

    6.  port 번호도 default로 유지

        ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bdd9d94c-6b7c-44a0-a8dc-25c01f562385/Untitled.png)

    7.  next 누르기

        ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bfcd4ee7-8fe0-41d3-a58a-fa794e6fba68/Untitled.png)

    8.  나머지는 next 누르고 설치 기다리기

        ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b1b19475-f2a0-4eaf-82da-f07976185fb1/Untitled.png)

    9.  설치 완료

2.  제대로 설치 되었는지 확인하는 법

    1. 노트북에서 sql 찾기

       ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5e0e9684-4315-40b8-b114-836e460b54d6/Untitled.png)

    2. 다음과 같은 화면이 나오는데

       ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8aa03f23-b0d9-4f6f-aaae-5c2ceda54425/Untitled.png)

    3. 다음 화면에 나오면 아까 전에 반드시 기억하라고 설정했던 비밀번호 입력

       ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ff30d17e-497f-4a2f-b00f-114e1d92007a/Untitled.png)

    4. 다음과 같은 화면이 나오면 설치 완료 되었다는 의미

    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/da19b927-2de2-43f5-abb0-23761f525b99/Untitled.png)

3.  db 미연결 오류

    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1afcb6d1-0fc4-49c8-bde4-49856ff17401/Untitled.png)

    1.  db 연결하는 법

        1.  pgAdmin 홈페이지 접속
            (pgAdmin은 postresql을 관리 접속을 편리하게 사용할 수 있게 해주는 tool )
            [pgAdmin - PostgreSQL Tools](https://www.pgadmin.org/)
        2.  다운로드 클릭

            ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0230b52f-efa9-466b-b484-d6539b5648db/Untitled.png)

        3.  운영체재에 맞게 클릭

            ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/99b54400-70b9-46b8-a8bd-f032b23d6bb9/Untitled.png)

        4.  가장 최신 파일 클릭

            ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e42891d0-38fa-42f0-a630-f924146a22c7/Untitled.png)

        5.  exe 파일을 클릭하여 설치

            ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/91f81a08-4cd7-4aad-98de-76eda441b5ca/Untitled.png)

        6.  설치 마법사를 이용해 설치를 완료

            1. install for me를 클릭

               ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fae5493a-c06b-4825-82d6-a0c8e070e776/Untitled.png)

            2. 어려운 거 없으니 next와 agree를 누르며 다운로드를 진행

               ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2d70856a-a98c-4b6b-8031-8717637543d2/Untitled.png)

            3. 설치 완료

        7.  pgadmin 실행

            ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2ca99731-28ae-495b-8d7f-d806123fbab9/Untitled.png)

    2.  database 설정하기

        1.  pg 어드민 접

            ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/22013917-1458-4bca-b92f-a2acbe298d23/Untitled.png)

        2.  접속 후 servers를 클릭하면 password를 입력하라는 문구

            이때 password는 위에서 설정한 password

            ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fa9ec808-3c0e-4f6b-9246-cc316639a58b/Untitled.png)

        3.  입력하면 다음과 같은 화면이 뜬다

            ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e76a9596-5f84-4b58-887a-120a34dd0c86/Untitled.png)

        4.  먼저 슈퍼관리자 생성

            login/group → create → login/group role 클릭

            ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fb9e0fd6-fe1b-406c-984b-555874109fb8/Untitled.png)

        5.  관리자 생성하기
            name: 유저 이름
            ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/05f31b77-cb47-4f47-9a6f-51fe23fb6bf7/Untitled.png)

                유저 비밀번호 생성

                ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/82769115-c3ff-4b1d-afc3-f2620dbcf9f6/Untitled.png)

                직권: 모두 허용으로 바꾸기

                ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0f1b0b3f-9c61-4f24-a212-fc99e1bb5e53/Untitled.png)

                그리고 save 클릭

        6.  본격적으로 db 만들기
            databases → create → database 클릭
            ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/04031896-a104-4330-b579-1d0be363442a/Untitled.png)

                ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c4a5f954-fca2-4050-9ef8-e5ef9bfedae6/Untitled.png)

        7.  데이테 베이스 이름 입력하고 아까 생성한 슈퍼 관리자를 클릭

            ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0f9ddf1d-a5c5-41e0-9738-2e7e1f6f9eef/Untitled.png)

        8.  입력후 저장 버튼 누르기 전에 파일로 돌아가서 backend/dj_pr/settings.py 파일을 찾기
        9.  다음 코드를 찾아보자 - 설정한 데이터 베이스와 장고 서버를 연결해주는 과정

            ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/87c7041d-d6a4-4ccf-9d39-6114840578a2/Untitled.png)

            1. database는 database의 이름을 의미하기 때문에 hanium 입력
            2. owner는 아까 생성한 관리자를 찾아서 클릭
            3. 그리고 코드로 돌아와서 \*\*\*\*부분들을 수정한다.
            4. user는 아까 생성한 1234로 password는 user password 입력

    3.  데이터 통합하기

        ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/28b72717-b33d-4f8f-9260-cc107a70d6bc/Untitled.png)

        1. ctrl + c를 눌러 서버를 종료한다
        2. python [manage.py](http://manage.py) migrate 입력
        3. 위 코드는 db 변경사항을 입력하는 명령어이다.

    4.  이렇게 나오면 최종 완료

    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9cb8b56d-98a8-472e-a29d-c34b048f6b5b/Untitled.png)

```

```
