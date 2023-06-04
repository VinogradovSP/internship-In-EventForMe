function YaMap() {
    const divStyle1 = {
        position: "relative",
        overflow: "hidden",
    };

    const divStyle2 = {
        position: "relative",
    };

    return (
        <div style={divStyle1}>
            <iframe
                src="https://yandex.ru/map-widget/v1/?ll=37.560822%2C55.702952&z=16"
                width="560"
                height="400"
                frameBorder="1"
                allowFullScreen="true"
                style={divStyle2}>
            </iframe>
        </div>
    )

}

export default YaMap;