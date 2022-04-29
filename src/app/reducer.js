import {fetchDataSuccess, fetchDataFailure, deleteData, editData} from './actionCreater'
export const fetchPosts = () => {
    console.log('am called fetchPost')
    return (dispatch) => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(res => dispatch(fetchDataSuccess(res)))
        .catch(err => dispatch(fetchDataFailure(err.messaga)))
    }
}
export const deleteRecord = (data, id) => {
    console.log('%%%%%%%%%%%%%%%%',data. id)
   let filteredData = data.filter(ele => ele.id !== id);
   console.log('%%%%%%%%%%%%%%%%filteredData',filteredData)
   return (dispatch) => {dispatch(deleteData(filteredData))};
}

export const editRecord = (data, element)=> {
    console.log('**************** eedittttttttt',data, element);
    data.forEach(ele=>{
        if(ele.id === element.id){
            console.log('ele',ele);
           ele.title = element.title;
            console.log('ele',ele);
        }
     })
     console.log('**************** editedData',data);
     return (dispatch) => {dispatch(deleteData(data))};
}