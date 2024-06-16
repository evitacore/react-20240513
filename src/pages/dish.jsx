import { useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";

export const DishPage = () => {
  const { dishId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!dishId)
      navigate('/restaurants', { replace: true })
  }, [dishId, navigate])
  

  return <Outlet />;
};
