import {Component} from "react";

class ClassCmp extends Component {

  state = {
    count:0,
  };

increment(){
  this.setState({count:this.state.count +1});
}

  render() {
    return (
      <div>
        <h1>I am Class Component</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam vel
          mollitia incidunt et fuga id magni! Beatae ducimus nobis animi ad
          ratione enim illum, laudantium ipsam provident ut voluptate corrupti!
        </p>
        <p>{this.state.count}</p>
        <button onClick={()=>{this.increment()}}>Update Counter</button>
      </div>
    );
  }
}

export default ClassCmp;