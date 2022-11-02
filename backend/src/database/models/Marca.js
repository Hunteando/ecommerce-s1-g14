module.exports = (sequelize, DataTypes) => {

    const alias = "Marca";

    const cols = {

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        img_url: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },

    }



    const config = {
        tableName: "marcas",
        timestamps: false,
        createdAt: false,
        /* updatedAt: 'updateTimestamp' */
    };


    const Marca = sequelize.define(alias, cols, config);


    Marca.associate = function (models) {
        Marca.hasMany(models.Producto, {
            as: 'productos',
            foreignKey: 'marca_id'
        })
    }


    return Marca;

}