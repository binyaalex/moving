import "./ListHeader.css";
const ListHeader = ({ header, headerSpan, par, parSpan }) => {
  return (
    <div className="listHeader">
      <h2 className="listHeaderH">
        {header} - <span>{headerSpan}</span>
      </h2>
      <div className="listHeaderP">
        {par} - <span>{parSpan}</span>
      </div>
    </div>
  );
};

export default ListHeader;
