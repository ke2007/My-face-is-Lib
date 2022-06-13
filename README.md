# Books Review html with Create React App
<hr></hr>
## 메인화면입니다<br>
![메인화면](https://user-images.githubusercontent.com/73016277/173262978-7aba9f51-4401-4fce-94ec-7ad254b9e6a3.jpg)<br>
## 사용방법버튼 클릭시 모달창으로 안내해줍니다<br>
![메인화면 사용방법모달](https://user-images.githubusercontent.com/73016277/173262982-368508cd-d772-4418-a247-ab4ecd7ca506.jpg)<br>
## 5초의 카운트 후에 카메라를 통해 사진이 촬영되고, 해당사진은 S3서버에 업로드 됩니다<br>
![사진촬영화면](https://user-images.githubusercontent.com/73016277/173262946-71053425-b86b-44a8-9b2c-e177aea2e282.jpg)<br>
## S3에 업로드된 사진은 람다 트리거를 통해 AWS Rekognition Detect-face Api를 거쳐서 결과값이 DB로 전송됩니다 전송된 DB값을 페이지에 알맞게 렌더링합니다<br>
![감정분석과 책추천](https://user-images.githubusercontent.com/73016277/173262984-5247a77e-472e-4d99-a6e0-3bab551f444e.jpg)<br>
##독후감 작성 페이지에선 책에대한 간단한 독후감을 작성할 수 있습니다
![독후감 작성 페이지](https://user-images.githubusercontent.com/73016277/173262989-b64edd1c-ceea-40eb-9709-c574339a0d33.jpg)<br>
![리뷰 작성 모달](https://user-images.githubusercontent.com/73016277/173262992-c394d73c-ff5f-46d1-a4fc-f054d9a765df.jpg)<br>

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

