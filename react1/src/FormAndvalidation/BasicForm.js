
// 퀴즈 
// 아래의 화면을 확인하여
// 이 코드를 완성

// 요구사항
// 1. 폼 상태 관리
// 2. 입력값 변경 처리
// 3. 폼 제출 처리.

// 폼 처리와 유효성검사
//  -> 폼에서 처리해주는 내용? : 사용자가 입력한 값.
//  -> 사용자들은 언제나 올바른 데이터만 입력하는가?
//     (사용자들은 실수를 할 수 있기 때문에 언제나 사용자가 입력한 값들을 체크)
//  -> 사용자가 입력한 값들을 체크하고 확인하는것이 유효성 검사.
//     (정규표현식을 통해 사용자가 입력한 수식이 올바른지 아닌지 체크 가능.)
//   -> html 기본속성과 js를 통해서(조건식) 유효성검사도 가능.
function BasicForm(){
// 폼 상태 관리
    const [formData, setFormData] = useState({
        name: '',
        email: ''
      });
  // 입력값 변경 처리
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
  // 폼 제출 처리
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('제출된 데이터:', formData);
      };

    return (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">이름:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">이메일:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <button type="submit">제출</button>
        </form>
      );
}

export default BasicForm;