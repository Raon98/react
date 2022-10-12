/**
 @ 메모1 : REACT 컴포넌트 정리
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

/**
 @ 메모2 : Component LifeCycle
    1. 생성
        constructor -> componentWillMount -> render -> componentDidMount
    2. 제거
        componentWillmount
    3. component의 prop 변경
        componentWIllReceiveProps -> shouldComponentUpdate -> componentWillUpdate -> render -> componentDidUpdate
    4. State가 변경
        shouldComponentUpdate -> componentWillUpdate -> render -> componentDidUpdate

    1. constructor
        - 생성자 메소드로서 컴포넌트가 처음 만들어질 때 생성
        - 이 Method에서 기본 state를 정할 수 있습니다.
    2. componentWIllMount
        - Component가 DOM위에 만들어지기 전에 실행됩니다.
    3. render
        - Component Rendering을 담당
    4. componentDidMount
        - Component가 만들어지고 첫 rendering을 다 마친후 실행되는 메소드
        - 이 안에서 다른 JavaScript Framework를 연동하거나, setTimeout.setInterval 및 AJAX 등 처리
    5. componentWillReceiverProps
        - Component가 prop을 새로 받았을때 실행
        - propdp 따라 state를 업데이트해야 할 떄 사용하면 유용
        - 이안에서 this.setState()를 실행해도 추가적으로 Rendering 하지 않음
    6. shouldComponentUpdate
        - props혹은 state가 변경되었을 떄, ReRendering을 하지 말지 정하는 Method
        ex) shouldComponentUpdate(nextProps, nextState){
            console.log("shouldComponentUpdate: " + JSON.stringify(nextProps) + " " + JSON.stringify(nextState));
            return nextProps.id !== this.props.id; // 비교 반환 연산
            }
    7. ComponentWillUpdate
        - Component가 Update되기전에 실행
        - this.setState() 금지 ->무한 루프에 빠짐
    8. ComponentDidUpdate
        - Component가 Rerendering을 마친 후 실행
    9. ComponentWillUnmount
        - Component가 DOM에서 사라진 후 실행되는 Method
 */
/**
  @메모3 : React 기초정리
    React는 Props 와 State로 나뉜다.

    defaultProps : props가 실수로 빠졌을경우 기본값을 설정
    static defaultprops = { name : '기본이름 ' }


 */