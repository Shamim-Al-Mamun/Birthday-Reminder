import React, {useState} from 'react'

function NewData(props) {
    const [newName, setNewName] = useState("")
    const [newAge, setNewAge] = useState("")
    const [img, setImg] = useState(null)
    const [inputImg, setInputImg] = useState(null)
        const Newdata =
        {
            name: (newName)? newName : "Mr X",
            age: (newAge)? newAge: 0,
            image:(img)? img : (inputImg)? inputImg : "https://icon-library.com/images/no-profile-pic-icon/no-profile-pic-icon-12.jpg"
        }
        const handleSubmit =(e) =>
        {
            e.preventDefault();
            props.onChildData(Newdata);
            setNewName("");
            setNewAge("")
            setImg(null)
            setInputImg(null)
            props.setpeopleAdded(false);
            props.setAddClikced(false);
        }
        const handleBack =() =>
        {
            props.setAddClikced(false);
        }

  return (
    <>
        <article key="" className='person'>
            <img src= {(!img)?
                        (inputImg)? 
                            inputImg
                            : "https://icon-library.com/images/no-profile-pic-icon/no-profile-pic-icon-12.jpg"
                            : img} alt= " " />
        <div>
            <h4>{(newName)? newName : "Mr X"}</h4>
            <p>{(newAge)? newAge : 0} years</p>
        </div>
        </article>
            <form  onSubmit={handleSubmit}>
                <input className='name' type="text" placeholder='name' defaultValue={newName} onChange={(e)=>{
                    if((e.target.value) && (e.target.value).length <21){
                        setNewName(e.target.value)
                    }
                    else{
                        setNewName("")
                    }
                }}
                >
                </input>
                <input className='age' type="number" placeholder='age' defaultValue={newAge} onChange={(e)=> {
                    if(Number(e.target.value) && 100 >(e.target.value) && 0 <(e.target.value)){
                        setNewAge(e.target.value)
                    }
                    else{
                        setNewAge("")
                    }
                }}
                >
                </input>
                { !inputImg &&<input className='image' placeholder='paste img url I.e."https://images.unsplash.com/photo-15314jpg"' defaultValue={img}
                onChange={(e)=>{
                    setImg(e.target.value)
                    setInputImg(null)
                }}>
                </input>}
                { !img &&<input type="file" className='input-image' accept="image/*"
                onChange={(event)=>{
                    if(event.target.files.length > 0){
                        var src = URL.createObjectURL(event.target.files[0]);
                        setInputImg(src);
                        setImg(null)
                        }
                    }}
                />}
                <button>Add</button>
            </form>
        <button onClick={handleBack}>Back</button>
    </>
  )
}

export default NewData