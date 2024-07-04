import  { useContext, useEffect, useState } from "react";
import { FaPaperPlane } from "react-icons/fa6";
import { ResponseContext } from "./MainWorkArea";

const RequestSender = () => {

    const [method, setMethod] = useState<string>('GET');
    const [url, setUrl] = useState<string>('');
    const [ response, setResponse ] = useContext(ResponseContext);

    useEffect(() => {
        console.log(url)
    }, [method, url])

    const makeRequest = async () => {

        try {
            const response = await fetch(url, {
              method: method,
            });

            const data = await response.json();
            console.log(data);
            setResponse(data);

        } catch (error) {
            console.error(error);
        }
    }


  return (
    <div className="h-1/2 ">
      <div className="w-full flex-between pl-7">
        <div className="w-[10%]">
          <label htmlFor="method-type" className="text-xs text-slate-600">
            Method:
          </label>
          <select
            name="method-type"
            id="method-type"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
          >
            <option value="GET" className="text-green-500 hover:bg-white">
              GET
            </option>
            <option value="POST" className="text-yellow-500">
              POST
            </option>
            <option value="PUT" className="text-blue-500">
              PUT
            </option>
            <option value="DELETE" className="text-red-500">
              DELETE
            </option>
            <option value="HEAD" className="text-green-500">
              HEAD
            </option>
            <option value="OPTION" className="text-yellow-500">
              OPTION
            </option>
            <option value="PATCH" className="text-purple-500">
              PATCH
            </option>
          </select>
        </div>
        <div className="w-[80%] flex-between">
          <label
            htmlFor="url"
            className="text-xs lowercase text-slate-600 w-[75%] flex flex-col"
          >
            SCHEME :// HOST [ ":" PORT ] [ PATH [ "?" QUERY ]]
            <input
              type="text"
              placeholder="Type a URL"
              className="border border-slate-800 py-1 px-2 rounded-sm"
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </label>

          <button
            onClick={makeRequest}
            className="w-[20%] flex-between bg-blue-600 px-2 py-1 rounded-md hover:bg-blue-500"
          >
            <FaPaperPlane /> Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestSender;
