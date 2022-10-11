/**
 Presentational Component  = Dumb Component
 오직 뷰 만 담당하는 컴포넌트!
   1. DOM Element / style / Dumb 컴포넌트 / Smart 컴포넌트를 가지고 있을 수도 있다.
   2. 리덕스의 Store에는 접근권환 X -> 오직 props로만 데이터를 가져올수 있다
   3.대부분의 경우 state를 갖고있지 않으며, 갖고 있을 경우엔 데이터에 관련된것이 아니라 UI에 관련된것이여야 합니다.
   4. 주로 함수형 컨포넌트로 작성되며 , State를 갖고있어야하거나 최적화를 위해 LifeCycle이 필요해질때 클래스 컴포넌트로 작성됩니다.

 Container Component - Smart Component
 프리젠테이션널 컴포넌트들과 컨테이너 컴포넌트들을 관리하는 것을 담당
   1. 주로 내부에 DOM Element가 직접적으로 사용되는 경우 X -> 사용되는 경우는 감싸는 용도
   2. 스타일을 가지고있지 않는다 - 모두 Presentational 에 정의
   3. 상태를 가지고 있을 떄가 많으며, 리덕스에 직접적으로 접근 할 수 있습니다.

 UI쪽과 DATA 부분이 분리되어있어서 유지보수 및 재사용률도 높여줌


 */