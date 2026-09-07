import  { useEffect, useState } from 'react'
import { getOne } from '../../api/todoApi';
import useCustomMove from '../../hooks/useCustomMove';
import useCustomLogin from '../../hooks/useCustomLogin';


const initState = {
    no: 0,
    title: "",
    writer: "",
    dueDate: null,
    completed: false,
};

const ReadComponents = ({no}) => {
    const [todo, setTodo] = useState(initState);
    const {moveToList, moveToModify} = useCustomMove();

    // 로그인 정보 가져오기
    const {loginState} = useCustomLogin();

    // 현재 로그인한 사용자가 작성자인지 확인
    const isWriter = loginState.email === todo.writer;

    useEffect(() => {
        getOne(no).then((data) => {
            console.log(data);
            setTodo(data);
        });
    }, [no]);

  return (
    <div className='border-2 border-sky-200 mt-10 m-2 p-4'>
      {makeDiv("번호", todo.no)}
      {makeDiv("작성자", todo.writer)}
      {makeDiv("내용", todo.title)}
      {makeDiv("마감일", todo.dueDate)}
      {makeDiv("완료 여부", todo.completed ? "완료" : "미완료")}


      {/* 버튼 영역 */}
      <div className="flex justify-end gap-3 p-4">
        <button type='button' className='w-32 rounded-md bg-blue-500 px-4 py-3 text-lg font-semibold text-white hover:bg-blue-600' onClick={moveToList}>List</button>
        {/* 본인이 작성한 Todo에만 수정 버튼 표시 */}
        {isWriter && (
            <button type='button' className='w-32 rounded-md bg-red-500 px-4 py-3 text-lg font-semibold text-white hover:bg-blue-600' onClick={() => moveToModify(no)}>Modify</button>
        )}
      </div>
    </div>
  )
}

const makeDiv = (title, value) => (
    <div className="flex items-center border-b border-gray-200 last:border-b-0">
        <div className="w-1/4 bg-gray-50 px-6 py-4 text-right font-semibold text-gray-700">
            {title}
        </div>
        <div className="w-3/4 px-6 py-4 text-gray-900">{value}</div>
    </div>
)

export default ReadComponents
