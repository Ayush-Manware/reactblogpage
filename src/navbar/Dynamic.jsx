import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Store from "../store/Store";

const Dynamic = () => {
  const id = useParams().id;
  const [dataFromStore] = useContext(Store);
  const navigation = useNavigate();

  return(
    <>
      {
      dataFromStore.filter((data) => data.id === parseInt(id))
      .map((item,index) => {
        return(
            <>
             <h2>{item.name}</h2>
             <img src={item.image} alt="err" />
             <p>{item.text}</p>
             <button onClick={()=> navigation(-1)}>Go Back</button>
            </>
        )
      })
      }
    </>
  );
};

export default Dynamic;
