# Reflexión: Gestor de inventario a prueba de errores


- Sobre la Decisión de Usar throw: En la función buscarProductoPorId, ¿qué diferencia fundamental hay entre usar throw new Error(...) cuando no se encuentra un producto, y simplemente devolver null o undefined? ¿Qué le "comunica" un throw a la función que la llamó?

**Respuesta:**
*throw* fuerza a manejar el error obligatoriamente, *null/undefined* requiere verificación manual. *throw* comunica que ocurrió algo excepcional que debe manejarse.

---

- Sobre el Flujo de Control: Describe el flujo de ejecución en la función procesarVenta cuando se le pasa un ID de producto que no existe. ¿Qué línea de código "lanza" el error y qué línea lo "atrapa"? ¿Por qué el programa puede continuar y no se detiene por completo?

**Respuesta:**
*obtenerProductoID()* lanza el error con *throw*, *procesarVenta()* lo atrapa con catch. El programa continúa porque *catch* maneja el error controladamente.

---

- Sobre las Reglas de Negocio: Los dos errores que lanzamos ('Producto no encontrado' y 'Stock insuficiente') representan fallos en las "reglas de negocio" de nuestra tienda. ¿Por qué es importante "atrapar" estos errores en la función procesarVenta en lugar de dejar que detengan el programa?

**Respuesta:**
Atrapar errores evita que la aplicación se bloquee por errores de negocio comunes, manteniendo el sistema funcionando para otros usuarios.

---

- Sobre la Comunicación entre Funciones: ¿Cómo se comunican las funciones buscarProductoPorId y procesarVenta cuando ocurre un error? ¿Qué mecanismo une el throw de una con el catch de la otra?

**Respuesta:**
Se comunican via propagación de excepciones: una función usa *throw*, la otra usa *catch*. El objeto Error conecta ambas.

---

- Sobre la Robustez del Código: ¿Qué habría pasado con el estado del inventario si no hubiéramos verificado el stock antes de intentar restar la cantidad? ¿Cómo ayuda el try...catch a mantener la integridad de nuestros datos?

**Respuesta:**
Sin verificaciones tendríamos stock negativo y datos inconsistentes. *try catch* asegura que solo se modifiquen los datos si todas las validaciones pasan.

