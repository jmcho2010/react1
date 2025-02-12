// Component : 상태를 화면에 표시
// Hooks : 함수형 컴포넌트에 기능을 제공.
// API(서버개발자 구현) : 서버로 부터 데이터를 불러올떄
// 상태변경(redux / reducer) : 상태 변경
const ActiveUsersList = () => {
    const [users, setUsers] = useState([])
    
    useEffect(() => {
      const loadUsers = async () => {  
        const response = await fetch('/some-api')
        const data = await response.json()
        setUsers(data)
      }
  
      loadUsers()
    }, [])
    
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
  
    return (
      <ul>
        {users.filter(user => !user.isBanned && user.lastActivityAt >= weekAgo).map(user => 
          <li key={user.id}>
            <img src={user.avatarUrl} />
            <p>{user.fullName}</p>
            <small>{user.role}</small>
          </li>
        )}
      </ul>    
    )
  }