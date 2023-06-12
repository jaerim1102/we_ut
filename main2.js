   // 각 div에 적용할 색상 배열
   const divColors = ['#000228', '#fff', '#AA11F8', '#00D6A2', '#FCAD00', '#E82B60', '#524AFA', '#4941FE'];

   // 헤더 요소 선택
   const header = document.querySelector('#header');
   header.style.backgroundColor = divColors[0]; // 초기 헤더 배경색 설정
   
   // 각 div에 mouseenter 이벤트 리스너 추가
   for (let i = 1; i <= 8; i++) {
     const div = document.querySelector(`#div${i}`);
     div.addEventListener('mouseenter', () => {
       header.style.backgroundColor = divColors[i-1]; // 해당 div에 해당하는 색상으로 헤더 배경색 변경
     });
   }
