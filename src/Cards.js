import { useState } from "react";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Cards({ id, image, info, name, price, removeTour }) {
  const [readmore, setReadmore] = useState(false);
  const [likedtrip, setLikedtrip] = useState([]);

  const discription = readmore ? info : `${info.substring(0, 200)}....`;

  function readmoreHandler() {
    setReadmore(!readmore);
  }

  function clickhandler() {
    if (likedtrip.includes(id)) {
      setLikedtrip((prev) => prev.filter((currentId) => currentId !== id));
      toast.warning("Unliked Successfully",{ autoClose: 1000 });
    } else {
      if (likedtrip.length === 0) {
        setLikedtrip([id]);
      } else {
        setLikedtrip((prev) => [...prev, id]);
      }
      toast.success("Liked Successfully",{ autoClose: 1000 });
    }
  }

  return (
    <div className="relative flex flex-col h-auto w-96 m-3 border rounded-md border-gray-300 overflow-hidden transition duration-300 transform hover:scale-105">
      <img src={image} className="rounded-md object-cover h-40" alt={name} />
      <button onClick={clickhandler} className="absolute bottom-4 right-4">
        {likedtrip.includes(id) ?  <FcLike fontSize="1.75rem" />: <FcLikePlaceholder  fontSize="1.75rem" /> }
      </button>
      <div className="tourinfo p-4 flex flex-col">
        <div className="tourdetail mb-2">
          <h3 className="text-2xl text-blue-600 font-semibold">{name}</h3>
          <h3 className="text-base text-green-600 font-normal">${price}</h3>
        </div>

        <div className={`description text-sm font-normal leading-snug ${readmore ? "h-auto" : "h-16"}`}>
          {discription}
          <span className="readmore text-red-400 font-medium cursor-pointer" onClick={readmoreHandler}>
            {readmore ? `Show less` : `Read more`}
          </span>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button
          className="border border-gray-400 rounded-md bg-red-500 text-white text-base font-medium w-32 h-10 focus:outline-none"
          onClick={() => removeTour(id)}
        >
          Not Interested
        </button>
      </div>
    </div>
  );
}

export default Cards;
