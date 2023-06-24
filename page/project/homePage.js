import catPage from "../../componrnt/catPage"
import postPage from "../../componrnt/postPage"
import { useEffect, useState } from "../../lib"


const homePage = () => {
    const [data,setData]= useState([])
    const [post, setPost] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/categories')
        .then((response=> response.json()))
        .then(data=>setData(data))

    },[])
    const handoClick=(id)=>{
            fetch(`http://localhost:3000/categories/${id}?_embed=posts`)
            .then(response=> response.json())
            .then(data=>setPost(data.posts))
        
    }
  return `
  ${catPage({data,Onclick: handoClick})}
  ${postPage({post})}
  `
}

export default homePage