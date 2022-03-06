import useGetProducts from "../../hooks/CustomGet";
import NewMembers from "../NewMembers/NewMembers";
import Skeleton from "@material-ui/lab/Skeleton";
import "./Widgetsm.style.css";
const Widgetsm = () => {
  const [products, setProducts, loading, error] =
    useGetProducts("/users?new=true");
  return (
    <>
      {loading ? (
        <div style={{margin:'10px'}}>
          <Skeleton variant="text" />
          <Skeleton variant="circle" width={40} height={40} />
          <Skeleton variant="rect" width={210} height={118} />
        </div>
      ) : (
        <div className="widgetSm">
          <span className="widgetSmTitle">New Join Members</span>
          <ul className="widgetSmList">
            {products.map((user) => (
              <NewMembers key={user._id} user={user} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Widgetsm;
