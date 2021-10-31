const SlotM = (props) =>{
    // let x = '😊';
    // let y = '😊';
    // let z = '😒';
  
    // let x = props.x;
    // let y = props.y;
    // let z = props.z;

    let {x,y,z} = props;
  
    if(x === y && y === z){
      return(
        <>
          <h2>{x} {y} {z}</h2>
          <h2>This is Matching</h2>
          <hr/>
        </>
      )
    
    }else{
      return(
        <>
          <h2>{x} {y} {z}</h2>
          <h2>This is Not Matching</h2>
          <hr/>
        </>
      )
  
    }
  }


export default SlotM;
  