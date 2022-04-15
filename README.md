# Introduction

꽃 전문 커머스 겸 구독서비스 플랫폼 꾸까의 프론트, 백엔드, API 를 직접 구현하여 clone 한 프로젝트 
기존의 꾸까 서비스에서 추가적으로 구현하고 싶은 UI 를 일부 반영하는 시도를 하였음

- 기간 : 22.03.28 - 22.04.15
- 구성 : Fullstack 4명 

- [백엔드 깃헙주소](https://github.com/wecode-bootcamp-korea/justcode-4-1st-kukukkakka-back)
- [프론트엔드 깃헙주소](https://github.com/wecode-bootcamp-korea/justcode-4-1st-kukukkakka-front)

![image](https://user-images.githubusercontent.com/98023289/162653197-73f5d1d0-6a89-4126-902e-3cba63a5f115.png)

### 개인 기술 블로그
- [권지호](https://xxziiko.tistory.com/) 
- [박송이](https://velog.io/@songyi7091)
- [김민경](https://velog.io/@alicia-mkkim)
- [김다미](https://velog.io/@damdaridam)



</br>

# Technologies
- 사용언어 : Javascript
- 라이브러리 : React (Hook 사용)
- 라이브러리 : Scss
- 협업툴 : Git, Github
- 커뮤니케이션툴 : Notion, Slack





</br>

# Demo

### Product Detail Page

</br>

![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/97842933/163200056-533b918a-f736-46b6-9e59-3ea46a1baff7.gif)

## 상세 내용 
- 레이아웃
   - 꾸까 레이아웃 구현
   - productList fetch GET 

- 기능
   - productList fetch GET 
   - 수량을 관리하는 useState 생성하여 수량버튼 클릭 시 수량 증/감
   - display 상태를 관리하는 useState 생성하여 추가옵션 토글기능 구현
   - 추가상품 클릭 시 추가상품 UI component 추가하는 기능
   - 데이터를 map 하고 useState로 상태관리 하여 선택한 옵션 가격을 포함한 총 합계 계산
   - 장바구니 클릭 시 fetch POST
   - useNavigate 이용하여 장바구니로 이동

</br>

### Main Page

</br>

![image](https://user-images.githubusercontent.com/98023289/162682327-f8b9d8ca-a9cb-480b-b8fe-a3ef9eff8080.png)


### Product List Page (bouquet)

</br>

![image](https://user-images.githubusercontent.com/98023289/162682402-dec47838-4d28-4001-beeb-d9bbac90a75f.png)




# DB modeling

![image](https://user-images.githubusercontent.com/98023289/162653302-f013fd10-11ef-4d24-b980-5baf15c8c4f9.png)


