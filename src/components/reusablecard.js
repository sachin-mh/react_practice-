const ReusableCard = ({ college, age, phone ,name})=> {
    
     return (
        <div className="bg-blue-100 flex flex-col items-center p-4 relative group">
        <img className="h-[100px] w-[100px] rounded-full" src="https://i.pinimg.com/736x/20/e9/3a/20e93ad6889a7d35ac74e3d80a197795.jpg" alt="user"/>
        <h1 className="my-10">{name}</h1>
  
        <div className="bg-[rgb(0,0,0)]/[0.5] p-4 absolute top-0 bottom-0 flex flex-col items-center opacity-0 group-hover:opacity-100 ">
          <h1 className="text-blue-600">{college}</h1>
          <h2 className="text-purple-400">{phone}</h2>
          <h2 className="text-white">{age}</h2>
        </div> 
      </div>
     )
}
export default ReusableCard;