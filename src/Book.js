import React, { Component } from 'react';
// import Button from './Button'


//PROP DRLLING PASSING METHODS TO CHILDREN
class Book extends Component {
    constructor(props){
super(props);
this.state={
    count:1,
    showInfo: true
}
    }
// addCount = ()=>{
// // this.state={
// //     count: this.state.count + 1
// // }
// this.setState({
// count: this.state.count + 1, name:"peter"
// })
// }

// lowerCount = ()=>{
//     this.setState({
//         count: this.state.count - 1
//         })

// }
// resetCount = ()=>{
//     this.setState({
//         count: 0
//         })
// }
// this.handleClick=this.handleClick.bind(this)
    
    
    // handleClick(){
    //     console.log('you clicked me')
    //     console.log(this.state.count);
    // }
    
//    handleClick=()=>{
//        console.log('you clicked me');
//    console.log(this.state.count)
//     } 
handleInfo=()=>{
this.setState({
    showInfo: !this.state.showInfo
})
}
    render() {
        // console.log(this.props)
const {id,img,title,author}=this.props.info;
// console.log(id);
// console.log(this.props);
// const {handleDelete}=this.props;

const checkInfo=(info)=>{
    if(info===true){
        return <p>Lorem ipsum dolor sit amet.</p>
    }
    else{
        return null
    }
}


        return (
            <article className="book">
            <img src={img} width="150" alt=""/>
            {/* <button onClick={}></button> */}
            {/* <Button handleDelete={handleDelete}/> */}
            {/* <button type="button" onClick={this.handleInfo}>toggle info</button> */}
            <div>

                <h4>Title :{title}</h4>
                <h6>Author :{author}</h6>
                {/* <button type="button" onClick={()=>handleDelete(id)}>delete me</button> */}
                {/* <h3>{this.state.count}</h3>
                <h5>{this.state.name}</h5> */}
                <button type="button" onClick={this.handleInfo}>toggle info</button>
{/* {
    this.state.showInfo && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quibusdam animi itaque error odio voluptatem voluptatum magnam adipisci quis. Quibusdam obcaecati ipsa expedita id quisquam officiis natus facere iusto numquam.Animi minus maxime aliquid voluptatum reiciendis temporibus adipisci rem laboriosam explicabo? Nulla consequuntur asperiores, vitae laborum nesciunt cupiditate vero. Aspernatur officia rerum ex eos! Odio maxime ad quaerat voluptatum aliquam.</p>
} */}
{
    checkInfo(this.state.showInfo)
}
{/* {
this.state.showInfo?<p>Lorem ipsum dolor sit amet.</p>:null
} */}

            </div>
            </article>
        );
    }
}

export default Book;