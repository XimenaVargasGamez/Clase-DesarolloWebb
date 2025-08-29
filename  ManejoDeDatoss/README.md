# Sistema de Cajero Automático

## Descripción del Problema

Este proyecto implementa un sistema de cajero automático que realiza las siguientes operaciones principales:

- **Validación de tarjeta**: Verificación de datos de la tarjeta y PIN
- **Retiro**: Extracción de dinero de la cuenta
- **Depósito**: Ingreso de dinero a la cuenta
- **Consulta de saldo**: Verificación del balance disponible

El sistema valida los siguientes datos de la tarjeta:
- Número de tarjeta
- Nombre del titular
- Fecha de expiración
- CVV (código de seguridad)
- Balance de la cuenta
- PIN de seguridad

## Modelo de Datos

### Variables y Constantes Utilizadas

| Variable | Tipo | Justificación |
|----------|------|---------------|
| `CardNumber` | `number` | El número de tarjeta se compone únicamente de dígitos. Se utiliza `number` para facilitar validaciones de longitud y formato sin caracteres especiales. |
| `CardHolder` | `string` | Almacena el nombre completo del titular, incluyendo espacios y posibles caracteres especiales (acentos, guiones, etc.). |
| `CardExpirationDate` | `string` | Mantiene el formato estándar "MM/AA" sin necesidad de conversiones adicionales. |
| `CardCVV` | `number` | Código de seguridad de 3 o 4 dígitos sin formato especial. `Number` permite validaciones numéricas simples. |
| `CardBalance` | `number` | Representa el saldo monetario disponible. Permite realizar operaciones aritméticas (suma, resta) de manera directa. |
| `CardPin` | `number` | Código numérico de autenticación de longitud fija. Facilita validaciones y comparaciones numéricas. |

## Flujo del Sistema

### 1. Validación de Tarjeta

1. El usuario ingresa el número de tarjeta (16 dígitos)
2. El usuario ingresa el PIN (4 dígitos)
3. El sistema valida que la tarjeta existe en la base de datos
4. El sistema verifica que el PIN coincida con el registrado
5. **Resultado exitoso**: Muestra mensaje "Tarjeta validada correctamente"
6. **Resultado fallido**: Muestra mensaje de error correspondiente

### 2. Proceso de Depósito

1. El usuario ingresa el número de tarjeta
2. El usuario especifica la cantidad a depositar
3. El sistema busca la tarjeta en la base de datos
4. **Si la tarjeta existe**:
   - El sistema suma la cantidad al saldo actual
   - Muestra mensaje de depósito exitoso y el nuevo saldo
5. **Si la tarjeta no existe**:
   - Muestra mensaje "Tarjeta no encontrada"

### 3. Proceso de Retiro

1. El usuario ingresa el número de tarjeta
2. El usuario especifica la cantidad a retirar
3. El sistema busca la tarjeta en la base de datos
4. **Si la tarjeta no existe**: Muestra mensaje "Tarjeta no encontrada"
5. **Si la tarjeta existe**:
   - El sistema verifica si hay saldo suficiente
   - **Saldo suficiente**: Resta la cantidad del saldo y muestra mensaje exitoso
   - **Saldo insuficiente**: Muestra mensaje "Saldo insuficiente"

### 4. Proceso de Consulta de Saldo

1. El usuario ingresa el número de tarjeta
2. El sistema busca la tarjeta en la base de datos
3. **Si la tarjeta existe**: Muestra el saldo actual de la cuenta
4. **Si la tarjeta no existe**: Muestra mensaje "Tarjeta no encontrada"

## Características del Sistema

- **Seguridad**: Validación de PIN para operaciones críticas
- **Integridad**: Verificación de saldo antes de permitir retiros
- **Usabilidad**: Mensajes claros para cada tipo de operación
- **Robustez**: Manejo de casos de error (tarjeta no encontrada, saldo insuficiente)

## Requisitos del Sistema

- Base de datos para almacenar información de tarjetas
- Interfaz de usuario para interacción con el cajero
- Sistema de validación de datos de entrada
- Mecanismos de seguridad para protección de información sensible
