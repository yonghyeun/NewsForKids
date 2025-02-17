# 기능 요구 사항

- [ ] 마지막 퀴즈 풀이가 종료 되면 성공 페이지로 라우팅 하기

# TODO

- [ ] 다음 버튼에서 quiz 의 마지막 index 에 도달하면 성공 페이지로 렌더링 양상 변경하기

처음 아이디어는 NextJS 의 병렬 라우팅 혹은 인터셉트 라우팅을 이용하려 했으나

성공 페이지는 하드 라우팅 (URL 을 직접 쳐서 들어오는) 을 통해 들어오지 못하도록 해야 하기 때문에

위젯 내부에서 state를 이용해 렌더링 하도록 해야 한다.

```tsx
const QuizItem: React.FC<QuizItemProps> = ({ query, handlePage }) => {
  const [pointer, setPointer] = useState<number>(0);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const { totalPage, currentPage, video, quiz } = use(query.promise);

  const handleMovePointer = () => setPointer((pointer) => pointer + 1);
  const handleMoveNext = () => {
    either(
      pointer === quiz.length,
      () => setPointer((pointer) => pointer + 1),
      () =>
        either(
          currentPage === totalPage,
          () => {
            handlePage((page) => page + 1);
            setPointer(0);
          },
          () => setIsSuccess(true)
        )
    );
  };

  if (isSuccess) {
    return <div>success!!</div>;
  }

  return (
    <Flex as="main" direction="column" gap="lg" align="center">
      <QuizProgressNavigationBar current={currentPage} total={totalPage} />
      {either(
        pointer === 0,
        <QuizFool onCorrect={handleMoveNext} quiz={quiz[pointer - 1]} />,
        <QuizVideo
          videoId={video.videoId}
          title={video.title}
          onClick={handleMovePointer}
        />
      )}
    </Flex>
  );
};
```

다음과 같이 수정하도록 한다.

- `QuizVideo` 는 항상 pointer 를 이동시키기만 하도록 props 로 받는 핸들러를 정의한ㄷ.
- `QuizFool` 이 받는 onCorrect 메소드는 pointer 를 이동시키거나 , 다음 비디오를 불러오거나 성공 페이지로 이동 시키도록 한다.

- 공부해야 할 TODO

현재 읽은 쏙쏙 들어오는 함수형 프로그래밍은 함수형 사고에 대해서만 가르쳐줬을 뿐 함수헝 프로그래밍 문법에 대해 정확하지 않다.

함수형 프로그래밍 문법을 https://www.youtube.com/playlist?list=PLuPevXgCPUIMbCxBEnc1dNwboH6e2ImQo 을 참고 한 후 리팩토링을 거치도록 하자
