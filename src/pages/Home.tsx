import { Link } from 'react-router-dom';

function Home() {
    return (
        <div style={{ padding: '20px' }}>
            <h1>홈 페이지</h1>
            <p>Todo 앱에 오신 것을 환영합니다!</p>
            <Link to="/todos">
                <button style={{ padding: '10px 20px', cursor: 'pointer' }}>
                    Todo 목록 보기
                </button>
            </Link>
        </div>
    );
}

export default Home;