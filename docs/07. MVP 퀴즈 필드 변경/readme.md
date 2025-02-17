# 기능 변경 요구 사항

- 하나의 비디오에 N개 이상의 퀴즈가 배열 형태로 제공 된다.

```json
{
  "category": "news",
  "date": "20250214",
  "totalPage": 1,
  "currentPage": 1,
  "video": {
    "title": "20250214.미국, 저소득층 및 장애인 지원 확대 위한 지역 사회 복지 프로그램 발표 #어린이뉴스",
    "thumbnails": {},
    "videoId": "CE10X1KWqFw",
    "url": "https://youtube.com/shorts/CE10X1KWqFw"
  },
  "quiz": [
    {
      "type": "blank",
      "question": ["미국이", "*", "*", "*", "*", "층을", "돕기로", "했어요"],
      "answer": ["저", "소", "득", "층"],
      "options": ["저", "소", "득", "층", "가", "정"]
    },
    {
      "type": "blank",
      "question": ["미국의", "모든", "*", "에서", "도움을", "줘요"],
      "answer": ["주"],
      "options": ["주", "시", "군", "구", "동", "읍"]
    }
  ]
}
```

- 한 페이지당 비디오와 퀴즈 하나가 따로 따로 제공 되어야 한다.

ex : 비디오 1 -> 비디오 1에 대한 퀴즈 1 -> 비디오 1에 대한 퀴즈 2 -> 비디오 2 ...

# 현재의 구조

현재 구조는 한 페이지에서 비디오와 퀴즈가 함께 주어지며 다음 페이지에선 새로운 비디오와 새로운 퀴즈가 있을 것이라 기대하고 있음

클라이언트 단에서 변경되는 상태는 `page state`로 다음 페이지로 이동하면 상단에 존재하는 `ProgressBar , Counter` 의 진척도가 변경 된다.

# TODO

- [x] video ratio 필드 제거
- [x] setFiledByKey 버그 수정 -> 원하는 key 를 인수로 넣어 객체를 생성해도 타입이 원하는데로 추론되지 않아 인수로 key 를 받지 않고 고정적으로 { key : number } 형태로 객체를 생성하도록 수정

- [x] `/{category}/{date}/?page={number}` 에서 받은 `json` 데이터를 `queue` 형태로 변환하여 클라이언트 단의 브라우저 페이지가 변경 될 때 마다 사용 할 정보를 `queue`에서 꺼내어 사용 할 수 있도록 한다.
- [x] 이 때 클라이언트 단의 페이지와 API 요청에 사용하는 페이지 두 개의 상태를 다르게 관리해야 한다.
  - API 요청과 관련된 상태가 정의된 파트와 , 클라이언트 단에서 정의되는 상태가 정의되는 위치를 구분하자

```tsx
export const QuizWidget: React.FC<QuizWidgetProps> = ({ category, date }) => {
  const [page, setPage] = useState<number>(1);
  const query = useGetQuizByCategory({ category, date, page });
  const handlePage = (callback: SetStateAction<number>) => setPage(callback);

  return (
    <Suspense fallback={<div>...loading</div>}>
      <QuizItem query={query} handlePage={handlePage} />
    </Suspense>
  );
};
```

```tsx
const QuizItem: React.FC<QuizItemProps> = ({ query, handlePage }) => {
  const { totalPage, currentPage, video, quiz } = use(query.promise);
  const [pointer, setPointer] = useState<number>(0);

  const handleNext = () =>
    either(
      pointer === quiz.length,
      () => setPointer((pointer) => pointer + 1),
      () => {
        handlePage((page) => page + 1);
        setPointer(0);
      }
    );

  return (
    <Flex as="main" direction="column" gap="lg" align="center">
      <QuizProgressNavigationBar current={currentPage} total={totalPage} />
      {either(
        pointer === 0,
        <QuizFool onCorrect={handleNext} quiz={quiz[pointer - 1]} />,
        <QuizVideo
          videoId={video.videoId}
          title={video.title}
          onClick={handleNext}
        />
      )}
    </Flex>
  );
};
```

다음과 같이 서버 api 요청과 관련된 상태는 최상단인 QuizWidget 컴포넌트에서 관리하고

서버에서 받은 data 를 관리 할 state 는 하위 컴포넌트인 QuizItem 컴포넌트에서 관리하도록 한다.

데이터를 queue 형태로 관리하기 보다 직접 포인터 상태를 이동시키도록 한다.
