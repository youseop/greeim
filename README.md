# imgreeim님의 포트폴리오 사이트
Portfolio Site - [@imgreeim](https://www.instagram.com/imgreeim/)

서비스 주소: https://imgreeim.com/


<br>

## 기획 동기

[백준 테스트케이스 모음 사이트](https://youseop.github.io/BOJ_TESTCASE/#/)를 만든 후 누군가가 실제로 원하는 사이트를 만들어보고 싶었습니다. 고객을 한번 만들어보고자 평소 관심있게 보던 디자이너분께 포트폴리오 사이트를 만들어 드리겠다고 연락드렸습니다. 다행히 흔쾌히 허락해주셨습니다. 디자이너님이 사진을 관리하고, 포트폴리오 사이트로 사용가능한 사이트를 만들게 되었습니다.


<br>

## 사용 스택

React Js를 사용해 UI를 디자인했으며, 사진 저장은 Firebase를 사용했습니다.


<br>

## 주요 기능 소개

#### 메인 페이지

비율이 서로 다른 사진들을 매끄럽게 배치

<p align="center"><img src="https://user-images.githubusercontent.com/66366941/119627922-982d6780-be47-11eb-99ee-3272b3e9c6b3.png" width="50%"></p>

#### CRUD를 위한 admin

Illustration 페이지와 design 페이지에 각각 작업물을 추가할 수 있습니다.
design 페이지에서는 게시글을 클릭했을 때, 해당 페이지로 넘어가며 작업물에 대한 디테일한 이미지가 나타나게 됩니다. 따라서, desgin 페이지는 썸네일 이미지와 디테일 이미지를 함께 입력받습니다.

<p align="center"><img src="https://user-images.githubusercontent.com/66366941/97113817-10a43c80-1730-11eb-8cf7-0e6b781bb8ea.JPG" width="50%"></p>

#### Contact Us

Email Js를 활용한 디자이너님께 직접 이메일을 보낼 수 있는 공간을 마련했습니다.

<p align="center"><img src="https://user-images.githubusercontent.com/66366941/97113898-97f1b000-1730-11eb-9f3a-7af04251a33c.JPG" width="30%"></p>

 
 
<br>
 
 -----------------------------------------------------
 # 진행 과정
 
 
 2020.10.15 ~
 
 - Build 2020-11-08 [Go to the website CLICK!](https://youseop.github.io/greeim/#/)
 

### 2020.10.18 Mid Check

- login
- illustration tab - No text
- design tab
- User can add img to illustration tab or design tab

Plus - need to do

- display img that h-w ratio is different
- random display

<img src="https://user-images.githubusercontent.com/66366941/96470923-c02d6a80-1269-11eb-8a3a-74e441552a77.JPG" width="30%">
<img src="https://user-images.githubusercontent.com/66366941/96470964-c9b6d280-1269-11eb-9709-dc2b76ec27f6.JPG" width="30%">
<img src="https://user-images.githubusercontent.com/66366941/97113817-10a43c80-1730-11eb-8cf7-0e6b781bb8ea.JPG" width="30%">

-----------------------------------------------------

### 2020.10.26 Mid Check

- 3 column display
- user can Send email to @imgreeim - use EmailJS
- display big image when user click user

Plus - need to do

- random display
- text display - when input text is too long

<img src="https://user-images.githubusercontent.com/66366941/97113906-a17b1800-1730-11eb-8384-5b264b3730df.JPG" width="30%">
<img src="https://user-images.githubusercontent.com/66366941/97113902-9aeca080-1730-11eb-83bc-498e3d372275.JPG" width="30%">
<img src="https://user-images.githubusercontent.com/66366941/97113898-97f1b000-1730-11eb-9f3a-7af04251a33c.JPG" width="30%">

-----------------------------------------------------

### 2020.10.27 Mid Check

- manage CSS for other types of phone, tabs
- Top button

Plus - need to do

- display after loading is finished

-----------------------------------------------------

### 2020.10.28 Check with @greeim

- when user click img - background blurr effect
- Information of contents in Detail Tab - Thumbnail img, Detail img, text >> To make detail page

Plus - need to do

- display after loading is finished
- seperated desgin pages

<img src="https://user-images.githubusercontent.com/66366941/97382375-9d0c5600-190e-11eb-8322-d84e071dbd2f.png" width="30%">
<img src="https://user-images.githubusercontent.com/66366941/98502241-dfca1880-2294-11eb-9be3-99f200a905cf.JPG" width="30%">

-----------------------------------------------------

### 2020.11.06 Mid Check

- Moving to the detail page when user click photo in design tab. [Using react-router >> Dynamic Routing]

Give Prop('createdAt') to the page.
Using createdAt-information, detail page find the other informations in the database.

Plus - need to do

- show img after loading

<img src="https://user-images.githubusercontent.com/66366941/98501539-db9cfb80-2292-11eb-96a7-472e35120227.JPG" width="30%">
<img src="https://user-images.githubusercontent.com/66366941/98501541-dcce2880-2292-11eb-8027-67a2f2bc0dd2.JPG" width="30%">


