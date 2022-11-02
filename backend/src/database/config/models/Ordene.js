module.exports = (sequelize, DataTypes) => {

    const alias = "Ordene";
  
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },

        producto_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: {
                    tableName : 'productos'
                },
                key: 'id',
            }
        },
  
        usuario_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
              model: {
                  tableName : 'usuarios'
              },
              key: 'id',
            }
        },
  
    };
  
    let config = {
        tableName: "ordenes"
    };
  
    const Ordene = sequelize.define(alias, cols, config);
  
  
    Ordene.associate = function (models) {
        Ordene.belongsTo(models.Producto, {
            as: 'productos',
            foreignKey: 'producto_id'
        })
  
        Producto.belongsTo(models.Usaurio, {
            as: 'usuarios',
            foreignKey: 'usuario_id'
        })
  
    }
  
  
  
    return Producto;
  
  }
  
  
  