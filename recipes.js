/* 지홈 레시피북 데이터 — 새 레시피는 이 배열에 추가합니다.
   ingredients: 문자열 배열. "## 소스"처럼 ##로 시작하면 재료 묶음 제목.
   steps: 문자열 배열(👉 뒤는 작은 팁으로 표시). tip: 문자열 배열.
   added: 추가한 날짜(YYYY-MM-DD) — 30일 동안 NEW 표시. img: 없으면 "" */
/* 공구 소식 — 인포크링크(link.inpock.co.kr/wooahble)의 "Coming up Next" 일정. brand=브랜드명(배너 제목 "지홈(우아블) X 브랜드 공동구매"), title=상품명, start/end 는 한국시간 "YYYY-MM-DDTHH:MM", img=배너 사진(없으면 ""), link=노션 알림신청(지홈) 공개 페이지 주소, 끝난 공구는 자동으로 숨겨짐 */
window.GONGGU = [
 {"brand": "프렘", "title": "무쇠 플레이트", "start": "2026-11-18T10:00", "end": "2026-11-21T23:59", "img": "img/gb-prem.webp", "link": "https://serious-marmot-6b9.notion.site/42b9d09c3ca082e5970e01792f22a1a4"},
 {"brand": "VBC까사", "title": "인칸토", "start": "2026-11-23T10:00", "end": "2026-11-27T23:59", "img": "img/gb-vbc-2.webp", "link": "https://serious-marmot-6b9.notion.site/1699d09c3ca083138fc6010e93724a43"},
 {"brand": "드부이에", "title": "초크팬", "start": "2026-12-02T10:00", "end": "2026-12-06T23:59", "img": "img/gb-debuyer-2.webp", "link": "https://serious-marmot-6b9.notion.site/d399d09c3ca083b3b0c881d072706a8c"}
];
/* 이벤트 배너 — type: code(할인코드) / product(우아블 상품) / video(유튜브). 공구(GONGGU)는 이 배너들 앞에 자동으로 붙음 */
window.EVENTS = [
 {"type": "code", "kicker": "FOLLOW EVENT", "title": "지홈 팔로우하면 우아블 5% 할인", "code": "WAB2025F", "img": "img/ev-code.webp", "link": "https://wooahble.com/?utm_source=recipebook&utm_medium=web&utm_campaign=recipebook"},
 {"type": "product", "kicker": "우아블 자체제작", "title": "식탁매트 Flatter", "sub": "레시피 속 그 식탁매트", "img": "img/ev-flatter.webp", "link": "https://wooahble.com/shop_view/?idx=69"},
 {"type": "video", "kicker": "우아블 유튜브 최신 영상", "title": "멋진 홈파티를 결정짓는 5가지, '이것'만 안해도 달라집니다", "img": "img/ev-video.webp", "link": "https://www.youtube.com/watch?v=llkkc_XyZng"},
 {"type": "product", "kicker": "우아블 자체제작", "title": "Gift Tissue", "sub": "식탁 위에 두는 기프트티슈", "img": "img/ev-tissue.webp", "link": "https://wooahble.com/shop_view/?idx=72"}
];
window.BOOK = {"updated": "2026-10-29"};
window.RECIPES = [
 {
  "id": "tips-01",
  "cat": "tips",
  "title": "같은 음식도 달라보이는 팁 3",
  "img": "img/fe4db2ebde65.webp",
  "ig": "https://www.instagram.com/p/DHN-v9FTZyt/",
  "added": "",
  "kind": "guide",
  "lead": [],
  "points": [],
  "items": [
   {
    "t": "테이블매트로 평면 채워주기"
   },
   {
    "t": "작은 센터피스로 빈공간 채워주기"
   },
   {
    "t": "유리잔or와인잔 세팅해서 수직 볼륨 채워주기"
   }
  ]
 },
 {
  "id": "tips-02",
  "cat": "tips",
  "title": "홈파티 테이블세팅 순서",
  "img": "img/ca30794af277.webp",
  "ig": "https://www.instagram.com/reel/DCocEl0ynmc/",
  "added": "",
  "kind": "guide",
  "lead": [],
  "points": [],
  "items": [
   {
    "t": "테이블매트(평면채우기)"
   },
   {
    "t": "앞접시 배치 → 21cm정도 사이즈"
   },
   {
    "t": "커트러리 → 포크, 나이프, 숟가락 순"
   },
   {
    "t": "와인잔(수직적 볼륨 채우기)"
   },
   {
    "t": "공기 또는 오너먼트로 꾸미기"
   }
  ]
 },
 {
  "id": "tips-03",
  "cat": "tips",
  "title": "Green 테이블 세팅",
  "img": "img/dc32b19b8ebc.webp",
  "ig": "https://www.instagram.com/reel/DNx3Oan5neE/",
  "added": "",
  "kind": "guide",
  "lead": [],
  "points": [],
  "items": [
   {
    "t": "우아블 테이블매트 플래터",
    "note": "우아블공식홈페이지/5%할인코드 WAB2025M"
   },
   {
    "t": "이케아 스트림미그 21cm"
   },
   {
    "t": "사브르 네이처",
    "note": "노르딕네스트에서 직구했어요!"
   },
   {
    "t": "우아블 고블렛잔",
    "note": "품절이라 구매가 어려워요 🥲"
   },
   {
    "t": "베르나르도 알베르틴",
    "note": "한국에 몇피스 없어서 매장 전화해서 확인해보세요"
   },
   {
    "t": "킹센스 신주양주 수퍼3중팬"
   },
   {
    "t": "모타코스터&우아블 글래스볼",
    "note": "우아블공식홈페이지/5%할인코드 WAB2025M"
   }
  ]
 },
 {
  "id": "tips-04",
  "cat": "tips",
  "title": "Spring & Ikea 테이블 세팅",
  "img": "img/d863597d14f0.webp",
  "ig": "https://www.instagram.com/reel/DHdI747TNqN/",
  "added": "",
  "kind": "guide",
  "lead": [],
  "points": [],
  "items": [
   {
    "t": "우아블 플래터",
    "price": "24,000원",
    "label": "테이블매트"
   },
   {
    "t": "이케아 스트림미그 4개",
    "price": "14,900원",
    "label": "앞접시"
   },
   {
    "t": "우아블 골드림 고블렛잔 2개",
    "price": "54,000원",
    "label": "고블렛잔"
   },
   {
    "t": "사브르 네이쳐 스푼",
    "price": "26,900원",
    "label": "커트러리"
   },
   {
    "t": "이케아 스뮈카",
    "price": "12,900원",
    "label": "조화"
   },
   {
    "t": "토토공방 눈꽃 평접시",
    "price": "46,240원",
    "label": "디너접시"
   },
   {
    "t": "이케아 365+",
    "price": "3,900원",
    "label": "사이드접시"
   },
   {
    "t": "이케아 핀스마크 500원 압티틀리그 5,900원",
    "label": "소스볼, 도마"
   },
   {
    "t": "이케아 펠반드",
    "price": "6,900원",
    "label": "양초홀더"
   },
   {
    "t": "우아블 기프트티슈",
    "price": "35,000원",
    "label": "티슈케이스"
   }
  ]
 },
 {
  "id": "tips-05",
  "cat": "tips",
  "title": "홈파티를 빛내주는 테이블웨어",
  "img": "img/c2214f8d0ad4.webp",
  "ig": "https://www.instagram.com/reel/DCocEl0ynmc/",
  "added": "",
  "kind": "guide",
  "lead": [],
  "points": [],
  "items": [
   {
    "t": "디올 Lily of the valley",
    "label": "접시"
   },
   {
    "t": "우아블 플래터",
    "label": "식탁매트"
   },
   {
    "t": "이케아-스트림미그 21cm",
    "label": "앞접시"
   },
   {
    "t": "헤리터 시그니처 팔각도마",
    "label": "나무도마"
   },
   {
    "t": "광주요 미 시리즈",
    "label": "그릇"
   },
   {
    "t": "스타우브 베이비웍",
    "label": "솥"
   },
   {
    "t": "토토공방 눈꽃 평접시",
    "label": "그릇"
   }
  ]
 },
 {
  "id": "tips-06",
  "cat": "tips",
  "title": "자라홈 핫한 잇템",
  "img": "img/d0534209ef72.webp",
  "ig": "https://www.instagram.com/reel/DFr3FLMzmn5/",
  "added": "",
  "kind": "guide",
  "lead": [
   "요즘 자라홈에 핫한 잇템 - 플로랄 어슨웨어 테이블웨어"
  ],
  "points": [
   "우아하고 화려한 플로럴 문양의 프린트 위로",
   "두터운 옻칠이 되어 품질이 정말 좋아요 🍽️",
   "포르투갈에서 제조되어 중국산이슈도없고",
   "무엇보다 가격이 너무 착해,,, 🫶"
  ],
  "items": [
   {
    "t": "앞접시",
    "price": "10,500원"
   },
   {
    "t": "디너접시",
    "price": "13,900원"
   },
   {
    "t": "파스타볼",
    "price": "13,900원"
   },
   {
    "t": "와인잔",
    "price": "8,900원"
   }
  ]
 },
 {
  "id": "tips-07",
  "cat": "tips",
  "title": "자라홈 와인잔 추천",
  "img": "img/f95dc0cc52a7.webp",
  "ig": "https://www.instagram.com/reel/DE67_lJy_Og/",
  "added": "",
  "kind": "guide",
  "lead": [],
  "points": [],
  "items": [
   {
    "t": "웨이브이펙트 글라스와인잔",
    "price": "13,900원",
    "note": "큰 볼에 플리츠문양이 영롱한 와인잔"
   },
   {
    "t": "엠보스드 디자인 와인잔",
    "price": "8,900원",
    "note": "엠보싱 디자인에 컬러감이 귀여운"
   },
   {
    "t": "무지개 펄 효과 유리잔",
    "price": "18,900원",
    "note": "튤립모양에 핑크 그라데이션이 사랑스러운"
   }
  ]
 },
 {
  "id": "tips-08",
  "cat": "tips",
  "title": "김치 예쁘게 써는 법",
  "img": "img/e69ed400d1a7.webp",
  "ig": "https://www.instagram.com/reel/DW-4aoLD9PS/",
  "added": "",
  "kind": "guide",
  "lead": [],
  "points": [],
  "items": [
   {
    "t": "섞어썰기"
   },
   {
    "t": "교차썰기"
   },
   {
    "t": "말아주기"
   }
  ]
 },
 {
  "id": "appetizer-01",
  "cat": "appetizer",
  "title": "엔다이브연어샐러드",
  "img": "img/eb477886033b.webp",
  "ig": "https://www.instagram.com/zi___home/",
  "added": "",
  "serves": "",
  "ingredients": [
   "엔다이브",
   "연어 120g",
   "양파 반개",
   "레몬즙 1큰술",
   "홀스래디쉬소스 40g",
   "케이퍼 3작은술",
   "무순",
   "레디쉬"
  ],
  "steps": [
   "연어를 잘게 잘라주세요",
   "양파를 다져 물에 10분간 담가주세요",
   "연어, 양파, 홀스래디쉬소스, 레몬즙1큰술, 케이퍼 3작은술 넣고 섞어주세요",
   "엔다이브 한쪽씩 떼 위에 연어속 올려주세요",
   "무순, 레디쉬슬라이스 올려주면 끝(생략가능)"
  ],
  "tip": []
 },
 {
  "id": "appetizer-02",
  "cat": "appetizer",
  "title": "광어세비체",
  "img": "img/f939cedb1f2c.webp",
  "ig": "https://www.instagram.com/reel/DSFZPhkE5Y1/",
  "added": "",
  "serves": "",
  "ingredients": [
   "광어회",
   "레디쉬",
   "딜",
   "## 소스",
   "올리브오일3큰술",
   "화이트발사믹 2큰술",
   "레몬즙 1큰술",
   "다진마늘 작은1술",
   "소금 후추 적당히",
   "다진 적양파 2큰술"
  ],
  "steps": [
   "광어회 접시에 올려주고 소스 뿌려주세요",
   "레디쉬와 딜 올려주면 끝"
  ],
  "tip": []
 },
 {
  "id": "appetizer-03",
  "cat": "appetizer",
  "title": "묵은지광어카르파쵸",
  "img": "img/c179fcda5ed0.webp",
  "ig": "https://www.instagram.com/reel/C2ZZsRtJXIK/",
  "added": "",
  "serves": "",
  "ingredients": [
   "광어회",
   "무순",
   "들기름",
   "묵은지 한주먹",
   "## 양념",
   "설탕 1스푼",
   "식초 1스푼",
   "들기름 1스푼"
  ],
  "steps": [
   "묵은지 물에 씻어 꼭 짜 준비!",
   "묵은지에 양념 넣고 조물조물 무쳐주세요 (30분정도 재워두면 더 좋아요)",
   "광어와 무순을 묵은지로 싸주세요",
   "묵은지광어 위에 들기름 둘러주면 끝!"
  ],
  "tip": []
 },
 {
  "id": "appetizer-04",
  "cat": "appetizer",
  "title": "가리비플래터",
  "img": "img/e9d4324fbcb8.webp",
  "ig": "https://www.instagram.com/reel/DCUDZxqtii2/",
  "added": "",
  "serves": "",
  "ingredients": [
   "가리비 1-2kg",
   "레몬",
   "유자폰즈소스",
   "다진양파 1/4개",
   "올리브유 2큰술"
  ],
  "steps": [
   "가리비를 입이 벌어질 때까지 10분간 쪄주세요",
   "한쪽 껍질을 까 접시에 올려주세요(중간중간 레몬슬라이스도)",
   "다진양파가 잠길정도로 유자폰즈소스를 넣고 올리브유 2큰술 넣어 소스를 만들어주세요",
   "가리비위에 레몬즙, 소스 조금씩 올려주면 끝"
  ],
  "tip": []
 },
 {
  "id": "appetizer-05",
  "cat": "appetizer",
  "title": "미나리육회",
  "img": "img/ee549e635902.webp",
  "ig": "https://www.instagram.com/reel/DOV2k4xk6uN/",
  "added": "",
  "serves": "",
  "ingredients": [
   "육회 200g",
   "미나리50g",
   "## 양념",
   "설탕 2큰술",
   "간장 1큰술",
   "맛소금 0.5 작은술",
   "다진마늘 1큰술",
   "참기름 3큰술",
   "계란노른자(취향껏)"
  ],
  "steps": [
   "핏물제거한 육회, 깨끗이 씻은 미나리 먹기좋게 잘라주세요",
   "육회, 미나리, 양념 넣고 조물락조물락 섞어주세요 (양념은 맛보며 간 조절해주세요)",
   "예쁜 접시에 담고 그 위에 노른자 취향껏 추가해주세요"
  ],
  "tip": [
   "육회 조금 남으면 밥이랑 소스 좀더 넣고 비벼주면 든든한 마무리 가능해요"
  ]
 },
 {
  "id": "appetizer-06",
  "cat": "appetizer",
  "title": "육회김밥",
  "img": "img/cb27fa715a19.webp",
  "ig": "https://www.instagram.com/reel/C6d_KoYpCFt/",
  "added": "",
  "serves": "",
  "ingredients": [
   "우둔살 250g",
   "밥 1공기",
   "김 2장",
   "## 양념",
   "마늘 10개",
   "설탕 2큰술",
   "간장 0.5큰술",
   "맛소금 0.3큰술",
   "참기름 3큰술",
   "## 묵은지무침",
   "씻어 물기 뺀 묵은지 한주먹",
   "설탕 1큰술",
   "식초 1큰술",
   "참기름 1큰술",
   "깨 한큰술"
  ],
  "steps": [
   "마늘 10개를 잘게 다져주세요",
   "다진 마늘에 설탕 2큰술, 간장 0.5큰술, 맛소금 0.3큰술, 참기름 3큰술 넣고 양념장을 만들어주세요",
   "우둔살 250g에 양념 2큰술 넣고 섞어주세요",
   "밥 한 공기에 양념 한큰술 넣고 섞어주세요",
   "김 위에 밥 반공기 올리고 속을 단무지 또는 묵은지 무침으로 채우고 말아주세요",
   "김밥을 먹기좋게 자르고 그 위에 육회 올려주면 끝!"
  ],
  "tip": []
 },
 {
  "id": "appetizer-07",
  "cat": "appetizer",
  "title": "가리비치즈구이",
  "img": "img/c6199362d44f.webp",
  "ig": "https://www.instagram.com/reel/DBGlov0P48W/",
  "added": "",
  "serves": "",
  "ingredients": [
   "가리비 500g",
   "다진파프리카",
   "다진대파",
   "피자치즈 80g",
   "## 소스",
   "초고추장 3큰술",
   "케첩 1큰술",
   "다진마늘 1작은술"
  ],
  "steps": [
   "가리비를 흐르는물에 깨끗이 씻어주세요 (껍데기는 솔로 닦아주세요)",
   "가리비를 찜기에 넣고 10분간 쪄주세요",
   "한쪽 껍질을 떼고 살위 소스,파프리카, 대파, 피자치즈를 올려주세요",
   "오븐에 180도 10분간 구워주면 끝!"
  ],
  "tip": []
 },
 {
  "id": "appetizer-08",
  "cat": "appetizer",
  "title": "홈메이드 과콰몰리",
  "img": "img/dbc2755cd6c3.webp",
  "ig": "https://www.instagram.com/reel/C_xWQFUzMJj/",
  "added": "",
  "serves": "",
  "ingredients": [
   "아보카도 1개",
   "토마토 1개(방울토마토 7-10개)",
   "양파 작은거 반개",
   "마늘 1개",
   "소금 0.5작은술",
   "꿀 1큰술",
   "슬라이스 빵 3조각"
  ],
  "steps": [
   "아보카도 껍질을 벗겨 으깨주세요",
   "토마토와 양파를 찹썰어주세요",
   "마늘은 다져주세요",
   "아보카도와 토마토, 양파, 다진마늘, 소금 0.5작은술, 꿀 1큰술 넣고 섞어주세요",
   "잘 구운 슬라이스빵 위에 과콰몰리 올려주면 끝"
  ],
  "tip": []
 },
 {
  "id": "appetizer-09",
  "cat": "appetizer",
  "title": "판 콘 토마테",
  "img": "img/e690cd29ed6c.webp",
  "ig": "https://www.instagram.com/reel/C2MiyCEJpdO/",
  "added": "",
  "serves": "",
  "ingredients": [
   "토마토 1개",
   "올리브유 5큰술",
   "마늘 한쪽",
   "소금",
   "깜빠뉴 또는 바게트 인원수만큼의 조각"
  ],
  "steps": [
   "토마토를 강판에 갈아준다(반쪽으로 갈라 바로 사용도 가능)",
   "올리브유를 듬뿍 뿌려준다",
   "빵을 올리브유에 노릇노릇 구워준다",
   "빵 표면을 마늘로 문질러 향을 입혀준다",
   "그 위에 토마토를 올리고 소금을 살짝 뿌려준다"
  ],
  "tip": []
 },
 {
  "id": "appetizer-10",
  "cat": "appetizer",
  "title": "토마토타파스",
  "img": "img/e2ab6137d2fe.webp",
  "ig": "https://www.instagram.com/reel/CydODZJpf9E/",
  "added": "",
  "serves": "",
  "ingredients": [
   "방울토마토 300g",
   "다진바질 1큰술",
   "다진마늘(1개)",
   "소금 한꼬집",
   "올리브유 2큰술",
   "발사믹글레이즈 1큰술",
   "바케트(저는 파바 토종효모빵 사용했어요)"
  ],
  "steps": [
   "슬라이스한 빵에 올리브유 올려 오븐에 구워주어요",
   "방울토마토 8등분해 먹기좋게 잘라주어요",
   "자른 토마토에 다진바질 1큰술, 다진마늘(1개), 소금 한꼬집, 올리브유 2큰술, 발사믹글레이즈 1큰술넣어 섞어주어요 (바로 먹어도 좋지만, 반나절 절여주면 더 맛도리!)",
   "빵위에 토마토 올려주면 끄읏!"
  ],
  "tip": []
 },
 {
  "id": "appetizer-11",
  "cat": "appetizer",
  "title": "라이스연어롤",
  "img": "img/c0c46e07e50e.webp",
  "ig": "https://www.instagram.com/reel/CsQ_uHHJz0C/",
  "added": "",
  "serves": "",
  "ingredients": [
   "연어",
   "아보카도",
   "무순",
   "양배추",
   "라이스페이퍼",
   "## 소스",
   "마요네즈 1큰술",
   "스리라차 1큰술",
   "꿀 취향껏(저는 0.5😂)"
  ],
  "steps": [
   "불린 라이스페이퍼 준비!",
   "연어, 아보카도, 무순, 양배추 순으로 올려주고 돌돌 말아주세요!",
   "마요네즈 1큰술, 스리라차 1큰술, 꿀 취향껏 넣고 소스 만들어주면 끝!"
  ],
  "tip": []
 },
 {
  "id": "appetizer-12",
  "cat": "appetizer",
  "title": "그릭바질토마토 오픈샌드위치",
  "img": "img/dd304e29c48f.webp",
  "ig": "https://www.instagram.com/reel/DE4wr8wSdit/",
  "added": "",
  "serves": "",
  "ingredients": [
   "그릭요거트 50g",
   "방울토마토 7-8개",
   "깜파뉴 1조각",
   "꿀 1작은술",
   "바질페스트 1 작은술"
  ],
  "steps": [
   "깜빠뉴와 토마토를 오븐 180도에 5분정도 구워주세요",
   "그릭요거트, 꿀 1작은술, 바질페스토 1작은술 넣고 잘 섞어주세요",
   "구운 빵 위에 요거트, 토마토, 바질잎 순서대로 올려주면 끝!"
  ],
  "tip": []
 },
 {
  "id": "appetizer-13",
  "cat": "appetizer",
  "title": "브리애플샌드위치",
  "img": "img/c06946534ae5.webp",
  "ig": "https://www.instagram.com/reel/DAXz4o6JlzL/",
  "added": "",
  "serves": "",
  "ingredients": [
   "빵",
   "루꼴라",
   "브리치즈",
   "사과",
   "꿀"
  ],
  "steps": [
   "빵위에 루꼴라, 브리치즈, 사과, 꿀 순으로 쌓아주면 끝"
  ],
  "tip": []
 },
 {
  "id": "appetizer-14",
  "cat": "appetizer",
  "title": "메론카르파치오",
  "img": "img/reel-De_zfnBMK4U.webp",
  "ig": "https://www.instagram.com/reel/De_zfnBMK4U/",
  "added": "2026-10-28",
  "serves": "",
  "ingredients": [
   "메론 (달달한 과일 아무거나)",
   "프로슈토",
   "그릭요거트",
   "루콜라",
   "화이트 발사믹",
   "꿀",
   "올리브유(더 상콤하고 싶으면 레몬즙)",
   "후추",
   "## 취향",
   "견과류",
   "치즈"
  ],
  "steps": [
   "과일은 필러로 얇게 쓱쓱 깎아 접시에 골고루 펼쳐주세요",
   "짠맛 프로슈토 올리고 새콤한 그릭요거트 툭툭, 쌉싸름한 루콜라 듬성듬성 ✨",
   "드레싱은 화이트 발사믹 + 꿀 + 올리브유 이 세 가지만 기억하세요",
   "후추 갈갈 뿌리고 견과류나 치즈는 취향껏 올려주시면 끝 📝"
  ],
  "tip": [
   "메론으로 했지만 무화과, 배처럼 달달한 과일이면 다 돼요 💫",
   "그냥 먹어도 맛있고 빵이나 크래커에 올려 먹으면 진짜 맛있어요 😆"
  ]
 },
 {
  "id": "appetizer-15",
  "cat": "appetizer",
  "title": "나쵸 육회타르타르",
  "img": "img/ig-appetizer-15.webp",
  "ig": "https://www.instagram.com/reel/CddO6kRhzNX/",
  "added": "2022-05-12",
  "serves": "",
  "ingredients": [
   "나초",
   "파마산치즈",
   "홀그레인머스타드 조금",
   "## 육회양념",
   "우둔살 200g",
   "다진 오이피클 20g",
   "다진 양파 20g",
   "파슬리 조금",
   "디종 머스타드 2티스푼",
   "후추·소금 조금",
   "올리브오일 조금",
   "계란 노른자",
   "우스터소스 1티스푼"
  ],
  "steps": [
   "육회를 양념에 버무린다",
   "나초위에 육회를 올린다",
   "홀그레인머스타드를 올리고 치즈로 마무리"
  ],
  "tip": []
 },
 {
  "id": "appetizer-16",
  "cat": "appetizer",
  "title": "연어 오픈샌드위치",
  "img": "img/ig-appetizer-16.webp",
  "ig": "https://www.instagram.com/p/CmaxXYCBeB-/",
  "added": "2022-12-21",
  "serves": "",
  "ingredients": [
   "훈제연어",
   "크림치즈 한큰술",
   "메이플시럽(또는 꿀) 반큰술",
   "쪽파 3쪽",
   "식빵",
   "딜(생략가능)"
  ],
  "steps": [
   "크림치즈와 잘게자른 쪽파, 메이플시럽 반큰술을 섞어준다",
   "식혀둔 구운빵 위에 크림치즈를 올리고 연어를 올린다",
   "끝 부분은 잘라주고 삼등분해 딜로 데코해준다"
  ],
  "tip": []
 },
 {
  "id": "appetizer-17",
  "cat": "appetizer",
  "title": "모둠전꼬치",
  "img": "img/ig-appetizer-17.webp",
  "ig": "https://www.instagram.com/p/Cnwu0s-htdz/",
  "added": "2023-01-23",
  "serves": "",
  "ingredients": [
   "여러 가지 전",
   "꼬치",
   "대파",
   "## 소스",
   "설탕 3",
   "진간장 1",
   "케첩 2",
   "고추장 1",
   "물 100ml(2/3컵)"
  ],
  "steps": [
   "소스를 잘 섞어 점도가 생길 때까지 졸여줍니다",
   "꼬치에 여러 가지 전과 대파를 꽂아줍니다",
   "모둠전꼬치를 팬에 올려 데워줍니다",
   "전 위에 소스를 발라주고 깨로 마무리해줍니다"
  ],
  "tip": []
 },
 {
  "id": "appetizer-18",
  "cat": "appetizer",
  "title": "백종원 육회",
  "img": "img/ig-appetizer-18.webp",
  "ig": "https://www.instagram.com/p/CoW3cbkBOA2/",
  "added": "2023-02-07",
  "serves": "",
  "ingredients": [
   "육회용 고기 300g(우둔살)",
   "노른자 1",
   "배 1/8",
   "마늘 7개",
   "설탕 2",
   "간장 0.5",
   "맛소금 0.3",
   "참기름 3"
  ],
  "steps": [
   "마늘 7개를 다져줄께요",
   "다진마늘과 설탕 2, 간장 0.5, 맛소금 0.3, 참기름 3 섞어줍니다",
   "고기를 양념과 섞어줍니다",
   "고기를 동그랗게 올려주고 위에 노른자와 배로 마무리!"
  ],
  "tip": []
 },
 {
  "id": "appetizer-19",
  "cat": "appetizer",
  "title": "오꼬노미야끼",
  "img": "img/ig-appetizer-19.webp",
  "ig": "https://www.instagram.com/p/CojluydB8ut/",
  "added": "2023-02-12",
  "serves": "",
  "ingredients": [
   "양배추 1/8개",
   "베이컨 3줄",
   "가쓰오부시",
   "부침가루 3스푼",
   "물 반컵(100ml)",
   "계란 1개",
   "새우·오징어·돼지고기(기호에 맞게)",
   "마요네즈",
   "오꼬노미야끼소스(돈가쓰소스 대체가능)"
  ],
  "steps": [
   "양배추를 잘게 채썰어주시고, 베이컨도 썰어주세요 (새우, 오징어, 돼지고기를 준비하셨다면 베이컨 크기로 썰어주세요)",
   "부침가루 3, 물 반컵(100ml), 계란을 양배추와 베이컨과 함께 섞어주세요",
   "팬에 기름을 넉넉히 두르고 중불에 반죽을 부쳐주세요(뚜껑을 덮고 익혀줄께요)",
   "반죽이 다 익으면 접시에 옮겨 마요네즈, 오꼬노미야끼 소스를 발라주고 가쓰오부시를 올려주면 끝!"
  ],
  "tip": []
 },
 {
  "id": "appetizer-20",
  "cat": "appetizer",
  "title": "버터명란구이",
  "img": "img/ig-appetizer-20.webp",
  "ig": "https://www.instagram.com/p/Collb7KhM3F/",
  "added": "2023-02-13",
  "serves": "",
  "ingredients": [
   "오이 1개",
   "명란젓 2덩이",
   "버터 한조각",
   "마요네즈",
   "와사비"
  ],
  "steps": [
   "오이의 껍질을 벗긴 후 0.3mm 간격으로 잘라줍니다",
   "달군 팬에 버터 한조각을 녹여 명란젓을 구워줍니다(딱딱해질때까지 구워줄께요)",
   "얇게 잘라준 후 오이와 같이 담아줄께요",
   "마요네즈와 와사비를 소스로 곁들여주세요"
  ],
  "tip": []
 },
 {
  "id": "appetizer-21",
  "cat": "appetizer",
  "title": "바질그릭포테이토",
  "img": "img/ig-appetizer-21.webp",
  "ig": "https://www.instagram.com/p/Co7TYwMhQ0R/",
  "added": "2023-02-21",
  "serves": "",
  "ingredients": [
   "감자",
   "올리브오일",
   "## 소스",
   "바질페스토",
   "그릭요거트(무가당이면 꿀 한스푼)"
  ],
  "steps": [
   "감자를 한입 크기로 썰어 주세요",
   "전자레인지 5분 돌려 익힌 후, 올리브유 둘러 소금, 설탕 한꼬집 넣고 겉면이 노릇해지게 구워주세요(감자에 올리브유 묻혀 에프 또는 오븐에 구워도 되어요)",
   "그릭요거트 큰 세스푼에 바질페스토 작은 0.5스푼 추가해 섞어주세요",
   "바질그릭을 접시에 깔고 위에 감자 올려주면 끝!"
  ],
  "tip": []
 },
 {
  "id": "appetizer-22",
  "cat": "appetizer",
  "title": "아보살몬 라이스칩",
  "img": "img/ig-appetizer-22.webp",
  "ig": "https://www.instagram.com/p/CpASXMFBKfy/",
  "added": "2023-02-23",
  "serves": "",
  "ingredients": [
   "## 소스",
   "마요네즈 3",
   "와사비 작은 0.5",
   "꿀 1",
   "레몬즙 1",
   "아보카도",
   "연어",
   "라이스페이퍼"
  ],
  "steps": [
   "마요네즈 3, 와사비 작은 0.5, 꿀 1, 레몬즙 1을 섞어 소스를 만들어줍니다",
   "아보카도와 연어를 작게 썰어주어요",
   "잘라둔 아보카도와 연어에 소스를 넣고 섞어주어요",
   "라이스페이퍼를 1/6로 자른 후 기름에 튀겨주어요",
   "튀겨진 라이스칩에 아보카도&연어를 올려주면 끝!"
  ],
  "tip": [
   "라이스칩은 금방 눅눅해지니 먹기 직전에 튀기세요"
  ]
 },
 {
  "id": "appetizer-23",
  "cat": "appetizer",
  "title": "낙지쪽파말이",
  "img": "img/ig-appetizer-23.webp",
  "ig": "https://www.instagram.com/p/CpzvAZdhZ2J/",
  "added": "2023-03-15",
  "serves": "",
  "ingredients": [
   "낙지",
   "쪽파",
   "초장"
  ],
  "steps": [
   "낙지를 손질해주세요 머리를 갈라 내장을 분리, 눈을 잘라주고, 먹기좋은 크기로 자르기 밀가루를 넣고 문지르고, 물로 씻기",
   "깨끗이 씻은 쪽파를 소금 1작은술 넣은 끓는물에 1분 이내로 데친 후 찬물에 식혀주세요",
   "소금 1작은술 넣은 끓는 물에 낙지를 30초간 데친 후 찬물에 식혀주세요",
   "낙지에 쪽파를 돌돌말아주세요",
   "초장과 예쁘게 담아 내어주면 끝!"
  ],
  "tip": []
 },
 {
  "id": "appetizer-24",
  "cat": "appetizer",
  "title": "치즈룽지감자",
  "img": "img/ig-appetizer-24.webp",
  "ig": "https://www.instagram.com/p/CqSvuuRBvDC/",
  "added": "2023-03-27",
  "serves": "",
  "ingredients": [
   "감자",
   "파마산치즈",
   "케첩"
  ],
  "steps": [
   "감자를 슬라이스해주세요 (우리집 감자는 상태가 안좋아 껍질을 까주었어요)",
   "파마산치즈를 바닥에 깔고 식용유를 조금 둘러주어요",
   "치즈 위에 감자를 올려주고 그 위에 식용유를 살짝 올려주어요",
   "예열한 에어프라이어에 200도 15분동안 구워주면 끝!"
  ],
  "tip": []
 },
 {
  "id": "appetizer-25",
  "cat": "appetizer",
  "title": "크림치즈 양송이구이",
  "img": "img/ig-appetizer-25.webp",
  "ig": "https://www.instagram.com/reel/CqabK0KBIZG/",
  "added": "2023-03-30",
  "serves": "",
  "ingredients": [
   "양송이버섯",
   "크림치즈",
   "꿀",
   "루꼴라",
   "올리브유"
  ],
  "steps": [
   "크림치즈 한 큰술 듬뿍, 꿀 한 작은술을 넣고 섞어주세요",
   "꼭다리를 뗀 양송이 속에 크림치즈를 넣어주세요",
   "예열한 오븐 200도에 10분 동안 구워주세요",
   "접시에 옮겨 소금 한꼬집, 루꼴라 조금, 올리브유 후르륵 해주면 끝!"
  ],
  "tip": []
 },
 {
  "id": "appetizer-26",
  "cat": "appetizer",
  "title": "구운방토 샌드위치",
  "img": "img/ig-appetizer-26.webp",
  "ig": "https://www.instagram.com/reel/CqkrtJkBRqC/",
  "added": "2023-04-03",
  "serves": "",
  "ingredients": [
   "스테비아 방울토마토",
   "호밀빵",
   "## 소스",
   "그릭요거트 1",
   "크림치즈 1",
   "꿀 0.2",
   "레몬즙 0.2",
   "소금 한꼬집",
   "후추 한꼬집"
  ],
  "steps": [
   "방울토마토를 에어프라이어에 200도, 10분간 구워주어요",
   "그릭요거트 1, 크림치즈 1, 꿀 0.2, 레몬즙 0.2, 소금 한꼬집, 후추 한꼬집 넣고 소스를 만들어요",
   "구운 통밀빵에 소스를 발라주어요",
   "구운방울토마토를 올려주고 어린잎으로 데코해주면 끝!"
  ],
  "tip": []
 },
 {
  "id": "appetizer-27",
  "cat": "appetizer",
  "title": "쪽파베이컨 크림치즈",
  "img": "img/ig-appetizer-27.webp",
  "ig": "https://www.instagram.com/reel/CqwsvNJhhpZ/",
  "added": "2023-04-08",
  "serves": "",
  "ingredients": [
   "크림치즈 2큰술",
   "쪽파 한줌(대파가능)",
   "베이컨 한줄",
   "꿀 1작은술(메이플시럽 가능)"
  ],
  "steps": [
   "베이컨 한줄 잘게잘라 튀겨 크런치를 만들어주어요",
   "쪽파를 잘게 잘라주세요(대파 가능)",
   "크림치즈에 베이컨크런치, 쪽파, 꿀 1스푼 넣고 섞어주면 끝!"
  ],
  "tip": []
 },
 {
  "id": "appetizer-28",
  "cat": "appetizer",
  "title": "크림바지락",
  "img": "img/ig-appetizer-28.webp",
  "ig": "https://www.instagram.com/reel/CrNo8jphyQ1/",
  "added": "2023-04-19",
  "serves": "",
  "ingredients": [
   "바지락 한봉",
   "마늘 5개",
   "대파 반개",
   "화이트와인",
   "## 소스",
   "마요네즈 4큰술",
   "꿀 1 작은술",
   "소금 조금"
  ],
  "steps": [
   "바지락을 물, 소금과 스테인레스 숟가락 넣고 1시간 해감!",
   "파와 마늘을 썰어주어요",
   "해감 후 깨끗이 씻은 바지락과 파, 마늘, 화이트와인을 냄비에 넣고 10분간 끓여줘요(물은 바지락이 잠길 정도)",
   "마요네즈 4큰술에 바지락 국물을 적당히 넣고 농도를 맞춰주어요",
   "취향에 따라 꿀 1작은술, 소금 조금 넣고 소스를 만들어주어요",
   "접시에 담아둔 바지락에 소스를 부어주어요"
  ],
  "tip": []
 },
 {
  "id": "appetizer-29",
  "cat": "appetizer",
  "title": "호박새우전",
  "img": "img/ig-appetizer-29.webp",
  "ig": "https://www.instagram.com/reel/CtyuUAWpUvd/",
  "added": "2023-06-22",
  "serves": "",
  "ingredients": [
   "애호박 2개(원조는 조선호박!)",
   "건새우 4스푼",
   "부침가루 2스푼",
   "튀김가루 2스푼",
   "## 소스",
   "조각양파 반개",
   "홍고추 반개",
   "간장 3스푼",
   "식초 1스푼",
   "설탕 1스푼",
   "다진마늘 1개",
   "물 1스푼"
  ],
  "steps": [
   "애호박 2개를 채칼로 껍질을 썰어주어요",
   "채썰은 호박에 소금넣고 섞어 20분 절여줘요",
   "호박을 꽉 짜 물기를 제거해요",
   "건새우를 분쇄해주어요",
   "호박에 건새우가루 4스푼, 부침가루 2스푼, 튀김가루 2스푼 넣고 섞어줘요",
   "팬에 기름을 넉넉히 붓고 부쳐주어요",
   "조각양파 반개, 홍고추 반개, 간장 3스푼, 식초 1스푼, 설탕 1스푼, 다진마늘 1개, 물 1스푼 섞어 만든 소스 찍어먹으면 대대 존맛!!"
  ],
  "tip": []
 },
 {
  "id": "appetizer-30",
  "cat": "appetizer",
  "title": "루꼴라 잠봉뵈르 샌드위치",
  "img": "img/ig-appetizer-30.webp",
  "ig": "https://www.instagram.com/p/DByRtGNTzvK/",
  "added": "2024-10-31",
  "serves": "",
  "ingredients": [
   "바게트 반개",
   "잠봉 3-4조각",
   "버터 취향껏",
   "홀그레인머스타드 1큰술",
   "루꼴라 한줌"
  ],
  "steps": [
   "바게트 반 잘라 밑에 홀그레인머스터드를 발라주세요",
   "루꼴라, 잠봉, 버터 넣어 빵으로 덮어주면 끝!"
  ],
  "tip": []
 },
 {
  "id": "appetizer-31",
  "cat": "appetizer",
  "title": "명란 오이탕탕이",
  "img": "img/ig-appetizer-31.webp",
  "ig": "https://www.instagram.com/reel/Dd3mkVxNEnx/",
  "added": "2026-09-29",
  "serves": "",
  "ingredients": [
   "오이 2개",
   "명란 2-3덩이",
   "버터 10g",
   "## 오이소스",
   "진간장 1큰술",
   "식초 2큰술",
   "설탕 1큰술",
   "다진마늘 1작은술",
   "참깨 1큰술",
   "소금 한꼬집",
   "미원 정말 쪼금"
  ],
  "steps": [
   "오이를 비닐에 넣고 탕탕 두들겨 주세요",
   "오이 볼에 먹기좋은 사이즈로 잘라주세요",
   "오이소스 넣고 버무려주세요",
   "팬에 버터넣고 구운 명란 잘라 올려주세요"
  ],
  "tip": []
 },
 {
  "id": "appetizer-32",
  "cat": "appetizer",
  "title": "안키모 김밥",
  "img": "img/ig-appetizer-32.webp",
  "ig": "https://www.instagram.com/reel/Dd3mkVxNEnx/",
  "added": "2026-09-29",
  "serves": "",
  "ingredients": [
   "안키모",
   "김(또는 감태)",
   "밥",
   "맛술 3큰술",
   "버터 10g",
   "간장 1큰술",
   "다진쪽파",
   "## 단촛물",
   "식초 2큰술",
   "설탕 1작은술",
   "소금 한꼬집"
  ],
  "steps": [
   "안키모를 팬에 넣고 으깨주고 맛술 3큰술 넣고 볶아주세요",
   "추가로 버터 10g, 간장 1큰술 넣고 수분이 없을때까지 볶아주세요",
   "단촛물로 간을 한 밥 김에 말아 먹기좋게 잘라주세요",
   "김밥 위로 볶은 안키모, 다진쪽파 올려주면 끝"
  ],
  "tip": []
 },
 {
  "id": "salad-01",
  "cat": "salad",
  "title": "루꼴라부라타트리",
  "img": "img/ccb796d49c5c.webp",
  "ig": "https://www.instagram.com/reel/DR1vhwTE73y/",
  "added": "",
  "serves": "",
  "ingredients": [
   "루꼴라",
   "부라타치즈",
   "원하는 토핑(딸기, 샤인버스켓, 오랜지, 사과 등)",
   "드레싱(발사믹+올리브유)"
  ],
  "steps": [
   "부라타 주위로 원하는 샐러드 토핑,",
   "중앙에 꼬치세워 루꼴라 잎 하나하나 끼워주세요",
   "별모양 사과, 치즈로 눈꽃 만들어주면 완성이고",
   "드레싱은 기호에 따라 발사믹, 올리브유 함께 먹어주면 꿀맛"
  ],
  "tip": []
 },
 {
  "id": "salad-02",
  "cat": "salad",
  "title": "루꼴라트리",
  "img": "img/ef76b2b16422.webp",
  "ig": "https://www.instagram.com/reel/DR1vhwTE73y/",
  "added": "",
  "serves": "",
  "ingredients": [
   "루꼴라",
   "원하는 토핑(딸기, 샤인버스켓, 오랜지, 사과 등)",
   "드레싱(발사믹+올리브유)"
  ],
  "steps": [
   "큰 접시에 루꼴라로 삼각형 트리모양을 잡아주세요",
   "사과로 나무몸통과 별모양 만들어 장식",
   "과일 잘게잘라 가지런히 오너먼트처럼 꾸며주고",
   "치즈로 눈꽃만들어주면 완성"
  ],
  "tip": []
 },
 {
  "id": "salad-03",
  "cat": "salad",
  "title": "눈사람부라타샐러드",
  "img": "img/ce5b7a89740f.webp",
  "ig": "https://www.instagram.com/reel/DR1vhwTE73y/",
  "added": "",
  "serves": "",
  "ingredients": [
   "부라타치즈 2개",
   "좋아하는 토핑(딸기, 샤인버스켓, 오랜지, 사과 등)",
   "발사믹글레이즈"
  ],
  "steps": [
   "좋아하는 토핑을 접시위에 올려주세요",
   "가운데 부라타치즈 두개 올려주세요",
   "사과로 목도리 만들어주세요",
   "발사믹글레이즈로 눈, 잎, 단추만들어주면 끝"
  ],
  "tip": []
 },
 {
  "id": "salad-04",
  "cat": "salad",
  "title": "리스샐러드",
  "img": "img/ce7a59154c75.webp",
  "ig": "https://www.instagram.com/reel/DR1vhwTE73y/",
  "added": "",
  "serves": "",
  "ingredients": [
   "샐러드채소",
   "좋아하는 토핑(딸기, 샤인버스켓, 오랜지, 사과 등)",
   "드레싱(발사믹+올리브유)"
  ],
  "steps": [
   "접시 위에 작은 볼 거꾸로 올려 주위에 샐러드채소 올려주세요",
   "좋아하는 토핑 올려주세요",
   "작은볼 빼주고 소스 뿌려주면 끝"
  ],
  "tip": []
 },
 {
  "id": "salad-05",
  "cat": "salad",
  "title": "밥솥양송이스프",
  "img": "img/e26bd88b9beb.webp",
  "ig": "https://www.instagram.com/reel/DSFZPhkE5Y1/",
  "added": "",
  "serves": "",
  "ingredients": [
   "양송이 8개",
   "양파 1/2개",
   "생크림 200ml",
   "우유 300ml",
   "버터 15g",
   "치킨스톡 2큰술",
   "전분가루 3큰술"
  ],
  "steps": [
   "양송이와 양파 잘게다져 밥솥에 넣어주세요",
   "크림과, 우유, 버터, 전분가루, 치킨스톡 넣고 백미취사 누르면 끝!"
  ],
  "tip": []
 },
 {
  "id": "salad-06",
  "cat": "salad",
  "title": "카프리제 리스샐러드",
  "img": "img/db44c515ce04.webp",
  "ig": "https://www.instagram.com/reel/DSFZPhkE5Y1/",
  "added": "",
  "serves": "",
  "ingredients": [
   "어린잎샐러드",
   "방울토마토",
   "보코치니치즈",
   "바질",
   "발사믹글레이즈",
   "올리브유"
  ],
  "steps": [
   "작은 볼 뒤집어 올려 어린잎샐러드 둘러주세요",
   "위로 방울토마토, 보코치니치즈, 바질잎둘러주세요",
   "발사믹글레이즈, 올리브유 뿌리면 끝"
  ],
  "tip": []
 },
 {
  "id": "salad-07",
  "cat": "salad",
  "title": "참외샐러드",
  "img": "img/c9841e31dd84.webp",
  "ig": "https://www.instagram.com/reel/Cq7px9UBAeT/",
  "added": "",
  "serves": "",
  "ingredients": [
   "참외 1개",
   "방울토마토",
   "설탕 1큰술",
   "올리브유 3큰술",
   "식초 1큰술",
   "소금 한꼬집",
   "후추 한꼬집"
  ],
  "steps": [
   "깨끗이 씻은 참외의 껍질을 중간중간 깎아주어요",
   "반으로 갈라 씨를 빼줍니다",
   "참외를 얇게 슬라이스해주고, 방울토마토도 잘라줄께요",
   "빼준 씨를 채에 걸러 설탕 1큰술, 올리브유 3큰술, 식초1큰술, 소금 한꼬집, 후추 한꼬집 넣어 소스를 만들어줄께요",
   "예쁘게 데코해주고 소스를 올려주면 끝!"
  ],
  "tip": []
 },
 {
  "id": "salad-08",
  "cat": "salad",
  "title": "삼색샐러드",
  "img": "img/d39eecee0a7c.webp",
  "ig": "https://www.instagram.com/reel/DCbtrl2SIrR/",
  "added": "",
  "serves": "",
  "ingredients": [
   "자몽",
   "오렌지",
   "아보카도",
   "루꼴라",
   "화이트발사믹",
   "올리브유"
  ],
  "steps": [
   "자몽, 오랜지, 아보카도의 껍질을 벗겨 잘라주세요",
   "루꼴라를 그릇에 깔로 자몽-오랜지-아보카도 순으로 올려주세요",
   "화이트발사믹과 올리브유 뿌려주면 끝!"
  ],
  "tip": []
 },
 {
  "id": "salad-09",
  "cat": "salad",
  "title": "감자뽈포샐러드",
  "img": "img/f3d6fe0eebdc.webp",
  "ig": "https://www.instagram.com/reel/Cr2wTnNumqC/",
  "added": "",
  "serves": "",
  "ingredients": [
   "자숙문어 다리 1~2개",
   "감자 3개",
   "방울토마토 5-7알",
   "올리브 8알",
   "## 소스",
   "올리브유 4큰술",
   "레몬즙 2큰술",
   "디종머스타드 0.5큰술(홀그레인대체가능)",
   "꿀 1큰술",
   "소금 0.5작은술"
  ],
  "steps": [
   "방울토마토를 한 입 크기로 잘라주어요",
   "문어도 한입크기로 자를께요",
   "올리브를 반으로 잘라주어요",
   "감자를 한입크기로 자른 후 전자렌지에서 3분간 익혀요",
   "팬에 올리브유를 둘러 감자 겉면을 구워주어요",
   "소스 재료를 넣고 소스를 만들어주어요",
   "모든 재료를 볼에 넣고 소스를 넣고 섞어주면 끝!"
  ],
  "tip": []
 },
 {
  "id": "salad-10",
  "cat": "salad",
  "title": "바지락술찜",
  "img": "img/e7076744d556.webp",
  "ig": "https://www.instagram.com/reel/C2PHlNdpqvK/",
  "added": "",
  "serves": "",
  "ingredients": [
   "바지락 400g",
   "마늘 5쪽",
   "홍고추 1개",
   "청고추 1개",
   "올리브유 반컵",
   "화이트와인 또는 소주"
  ],
  "steps": [
   "바지락을 소금물에 한 시간 이상 해감해주세요",
   "홍고추, 청고추, 파 반쪽, 마늘 5쪽 썰어주세요",
   "냄비에 바지락, 야채, 올리브유 반컵, 화이트와인 반컵 넣어 입이벌어질때까지 끓여주면 끝!"
  ],
  "tip": []
 },
 {
  "id": "salad-11",
  "cat": "salad",
  "title": "참깨감자샐러드",
  "img": "img/c9a04ace21bc.webp",
  "ig": "https://www.instagram.com/reel/DGks6Cjyq7C/",
  "added": "",
  "serves": "",
  "ingredients": [
   "브로콜리 한개",
   "감자 2개",
   "삶은계란 4개",
   "## 소스",
   "볶은참깨 6큰술",
   "마요네즈 4큰술",
   "간장 2큰술",
   "알룰로스 2큰술",
   "참기름 1큰술"
  ],
  "steps": [
   "감자와 브로콜리를 먹기좋게 잘라 삶아주세요 (전자렌지 감자 5분, 브로콜리 2분)",
   "삶은계란을 1/4등분해주세요",
   "모든재료와 소스를 섞어주면 끝-!"
  ],
  "tip": []
 },
 {
  "id": "salad-12",
  "cat": "salad",
  "title": "알배추스테이크",
  "img": "img/d1c4dc5b09ba.webp",
  "ig": "https://www.instagram.com/reel/DCWmQUVSTmj/",
  "added": "",
  "serves": "",
  "ingredients": [
   "알배추 반통",
   "올리브유",
   "베이컨 한줄",
   "시저드레싱",
   "파마산치즈"
  ],
  "steps": [
   "알배추 1/4토막 내 올리브유를 발라주세요",
   "알배추와 베이컨을 예열된 오븐에서 200도 10분간 구워주세요",
   "조리가 끝나면 오븐안에 두고 5분간 뜸들여주세요",
   "알배추 위에 시저드레싱 발라주고 베이컨 잘게 잘라주고 파마산 치즈 뿌려주면 끝!"
  ],
  "tip": []
 },
 {
  "id": "salad-13",
  "cat": "salad",
  "title": "토마토마리네이드",
  "img": "img/c44caf9d4c71.webp",
  "ig": "https://www.instagram.com/reel/C8ogTCNOpFW/",
  "added": "",
  "serves": "",
  "ingredients": [
   "방울토마토 500g",
   "바질 한줌",
   "양파 1/4개",
   "올리브유 5큰술",
   "발사믹식초 3큰술",
   "레몬즙 3큰술",
   "꿀 4큰술",
   "화이트와인 큰술(생략가능)"
  ],
  "steps": [
   "토마토 끝을 십자모양으로 홈을 내준다",
   "토마토를 끓는 물에 2-30초간 데쳐준다",
   "찬물에 토마토를 건져 껍질을 제거해준다",
   "양파와 바질을 잘게 다져 토마토에 넣어준다",
   "올리브유 5큰술, 발사믹식초 3큰술, 레몬즙 3큰술, 꿀 4큰술, 화이트와인 큰술(생략가능) 넣고 섞어주면 끝"
  ],
  "tip": []
 },
 {
  "id": "salad-14",
  "cat": "salad",
  "title": "봄동 겉절이",
  "img": "img/f1a9a7c99d04.webp",
  "ig": "https://www.instagram.com/reel/C3ixtP4PH9X/",
  "added": "",
  "serves": "",
  "ingredients": [
   "봄동 4통",
   "## 양념",
   "고춧가루 4큰술",
   "설탕 1큰술",
   "올리고당 2큰술",
   "다진마늘 1큰술",
   "액젓 4큰술",
   "통깨 2큰술",
   "참기름 2큰술"
  ],
  "steps": [
   "봄동 밑동을 잡고 잘라주어요(큰 잎은 먹기좋게 잘라주세요)",
   "양념재료를 모두 넣고 섞어 양념장을 만들어요",
   "깨끗이 씻은 봄동에 양념을 넣고 무쳐주면 끝!"
  ],
  "tip": []
 },
 {
  "id": "salad-15",
  "cat": "salad",
  "title": "겉절이",
  "img": "img/cf923656dc3c.webp",
  "ig": "https://www.instagram.com/reel/CvXKgDDJxtO/",
  "added": "",
  "serves": "",
  "ingredients": [
   "알배추 1통",
   "대파 1개",
   "소금",
   "설탕",
   "깨",
   "## 양념",
   "고춧가루 5스푼",
   "멸치액젓 4스푼",
   "설탕 3스푼",
   "다진마늘 2스푼"
  ],
  "steps": [
   "알배추 한통을 먹기좋게 잘라주세요",
   "소금 2스푼, 설탕 1스푼을 자른배추에 넣고 섞어주세요",
   "30분 재워둔 후 흐르는 물에 씻어 물기를 빼주세요",
   "고춧가루 5스푼, 멸치액젓 4스푼, 설탕 3스푼, 다진마늘 2스푼 넣고 양념을 만들어요",
   "배추에 양념과 대파를 넣고 버물여주세요",
   "마무리로 깨 가득 넣고 섞어주면 끄읏!!"
  ],
  "tip": []
 },
 {
  "id": "salad-16",
  "cat": "salad",
  "title": "루꼴라 또띠아 피자",
  "img": "img/f4b9adc44686.webp",
  "ig": "https://www.instagram.com/reel/DKUUw_dzmCn/",
  "added": "",
  "serves": "",
  "ingredients": [
   "또띠아",
   "토마토파스타소스",
   "치즈",
   "좋아하는 토핑(버섯, 베이컨, 토마토, 올리브 등)",
   "루꼴라",
   "발사믹글레이즈"
  ],
  "steps": [
   "또띠아 위에 토마토파스타소스를 펴발라줘요",
   "토핑과 치즈를 올려 오븐 180도에 5-7분 구워요",
   "구운 피자 위에 루꼴라를 듬뿍올려줘요",
   "그 위에 발사믹 글레이즈를 뿌려주면 끝"
  ],
  "tip": []
 },
 {
  "id": "salad-17",
  "cat": "salad",
  "title": "연어 쭈꾸미 포케",
  "img": "img/ig-salad-17.webp",
  "ig": "https://www.instagram.com/reel/Ccudg-aBh1j/",
  "added": "2022-04-24",
  "serves": "",
  "ingredients": [
   "양상추·양배추·그린믹스 등 샐러드채소",
   "메인토핑(연어, 쭈꾸미, 새우 등 원하는 것)",
   "옥수수콘",
   "날치알",
   "크리스피어니언",
   "맛살",
   "방울토마토",
   "현미밥",
   "## 소스",
   "마요네즈 1",
   "스리라차소스 1",
   "설탕 1/2"
  ],
  "steps": [
   "모든 재료는 한입에 먹기 좋은 정도로 잘라주세요",
   "바닥에 양상추를 깔고",
   "모든 재료를 그 위에 올려주세요",
   "소스를 비율에 맞게 만들어 뿌려주면 끝!"
  ],
  "tip": [
   "빠지면 안 되는 재료는 소스, 크리스피어니언, 현미밥이에요",
   "크리스피어니언이 없으면 양파를 얇게 썰어 튀겨주세요",
   "현미밥 대신 쌀밥도 괜찮아요"
  ]
 },
 {
  "id": "salad-18",
  "cat": "salad",
  "title": "단호박 고구마 스프",
  "img": "img/ig-salad-18.webp",
  "ig": "https://www.instagram.com/p/CmDoo4_yADA/",
  "added": "2022-12-12",
  "serves": "",
  "ingredients": [
   "단호박 큰 것 1개",
   "고구마 작은 것 3개",
   "양파 1/2개",
   "버터",
   "우유 300ml",
   "생크림 200ml"
  ],
  "steps": [
   "단호박과 고구마를 잘라주세요",
   "슬라이스한 양파 1/2개를 버터에 볶아 카라멜라이징 해줘요",
   "양파를 볶은 냄비에 단호박, 고구마를 넣어주세요",
   "우유 300ml와 생크림 200ml를 넣고 끓여주세요",
   "믹서기나 핸드블렌더로 갈아주면 끝!"
  ],
  "tip": []
 },
 {
  "id": "salad-19",
  "cat": "salad",
  "title": "베이컨 알배추구이",
  "img": "img/ig-salad-19.webp",
  "ig": "https://www.instagram.com/p/Cngt0urB02s/",
  "added": "2023-01-17",
  "serves": "",
  "ingredients": [
   "알배추 반개",
   "베이컨 3줄",
   "다진파",
   "## 양념",
   "국간장 1",
   "물 1",
   "참기름 1",
   "설탕 1",
   "깨 1",
   "다진마늘 0.5",
   "다진 파 0.5"
  ],
  "steps": [
   "양념재료를 모두 넣고 섞어주세요",
   "베이컨 3줄을 잘게잘라 올리브유에 볶아 기름을 빼줍니다.",
   "물기를 제거한 알배추 반개를 베이컨을 구운 기름에 뒤집어가며 구워 줍니다.(뚜껑덮고 15분 정도)",
   "구운 배추위에 구운 베이컨과 다진 파, 양념을 올려주면 끝!"
  ],
  "tip": []
 },
 {
  "id": "salad-20",
  "cat": "salad",
  "title": "봄동 시저샐러드",
  "img": "img/ig-salad-20.webp",
  "ig": "https://www.instagram.com/reel/CpkUtY_h0Gu/",
  "added": "2023-03-09",
  "serves": "",
  "ingredients": [
   "봄동 반포기",
   "베이컨 한줄",
   "견과류 한줌",
   "## 소스",
   "마요네즈 4큰술",
   "올리브오일 1큰술",
   "파마산치즈 1큰술",
   "디종머스타드 1작은술",
   "다진마늘 1작은술",
   "레몬즙 1큰술(시판 시저소스 사셔도 되어요!)"
  ],
  "steps": [
   "깨끗이 씻은 봄동을 먹기좋게 잘라 소복히 담아줄께요",
   "베이컨을 잘게잘라준 후, 기름둘러 바짝 튀겨줄께요",
   "마요네즈 4큰술, 올리브오일 1큰술, 파마산치즈 1큰술, 디종머스타드 1작은술, 다진마늘 1작은술, 레몬즙 1큰술을 넣고 소스를 만들어주어요 (시판 시저소스를 사용하셔도 무방합니다)",
   "봄동에 베이컨, 견과류, 시저소스를 올려주면 끝!"
  ],
  "tip": []
 },
 {
  "id": "salad-21",
  "cat": "salad",
  "title": "우삼겹 참나물샐러드",
  "img": "img/ig-salad-21.webp",
  "ig": "https://www.instagram.com/reel/Cq2dbGJBBQP/",
  "added": "2023-04-10",
  "serves": "",
  "ingredients": [
   "우삼겹(양껏)",
   "참나물",
   "오리엔탈드레싱 5큰술"
  ],
  "steps": [
   "참나물의 줄기를 자른 후, 잎사귀를 3cm 간격으로 잘라주어요",
   "자른 참나물에 오리엔탈드레싱 5큰술을 넣고 섞어주어요",
   "우삼겹을 구워주어요 (차돌, 스테이크, 항정 어떤 고기든 다 맛있어요)",
   "참나물을 접시에 올려준 후, 우삼겹도 올려주면 끝!"
  ],
  "tip": []
 },
 {
  "id": "salad-22",
  "cat": "salad",
  "title": "초당옥수수 스프",
  "img": "img/ig-salad-22.webp",
  "ig": "https://www.instagram.com/reel/Cuft8oYLkLu/",
  "added": "2023-07-10",
  "serves": "",
  "ingredients": [
   "초당옥수수 2개",
   "감자 1개",
   "양파 1/2개",
   "생크림 200ml",
   "버터 20g",
   "치킨스톡 1작은술",
   "설탕 취향껏"
  ],
  "steps": [
   "초당옥수수의 알맹이를 잘라주어요",
   "감자와 양파를 잘게 썰어주어요",
   "달군 냄비에 양파와 버터를 넣고 갈변할때까지 볶아주어요",
   "양파에 옥수수, 감자를 넣고 볶아주어요(1-2분)",
   "옥수수가 잠기게 물을 넣고, 치킨스톡 1작은술 넣고 익을때까지 끓여줘요(5분정도)",
   "생크림을 넣고 5분정도 끓여주면 끝!(기호에 따라 설탕으로 맛조절!)"
  ],
  "tip": []
 },
 {
  "id": "salad-23",
  "cat": "salad",
  "title": "단감 카프레제",
  "img": "img/ig-salad-23.webp",
  "ig": "https://www.instagram.com/reel/Cz3GzR0uKgq/",
  "added": "2023-11-20",
  "serves": "",
  "ingredients": [
   "단감 2개",
   "생모짜렐라 1개",
   "바질잎 조금",
   "올리브유",
   "발사믹그레이즈",
   "소금"
  ],
  "steps": [
   "단감과 모짜렐라치즈를 얇게 슬라이스 해주어요",
   "서로 포개어 접시에 올려주어요",
   "생바질 잘라 올려주어요",
   "소금 약간, 올리브유 듬뿍, 발사믹글레이즈 올려주면 끝!"
  ],
  "tip": []
 },
 {
  "id": "salad-24",
  "cat": "salad",
  "title": "무쌈",
  "img": "img/ig-salad-24.webp",
  "ig": "https://www.instagram.com/p/C0osp9Vpfa0/",
  "added": "2023-12-09",
  "serves": "",
  "ingredients": [
   "무 1개",
   "설탕 200ml",
   "식초 200ml",
   "물 400ml",
   "소금 1큰술",
   "와사비 1작은술"
  ],
  "steps": [
   "무를 얇게 잘라주어요",
   "설탕 식초 물을 1:1:2, 소금 1스푼 넣고 끓여주세요, 끓고나면 연와사비 1큰술 섞어주세요",
   "열탕소독한 용기에 슬라이스한 무를 넣고 끓인 식촛물을 뜨거운 상태로 부어주세요",
   "하루이틀 지나고 먹으면 되어용!"
  ],
  "tip": []
 },
 {
  "id": "salad-25",
  "cat": "salad",
  "title": "닭가슴살 냉채샐러드",
  "img": "img/ig-salad-25.webp",
  "ig": "https://www.instagram.com/p/DYcDKXjFNt3/",
  "added": "2026-05-17",
  "serves": "",
  "ingredients": [
   "닭가슴살 한팩",
   "샐러드 200g",
   "참깨 or 오리엔탈 드레싱",
   "연겨자 1작은술(취향에 맞게 조절)"
  ],
  "steps": [
   "닭가슴살 잘게 찢어주세요",
   "큰통에 닭가슴살과 샐러드야채, 소스 넣고 섞어주면 끝"
  ],
  "tip": [
   "드레싱이 없다면? 볶은참깨 6큰술, 마요네즈 4큰술, 간장 2큰술, 알룰로스 2큰술, 참기름 1큰술"
  ]
 },
 {
  "id": "main-01",
  "cat": "main",
  "title": "보일링씨푸드",
  "img": "img/e67426f37f9e.webp",
  "ig": "https://www.instagram.com/reel/DDZb79vy2Gx/",
  "added": "",
  "serves": "",
  "ingredients": [
   "가리비 1kg",
   "새우 1kg",
   "문어 1kg 등 좋아하는 해물",
   "감자 2개",
   "옥수수 1개",
   "아스파라거스 6-7개 등",
   "## 소스",
   "버터 200g",
   "올드베이시즈닝 4큰술",
   "파프리카시즈닝 2큰술",
   "케이엠페퍼 분말 2큰술",
   "양파 반개",
   "다진마늘 4큰술"
  ],
  "steps": [
   "해물과 야채를 손질해 끓여 익혀주세요",
   "버터 200g을 팬에 녹여 양파 반개, 다진마늘 4큰술 넣고 익혀주세요",
   "버터에 올드베이시즈닝 4큰술, 파프리카시즈닝 2큰술, 케이엠페퍼 분말 2큰술넣고 약불에 살짝 볶아주세요",
   "익은 해물에 소스를 넣고 섞어주면 끝"
  ],
  "tip": []
 },
 {
  "id": "main-02",
  "cat": "main",
  "title": "연어파피요트",
  "img": "img/f1edfe7ec091.webp",
  "ig": "https://www.instagram.com/reel/DSFZPhkE5Y1/",
  "added": "",
  "serves": "",
  "ingredients": [
   "좋아하는 야채(양파, 감자, 아스파라거스, 방울토마토 등)",
   "해산물(연어, 새우, 가리비, 문어 등)",
   "레몬"
  ],
  "steps": [
   "종이호일 위에 좋아하는 채소, 좋아하는 해산물 넣어주세요",
   "연어 위로 소금간 팍팍, 상큼하라고 레몬 슬라이스 올려주고, 올리브유 뿌려주세요",
   "끝에 접어 보트모양 잡아주고 위에 종이 씌워 덮어주고",
   "예열된 오븐에 180도 25분간 구워주면 끝"
  ],
  "tip": []
 },
 {
  "id": "main-03",
  "cat": "main",
  "title": "찹스테이크",
  "img": "img/d486bcd1506a.webp",
  "ig": "https://www.instagram.com/reel/DSFZPhkE5Y1/",
  "added": "",
  "serves": "",
  "ingredients": [
   "부채살 300g",
   "적파프리카 1개",
   "아스파라거스 3개",
   "양파 반개",
   "## 소스",
   "스테이크소스 4큰술",
   "케첩 2큰술",
   "홀그레인머스타드 0.5큰술",
   "올리고당 1큰술",
   "간장 1큰술",
   "발사믹식초 1큰술"
  ],
  "steps": [
   "부채살 앞뒤로 살짝만 구워주다",
   "야채넣고 함께 볶아줘요",
   "소스넣고 볶아주면 끝"
  ],
  "tip": []
 },
 {
  "id": "main-04",
  "cat": "main",
  "title": "무수분샤브샤브",
  "img": "img/d3ad52cad8a1.webp",
  "ig": "https://www.instagram.com/reel/DXJsI2zmVJY/",
  "added": "",
  "serves": "",
  "ingredients": [
   "좋아하는 야채(숙주, 알배추, 청경채, 버섯)",
   "고기 or 해산물 or 버섯",
   "참치액 1큰술",
   "맛술 1큰술(생략가능)",
   "## 들기름소스",
   "마늘 1큰술",
   "들기름2큰술",
   "간장 2큰술",
   "알룰로스 1큰술"
  ],
  "steps": [
   "채소와 고기&해산물을 먹기좋게 잘라 쌓아 올려주세요",
   "참치액 1큰술&맛술 1큰술 크게 둘러주세요(생략가능)",
   "뚜껑 닫고 중불에 10분정도 고기와 해산물이 익을때까지 끓여줍니다",
   "다먹고 남은 채수에, 밥+계란+다진야채+참기름 둘러 끓여 죽으로 마무리!"
  ],
  "tip": []
 },
 {
  "id": "main-05",
  "cat": "main",
  "title": "순살갈비찜",
  "img": "img/c62d9b1f40ec.webp",
  "ig": "https://www.instagram.com/reel/DPTyX-vEwaS/",
  "added": "",
  "serves": "",
  "ingredients": [
   "갈비살 500g",
   "당근 1/4",
   "무 1/5",
   "대파 1/2단",
   "표고버섯 2개",
   "## 양념",
   "물 500ml",
   "간장 6큰술",
   "굴소스 1.5큰술",
   "설탕 3큰술",
   "맛술 4큰술",
   "다진마늘 1.5큰술",
   "후추 취향껏"
  ],
  "steps": [
   "갈비살의 근막과 지방을 제거해 먹기좋은 크기로 잘라주세요 (잘라둔 근막은 모아 얼려두었다가 된장찌개 할 때 넣어보세요!)",
   "당근, 무, 버섯, 밤 등 좋아하는 야채도 잘라 준비해주세요",
   "큰 솥에 양념 넣고 끓여주세요",
   "양념에 고기 넣고 뚜껑열고 중불로 20분 끓여주세요",
   "야채도 추가해 20분 끓여주세요",
   "기호에 맞게 참기름, 깨 넣고 끓여주면 완성!"
  ],
  "tip": []
 },
 {
  "id": "main-06",
  "cat": "main",
  "title": "냄비바베큐",
  "img": "img/e62fb7832a5d.webp",
  "ig": "https://www.instagram.com/reel/CtGsUP9pv8Q/",
  "added": "",
  "serves": "",
  "ingredients": [
   "통삼겹 500g",
   "마늘 반그릇",
   "소금",
   "식용유 반컵",
   "## 소스",
   "익힌 마늘",
   "꿀1스푼",
   "깨 1스푼"
  ],
  "steps": [
   "통삼겹 500g에 칼집을 내고 소금간해줘요",
   "식용유 반컵 넣고 잔잔물결 생기면 삼겹살 투하",
   "중불에 뚜껑을 닫고 익혀주어요",
   "2-3분씩 돌려가면서 네면을 노릇노릇하게 익혀주어요",
   "네면이 잘 익었으면 마늘 한바가지 투하",
   "노릇노릇해질때까지 익혀줘요(뒤적뒤적)",
   "전체 조리시간은 20분 이상 25분 이하!",
   "익은 마늘을 꿀 1스푼, 깨 한스푼 넣고 으깨주면 소스도 완성!"
  ],
  "tip": []
 },
 {
  "id": "main-07",
  "cat": "main",
  "title": "양갈비구이",
  "img": "img/cf200881d2e4.webp",
  "ig": "https://www.instagram.com/reel/DEmOvsOyMHk/",
  "added": "",
  "serves": "",
  "ingredients": [
   "통양갈비(코스트코)",
   "몬트리얼 스테이크시즈닝",
   "가니쉬(꽈리고추, 마늘)",
   "고추냉이",
   "홀그레인머스타드"
  ],
  "steps": [
   "양갈비의 핏물을 꼼꼼히 제거해주세요",
   "양갈비 표면의 지방과 근막을 제거해주세요",
   "시즈닝가루를 넉넉히 뿌려주세요",
   "기름두른 팬에 양갈비 겉면을 갈색이 되게 구워주세요",
   "200도로 예열한 오븐에 20분동안 구워주면 끝!"
  ],
  "tip": []
 },
 {
  "id": "main-08",
  "cat": "main",
  "title": "등갈비구이",
  "img": "img/ed9fee511131.webp",
  "ig": "https://www.instagram.com/reel/C65yCf2PC2q/",
  "added": "",
  "serves": "",
  "ingredients": [
   "등갈비 1kg",
   "된장 1큰술",
   "## 양념",
   "진간장 5큰술",
   "설탕 3큰술",
   "매실액 2큰술",
   "다진마늘 2큰술",
   "맛술 2큰술",
   "굴소스 2큰술",
   "케첩 2큰술"
  ],
  "steps": [
   "등갈비를 흐르는 물에 잘 씻는다",
   "뼈에 붙은 근막을 제거해준다",
   "냄비에 갈비가 잠길정도의 물과 된장 한큰술을 넣고 10분간 끓여준다",
   "데친 등갈비를 흐르는 물에 씻어 불순물을 제거해준다",
   "양념과 물 500ml(등갈비가 잠길 정도)을 넣고 40분동안 중약불에 뚜껑 닫고 끓여준다",
   "40분이 지나면 뚜껑을 열고 수분기를 날려준다",
   "접시에 담고 견과류나 깨 올려주면 끝!"
  ],
  "tip": []
 },
 {
  "id": "main-09",
  "cat": "main",
  "title": "소금새우구이",
  "img": "img/f9ae6db1c6d8.webp",
  "ig": "https://www.instagram.com/reel/DOTB60aE0m_/",
  "added": "",
  "serves": "",
  "ingredients": [
   "새우 15마리",
   "맛술 3큰술",
   "맛소금 1작은술"
  ],
  "steps": [
   "새우, 맛술, 맛소금 넣고 볶아주면 끝",
   "버터구이는 버터 20g, 맛소금 조금넣고 간하기!"
  ],
  "tip": []
 },
 {
  "id": "main-10",
  "cat": "main",
  "title": "마늘버터꽃게구이",
  "img": "img/f61c57851547.webp",
  "ig": "https://www.instagram.com/reel/DPGyoookwc-/",
  "added": "",
  "serves": "",
  "ingredients": [
   "꽃게 1kg",
   "마늘 1큰술",
   "버터 20g",
   "밥 1공기",
   "계란 2개",
   "라면(진짬뽕)"
  ],
  "steps": [
   "꽃게를 흐르는물에 솔로 표면을 깨끗이 씻어주세요",
   "등껍질을 따 아가미, 입, 배에 이물질을 제거해주세요",
   "몸통을 반으로 자르고 다리도 제거해주세요",
   "냄비에 꽃게넣고 5분동안 중약불로 삶아주세요",
   "뚜껑은 따로 빼두고 마늘 1큰술, 버터 20g 넣고 볶아주고 후추로 마무리",
   "냄비에 내장, 밥, 계란넣고 볶아주면 볶음밥, 라면에 잘린 다리 넣고 끓여주면 든든해요"
  ],
  "tip": []
 },
 {
  "id": "main-11",
  "cat": "main",
  "title": "산더미 차돌부추구이",
  "img": "img/e744bc427613.webp",
  "ig": "https://www.instagram.com/reel/DN27FHrZmrU/",
  "added": "",
  "serves": "",
  "ingredients": [
   "차돌 300g",
   "부추 1/4단",
   "양파 1/4개",
   "## 소스",
   "간장 2큰술",
   "쯔유 2큰술",
   "물 2큰술",
   "식초 1큰술",
   "마늘 1작은술",
   "으깬 깨 1큰술",
   "들기름 2큰술"
  ],
  "steps": [
   "부추와 양파 먹기좋게 잘라주고",
   "차돌박이는 바로 구워 야채위에 쌓아주세요",
   "소스는 간장 2큰술, 쯔유 2큰술, 물 2큰술, 식초 1큰술, 마늘 1작은술, 으깬 깨 1큰술, 들기름 2큰술 넣고 섞어주세요",
   "소스 부어주면 끝"
  ],
  "tip": []
 },
 {
  "id": "main-12",
  "cat": "main",
  "title": "레몬크림새우",
  "img": "img/d1d3102099a6.webp",
  "ig": "https://www.instagram.com/reel/DHalRIITpVY/",
  "added": "",
  "serves": "",
  "ingredients": [
   "새우 10마리 내외",
   "전분가루",
   "식용유",
   "## 소스",
   "마요네즈 4큰술",
   "설탕 2큰술",
   "레몬즙 1큰술"
  ],
  "steps": [
   "물기를 제거한 새우에 전분가루를 묻혀주어요",
   "팬에 기름을 넉넉히 두르고 튀겨줄게요",
   "마요네즈 4큰술, 설탕 2큰술, 레몬즙 1큰술 넣고 섞어주세요",
   "소스에 따뜻한 새우 넣고 섞어줍니다",
   "샐러드 위에 새우 올려주면 끝~"
  ],
  "tip": []
 },
 {
  "id": "main-13",
  "cat": "main",
  "title": "칠리새우",
  "img": "img/e7cc78ce3a6c.webp",
  "ig": "https://www.instagram.com/reel/CrADM9RBJBp/",
  "added": "",
  "serves": "",
  "ingredients": [
   "새우 16미(저는 8미만 했어용)",
   "전분가루",
   "## 소스",
   "케첩 1큰술",
   "고추장 1큰술",
   "올리고당 1큰술",
   "설탕 1큰술",
   "맛술 1큰술",
   "식초 1큰술",
   "물 3큰술",
   "다진마늘 1큰술",
   "다진양파 2큰술",
   "굴소스 1큰술"
  ],
  "steps": [
   "소스 재료를 넣고 섞어 소스를 만들어주세요",
   "새우 물기를 제거해주고 전분가루를 묻혀주세요",
   "팬에 기름을 넉넉히 두른 후, 새우를 부쳐주세요",
   "소스를 새로운 팬에 붓고 끓이다 새우를 넣고 섞어주세요"
  ],
  "tip": []
 },
 {
  "id": "main-14",
  "cat": "main",
  "title": "야채고기찜",
  "img": "img/e871dac5258f.webp",
  "ig": "https://www.instagram.com/reel/DGch6lgy1dg/",
  "added": "",
  "serves": "",
  "ingredients": [
   "좋아하는 고기(저는 차돌이 맛있더라고요, 우삼겹, 대패삼겹,오리고기 OK)",
   "알배추",
   "숙주",
   "부추",
   "팽이버섯 등등",
   "## 소스",
   "간장 1큰술",
   "들기름 2큰술",
   "다진마늘 0.5큰술",
   "알룰로스 0.5큰술",
   "올리브유 조금"
  ],
  "steps": [
   "숙주-알배추-팽이버섯, 고기, 부추 등등 전자렌지 용기에 담아주세요",
   "5-10분 고기가 익을때까지 익혀주세요",
   "간장 1큰술, 들기름 2큰술, 다진마늘 0.5큰술, 알룰로스 0.5큰술, 올리브유 조금 넣고 소스 만들어 찍어 먹으면 끝!"
  ],
  "tip": []
 },
 {
  "id": "main-15",
  "cat": "main",
  "title": "차돌미나리찜",
  "img": "img/e0e9edbcc2b5.webp",
  "ig": "https://www.instagram.com/reel/C_ScLj7TWQk/",
  "added": "",
  "serves": "",
  "ingredients": [
   "차돌박이 150g",
   "미나리 200g",
   "밀가루 조금",
   "들깨드레싱 또는 오리엔탈드레싱"
  ],
  "steps": [
   "차돌을 일렬로 깔아준다",
   "미나리를 반으로 잘라 차돌 끝부분에 올려준다",
   "김밥 말 듯 눌러주며 말아준다",
   "뜨거운 찜기에 넣어 소고기가 익을때까지 쪄준다",
   "먹기좋게 잘라 소스와 함께 담아준다"
  ],
  "tip": [
   "소고기인만큼 너무 오래 삶으면 질겨지니, 고기가 익으면 꺼내주세요!"
  ]
 },
 {
  "id": "main-16",
  "cat": "main",
  "title": "무수분수육",
  "img": "img/dc95e10b25f7.webp",
  "ig": "https://www.instagram.com/reel/C0eEv_zpdw5/",
  "added": "",
  "serves": "",
  "ingredients": [
   "돼지고기500g (저는 수육용 삼겹살)",
   "양파1개",
   "대파 1-2개",
   "통마늘 7개",
   "통후추 한스푼",
   "소금조금"
  ],
  "steps": [
   "양파는 슬라이스, 대파는 한뼘으로 잘라 준비!",
   "냄비에 양파-대파-고기-통마늘-통후추-소금 순으로 올려주세요",
   "냄비가 달아오르면 약불에 50분, 불끄고 10분 뜸들이면 끝!"
  ],
  "tip": []
 },
 {
  "id": "main-17",
  "cat": "main",
  "title": "미나리항정구이",
  "img": "img/cc74a91d0e15.webp",
  "ig": "https://www.instagram.com/reel/CwOzBDlp2u6/",
  "added": "",
  "serves": "",
  "ingredients": [
   "덩어리 항정살",
   "미나리",
   "묵은지무침"
  ],
  "steps": [
   "미나리 한움큼 잡아 중간부분을 잘라주어요",
   "항정살 한덩어리의 속을 관통해 구멍을 뚫어줘요",
   "항정살 구멍에 미나리를 넣고, 소금간!",
   "달군 팬에 중불에 고기를 구워줘요(뚜껑덮고 돌려가며 15분)",
   "5분동안 레스팅 후 잘라주어요",
   "묵은지 곁들어주면 끝!"
  ],
  "tip": [
   "묵은지무침: 묵은지 한주먹, 식초 1, 설탕 1, 참기름 1, 참깨 1"
  ]
 },
 {
  "id": "main-18",
  "cat": "main",
  "title": "불고기버섯전골",
  "img": "img/e8a0d96f5ad3.webp",
  "ig": "https://www.instagram.com/reel/Ct7tWnTOk82/",
  "added": "",
  "serves": "",
  "ingredients": [
   "불고기용 고기 200g",
   "버섯 종류별(팽이, 표고, 느타리 등)",
   "대파 한대",
   "알배추 1/2개",
   "양파 1/2개",
   "## 불고기소스",
   "간장 2",
   "설탕 1",
   "마늘 1",
   "맛술 1",
   "## 육수",
   "코인육수 1개(멸치다시다)",
   "참치액 1",
   "국간장 1",
   "## 간장소스",
   "조각양파 반개",
   "홍고추 반개",
   "간장 3스푼",
   "식초 1스푼",
   "설탕 2스푼",
   "다진마늘 1개",
   "물 1스푼"
  ],
  "steps": [
   "버섯과 배추, 대파, 양파를 썰어 손질해주어요",
   "배추, 버섯, 대파를 순서대로 올려주어요",
   "고기에 간장2, 설탕1, 마늘1, 맛술 1 넣고 조물조물 후 1시간 이상 재워두어요",
   "야채 위에 고기를 올려주어요",
   "야채가 잠기도록 물을 붓고 코인육수, 참치액 1, 국간장 2 넣어줘요 (싱거우면 간장으로 간을 더 맞추기)",
   "팔팔 끓여주면 끝!"
  ],
  "tip": []
 },
 {
  "id": "main-19",
  "cat": "main",
  "title": "돼지갈비찜",
  "img": "img/c97a21fbe6f1.webp",
  "ig": "https://www.instagram.com/reel/CtqtK4LpQDA/",
  "added": "",
  "serves": "2인분",
  "ingredients": [
   "찜용 돼지갈비 600g",
   "양파 반개",
   "대파 반개",
   "## 소스",
   "고춧가루 3스푼",
   "설탕1스푼",
   "간장 3스푼",
   "고추장 1스푼",
   "다진마늘 2스푼",
   "맛술 2스푼",
   "소고기다시다 0.5스푼",
   "후추 한꼬집"
  ],
  "steps": [
   "핏물을 뺀 돼지갈비에 물을 부어 된장한스푼 넣고 20분간 끓여줘요",
   "고춧가루 3스푼, 설탕1스푼, 간장 3스푼, 고추장 1스푼, 다진마늘 2스푼, 맛술 2스푼, 소고기다시다 0.5스푼, 후추 한꼬집 넣고 소스를 만들어 주어요",
   "물에 씻은 고기에 물을 반정도 붓고 만들어둔 소스를 반만 넣어주어요",
   "양념이 자작해지면, 썰어놓은 양파와 대파를 넣고 졸여주면 끝!"
  ],
  "tip": []
 },
 {
  "id": "main-20",
  "cat": "main",
  "title": "아롱사태전골",
  "img": "img/e89ad635cb98.webp",
  "ig": "https://www.instagram.com/reel/Csz7OlDpR8n/",
  "added": "",
  "serves": "",
  "ingredients": [
   "아롱사태 500g",
   "대파 1개",
   "마늘 10개",
   "통후추 한스푼",
   "양파 반쪽",
   "알배추 1/4개",
   "팽이버섯1개",
   "부추 조금",
   "## 소스",
   "간장 6",
   "물 2",
   "식초 3",
   "설탕 1.5",
   "매실액 2",
   "다진마늘 1",
   "어슷썬 파 2",
   "다진마늘 1"
  ],
  "steps": [
   "냄비에 대파, 양파, 통후추, 마늘을 넣어주세요",
   "찬물에 넣어 핏물을 뺀 아롱사태를 넣어 주어요",
   "다 잠기도록 물을 넣고 1시간동안 끓여주어요",
   "다 삶아진 아롱사태를 최대한 얇게 썰어주어요",
   "배추-팽이버섯-부추-고기 순으로 올려주세요",
   "고기를 삶은 육수를 부어주고 끓이면 끝! + 소스는 재료 참고해주세요!"
  ],
  "tip": []
 },
 {
  "id": "main-21",
  "cat": "main",
  "title": "치즈 매쉬드포테이토",
  "img": "img/d4eac3393000.webp",
  "ig": "https://www.instagram.com/reel/CrcUjXYBFd2/",
  "added": "",
  "serves": "",
  "ingredients": [
   "감자3개",
   "물 반컵(100ml)",
   "생크림 또는 우유 반컵(100ml)",
   "피자치즈 70g"
  ],
  "steps": [
   "감자 3개의 껍질을 벗겨 얇게 썰어줘요",
   "찜기에 넣고 전자렌지에 5분 돌려줘요 (저는 렌지 찜기가 없어, 내열용기에 물 조금 넣어 돌렸어용)",
   "익은 감자를 포크로 으깨, 채에 곱게 내려주어요",
   "물 반컵(100ml), 생크림 또는 우유 반컵(100ml), 감자 넣고 졸이다, 맛소금으로 간해주어요",
   "걸죽해지면 치즈 넣고 섞어주면 끝!"
  ],
  "tip": []
 },
 {
  "id": "main-22",
  "cat": "main",
  "title": "가리비스튜 앤 파스타",
  "img": "img/ig-main-22.webp",
  "ig": "https://www.instagram.com/p/ClDta1chzUE/",
  "added": "2022-11-17",
  "serves": "2인분",
  "ingredients": [
   "가리비 6알",
   "새우 4마리",
   "올리브유",
   "버터",
   "토마토소스 200g",
   "페퍼론치노",
   "허브솔트",
   "마늘 10알",
   "양파 1/4개",
   "파스타면 2인분"
  ],
  "steps": [
   "가리비는 검은 비닐을 씌워 소금물에 30분 정도 해감하고, 솔로 깨끗이 씻어주세요",
   "새우는 허브솔트 1작은술, 올리브유 5큰술, 페퍼론치노 한꼬집으로 간 맞추고 1시간 이상 재워요",
   "강불에 팬에 올리브유를 두르고, 마늘-양파-새우 순으로 볶아준다",
   "가리비를 넣고 잠길만큼 물을 채워준다",
   "토마토소스 200g과 페퍼론치노 한꼬집, 버터 한스푼, 소금으로 간을 맞추고 팔팔 끓여준다 (간은 취향에 맞게 조절)",
   "스튜로 먼저 조개, 새우, 국물을 즐기고, 삶은 면을 넣어 다시 한번 끓여 파스타로 즐겨요"
  ],
  "tip": []
 },
 {
  "id": "main-23",
  "cat": "main",
  "title": "가리비어묵탕",
  "img": "img/ig-main-23.webp",
  "ig": "https://www.instagram.com/p/Con0Re3B-mW/",
  "added": "2023-02-14",
  "serves": "",
  "ingredients": [
   "가리비 500g",
   "어묵꼬치 3개",
   "물떡 3개",
   "홍고추",
   "청고추",
   "## 육수",
   "육수코인 1",
   "양파 1/4개",
   "마늘 3개",
   "무 조금",
   "## 소스",
   "참치액 1",
   "국간장 1",
   "진간장 0.5(시판소스로 대체가능)"
  ],
  "steps": [
   "소금물에 넣은 가리비를 검은비닐봉지에 넣어 해감해줍니다",
   "해감이 완료된 가리비는 껍질을 솔로 깨끗이 닦아주고 흐르는 물에 여러 번 헹구어주세요",
   "재료가 잠길만큼의 물에 육수코인 1, 양파 1/4개, 마늘 3개, 무 조금(저는 생략했어요) 넣고 10분간 끓여줍니다",
   "육수가 끓고나면 건더기는 다 건져줄께요!",
   "참치액 1, 국간장 1, 진간장 0.5로 간을 해줍니다(시판소스로 대체가능)",
   "어묵, 물떡, 가리비 넣고 끓이다 썰어놓은 홍고추, 청고추로 데코해주면 끝!"
  ],
  "tip": [
   "우동사리를 추가하면 한끼로 손색없어요"
  ]
 },
 {
  "id": "main-24",
  "cat": "main",
  "title": "소고기 샤브샤브",
  "img": "img/ig-main-24.webp",
  "ig": "https://www.instagram.com/p/Co4oKr7hJ4z/",
  "added": "2023-02-20",
  "serves": "",
  "ingredients": [
   "알배추",
   "모듬버섯",
   "부추",
   "샤브샤브용 소고기",
   "## 육수",
   "육수코인(또는 팩)",
   "대파",
   "양파",
   "마늘",
   "## 소스",
   "설탕 0.5",
   "간장 1",
   "식초 1",
   "와사비 조금"
  ],
  "steps": [
   "양파, 대파, 마늘을 반을 갈라 준비하고, 육수코인을 넣어 10분간 끓이고, 따로 담아 두어요!",
   "알배추, 버섯, 부추 등등 잘라 냄비에 차곡차곡 올려주세요",
   "설탕 0.5, 간장 1, 식초 1, 와사비 넣어 소스를 만들어요",
   "육수를 따로 담아 냄비에 넣고 간장으로 간맞추면 끝!"
  ],
  "tip": [
   "육수 조금 남겨 다진 채소와 계란, 참기름 한바퀴 넣고 죽으로 마무리하면 든든해요"
  ]
 },
 {
  "id": "main-25",
  "cat": "main",
  "title": "알배추 소고기찜",
  "img": "img/ig-main-25.webp",
  "ig": "https://www.instagram.com/p/CpM3Gi0BvPY/",
  "added": "2023-02-28",
  "serves": "",
  "ingredients": [
   "알배추 반개",
   "샤브샤브용 소고기(100g)",
   "## 소스",
   "간장 4큰술",
   "미림 6큰술",
   "물 4큰술",
   "설탕 4큰술",
   "굴소스 2큰술",
   "청고추 반개",
   "홍고추 반개"
  ],
  "steps": [
   "알배추를 반에 반으로 잘라줍니다",
   "알배추 잎 사이로 소고기 슬라이스를 넣어줍니다 (얼린 고기를 사용해야 만들기 편해요!)",
   "찜기에 넣어 10분간 쪄줍니다",
   "간장 4큰술, 미림 6큰술, 물 4큰술, 설탕 4큰술, 굴소스 2큰술에 청고추 반개, 홍고추 반개를 다져 넣고 소스를 만듭니다",
   "다 쪄진 알배추에 소스를 부으면 끝!"
  ],
  "tip": []
 },
 {
  "id": "main-26",
  "cat": "main",
  "title": "초간단 수육",
  "img": "img/ig-main-26.webp",
  "ig": "https://www.instagram.com/p/CpVBb6lBvis/",
  "added": "2023-03-03",
  "serves": "",
  "ingredients": [
   "양파 1개",
   "대파 1대",
   "마늘된장 1",
   "설탕 2",
   "인스턴트커피",
   "수육용 돼지고기(삼겹)"
  ],
  "steps": [
   "물을 가득 담은 냄비에 양파 1개, 대파 1대, 마늘된장 1, 설탕 2, 인스턴트커피, 수육용 돼지고기(삼겹)를 넣어주세요",
   "1시간 끓이면 끝!"
  ],
  "tip": [
   "쌈채소를 같은 크기로 잘라 곁들이면 플레이팅이 예뻐요"
  ]
 },
 {
  "id": "main-27",
  "cat": "main",
  "title": "에어프라이어 쪽갈비구이",
  "img": "img/ig-main-27.webp",
  "ig": "https://www.instagram.com/p/CpuiFknr-Z_/",
  "added": "2023-03-13",
  "serves": "",
  "ingredients": [
   "쪽갈비 10쪽",
   "된장 1큰술",
   "통후추 조금",
   "## 소스",
   "진간장 2큰술",
   "굴소스 1큰술",
   "맛술 2큰술",
   "다진마늘 1작은술",
   "올리고당 1큰술",
   "설탕 1큰술"
  ],
  "steps": [
   "쪽갈비의 핏물제거를 위해 1시간 정도 찬물에 넣어두어요",
   "된장과 통후추, 설탕 1큰술을 물에 풀어 끓으면 15분간 쪽갈비를 삶아주어요",
   "쪽갈비를 흐르는물에 씻어주고 소금 1작은술 넣고 섞어 10분간 기다려주어요",
   "진간장 2큰술, 굴소스 1큰술, 맛술 2큰술, 다진마늘 1작은술, 올리고당 1큰술, 설탕 1큰술 넣어 양념을 만들어요",
   "양념 반을 쪽갈비에 넣고 섞어준 뒤, 에어프라이어에 180도, 10분간 구워주어요",
   "구워진 쪽갈비를 5분간격으로 꺼내 소스를 발라 180도에서 양쪽면을 구워주어요",
   "취향에 맞게 파마산치즈 또는 쪽파등을 올려주면 끝!"
  ],
  "tip": []
 },
 {
  "id": "main-28",
  "cat": "main",
  "title": "냉이차돌말이",
  "img": "img/ig-main-28.webp",
  "ig": "https://www.instagram.com/p/Cp2ZJ3_hrfN/",
  "added": "2023-03-16",
  "serves": "",
  "ingredients": [
   "차돌박이200g",
   "냉이 100g",
   "밀가루 조금",
   "참깨드레싱"
  ],
  "steps": [
   "깨끗이 씻은 냉이를 썰어줍니다.(뿌리가 잘 익도록 얇게 슬라이스 해주어요)",
   "씻은 냉이에 소금 0.5 작은술 넣고 섞어 줍니다",
   "차돌을 바닥에 깔고 밀가루를 묻혀주세요",
   "냉이를 올려주고 말아주세요",
   "찜기에 올려주고 10분간 쪄주면 끝!",
   "참깨드레싱과 함께 먹어주면 맛나요"
  ],
  "tip": []
 },
 {
  "id": "main-29",
  "cat": "main",
  "title": "문어스테이크",
  "img": "img/ig-main-29.webp",
  "ig": "https://www.instagram.com/reel/CuNsf_JvKcQ/",
  "added": "2023-07-03",
  "serves": "",
  "ingredients": [
   "자숙문어 다리 2개",
   "감자 3개",
   "전분가루",
   "버터",
   "올리브유",
   "## 소스",
   "머스타드",
   "참깨흑임자드레싱"
  ],
  "steps": [
   "감자를 먹기 좋게 자르고 전자렌지에 5분 익혀줍니다",
   "자숙문어를 식초를 넣는 끓는 물에 5분 데쳐주세요",
   "찬물에 식혀 물기를 제거한 문어와 감자에 전분가루를 묻혀주어요",
   "달군 팬에 버터 한스푼, 올리브유 2스푼 넣고 문어와 감자를 구워요",
   "노릇하게 익으면 소스를 올린 접시에 담아주면 끝!"
  ],
  "tip": []
 },
 {
  "id": "main-30",
  "cat": "main",
  "title": "전복버터구이",
  "img": "img/ig-main-30.webp",
  "ig": "https://www.instagram.com/p/DYcDKXjFNt3/",
  "added": "2026-05-17",
  "serves": "",
  "ingredients": [
   "손질전복6-7개",
   "마늘 8-10개",
   "버터 20g"
  ],
  "steps": [
   "전복에 벌집칼집을 내주세요",
   "마늘꼭지 따 반으로 잘라 손질해주세요",
   "약불에 기름 3큰술 둘러 마늘 구워주다 노릇해지면",
   "전복 넣고 중불에 2분 볶아주세요",
   "마지막에 버터넣고 2분정도 약불에 볶아주면 끝"
  ],
  "tip": []
 },
 {
  "id": "main-31",
  "cat": "main",
  "title": "새송이떡갈비",
  "img": "img/ig-main-31.webp",
  "ig": "https://www.instagram.com/p/DYcDKXjFNt3/",
  "added": "2026-05-17",
  "serves": "",
  "ingredients": [
   "소고기다짐육 500g",
   "새송이 1개",
   "## 고기밑간",
   "다진대파 1큰술",
   "간장 3큰술",
   "설탕 3큰술",
   "찹쌀가루 1큰술",
   "다진마늘 2큰술",
   "참기름 1/2큰술",
   "후추 약간",
   "## 고기양념",
   "물 3큰술",
   "간장 1큰술",
   "유자청 1큰술",
   "올리고당 반큰술",
   "참기름 1작은술"
  ],
  "steps": [
   "고기 밑간하고 잘 섞이게 치대주세요",
   "새송이 8등분해주세요",
   "고기를 펴서 새송이 올려두고 잘 말아주세요",
   "프라이팬 중불에 5분정도 구워주다 양념넣고 졸여주면 끝"
  ],
  "tip": []
 },
 {
  "id": "main-32",
  "cat": "main",
  "title": "갈릭버터새우",
  "img": "img/ig-main-32.webp",
  "ig": "https://www.instagram.com/p/DYi_vO4k9N3/",
  "added": "2026-05-20",
  "serves": "",
  "ingredients": [
   "생새우 400g(약 15마리)",
   "통마늘 10개",
   "버터 20g",
   "소금",
   "후추 약간"
  ],
  "steps": [
   "새우의 뿔, 수염과 다리를 잘라주세요 (몸통부분 껍질을 제거해주면 먹기 더 좋아요)",
   "마늘을 잘게 다져주세요",
   "버터와 마늘을 팬에 넣고 약불에 구워주세요",
   "마늘이 노릇노릇해지면 새우 넣고 붉게 변할때까지 볶아주다 소금간해주고 후추 조금 뿌려주면 끝"
  ],
  "tip": []
 },
 {
  "id": "main-33",
  "cat": "main",
  "title": "콩불",
  "img": "img/ig-main-33.webp",
  "ig": "https://www.instagram.com/p/DZMKp6-k2n-/",
  "added": "2026-06-05",
  "serves": "",
  "ingredients": [
   "콩나물 200g",
   "대패삼겹살 300g",
   "양파 반개",
   "대파 반개",
   "## 양념",
   "간장 3큰술",
   "맛술 2큰술",
   "설탕 3큰술",
   "고춧가루 3큰술",
   "고추장 3큰술",
   "다진마늘 3큰술",
   "참깨 1큰술"
  ],
  "steps": [
   "넓은 냄비에 콩나물-대패삼겹살- 자른양파-자른대파 -양념장 순으로 올려줘요",
   "뚜껑닫고 1-2분 후에 뚜껑열어 볶아줘요",
   "고기가 익었으면 끝!"
  ],
  "tip": []
 },
 {
  "id": "meal-01",
  "cat": "meal",
  "title": "육회파스타",
  "img": "img/d97f99701dc8.webp",
  "ig": "https://www.instagram.com/reel/DGKvHmeSg_6/",
  "added": "",
  "serves": "",
  "ingredients": [
   "카펠리니면 1인분",
   "육회(우둔살) 100g",
   "깻잎 5-10장",
   "## 고기밑간",
   "다진마늘 0.5큰술",
   "설탕 1큰술",
   "간장 0.5작은술",
   "맛소금 조금",
   "들기름 1큰술",
   "## 소스",
   "간장 2큰술",
   "쯔유 2큰술",
   "물 2큰술",
   "들기름 4큰술",
   "다진마늘 1큰술",
   "설탕 0.5큰술"
  ],
  "steps": [
   "핏물을 제거한 육회에 다진마늘 0.5큰술, 설탕 1큰술, 간장 0.5작은술, 맛소금 조금, 들기름 1큰술 넣고 밑간을 해주세요",
   "카펠리니 면을 5분간 삶고 찬물에 헹구워주세요",
   "소스는 간장 2큰술, 쯔유 2큰술 물 2큰술, 들기름 4큰술, 다진마늘 1큰술, 설탕 0.5큰술 넣고 만들어주세요",
   "면, 잘게썬 깻잎, 육회 그릇에 올리고 소스 뿌려주면 끝-!!"
  ],
  "tip": [
   "마늘의 알싸한 맛이 싫으신 분들은 반으로 줄여주세요"
  ]
 },
 {
  "id": "meal-02",
  "cat": "meal",
  "title": "미나리파스타",
  "img": "img/d101d2ad921b.webp",
  "ig": "https://www.instagram.com/reel/DMfqB-izcUQ/",
  "added": "",
  "serves": "",
  "ingredients": [
   "미나리",
   "명란 30g",
   "파스타 1인분",
   "마늘 5-10개"
  ],
  "steps": [
   "마늘을 편썰어주세요",
   "미나리 대 부분 한주먹 찹썰어주고, 나머지는 3cm 간격으로 잘라주세요",
   "올리브유 듬뿍 팬에 두르고 약불에 마늘넣어 마늘기름 뽑아주세요",
   "마늘이 익어가면 미나리 대 넣고 볶아주다",
   "면, 면수 2국자, 명란, 미나리 넣고 볶아주면 끝!"
  ],
  "tip": []
 },
 {
  "id": "meal-03",
  "cat": "meal",
  "title": "명란솥밥",
  "img": "img/ee7253f52069.webp",
  "ig": "https://www.instagram.com/reel/C6qXB_eJ7YY/",
  "added": "",
  "serves": "3인분",
  "ingredients": [
   "쌀 300ml",
   "물 300ml",
   "간장 3큰술",
   "참치액 1큰술",
   "명란 3조각",
   "쪽파",
   "버터"
  ],
  "steps": [
   "냄비에 쌀 300ml, 물 300ml, 간장 3큰술, 참치액 1큰술 넣고 섞어주세요(쌀을 미리 불려놓으면 더 좋아요)",
   "강불로 끓이다가 끓어 오르면 약불로 줄이고 뚜껑 닫고 15분 익혀주세요",
   "불 끄고 10분 뚜껑 닫은 채로 뜸들여줍니다",
   "명란을 버터에 구워주세요, 쪽파도 송송 썰어주세요",
   "밥위에 명란, 쪽파, 버터 한큰술 올려주면 끝!"
  ],
  "tip": []
 },
 {
  "id": "meal-04",
  "cat": "meal",
  "title": "스테이크솥밥",
  "img": "img/e16195b61dd1.webp",
  "ig": "https://www.instagram.com/reel/C2jqAM-uxdA/",
  "added": "",
  "serves": "",
  "ingredients": [
   "쌀 300ml",
   "물300ml",
   "스테이크 300g",
   "부추",
   "표고버섯 2개",
   "노른자 1개",
   "참치액 1큰술",
   "간장 3큰술",
   "허브솔트",
   "올리브유 조금"
  ],
  "steps": [
   "하루 전날 스테이크 허브솔트, 올리브유로 마리네이드 하고",
   "표고버섯 슬라이스, 부추 잘게 잘라놓아요",
   "다음날 냄비에 쌀 300ml, 물 300ml, 참치액 1큰술, 간장 3큰술 넣고 끓이기 시작",
   "냄비 끓기 시작하면 약불로 15분, 불끄고 뜸들이기 10분",
   "스테이크 강불에 겉면이 타듯이 구워주고 잘라주세요",
   "밥 위에 표고버섯, 부추, 스테이크, 계란노른자, 버터 올려주면 끝!"
  ],
  "tip": []
 },
 {
  "id": "meal-05",
  "cat": "meal",
  "title": "닭다리살구이+덮밥",
  "img": "img/f8f8a2a46215.webp",
  "ig": "https://www.instagram.com/reel/C2jqAM-uxdA/",
  "added": "",
  "serves": "",
  "ingredients": [
   "닭다리살 350g",
   "소금",
   "후추",
   "대파 1대",
   "## 소스",
   "스테이크소스 1큰술",
   "굴소스 1큰술",
   "설탕 1큰술",
   "홀그레인머스타드 1작은술"
  ],
  "steps": [
   "중불로 달군 후라이팬에 껍질부터 넣어 익혀주세요(5분, 소금, 후추 찹찹)",
   "5분정도 지나면 먹기좋게 잘라주고 파 넣고 볶아주세요(5분)",
   "소스넣고 볶아주면 끝"
  ],
  "tip": [
   "덮밥으로 드실 땐 노른자 얹어주면 더 맛있어요"
  ]
 },
 {
  "id": "meal-06",
  "cat": "meal",
  "title": "또띠아 프라타타",
  "img": "img/d2d45756b980.webp",
  "ig": "https://www.instagram.com/reel/DWGwi3uADzQ/",
  "added": "",
  "serves": "",
  "ingredients": [
   "또띠아",
   "계란3-4개",
   "맛소금 조금",
   "좋아하는 재료(베이컨, 버섯, 양파, 콘옥수수, 시금치 등)",
   "치즈"
  ],
  "steps": [
   "오븐용기에 기름 발라 또띠아 깔아주고",
   "토띠아-좋아하는 재료-계란물-치즈왕창",
   "에프 180도 25분 구워주세요(열기가 약하면 200도!!)"
  ],
  "tip": []
 },
 {
  "id": "meal-07",
  "cat": "meal",
  "title": "또띠아 샌드위치",
  "img": "img/ca3db4c84a7a.webp",
  "ig": "https://www.instagram.com/zi___home/reels/",
  "added": "",
  "serves": "",
  "ingredients": [
   "또띠아",
   "계란",
   "햄",
   "토마토",
   "로메인상추",
   "햄",
   "마요네즈",
   "머스타드소스"
  ],
  "steps": [
   "또띠아 20초 전자렌지에 돌려주세요",
   "또띠아 위아래로 재료 올려주고 영상과 같이 접어주면 끝"
  ],
  "tip": []
 },
 {
  "id": "meal-08",
  "cat": "meal",
  "title": "명란버터우동",
  "img": "img/e04bf9f6b78e.webp",
  "ig": "https://www.instagram.com/reel/DI_Wwndz1dU/",
  "added": "",
  "serves": "",
  "ingredients": [
   "우동면 1인분",
   "버터 10g",
   "명란 한큰술",
   "참기름 한큰술",
   "다진파 한큰술",
   "깨 한큰술",
   "가쓰오부시 한큰술",
   "계란노른자(취향껏 조절)"
  ],
  "steps": [
   "면을 뜨거운물에 삶아 해동해주세요",
   "뜨거운 면을 건저 볼에 담아주세요",
   "면위에 버터 10g, 명란 한큰술, 참기름 한큰술, 다진파 한큰술, 깨 한큰술, 가쓰오부시 한큰술, 계란노른자 넣고 섞어주면 끝!"
  ],
  "tip": []
 },
 {
  "id": "meal-09",
  "cat": "meal",
  "title": "해물빠에야",
  "img": "img/e77f18365b3b.webp",
  "ig": "https://www.instagram.com/reel/C-R8EbPpO0y/",
  "added": "",
  "serves": "4인분",
  "ingredients": [
   "쌀 400ml",
   "물 350ml",
   "토마토 1개",
   "토마토소스 190ml(종이컵 1)",
   "치킨스톡 1큰술",
   "마늘 10개",
   "양파 반개",
   "해물(새우, 오징어, 바지락 등등)",
   "올리브유 60ml(1/3 종이컵)"
  ],
  "steps": [
   "토마토와 양파를 잘게 잘라준다",
   "마늘을 다져준다",
   "솥에 올리브유를 두르고 마늘을 볶아준다",
   "토마토, 해물, 토마토소스, 치킨스톡 1큰술을 넣고 볶아준다",
   "토핑을 위한 해물을 잠시 빼둔다",
   "쌀 400ml, 물 350ml를 넣고 끓어오르면 뚜껑 닫고 약불에 15분 익혀준다",
   "쌀이 투명해졌다면 불을 끄고 해물을 위에 돌려준다",
   "뚜껑을 다시 닫고 10분 뜸 들여주면 끝"
  ],
  "tip": []
 },
 {
  "id": "meal-10",
  "cat": "meal",
  "title": "원팬 로제파스타",
  "img": "img/d58aab8bb6ee.webp",
  "ig": "https://www.instagram.com/reel/DNk5SVwyseN/",
  "added": "",
  "serves": "",
  "ingredients": [
   "파스타면",
   "좋아하는 재료(양파, 버섯, 새우, 베이컨, 마늘 등등)",
   "생크림 200ml",
   "물 200ml",
   "토마토소스 3큰술",
   "버터 10g",
   "치킨스톡 1큰술",
   "파슬리가루 조금"
  ],
  "steps": [
   "팬에 좋아하는 재료를 넣어주세요",
   "파스타면을 넣어주세요 (팬이 작아 면이 안들어가면, 페투치네같은 동글동글한 면을 넣어주세요)",
   "생크림 200ml, 물 200ml, 토마토소스 3큰술 버터 10g, 치킨스톡 1큰술 넣고 9분간 끓여주세요",
   "소스 자작하게 졸여주고 파슬리가루 뿌려주면 끝!"
  ],
  "tip": []
 },
 {
  "id": "meal-11",
  "cat": "meal",
  "title": "원팬크림파스타",
  "img": "img/d1c7fdf7651a.webp",
  "ig": "https://www.instagram.com/reel/DDcBryESq40/",
  "added": "",
  "serves": "",
  "ingredients": [
   "새우 4-5마리",
   "베이컨 1줄",
   "양파 1/8개",
   "버섯 조금",
   "스파게티면",
   "## 소스",
   "버터 10g",
   "맛소금 0.3큰술",
   "파마산치즈 1큰술",
   "올리브유 2큰술",
   "후추조금",
   "체다치즈 2개",
   "물 400ml",
   "우유250ml"
  ],
  "steps": [
   "큰 팬에 모든 재료를 넣어주세요",
   "10-12분 중강불에 끓여주면 끝"
  ],
  "tip": [
   "원하는 농도에 따라 물을 추가해주세요"
  ]
 },
 {
  "id": "meal-12",
  "cat": "meal",
  "title": "토마토콜드파스타",
  "img": "img/f0618e14d658.webp",
  "ig": "https://www.instagram.com/reel/C81EzOtJxa-/",
  "added": "",
  "serves": "",
  "ingredients": [
   "토마토마리네이드",
   "카펠리니면 1인분",
   "바질페스토 2큰술",
   "부라타치즈(생략가능)",
   "바질잎(생략가능)"
  ],
  "steps": [
   "면을 삶아 차갑게 헹구어 접시에 올려주세요",
   "마리네이드 된 토마토와 소스를 듬뿍 올려주세요",
   "부라타치즈와 바질잎 올려주면 끝!"
  ],
  "tip": []
 },
 {
  "id": "meal-13",
  "cat": "meal",
  "title": "우삼겹솥밥",
  "img": "img/cf0f5b3b76d4.webp",
  "ig": "https://www.instagram.com/reel/C7wDNGEJaiO/",
  "added": "",
  "serves": "",
  "ingredients": [
   "쌀 300g",
   "물 300ml",
   "우삼겹 300g",
   "쪽파 70g(또는 부추)",
   "마늘 6-7알",
   "간장4큰술",
   "참치액 1큰술",
   "올리브유 3큰술"
  ],
  "steps": [
   "올리브유 3큰술, 편마늘을 약불에 구워주고 노릇하게 익으면 빼둔다",
   "마늘기름에 우삼겹, 간장 1큰술을 넣고 볶다 고기가 익으면 빼둔다",
   "30분 이상 불린 쌀 300g을 기름에 1-2분 볶아준다",
   "물 300ml, 간장 3큰술, 참치액 1큰술 넣고 15분간 약불에 끓여준다",
   "불을 끄고 10분간 뜸을 들여준다(뚜껑닫고 내버려두기)",
   "15분이 지나면 잘게 썬 쪽파, 구워둔 고기와 편마늘을 올려주면 끝"
  ],
  "tip": []
 },
 {
  "id": "meal-14",
  "cat": "meal",
  "title": "샐러드파스타",
  "img": "img/f21d4a2dede7.webp",
  "ig": "https://www.instagram.com/reel/C7Q9MuXyqsS/",
  "added": "",
  "serves": "2인분",
  "ingredients": [
   "파스타면",
   "샐러드채소",
   "원하는 토핑(저는 새우, 닭가슴살, 스위트콘, 방울토마토, 올리브)",
   "파마산 또는 파다노그라노 치즈",
   "## 소스",
   "간장 5큰술",
   "올리브유 4큰술",
   "식초3큰술",
   "마늘 2큰술",
   "설탕 1큰술",
   "후추 취향껏"
  ],
  "steps": [
   "면을 삶아주세요",
   "간장 5큰술, 올리브유 4큰술, 식초3큰술, 마늘 2큰술, 설탕 1큰술, 후추 취향껏 넣고 소스를 만들어주세요",
   "샐러드채소와 토핑을 먹기좋게 준비해주세요",
   "삶은 파스타면을 찬물에 헹구고 소스 2스푼을 넣고 섞어주세요",
   "채소 - 파스타면 - 토핑 - 소스 - 치즈 순으로 올려주면 끝"
  ],
  "tip": []
 },
 {
  "id": "meal-15",
  "cat": "meal",
  "title": "명란들기름파스타",
  "img": "img/f43ec44dd358.webp",
  "ig": "https://www.instagram.com/reel/C2hJFk7ppPH/",
  "added": "",
  "serves": "1인분",
  "ingredients": [
   "소면 또는 카펠리니면 1인분",
   "깻잎 10-15장",
   "명란 2조각",
   "## 소스",
   "들기름 8큰술",
   "쯔유 2큰술",
   "진간장 1큰술",
   "매실액 2큰술(설탕대체가능)"
  ],
  "steps": [
   "깻잎 원하는 만큼 채썰어 준비!",
   "명란 2조각 속 골라내 큰볼 1개 , 작은볼 여러개 만들기",
   "재료에 나와있는데로 소스 준비",
   "삶은 소면 찬물에 헹구어 재료 다 넣어주면 끝!"
  ],
  "tip": [
   "소스 조절하면서 간 맞추어 주세요😆"
  ]
 },
 {
  "id": "meal-16",
  "cat": "meal",
  "title": "참나물간장국수",
  "img": "img/fad0198cfaa8.webp",
  "ig": "https://www.instagram.com/reel/C1mTyptJPF5/",
  "added": "",
  "serves": "",
  "ingredients": [
   "소면 1인분",
   "참나물60g",
   "자숙문어 100g",
   "## 소스",
   "간장 2큰술",
   "쯔유 2큰술",
   "물 4큰술",
   "들기름 4큰술",
   "참나물 줄기 다진것 1큰술"
  ],
  "steps": [
   "참나물을 잎 부분을 2cm 간격으로 잘라주어요",
   "줄기는 잘게 다져 한큰술 준비해 두어요",
   "자숙문어를 살짝 데쳐 슬라이스해 주어요",
   "소면을 삶아 찬물에 헹구어요",
   "간장 2큰술, 쯔유 2큰술, 물 4큰술, 들기름 4큰술, 참나물 줄기 다진것 1큰술 넣고 소스를 만들어요",
   "참나물에 소스 2스푼 넣고 버물여 주어요",
   "국수 참나물 문어 올려 소스 넣어주면 끝!"
  ],
  "tip": []
 },
 {
  "id": "meal-17",
  "cat": "meal",
  "title": "훈제오리파스타",
  "img": "img/fd2beaf6c794.webp",
  "ig": "https://www.instagram.com/reel/DIOFM21zi7b/",
  "added": "",
  "serves": "",
  "ingredients": [
   "훈제오리 70g",
   "마늘3-4개",
   "파스타면 1인분",
   "올리브유",
   "후추조금"
  ],
  "steps": [
   "먹기좋게 자른 훈제오리를 약불에 구워줘요",
   "기름이 어느정도 나오면 편마늘을 넣고 마늘기름 내주어요",
   "고기와 마늘이 노릇해시면 삶은 면과 면수를 넣고 소금간을 해줘요",
   "면수와 오일이 소스화되도록 잘 섞어줘요",
   "취향껏 후추와 올리브유 올려 먹어주면 끝!"
  ],
  "tip": []
 },
 {
  "id": "meal-18",
  "cat": "meal",
  "title": "고등어솥밥",
  "img": "img/f331ff4dd001.webp",
  "ig": "https://www.instagram.com/reel/DF5NZx0Sa3a/",
  "added": "",
  "serves": "1인분",
  "ingredients": [
   "쌀 100ml",
   "물 100ml",
   "생선 150g(한마리정도)",
   "간장 2큰술",
   "참치액 0.5큰술",
   "다진쪽파 3큰술",
   "들기름 1큰술"
  ],
  "steps": [
   "고등어를 쌀뜬물에 10분정도 재워주세요",
   "고등어 물기와 가시 꼼꼼히 제거 후 껍질부터 중불에 10분 구워주세요",
   "30분정도 불린 쌀 100ml, 물 100ml 넣고 중불에 끓이다 끓어오르면 약불 15분, 불끄고 10분 뜸들여주세요",
   "밥 위에 고등어, 다진쪽파, 들기름 올려주고 섞어 먹으면 끝!"
  ],
  "tip": []
 },
 {
  "id": "meal-19",
  "cat": "meal",
  "title": "까르보나라",
  "img": "img/d43b30584249.webp",
  "ig": "https://www.instagram.com/reel/DJ6M4FOzzJn/",
  "added": "",
  "serves": "",
  "ingredients": [
   "스파게티면 1인분",
   "파마산치즈 20g",
   "베이컨 3줄",
   "노른자 3개"
  ],
  "steps": [
   "베이컨을 약불에 바삭하게 튀겨 베이컨기름 내주세요(관찰레 같은 기름이 많은 고기면 더 좋고베이컨에 기름이 없다면 오일 추가해주세요)",
   "노른자 3개에 파마산치즈 갈갈하고 베이컨과 기름 넣고 섞어주세요",
   "삶은 면, 면수 한국자 넣고 섞어주면 끝(삶을 때 물에 맛소금 넣고 삶아주었어요)"
  ],
  "tip": []
 },
 {
  "id": "meal-20",
  "cat": "meal",
  "title": "대패삼겹솥밥",
  "img": "img/reel-Dedsj_NvhK5.webp",
  "ig": "https://www.instagram.com/reel/Dedsj_NvhK5/",
  "added": "2026-10-28",
  "serves": "2~3인분",
  "ingredients": [
   "쌀 300ml",
   "물 300ml",
   "대패삼겹살 200g",
   "마늘 10알",
   "깻잎 10장",
   "올리브유 3큰술",
   "## 고기 양념",
   "간장 1큰술",
   "## 밥 간",
   "간장 3큰술",
   "참치액 1.5큰술"
  ],
  "steps": [
   "솥에 기름 두르고 편 썬 마늘을 달달 볶아주세요 황금빛 되면 건져서 마늘칩으로 써요!",
   "그 기름에 대패삼겹이랑 간장 1큰술 넣고 볶아서 덜어두세요",
   "남은 기름에 쌀 넣고 볶아주세요",
   "물은 쌀이랑 1:1로 넣고, 간장·참치액으로 간해주세요 (쌀 100ml당 간장 1큰술, 참치액 반큰술)",
   "끓으면 뚜껑 닫고 약불에 15분, 불 끄고 10분 뜸 들여주세요",
   "썬 깻잎, 볶아둔 대패삼겹, 마늘칩 올려주면 끝!!"
  ],
  "tip": []
 },
 {
  "id": "meal-21",
  "cat": "meal",
  "title": "떡국떡볶이",
  "img": "img/ig-meal-21.webp",
  "ig": "https://www.instagram.com/p/Cn0MCoLBunK/",
  "added": "2023-01-25",
  "serves": "",
  "ingredients": [
   "떡국떡",
   "대파 1대",
   "## 소스",
   "고춧가루 1",
   "설탕 2",
   "간장 0.5",
   "고추장 1.5",
   "다시다 0.2(또는 카레가루)"
  ],
  "steps": [
   "고춧가루 1, 설탕 2, 간장 0.5, 고추장 1.5, 다시다 0.2(또는 카레가루)로 소스를 만들어주어요",
   "대파를 큼지막하게 썰어줍니다",
   "기름을 넉넉히 두르고 파를 노릇하게 볶아줍니다",
   "물 한컵 반(종이컵)과 소스를 넣고 끓으면 떡국떡을 넣어줍니다 (떡이 말캉해지면 끝~)"
  ],
  "tip": []
 },
 {
  "id": "meal-22",
  "cat": "meal",
  "title": "고기전 라구소스 파스타",
  "img": "img/ig-meal-22.webp",
  "ig": "https://www.instagram.com/p/Cn3QV9shh3_/",
  "added": "2023-01-26",
  "serves": "",
  "ingredients": [
   "깻잎전 6개(동그랑땡 12-15개)",
   "양송이 3개(다른 버섯도 괜찮아요)",
   "양파 작은거 1개",
   "베이컨 3줄",
   "시판 토마토소스 400g",
   "화이트와인 반컵(100ml)",
   "버터 1",
   "올리브유 5"
  ],
  "steps": [
   "전을 잘게 다져줍니다",
   "양파와 양송이버섯, 베이컨도 잘게 다져주어요",
   "올리브유를 두르고 양파, 베이컨, 양송이, 고기 순으로 볶으며 버터 한숟갈 푹!",
   "화이트와인 반컵(100ml), 시판 토마토소스 400g, 물 세컵(500ml) 넣고 30분간 약~중불로 졸여주면 끝!"
  ],
  "tip": [
   "올리브유와 소금으로 간한 물에 파스타를 7분 삶고, 그 위에 소스를 올리면 근사한 파스타 완성!"
  ]
 },
 {
  "id": "meal-23",
  "cat": "meal",
  "title": "양송이 크림리조또",
  "img": "img/ig-meal-23.webp",
  "ig": "https://www.instagram.com/p/CoegFTzBX7g/",
  "added": "2023-02-10",
  "serves": "",
  "ingredients": [
   "불린 생쌀 150ml",
   "생크림 한컵(180ml)",
   "물 한컵(180ml)",
   "버터 1스푼",
   "다진마늘 1",
   "양송이 3개",
   "베이컨 3줄",
   "페퍼론치노(선택)",
   "올리브유 5스푼",
   "소금 한꼬집"
  ],
  "steps": [
   "양송이 3개중 2개는 0.2m간격으로 잘라주고, 나머지 하나는 가능한 가장 얇게 썰어주어요(토핑용)",
   "베이컨도 잘게 잘라줄께요",
   "올리브유를 두르고 마늘, 베이컨, 페퍼론치노(선택), 양송이, 쌀, 소금 한꼬집을 넣고 볶아주어요(쌀 넣고 3분정도)",
   "생크림 한 컵(180ml), 물 한 컵(180ml) 넣고 끓고나면 약불로 줄이고 바닥에 붙지 않게 저어주며 익혀주세요",
   "쌀이 다 익으면 접시에 담아 그 위에 얇게 썬 양송이와 치즈 갈갈로 마무리 해줍니다."
  ],
  "tip": []
 },
 {
  "id": "meal-24",
  "cat": "meal",
  "title": "연어 후토마끼",
  "img": "img/ig-meal-24.webp",
  "ig": "https://www.instagram.com/p/CovhAq8BptG/",
  "added": "2023-02-17",
  "serves": "2줄",
  "ingredients": [
   "연어(150g)",
   "김밥김(세장)",
   "오이",
   "계란 3개",
   "아보카도 반개",
   "마요네즈",
   "와사비",
   "밥 두주먹",
   "단촛물(설탕3, 식초3, 소금 0.5)"
  ],
  "steps": [
   "설탕 3, 식초 3, 소금 0.5를 섞어 단촛물을 만들고, 밥 두덩이에 단촛물 2스푼 넣어주어요",
   "오이를 길게 4등분 해 소금에 절여준 뒤, 30분 후 헹구어 줍니다",
   "아보카도 반개를 잘라 슬라이스해주세요(아보카도가 아직 안익었으면 잘라서 전자레인지 40초 돌려줄께요)",
   "연어도 큼지막하게 잘라주세요",
   "계란 세 개에 소금 한꼬집, 설탕한꼬집 넣고 섞어 계란말이 만들어주세요",
   "김 한 장 반을 이어주고 밥 한덩이를 김 한 장에 덮이도록 펴주세요",
   "연어, 오이, 아보카도, 계란을 올려주고 마요네즈, 와사비를 넣고 말아주세요 (연어는 많을수록 맛있어요,, 조금 넣은거 후회 중)",
   "김밥이 터지지 않게 큼지막하게 썰어주세요"
  ],
  "tip": []
 },
 {
  "id": "meal-25",
  "cat": "meal",
  "title": "브리치즈파스타",
  "img": "img/ig-meal-25.webp",
  "ig": "https://www.instagram.com/p/CpKgHNfBYVm/",
  "added": "2023-02-27",
  "serves": "1.5인분",
  "ingredients": [
   "브리치즈 80g",
   "바질 한뭉치",
   "방울토마토 5~10개",
   "마늘 3개",
   "파스타 1.5인분",
   "올리브유 5큰술",
   "소금 0.5작은술",
   "후추 조금"
  ],
  "steps": [
   "방울토마토는 반으로 브리치는 깍뚝썰기, 마늘과 바질은 다져주세요 (저는 마늘을 너무 많이 넣어서 알싸한맛이 강했어요)",
   "재료를 큰 볼에 담아 소금 0.5작은술, 후추 조금, 올리브유 5큰술 넣어주세요",
   "파스타를 8분간 삶고 건져 재료가 담긴 볼에 넣어주세요",
   "치즈가 녹을때까지 잘 섞어주면 끝!"
  ],
  "tip": []
 },
 {
  "id": "meal-26",
  "cat": "meal",
  "title": "차돌참나물파스타",
  "img": "img/ig-meal-26.webp",
  "ig": "https://www.instagram.com/p/CpZdH1ihB-v/",
  "added": "2023-03-05",
  "serves": "1인분",
  "ingredients": [
   "파스타 1인분(5백원 동전만하게)",
   "차돌 100g(4조각 정도)",
   "참나물 150g",
   "## 소스",
   "간장 3큰술",
   "올리브유 4큰술",
   "참치액 1큰술",
   "올리고당 1큰술",
   "물 1큰술"
  ],
  "steps": [
   "간장 3큰술, 올리브유 4큰술, 참치액 1큰술, 올리고당 1큰술, 물 1큰술넣고 소스를 만들어요",
   "참나물을 잎과 줄기를 분리, 잎은 3cm간격, 줄기는 0.5m간격으로 잘라주어요",
   "참나물 잎에 소스 2큰술 넣고 섞어줍니다(마리네이드)",
   "한쪽에 파스타를 삶기 시작하고, 팬에는 차돌을 구워주고 소스도 조금씩 뿌려주어요",
   "차돌을 거둔 팬에 올리브유를 듬뿍 넣고 참나물 줄기를 1분정도 볶아줘요",
   "삶아진 면을 팬에 넣고 소스와 함께 1-2분 볶아주어요",
   "면을 볼에 담고 잎과 차돌, 노른자를 올려주면 끝!"
  ],
  "tip": []
 },
 {
  "id": "meal-27",
  "cat": "meal",
  "title": "차돌파스타",
  "img": "img/ig-meal-27.webp",
  "ig": "https://www.instagram.com/reel/CqT9hCXhfE9/",
  "added": "2023-03-28",
  "serves": "1인분",
  "ingredients": [
   "파스타 1인분",
   "차돌 150g",
   "마늘 5개",
   "대파 반쪽",
   "## 소스",
   "굴소스 0.5큰술",
   "국간장 0.5큰술",
   "설탕 1큰술",
   "맛술 1큰술"
  ],
  "steps": [
   "굴소스 0.5큰술, 국간장 0.5큰술, 설탕 1큰술, 맛술 1큰술을 넣고 소스를 만들어요",
   "마늘을 편썰어주고, 대파도 채썰어 줍니다",
   "올리브유를 둘러 마늘과 대파를 볶아주세요",
   "차돌을 구워주고 잠시 덜어둡니다",
   "면수 2국자를 팬에 넣고 면, 소스를 넣고 볶아줍니다.",
   "차돌을 넣고 다시한번 볶아주면 끝!"
  ],
  "tip": []
 },
 {
  "id": "meal-28",
  "cat": "meal",
  "title": "크레페 갈레트",
  "img": "img/ig-meal-28.webp",
  "ig": "https://www.instagram.com/reel/CrVAjJBhIF7/",
  "added": "2023-04-22",
  "serves": "",
  "ingredients": [
   "크레페 1장",
   "달걀 1개",
   "모짜렐라치즈 조금",
   "토마토소스 조금",
   "양파 조금",
   "베이컨 조금(버섯, 새우, 토마토 등등 좋아하는 재료 모두 조금씩 넣어주심 좋아요)"
  ],
  "steps": [
   "달군팬에 크레페를 올려",
   "토마토소스를 둘러주어요",
   "볶은 양파, 베이컨 등을 올려주고",
   "모짜렐라치즈를 올려줍니다",
   "계란을 톡하고 얹어주고",
   "테두리를 접어 구우며 고정시킨 후",
   "뚜껑덮어 약불에 살짝 익혀주면 끝~"
  ],
  "tip": []
 },
 {
  "id": "meal-29",
  "cat": "meal",
  "title": "원팬 토마토파스타",
  "img": "img/ig-meal-29.webp",
  "ig": "https://www.instagram.com/reel/CtYL2VzpkVm/",
  "added": "2023-06-12",
  "serves": "1.5인분",
  "ingredients": [
   "파스타면 1.5인분",
   "토마토소스 300g",
   "물 750ml",
   "양파 1/4개",
   "편마늘 4개",
   "새우·오징어 취향껏"
  ],
  "steps": [
   "큰 팬 하나를 준비하고",
   "파스타면, 양파, 마늘, 새우, 오징어 등 원하는 재료를 넣어요",
   "토마토소스 한컵과 물도 추가!",
   "10~15분 끓여주면 끝!!"
  ],
  "tip": []
 },
 {
  "id": "meal-30",
  "cat": "meal",
  "title": "또띠아 와퍼",
  "img": "img/ig-meal-30.webp",
  "ig": "https://www.instagram.com/reel/CurdBD4pqNb/",
  "added": "2023-07-14",
  "serves": "",
  "ingredients": [
   "또띠아",
   "다진소고기",
   "상추(또는 양상추)",
   "토마토",
   "치즈",
   "## 소스",
   "다진양파",
   "마요네즈 1",
   "머스타드 1",
   "스리라차 1",
   "설탕 1"
  ],
  "steps": [
   "다진양파, 마요네즈 2, 머스타드 1, 스리라차 1, 설탕 1 넣고 소스를 만들어요",
   "다진소고기를 또띠아 위에 얇게 펴주고 소금으로 간을 해주어요",
   "후라이팬에 고기를 구워주어요",
   "고기를 올린 또띠아 위에 소스, 치즈, 상추, 토마토를 순서대로 올려 접어주면 끝!"
  ],
  "tip": []
 },
 {
  "id": "meal-31",
  "cat": "meal",
  "title": "설탕코팅 프렌치토스트",
  "img": "img/ig-meal-31.webp",
  "ig": "https://www.instagram.com/p/CvOZ2JJpt8b/",
  "added": "2023-07-28",
  "serves": "",
  "ingredients": [
   "식빵 2조각",
   "설탕",
   "버터",
   "계란 2개",
   "생크림 반컵(또는 휘핑크림, 우유)",
   "모짜렐라치즈 또는 부라타치즈(취향)",
   "과일·어린잎 채소(취향)"
  ],
  "steps": [
   "생크림 반컵, 계란 2개를 풀어주어요",
   "식빵에 계란물을 적셔요(속까지 스며들도록 10분 둘께요)",
   "달군 후라이팬에 기름을 둘러 토스트를 부쳐줘요",
   "겉이 조금 익고나면 설탕을 뿌려 구워줘요 저는 각각면에 2번씩 뿌려줬어요, 취향껏(3번도 맛있을듯,,ㅎ)",
   "설탕코팅할때 버터 한스푼 넣고 향 첨가하구요!",
   "다 익고나면 접시에 올려주고 치즈, 어린잎채소,과일 올려주면 끝!"
  ],
  "tip": []
 },
 {
  "id": "meal-32",
  "cat": "meal",
  "title": "꼬치전 시금치김밥",
  "img": "img/ig-meal-32.webp",
  "ig": "https://www.instagram.com/reel/Cx2AnjLpHL2/",
  "added": "2023-10-01",
  "serves": "3줄",
  "ingredients": [
   "꼬치전 6개",
   "밥 3주걱",
   "맛소금 0.5작은술",
   "참깨 1큰술",
   "참기름 2큰술",
   "김밥김",
   "시금치무침"
  ],
  "steps": [
   "밥 3주걱에 맛소금 0.5작은술, 참깨 1큰술, 참기름 2큰술넣고 섞어주세요",
   "김밥 김에 밥 한주걱을 얇게 펴주세요",
   "꼬치를 뺀 꼬지전 2개와 시금치를 올려 말아주세요",
   "먹기좋게 잘라주면 끝!!"
  ],
  "tip": [
   "간은 취향에 맞추어 조절해주세요"
  ]
 },
 {
  "id": "meal-33",
  "cat": "meal",
  "title": "구운토마토 로제파스타",
  "img": "img/ig-meal-33.webp",
  "ig": "https://www.instagram.com/reel/CyNxxMmp4DN/",
  "added": "2023-10-10",
  "serves": "2인분",
  "ingredients": [
   "방울토마토 300g",
   "마늘 한주먹",
   "리코타치즈 70g",
   "파마산가루 3큰술",
   "바질 한주먹",
   "올리브유 5큰술",
   "새우(생략가능)",
   "파스타면"
  ],
  "steps": [
   "반으로 가른 방울토마토와 마늘에 올리브유 둘러 함께 오븐행! (200도에 20분 구워줄께요)",
   "잘 구워진 토마토, 마늘과 리코타치즈 파마산치즈, 바질 넣고 잘 갈아주어요",
   "만들어진 소스와 새우 넣고 팬에 데워주어요",
   "익힌 파스타면을 팬에 넣고 섞어주면 끝! (너무 되직하면 면수 넣고 농도 맞추어 주세요!)"
  ],
  "tip": []
 },
 {
  "id": "meal-34",
  "cat": "meal",
  "title": "소고기 미역국",
  "img": "img/ig-meal-34.webp",
  "ig": "https://www.instagram.com/reel/C7OYafQSdzO/",
  "added": "2024-05-21",
  "serves": "",
  "ingredients": [
   "소고기 국거리(양지 등) 100g",
   "미역 1/3컵(10g)",
   "참기름 2큰술",
   "국간장 3큰술",
   "물 1.3L",
   "다진마늘 2/3큰술",
   "멸치액젓 1.5큰술"
  ],
  "steps": [
   "미역을 30분동안 불리고 가위로 잘게 잘라준다",
   "소고기의 핏물을 키친타올로 제거해준다",
   "냄비에 소고기와 참기름 2큰술 넣고 회색 빛이 돌때까지 중불에 볶는다",
   "물기를 뺀 미역과 간장 3큰술을 넣고 미역이 파래질때까지 볶는다",
   "물 500ml를 넣고 10분간 끓여준다",
   "나머지 물 800ml와 액젓 1.5큰술, 마늘 0.5큰술 넣고 30분 끓여준다",
   "간을 보고 싱거우면 소금, 짜면 물을 넣고 끓여주면 끝!"
  ],
  "tip": []
 },
 {
  "id": "meal-35",
  "cat": "meal",
  "title": "원팬 알리오올리오",
  "img": "img/ig-meal-35.webp",
  "ig": "https://www.instagram.com/p/C-AlOLavYti/",
  "added": "2024-07-29",
  "serves": "1인분",
  "ingredients": [
   "파스타면 1인분(스파게티, 링귀니 추천)",
   "물 500ml(끓이면서 조절)",
   "참치액 또는 치킨스톡 1큰술",
   "올리브유 5큰술",
   "다진마늘 1큰술",
   "페퍼론치노 반큰술",
   "소금"
  ],
  "steps": [
   "팬에 올리브유 5큰술 넣고 약불로 달궈주세요",
   "다진마늘 한큰술과 페퍼론치노 반큰술 넣고 약불에 기름 내주세요",
   "물 500ml, 참치액 1큰술, 파스타면 넣고 10분 끓여주세요",
   "익었는지 확인하고 물, 소금으로 익기와 간 조절해주시면 끝!"
  ],
  "tip": []
 },
 {
  "id": "meal-36",
  "cat": "meal",
  "title": "문어솥밥",
  "img": "img/ig-meal-36.webp",
  "ig": "https://www.instagram.com/reel/DTczlX-EwKR/",
  "added": "2026-01-13",
  "serves": "2-3인분",
  "ingredients": [
   "문어 250g(자숙문어)",
   "쌀 300ml",
   "물 300ml",
   "간장 3큰술+1큰술",
   "참치액 1.5큰술",
   "좋아하는 야채(당근, 양파, 팽이버섯)",
   "쪽파",
   "들기름 2큰술"
  ],
  "steps": [
   "문어와 야채를 잘게 다져주세요 (데코용 다리 2-3개는 썰지 말고 남겨두면 좋아요)",
   "들기름 2큰술, 야채, 문어를 솥에 넣고 볶다 간장 1큰술로 간해주세요",
   "쌀과 물을 1:1 비율로 넣어주세요 (쌀 300ml, 물 300ml)",
   "간은 100ml당 간장 1큰술, 참치액 반큰술 (간장 3큰술, 참치액 1.5큰술)",
   "끓으면 약불에 15분, 불 끄고 10분 뜸 들여주세요",
   "마지막에 다진 쪽파 올려주면 끝"
  ],
  "tip": []
 },
 {
  "id": "meal-37",
  "cat": "meal",
  "title": "페퍼런치볶음밥",
  "img": "img/ig-meal-37.webp",
  "ig": "https://www.instagram.com/p/DZMKp6-k2n-/",
  "added": "2026-06-05",
  "serves": "1인분",
  "ingredients": [
   "밥 1공기",
   "소고기 150-200g",
   "순후추",
   "통조림 옥수수",
   "버터",
   "쪽파 or 대파",
   "## 양념",
   "간장 1큰술",
   "맛술 반큰술",
   "굴소스 반큰술",
   "설탕 반큰술",
   "다진마늘 반큰술"
  ],
  "steps": [
   "중불에 달군 팬에 밥, 소고기, 순후추, 옥수수, 버터, 쪽파를 올려줘요",
   "양념넣고 밥 눌러주며 볶아주면 끝"
  ],
  "tip": []
 },
 {
  "id": "meal-38",
  "cat": "meal",
  "title": "참치두부찌개",
  "img": "img/ig-meal-38.webp",
  "ig": "https://www.instagram.com/p/DZMKp6-k2n-/",
  "added": "2026-06-05",
  "serves": "",
  "ingredients": [
   "두부 1모",
   "대파 1/3대",
   "양파 1/2개",
   "청양고추 2개",
   "참치 큰캔 1개",
   "## 양념",
   "고춧가루 2큰술",
   "간장 3큰술",
   "고추장 1큰술",
   "맛술 2큰술",
   "다진마늘 1큰술",
   "후추 3-4번 톡톡",
   "다시다 0.5작은술",
   "물 250ml"
  ],
  "steps": [
   "양념 재료 넣고 양념장 만들어줘요",
   "두부 한모, 대파 1/3대, 양파 1/2개, 청양고추 2개 썰어주세요",
   "냄비에 두부, 야채, 참치, 양념장 넣어주고 자작하게 끓이면 끝!"
  ],
  "tip": []
 },
 {
  "id": "meal-39",
  "cat": "meal",
  "title": "김치 생생우동",
  "img": "img/ig-meal-39.webp",
  "ig": "https://www.instagram.com/p/DZMKp6-k2n-/",
  "added": "2026-06-05",
  "serves": "",
  "ingredients": [
   "생생우동",
   "김치 한 줌",
   "물 400ml",
   "대파 1/2대",
   "고춧가루 1큰술",
   "식용유 3큰술"
  ],
  "steps": [
   "기름 두른 냄비에 파 듬성듬성 자르고, 고춧가루 1큰술 넣고 약불에 기름내주세요",
   "갈색으로 익어가면 김치 넣고 1-2분 볶아줘요",
   "물 넣고 끓이다 면과 스프 넣고 익혀주면 끝"
  ],
  "tip": []
 },
 {
  "id": "meal-40",
  "cat": "meal",
  "title": "단새우 카이센동",
  "img": "img/ig-meal-40.webp",
  "ig": "https://www.instagram.com/reel/Dd3mkVxNEnx/",
  "added": "2026-09-29",
  "serves": "",
  "ingredients": [
   "단새우(북방도화새우살 20미)",
   "밥 1공기",
   "## 단촛물",
   "식초 2큰술",
   "설탕 1작은술",
   "소금 한꼬집",
   "## 토핑",
   "다진쪽파",
   "계란노른자",
   "감태·날치알(기호)"
  ],
  "steps": [
   "밥에 단촛물 넣어 간을 맞춰주세요",
   "밥 봉긋하게 올리고 해동한 새우 씻어 올려주세요",
   "중간에 쪽파, 계란노른자 올려주세요"
  ],
  "tip": []
 },
 {
  "id": "dessert-01",
  "cat": "dessert",
  "title": "레몬포셋",
  "img": "img/c324e453476c.webp",
  "ig": "https://www.instagram.com/reel/DNsnwCVZrrj/",
  "added": "",
  "serves": "",
  "ingredients": [
   "레몬 3개",
   "생크림 200ml",
   "설탕 5큰술"
  ],
  "steps": [
   "레몬을 반으로 잘라 속을 파주세요 👉 이 때, 겉쪽을 칼로 잘라서 파내면 더 쉬워요",
   "생크림 200ml, 설탕 5큰술, 레몬제스트를 넣고 끓여주세요 👉한번끓어오르면 약불로 줄여주고 10분동안 졸여주세요 그래야 쫀쫀한 크림푸딩처럼 변해요",
   "레몬즙을 넣어 응고시켜요 👉 레몬즙 2/3만 넣어야 적당해요, 다 넣으면 너무 시더라고요",
   "레몬껍질이나, 종지에 부어준 후 냉장고에서 3시간 이상 응고",
   "블루베리와 허브로 데코해주면 더 예쁘고 맛나답니다"
  ],
  "tip": []
 },
 {
  "id": "dessert-02",
  "cat": "dessert",
  "title": "수박샤베트",
  "img": "img/fcd294fd96ad.webp",
  "ig": "https://www.instagram.com/reel/DM1tkQpTVtV/",
  "added": "",
  "serves": "",
  "ingredients": [
   "수박",
   "꿀",
   "레몬즙",
   "허브"
  ],
  "steps": [
   "수박을 길쭉하게 잘라 얼려준다",
   "강판에 갈아주세요",
   "기호에따라 꿀, 알룰로스, 레몬즙, 허브를 넣어주면 끝"
  ],
  "tip": []
 },
 {
  "id": "dessert-03",
  "cat": "dessert",
  "title": "바질토마토에이드",
  "img": "img/d42d4928cbbd.webp",
  "ig": "https://www.instagram.com/reel/CtKviXCu5ZV/",
  "added": "",
  "serves": "",
  "ingredients": [
   "토마토 500g",
   "설탕 500g",
   "레몬 1개(or레몬즙 5스푼)",
   "바질 8g"
  ],
  "steps": [
   "토마토 끝에 십자 칼집을 내주세요",
   "끓는 물에 15초간 데친후 찬물로 쏙~",
   "토마토 껍질을 제거해주세요",
   "바질을 잘게 다져주고, 레몬도 슬라이스!",
   "모든 재료에 설탕 넣고 섞으면 끝!"
  ],
  "tip": []
 },
 {
  "id": "dessert-04",
  "cat": "dessert",
  "title": "코스트코 와인추천",
  "img": "img/d078f69b19ea.webp",
  "ig": "https://www.instagram.com/reel/DE1yZ20ytZG/",
  "added": "",
  "kind": "guide",
  "lead": [],
  "points": [],
  "items": [
   {
    "t": "빌라욜란다 무스카토 다스티",
    "price": "15,990원",
    "note": "달달한 와인밖에 못드신다면 이걸로하세요\n달달함과 너무달달함 그 중간사이,,\n마치 바닐라라떼 덜달게 같은 느낌 아시나요?\n식전주로 좋더라고요\n와인병도 이러케나 이쁘니 와알못에겐 딱입니다"
   },
   {
    "t": "커클랜드 말보로 쇼비뇽 블랑",
    "price": "11,490원",
    "note": "하정우와인으로 유명한\n코스트코 화이트와인이에요\n한때 품절대란으로 개인수량 제한 있었더랬죠\n이건 달진 않지만 그렇다고 떫지도\n알콜향이 심하지도 않아\n가볍게 먹기 딱 좋더라고요"
   }
  ]
 },
 {
  "id": "dessert-05",
  "cat": "dessert",
  "title": "보늬밤",
  "img": "img/ig-dessert-05.webp",
  "ig": "https://www.instagram.com/p/CkW6momBIiM/",
  "added": "2022-10-31",
  "serves": "",
  "ingredients": [
   "밤",
   "베이킹소다 1숟갈",
   "설탕(깐 밤 무게의 60%)"
  ],
  "steps": [
   "물에 불려둔 밤을 속껍질을 남기고 깐다 (속살이 나오면 삶을 때 으스러져요)",
   "베이킹소다를 한숟갈 푼 물에 밤을 반나절~하루 담가둔다 (씁쓸한 맛을 빼기 위함!)",
   "2-3번 삶아주며 표면에 남은 불순물을 제거! (이쑤시개로 줄기도 빼주었어요)",
   "설탕을 넣고 30분 동안 조린다 (설탕 양은 깐 밤 무게의 60% 정도)"
  ],
  "tip": []
 },
 {
  "id": "dessert-06",
  "cat": "dessert",
  "title": "뱅쇼",
  "img": "img/ig-dessert-06.webp",
  "ig": "https://www.instagram.com/p/CmvIkbeB9Jq/",
  "added": "2022-12-29",
  "serves": "",
  "ingredients": [
   "와인 1병",
   "사과 1개",
   "레몬 1개",
   "귤 1개(상큼한 과일로 대체 가능)",
   "시나몬스틱 3개 또는 가루",
   "팔각 1-2개",
   "설탕 3스푼",
   "물 200ml"
  ],
  "steps": [
   "과일을 베이킹소다에 깨끗이 씻고 슬라이스",
   "냄비에 모든 재료를 넣고 데우듯이 끓여준다 (처음엔 강불로 온도를 올리고, 기포가 올라오면 약중불로 20분간 데워줘요)"
  ],
  "tip": []
 },
 {
  "id": "dessert-07",
  "cat": "dessert",
  "title": "버터 3종 (레몬딜·라임바질·허니오렌지)",
  "img": "img/ig-dessert-07.webp",
  "ig": "https://www.instagram.com/p/Cm6Jkiih4W2/",
  "added": "2023-01-02",
  "serves": "",
  "ingredients": [
   "## 레몬딜버터",
   "레몬 2개",
   "딜 10g",
   "버터 200g",
   "다진마늘 0.5t",
   "레몬즙 0.5",
   "## 라임바질버터",
   "라임 2개",
   "바질 10g",
   "버터 200g",
   "라임즙 0.5",
   "## 허니오렌지버터",
   "오렌지 1개",
   "꿀 1",
   "버터 300g",
   "오렌지즙 1"
  ],
  "steps": [
   "레몬·라임·오렌지 껍질을 각각 강판에 갈아 가루를 만든다",
   "딜과 바질은 줄기를 제거하고 잎을 잘게 잘라준다",
   "레몬딜: 버터, 레몬가루, 딜, 마늘, 레몬즙을 섞어준다",
   "라임바질: 버터, 라임가루, 바질, 라임즙을 섞어준다",
   "허니오렌지: 버터, 오렌지가루, 꿀, 오렌지즙을 섞어준다",
   "원통 모양으로 만들어 유산지에 말아 굳혀준다"
  ],
  "tip": [
   "빵은 물론 그릴드치킨, 오일파스타, 모닝빵에 한 조각 올려도 풍미가 확 살아요"
  ]
 }
];
