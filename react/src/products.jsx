export default function Products({ data }) {
  return (
    <div className="LAKKA">
      <div className="row">
        {data.map((item, index) => (
          <div className="col-4 p-4 sarley " key={index}>
            <div className="card hii" style={{ width: "18em",padding:"20px",border:"2px solid red" }}>
              <img className="card-img-top" src={item.recipe.image} alt={item.label} />
              <div className="helo">
                <center>
                  <h5 className="card-title">{item.recipe.label}</h5>
                  <p className="card-text">Calories: {item.recipe.calories}</p>
                  <a href="#" className="btn btn-primary">BUY</a>
                </center>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

