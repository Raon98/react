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

    React 배열
    - React에서 state 내부의 값을 직접적으로 수정하면 절대로 안됨
    push, splice, unshift, pop 같은 내장함수는 배열 자체를 직접 수정하게 되므로 사용 X
    concat, slice, map, filter 같은 함수를 사용 O
    [불변성의 법칙]
    *중요 : 불변성을 유지해야, React에서 모든것들이 필요한 상황에 ReRandering 되도록 설계할 수 있고
 *         그렇게 해야 나중에 최적화 할 수 있다.
 *
 *  [ UseConfim ]
   - 이벤트를 실행하기 전에 사용자에게 확인을 받는 기능을 하는 함수
   - 사용자가 어떤것을 저장하거나 삭제할 때 유용하게 사용
    #실행순서
    - Browser가 이벤트를 막고 confirm을 실행한 후, 확인을 하면 onConfire 이벤트 진행 - 취소시 onCancel 진행
        [CODE EX]
         const useConfirm = (message = "", onConfirm, onCancel) => { // message의 기본값은 ""
          if (!onConfirm || typeof onConfirm !== "function") {
            return; // 매개변수 onConfirm가 없거나 onConfirm이 함수가 아나라면 return 실행
          }
          if (onCancel && typeof onCancel !== "function") { // onCancle은 필수요소는 아님
            return;
          }
          const confirmAction = () => { // confirm창의 응답에 따른 이벤트 실행 함수
            if (confirm(message)) { // 확인을 눌렀다면
              onConfirm();
            } else { // 취소를 눌렀다면
              onCancel();
            }
          };
          return confirmAction;
        };

 *
 */
/**
 @메모4 : React에서 DOM에 직접적인 접근을 할 때 REF!
    DOM에 직접적인 접근이 필요할 떄
    1. INPUT / TEXTAREA 등에 포커스 해야 할 떄
    2. 특정 DOM의 크기를 가져와야 할 때
    3. 특정 DOM에서 스크롤 위치를 가져오거나 설정을 해야 할 때
    4. 외부 라이브러리(플레이어,차트,캐로철 등) 을 사용 할 떄

 @외부 라이브러리 사용시 주의사항
    1. 라이브러리를 적용 할 DOM에 ref를 설정
    2. componentDidMount가 발생하면 외부라이브러리 인스턴스를 생성
    3. 컴포넌트 내용이 바뀌어야 할 일이 있다면, componentDidUpdate에서 기존의 인스턴스를 제거하고 새로 인스턴스 생성
       - 이 과정에서 실제 데이터가 바뀌었는지 비교 필수
    4. 컴포넌트가 언마운트 될때 인스턴스 제거
 */
/** @ 여기서 용어정리
 클래스(Class) 란
 개념
 1. 객체를 만들어 내기 위한 설계도 혹은 틀
 2. 연관되어 있는 변수와 메서드의 집합

 객체(Object) 란
 개념
 1. 소프트웨어 세계에 구현할 대상
 2. 클래스에 선언된 모양 그대로 생성된 실체
 특징
 1. ‘클래스의 인스턴스(instance)’ 라고도 부른다.
 2. 객체는 모든 인스턴스를 대표하는 포괄적인 의미를 갖는다.
 3. oop의 관점에서 클래스의 타입으로 선언되었을 때 ‘객체’라고 부른다.

 인스턴스 (Instance) 란
 개념
 1. 설계도를 바탕으로 소프트웨어 세계에 구현된 구체적인 실체
 2. 즉, 객체를 소프트웨어에 실체화 하면 그것을 ‘인스턴스’라고 부른다.
 3. 실체화된 인스턴스는 메모리에 할당된다
 */

/** @javascipt replace 정규식
 * var 변수;
 *
 * 변수.replace(,);
 * g : 모든 패턴 체크(global)
 * i : 대소문자를 구별없이 체크
 * m : 여러줄 체크
 * ^ : 처음
 *
 * $ : 끝
 * . : 한문자
 * .replace(' ','')          : 첫번째 공백 제거
 * .replace(/\-/g,'')        : - 제거
 * .replace(/[-]/g,'')
 * .replace(/,/g,'')         : , 제거
 * .replace(/^\s+/,'')       : 앞의 공백 제거
 * .replace(/\s+$/,'')       : 뒤의 공백 제거
 * .replace(/^\s+|\s+$/g,'') : 앞뒤 공백 제거
 * .replace(/\s/g,'')        : 문자열 내의 모든 공백 제거
 * 2가지 이상사용시 .replace(/[-]|\s/gi, ''); 등으로 |(or)을 가지고 사용가능 (-,공백제거)
 *
 * var Patten = /^[0-9\-]{12,12}$|^[0-9]{10,10}$/;   // 0~9의 숫자와 특수문자 -사용가능한 12자리수 or 0~9의 숫자의 10자리수
 * var Patten = /^[a-zA-Z0-9]{1,20}$/;   // a~z,A~Z,0~9인 1~20자리수까지
 * var Patten = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;  // 영문,숫자,특수문자로 이루어진 8~15자리 (비밀번호에 많이사용)
 */
