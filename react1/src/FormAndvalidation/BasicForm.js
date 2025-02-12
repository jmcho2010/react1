
// 퀴즈 
// 아래의 화면을 확인하여
// 이 코드를 완성

// 요구사항
// 1. 폼 상태 관리
// 2. 입력값 변경 처리
// 3. 폼 제출 처리.

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