import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../app/store";
import { fetchAsyncGet, selectUsers, User } from "./fetchSlice";

const Fetch = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users: User[] = useSelector(selectUsers);
  useEffect(() => {
    dispatch(fetchAsyncGet());
  }, [dispatch]);
  return (
    <div>
      {users.map((user) => (
        <div>{user.email}</div>
      ))}
    </div>
  );
};

export default Fetch;
