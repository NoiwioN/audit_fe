import UsersAPI from "@/lib/api/Users";
import UserDetail from "@/components/UserDetail";

export default function index({user}){
 return <UserDetail user={user}/>
}
export async function getStaticProps (context) {
 const user= await UsersAPI.findById(context.params.id)
    return {
     props:{user},revalidate:10
    }
}
export async function getStaticPaths(){
    const users= await UsersAPI.findAll();
    const paths= users.map((user)=>(
        {params:{id:user.id.toString()}
        })
    )
    return {paths, fallback:true}
}