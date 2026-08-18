import React, { useState } from 'react'
import { API_SERVER_HOST, postAdd } from '../../api/todoApi';
import ResultModal from '../common/ResultModal';

const initState = {
    title: "",
    writer: "",
    dueDate: "",
    completed: false
};

const AddComponent = () => {
    const [todo, setTodo] = useState(initState);

    // 등록 결과 상태
    const [result, setResult] = useState(null);

    // 입력값 변경 처리
    const handleChangeTodo = (e) => {
        const {name, value} = e.target;

        setTodo((prevTodo) => ({
            ...prevTodo, [name]: value,
        }));
    };

    // 등록 버튼 클릭 처리
    // const handleClickAdd = () => {
    //     console.log(todo);
    // }

    const handleClickAdd = () => {
        postAdd(todo).then(result => {
            console.log(result);

            // 등록된 Todo 번호 저장
            setResult(result.no);

            // 초기화
            setTodo({...initState}).catch(e => {
                console.error(e);
            })
        })
    }

    // 모달 닫기
    const closeModal = () => {
        setResult(null);
    }
  return (
    <div className='m-2 mt-10 border-2 border-sky-200 p-4'>
        {/* 등록 결과 모달 */}
        {result !== null && (
            <ResultModal title={"Add Result"} content={`New ${result} Added`} callBackFn={closeModal} />
        )}
        {/* 내용 */}
        {makeInput({
            title: "내용",
            value: "title",
            todo,
            handleChange: handleChangeTodo
        })}

        {/* 작성자 */}
        {makeInput({
            title: "작성자",
            value: "writer",
            todo,
            handleChange: handleChangeTodo
        })}

        {/* 마감일 */}
        {makeInput({
            title: "마감일",
            value: "dueDate",
            todo,
            type: "date",
            handleChange: handleChangeTodo
        })}

        {/* 등록버튼 */}
        <div className="flex justify-end p-4">
            <button type='button' className='w-32 rounded-md bg-blue-500 px-4 py-3 text-lg font-semibold text-white hover:bg-blue-600' onClick={handleClickAdd}>ADD</button>
        </div>
      
    </div>
  )
}

const makeInput = ({title, value, todo, handleChange, type="text"}) => (
    <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
            <div className="w-1/5 p-6 text-right font-bold">{title}</div>

            <input type={type} className="w-4/5 rounded-r border border-solid border-neutral-500 p-6 shadow-md" name={value} value={todo[value]} onChange={handleChange}/>
        </div>
    </div>
)


export default AddComponent
