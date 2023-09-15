const MenuGrid = (props) => {
    const {name, description, imageId, price} = props.menuData;
    return (
        <div className="menu-container">
            <div className="dish">
                {name}
            </div>
            <div className="dish-description">
                {description}
            </div>
            <div className="dish-price">
                {price/100}
            </div>
        </div>
    );
};

export default MenuGrid;