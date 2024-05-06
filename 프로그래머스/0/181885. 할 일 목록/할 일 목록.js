function solution(todo_list, finished) {
    return todo_list.filter((todo, i) => !finished[i]);
}