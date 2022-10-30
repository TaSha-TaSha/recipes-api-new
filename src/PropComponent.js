function PropComponent({label, image, ingredients, nutrientsCA, nutrientsCHOCDF, nutrientsFE, nutrientsENERC, nutrientsFAT}) {
    return(<div>
        <div className="togetherContainer">
            <div className="oneContainer">
                <h2>{label}</h2>
                <img src={image} alt='pic' className="pic"/>
            </div>
            <div className="twoContainer">
                <p>Calcum <span>{nutrientsCA.toFixed()}</span> mg</p>
                <p>Carbs <span>{nutrientsCHOCDF.toFixed()}</span> g</p>
                <p>Iron <span>{nutrientsFE.toFixed()}</span> mg</p>
                <p>Energy <span>{nutrientsENERC.toFixed()}</span> kcal</p>
                <p>Fat <span>{nutrientsFAT.toFixed()}</span> g</p>
            </div>
        </div>
        <div className="ingredientsContainer">
            <ul>
            {ingredients.map( (element, index) => (
                <li key={index} type='square'>{element}</li>
            ))}
            </ul>
        </div>
    </div>)
}

export default PropComponent;