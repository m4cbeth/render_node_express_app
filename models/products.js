module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define(
        'Product',
        {
            product: {
                type: DataTypes.STRING,
                allowNull: false,            
            },
            id: {
                type:DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
                
            },
            description: {
                type: DataTypes.STRING,
            },
            price: {
                type: DataTypes.FLOAT,            
            }

        }
    )
    return Product
}