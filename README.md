# Books Review html with Create React App
<hr></hr>
## 메인화면입니다

![메인화면](https://user-images.githubusercontent.com/73016277/173263391-2729eee3-730e-4c99-a008-5789d78a6598.jpg)


## 사용방법버튼 클릭시 모달창으로 안내해줍니다<br>
![메인화면 사용방법모달](https://user-images.githubusercontent.com/73016277/173263341-f150ad3a-24cb-46fa-875a-19974d4e7a2d.jpg)

## 5초의 카운트 후에 카메라를 통해 사진이 촬영되고, 해당사진은 S3서버에 업로드 됩니다<br>
![사진촬영화면](https://user-images.githubusercontent.com/73016277/173263344-0e95feb1-985b-4917-8ed9-7e21b2dd06b9.jpg)

## S3에 업로드된 사진은 람다 트리거를 통해 AWS Rekognition Detect-face Api를 거쳐서 결과값이 DB로 전송됩니다 전송된 DB값을 페이지에 알맞게 렌더링합니다<br>
![감정분석과 책추천](https://user-images.githubusercontent.com/73016277/173263347-a7a65b16-5b11-4535-85cc-c50acdf58991.jpg)

## 독후감 작성 페이지에선 책에대한 간단한 독후감을 작성할 수 있습니다

![독후감 작성 페이지](https://user-images.githubusercontent.com/73016277/173262989-b64edd1c-ceea-40eb-9709-c574339a0d33.jpg)<br>
![리뷰 작성 모달](https://user-images.githubusercontent.com/73016277/173262992-c394d73c-ff5f-46d1-a4fc-f054d9a765df.jpg)<br>


## 06-13
#### 10:24
### index.html 리뉴얼, 감정수치 그래픽시각화

## 05-29

#### 22:00
### img에 mousehover시 커지는 애니메이션 적용



## 05-28
#### 19:00
### App.module.css 적용<br>
### html에 Books.json에 있는 [책 제목, 책 지은이, 책의 중심단어] 를 렌더링 하였음.

#### 21:45
### S3 버켓에 있는 이미지 Url을 Books.json에 추가하고 홈페이지에 이미지까지 띄움.
### React Route설치 후 화면 전환 까지 제작.

