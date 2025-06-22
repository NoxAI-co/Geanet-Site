import React from "react";

/**
 * Componente Card - Contenedor principal para tarjetas
 * @param {string} className - Clases adicionales para personalizar el estilo
 * @param {Object} props - Propiedades adicionales que se pasarán al div
 * @returns {JSX.Element} Un contenedor div con estilos de tarjeta
 */
const Card = ({ className, ...props }) => (
  <div
    className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
    {...props}
  />
);

/**
 * Componente CardHeader - Encabezado de la tarjeta
 * @param {string} className - Clases adicionales para personalizar el estilo
 * @param {Object} props - Propiedades adicionales que se pasarán al div
 * @returns {JSX.Element} Sección superior de la tarjeta con espaciado
 */
const CardHeader = ({ className, ...props }) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} />
);

/**
 * Componente CardTitle - Título principal de la tarjeta
 * @param {string} className - Clases adicionales para personalizar el estilo
 * @param {Object} props - Propiedades adicionales que se pasarán al h3
 * @returns {JSX.Element} Elemento h3 estilizado para títulos de tarjeta
 */
const CardTitle = ({ className, ...props }) => (
  <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`} {...props} />
);

/**
 * Componente CardDescription - Descripción o subtítulo de la tarjeta
 * @param {string} className - Clases adicionales para personalizar el estilo
 * @param {Object} props - Propiedades adicionales que se pasarán al párrafo
 * @returns {JSX.Element} Elemento p con estilo de texto secundario
 */
const CardDescription = ({ className, ...props }) => (
  <p className={`text-sm text-muted-foreground ${className}`} {...props} />
);

/**
 * Componente CardContent - Contenedor principal del contenido de la tarjeta
 * @param {string} className - Clases adicionales para personalizar el estilo
 * @param {Object} props - Propiedades adicionales que se pasarán al div
 * @returns {JSX.Element} Contenedor para el contenido principal de la tarjeta
 */
const CardContent = ({ className, ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props} />
);

/**
 * Componente CardFooter - Pie de la tarjeta
 * @param {string} className - Clases adicionales para personalizar el estilo
 * @param {Object} props - Propiedades adicionales que se pasarán al div
 * @returns {JSX.Element} Sección inferior de la tarjeta para acciones o contenido adicional
 */
const CardFooter = ({ className, ...props }) => (
  <div className={`flex items-center p-6 pt-0 ${className}`} {...props} />
);

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }; 