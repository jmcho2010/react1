// 요구사항:
// 1. JSONPlaceholder API를 사용하여 사용자 목록을 불러오기
// 2. 로딩 상태와 에러 상태 처리하기
// 3. 사용자 목록에서 특정 사용자 클릭 시 상세 정보 표시
// 4. 새로고침해도 데이터 유지되도록 구현
// 아래의 컴포넌트 참조
function UserList() {
    const dispatch = useDispatch();
    const { users, status, error, selectedUser } = useSelector((state) => state.users);
  
    useEffect(() => {
      dispatch(fetchUsers());
    }, [dispatch]);
  
    if (status === 'loading') return <div>로딩 중...</div>;
    if (status === 'failed') return <div>{error}</div>;
  
    return (
      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ flex: 1 }}>
          <h2>사용자 목록</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {users.map(user => (
              <li 
                key={user.id}
                onClick={() => dispatch(selectUser(user))}
                style={{
                  padding: '10px',
                  margin: '5px 0',
                  border: '1px solid #ddd',
                  cursor: 'pointer',
                  backgroundColor: selectedUser?.id === user.id ? '#e3e3e3' : 'white'
                }}
              >
                <h3>{user.name}</h3>
                <p>{user.email}</p>
              </li>
            ))}
          </ul>
        </div>
        {selectedUser && <UserDetail user={selectedUser} />}
      </div>
    );
  }

// UserDetail.js
function UserDetail({ user }) {
    return (
      <div style={{ flex: 1, padding: '20px', border: '1px solid #ddd' }}>
        <h2>사용자 상세 정보</h2>
        <div>
          <p><strong>이름:</strong> {user.name}</p>
          <p><strong>사용자명:</strong> {user.username}</p>
          <p><strong>이메일:</strong> {user.email}</p>
          <p><strong>전화번호:</strong> {user.phone}</p>
          <p><strong>웹사이트:</strong> {user.website}</p>
          <h3>주소</h3>
          <p>{user.address.street}, {user.address.suite}</p>
          <p>{user.address.city}, {user.address.zipcode}</p>
          <h3>회사</h3>
          <p><strong>회사명:</strong> {user.company.name}</p>
          <p><strong>사업:</strong> {user.company.bs}</p>
          <p><strong>슬로건:</strong> {user.company.catchPhrase}</p>
        </div>
      </div>
    );
  }