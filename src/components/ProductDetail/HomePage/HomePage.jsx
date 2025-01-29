import React, { useEffect, useState } from "react";
import {fetchingAPIData} from "../../api/ProductApi";

const HomePage = () => {
  const [data, setData] = useState([]);
  const handleFetchingData = async () => {
    console.log("working")
    try{

      const result = await fetchingAPIData();
      setData(result);
    }catch(err){
      console.log(err)
    }
  };

  useEffect(() => {
    handleFetchingData();
  }, []);

  console.log(data);

  return (
    <div>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero autem
      natus magni, deserunt cupiditate voluptas accusantium magnam deleniti quia
      blanditiis nostrum perspiciatis alias officia laudantium reiciendis
      repellat impedit voluptate beatae.
    </div>
  );
};

export default HomePage;
