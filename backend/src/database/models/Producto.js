module.exports = (sequelize, DataTypes) => {

  const alias = "Producto";

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
      cantidad: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      precio: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
      },
      descuento: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: true,
      },
      estado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      img_url: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },

      categoria_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
              model: {
                  tableName : 'categorias'
              },
              key: 'id',
          }
      },

      marca_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: {
                tableName : 'marcas'
            },
            key: 'id',
          }
      },

  };

  let config = {
      tableName: "productos"
  };

  const Producto = sequelize.define(alias, cols, config);


  Producto.associate = function (models) {
      Producto.belongsTo(models.Categoria, {
          as: 'categorias',
          foreignKey: 'categoria_id'
      })

      Producto.belongsTo(models.Marca, {
          as: 'marcas',
          foreignKey: 'marca_id'
      })

      Producto.hasMany(models.Ordene, {
          as: 'ordenes',
          foreignKey: 'producto_id'
    })  

  }



  return Producto;

}


