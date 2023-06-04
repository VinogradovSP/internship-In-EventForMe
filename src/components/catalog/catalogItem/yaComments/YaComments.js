function YaComments() {
  const divStyle1 = {
    maxWidth: '560px',
    height: '800px',
    overflow: 'hidden',
    position: 'relative',
  };

  const divStyle2 = {
    width: "100%",
    height: "100%",
    border: "1px solid #e6e6e6",
    bordeRadius: "8px",
    boxSizing: "border-box",
  };

  const divStyle3 = {
    boxSizing: "border-box",
    textDecoration: "none",
    color: "#b3b3b3",
    fontSize: "10px",
    fontFamily: "YS,Text,sans-serif",
    padding: "0 20px",
    position: "absolute",
    bottom: "8px",
    width: "100%",
    textAlign: "center",
    left: "0",
  };

  return (
    <div id="comments" style={divStyle1}>
      <iframe
        style={divStyle2}
        src="https://yandex.ru/maps-reviews-widget/242196928260?comments"
      ></iframe>
    </div>
  );
}

export default YaComments;
