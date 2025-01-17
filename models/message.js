module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define(
        'Message',
        {
            message: {
                type: DataTypes.TEXT,
            },
            name: {
                type: DataTypes.STRING,
            },
            id: {
                type:DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
                
            },
            email: {
                type: DataTypes.STRING,            
            }
    
        }
    )
    return Message
}
