# useEffect

REACT는 동작할 때 마다 새롭게 UI를 새로고침하여 모든 코드를 render하지만 useEffect를 사용하면 특정 state가 변경되었을 때만 특정 코드를 실행할 수 있도록 기능을 제공한다.

- DependencyList에 아무것도 넣지 않았을 떄
  - 처음 랜더링할 때 특정 코드를 실행
- DependencyList 특정 state를 넣었을떄
  - 처음 랜더링할 떄 특정 코드를 실행
  - 특정 state가 변경될 때 특정 코드를 실행
