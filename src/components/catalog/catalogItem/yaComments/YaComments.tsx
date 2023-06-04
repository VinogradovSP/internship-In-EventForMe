import CSS from 'csstype';

type YaCommentsProps = {
  id?: string;
}

function YaComments({ id }: YaCommentsProps) {
  const containerStyle: CSS.Properties = {
    marginTop: '40px',
    maxWidth: '560px',
    height: '800px',
    overflow: 'hidden',
    position: 'relative',
  };

  const frameStyle: CSS.Properties = {
    width: "100%",
    height: "100%",
    border: "1px solid #e6e6e6",
    borderRadius: "8px",
    boxSizing: "border-box",
  };

  if (id) {
    return (
      <div id="comments" style={containerStyle}>
        <iframe
          style={frameStyle}
          src={`https://yandex.ru/maps-reviews-widget/${id}?comments`}
        ></iframe>
      </div>
    );
  }
  return <div className='mt-5 w-100 text-center'><h3>У площадки еще нет отзывов и оценок на Яндекс</h3></div>
}

export default YaComments;
