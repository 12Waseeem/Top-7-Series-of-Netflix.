export const Practices = ()=>{
    const student = [1,2];
    return <>
    <p>{student.length==0 && "No student is found"}</p>
    <p>Number of Student:{ student.length}</p>
    </>
};