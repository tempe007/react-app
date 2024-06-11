/*

- CRA(create-react-app) 디폴트 파일 중 하나
- 리액트 프로젝트를 생성하면 index.js에서 사용
- 앱의 퍼포먼스 시간들을 분석하여 객체 형태로 보여주는 것이 목적.
- 다음과 같이 작성하여 콘솔에서 확인이 가능.

#### web-vital ####
- 웹에서 사용자 경험에 영향을 미치는 측정 값들.
- 구글은 두가지 범주의 도구를 제공
    Lab tools : 시뮬레이션된 환경에서의 측정
    Field tools : 실 사용자로부터 수집한 데이터에 기반
- Google이 모든 성능을 알 필요 없고 중요하다고 강조하는 3가지의 매트릭스를 Core Web Vitals라고 하여 가장 기본이자 핵심지표라고 일컫는다.
  LCP(Largest Contentful Pain)
    웹 페이지의 로딩 속도
    즉, HTML의 모든 요소가 랜더링 완료까지 걸리는 시간
    2.5초 이하일 경우 좋은 상태, 4초 이상일 경우 문제가 있는 상태
- FID(First Input Delay)
    다음 액션이 가능하게 되는 시간
    즉, JS 기반의 컨트롤을 사용할 때 요청받는 액선의 처리를 보류하는 시간.
    구글에서는 페이지 로드 중 발생하는 입력 작업 불가능 시간의 합계인 TBT를 통해서 대신 측정
     TBT는 100ms 이하면 좋은 상태, 300ms 이상이면 나쁜 상태
- CLS(Cumulative Layout Shift)
    시각적인 안정성에 대한 지표
    세션 기간이라는 하나 이상의 레이아웃 이동이 이뤄지는 경우에 의해 점수가 달라진다.
    0.1 이하면 좋은 상태, 0.25 이상이면 나쁜 상태
- 이외에도 다른 지표가 있다.
    TTFB(Time To First Byte)
      요청 시간과 그에 해당하는 자원의 첫 바이트가 도달하는 시간을 의미
      800ms 이하면 좋은 상태, 1800ms 이상이면 나쁜 상태
    FCP(First Contentful Paint)
      페이지가 로드되기 시작한 시점부터 컨텐츠의 일부가 화면에 렌더링이 되기 시작한 시점까지의 시간.
      1.8초 이하면 좋은 상태, 3.0초 이상이면 나쁜 상태
*/

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
