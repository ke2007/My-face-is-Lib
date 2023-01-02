![2](https://user-images.githubusercontent.com/73016277/210193426-24791585-caaf-4199-8597-cad2fd92fc98.jpg)



## 🎈 Amazon Rekognition Detecting and analyzing faces API를 활용한 도서 추천 프로그램 <br><br> 📚 내 얼굴은 도서관 입니다.

<br><br>

## 🎨 프로젝트 개요

>React 클론코딩을 통해 배운 내용과, AWS Ec2 ,AWS S3 ,AWS RDS 공식문서와 도서를 보고 자습하여

>만들어본 Toy 프로젝트 프로그램 입니다.

<br>
<br><br><br>

## 🎨 프로젝트 제안배경

>어린이(만9세 미만 아동) 에게 있어 흥미없게 느껴지는 독서

>독서에 대한 거부감을 낮추면서 어린이 '자신에게 맞는 도서를 추천해주는 시스템'의 필요성이 증가
<br>
<br><br><br>

## 🎨 차별성
- 독서에 흥미 유발
  : 기존에는 활용하지 않던 얼굴인식을 통한 독서 추천 방식으로 아동에게 책을 고르는 과정에서 흥미요소를 제공함
  
- 얼굴 분석 자료 제공
  : 분석을 통한 실시간 감정 정보를 사용자에게 피드백
  
- 맞춤형 도서 추천
  : 분석한 정보를 바탕으로 도서 추천
  
  <br><br>

## 🎨 정보구조설계

![3](https://user-images.githubusercontent.com/73016277/210193532-72d27862-74d9-4574-a496-304c09fcfe0a.jpg)


# 🎨 사용화면

#### 메인화면입니다

![메인화면](https://user-images.githubusercontent.com/73016277/173263391-2729eee3-730e-4c99-a008-5789d78a6598.jpg)


#### 사용방법버튼 클릭시 모달창으로 안내해줍니다<br>
![메인화면 사용방법모달](https://user-images.githubusercontent.com/73016277/173263341-f150ad3a-24cb-46fa-875a-19974d4e7a2d.jpg)

#### 5초의 카운트 후에 카메라를 통해 사진이 촬영되고, 해당사진은 S3서버에 업로드 됩니다<br>
![사진촬영화면](https://user-images.githubusercontent.com/73016277/173263344-0e95feb1-985b-4917-8ed9-7e21b2dd06b9.jpg)

#### S3에 업로드된 사진은 람다 트리거를 통해 AWS Rekognition Detect-face Api를 거쳐서 결과값이 DB로 전송됩니다 전송된 DB값을 페이지에 알맞게 렌더링합니다<br>
![감정분석과 책추천](https://user-images.githubusercontent.com/73016277/173263347-a7a65b16-5b11-4535-85cc-c50acdf58991.jpg)

#### 독후감 작성 페이지에선 책에대한 간단한 독후감을 작성할 수 있습니다

![독후감 작성 페이지](https://user-images.githubusercontent.com/73016277/173262989-b64edd1c-ceea-40eb-9709-c574339a0d33.jpg)<br>
![리뷰 작성 모달](https://user-images.githubusercontent.com/73016277/173262992-c394d73c-ff5f-46d1-a4fc-f054d9a765df.jpg)<br>

<hr>

#### 개발일지

<hr>

## 06-13
#### 10:24
### index.html 리뉴얼, 감정수치 그래픽시각화


## 05-28
#### 19:00
### App.module.css 적용<br>
### html에 Books.json에 있는 [책 제목, 책 지은이, 책의 중심단어] 를 렌더링 하였음.

#### 21:45
### S3 버켓에 있는 이미지 Url을 Books.json에 추가하고 홈페이지에 이미지까지 띄움.
### React Route설치 후 화면 전환 까지 제작.

