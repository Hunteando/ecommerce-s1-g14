module.exports = (sequelize, DataTypes) => {

    const alias = "Usuario";

    const cols = {

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        apellido: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        img_url: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        rol: {
            type: DataTypes.STRIMG(45),
            allowNull: false,
        },
        estado: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
          },

    }



    const config = {
        tableName: "usuarios",
        timestamps: false,
        createdAt: false,
        /* updatedAt: 'updateTimestamp' */
    };


    const Usuario = sequelize.define(alias, cols, config);


    Usuario.associate = function (models) {
        Usuario.hasMany(models.Ordene, {
            as: 'ordenes',
            foreignKey: 'usuario_id'
        })
    }


    return Usuario;

}