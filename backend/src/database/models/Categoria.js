
module.exports = (sequelize, DataTypes) => {

    const alias = "Categoria";

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
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        img_url: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },

    }



    const config = {
        tableName: "categorias",
        timestamps: false,
        createdAt: false,
        /* updatedAt: 'updateTimestamp' */
    };


    const Categoria = sequelize.define(alias, cols, config);


    Categoria.associate = function (models) {
        Categoria.hasMany(models.Producto, {
            as: 'productos',
            foreignKey: 'categoria_id'
        })
    }


    return Categoria;

}