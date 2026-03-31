import { useState } from 'react';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { FileText, Clock, Scale, Send, Upload } from 'lucide-react';
import { COMPANY_INFO, PQRS } from '@/config/project-config';

const PQRSForm = () => {
  const [formData, setFormData] = useState({
    type: '',
    name: '',
    documentType: '',
    documentNumber: '',
    email: '',
    phone: '',
    address: '',
    notificationMethod: '',
    contactTime: '',
    details: '',
    consent: false
  });

  const [attachments, setAttachments] = useState([]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setAttachments(prev => [...prev, ...files]);
  };

  const removeAttachment = (index) => {
    setAttachments(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí implementarías la lógica de envío
    console.log('Formulario PQRS enviado:', formData, attachments);
    alert('Tu solicitud PQRS ha sido enviada exitosamente. Te contactaremos dentro de 10 días hábiles.');
  };

  return (
    <div className="w-full">
      <div className="container mx-auto px-4">
        
        {/* Encabezado */}
        <div className="text-center py-12">
          <Badge className="bg-primary text-white mb-6">📋 Formulario PQRS</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 tracking-tight">
            ¿Tienes una Petición, Queja o Reclamo?
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Completa nuestro formulario con la información solicitada. Nos comprometemos a darte una respuesta oportuna y satisfactoria.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 pb-16">
          
          {/* Información importante */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Tiempo de respuesta */}
            <Card className="border-l-4 border-l-orange-500">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Clock className="w-5 h-5 text-orange-500" />
                  Tiempo de respuesta
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-orange-600">10 días hábiles</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Desde el momento en que recibimos tu solicitud completa
                </p>
              </CardContent>
            </Card>

            {/* Posibilidad de apelación */}
            <Card className="border-l-4 border-l-blue-500">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Scale className="w-5 h-5 text-blue-500" />
                  Posibilidad de apelación
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">Ante la:</span>
                </p>
                <p className="font-bold text-blue-600 mt-1">
                  Superintendencia de Industria y Comercio (SIC)
                </p>
              </CardContent>
            </Card>

            {/* Tipos de solicitud */}
            <Card className="border-l-4 border-l-green-500">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <FileText className="w-5 h-5 text-green-500" />
                  Tipos de solicitud
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span><strong>Petición:</strong> Solicitud de información</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span><strong>Queja:</strong> Inconformidad con el servicio</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span><strong>Reclamo:</strong> Facturación o cobros</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

          </div>

          {/* Formulario */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Formulario PQRS</CardTitle>
                <p className="text-muted-foreground">
                  Completa todos los campos obligatorios para procesar tu solicitud
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Tipo de solicitud */}
                  <div>
                    <Label htmlFor="type" className="text-base font-medium">
                      Tipo de solicitud *
                    </Label>
                    <select
                      id="type"
                      name="type"
                      required
                      value={formData.type}
                      onChange={handleInputChange}
                      className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Selecciona el tipo de solicitud</option>
                      <option value="peticion">Petición</option>
                      <option value="queja">Queja</option>
                      <option value="reclamo">Reclamo</option>
                    </select>
                  </div>

                  {/* Información personal */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-base font-medium">
                        Nombre completo *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-2"
                        placeholder="Ingresa tu nombre completo"
                      />
                    </div>
                    <div>
                      <Label htmlFor="documentType" className="text-base font-medium">
                        Tipo de documento *
                      </Label>
                      <select
                        id="documentType"
                        name="documentType"
                        required
                        value={formData.documentType}
                        onChange={handleInputChange}
                        className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Selecciona</option>
                        <option value="cc">Cédula de Ciudadanía</option>
                        <option value="ce">Cédula de Extranjería</option>
                        <option value="nit">NIT</option>
                        <option value="pasaporte">Pasaporte</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="documentNumber" className="text-base font-medium">
                      Número de documento *
                    </Label>
                    <Input
                      id="documentNumber"
                      name="documentNumber"
                      type="text"
                      required
                      value={formData.documentNumber}
                      onChange={handleInputChange}
                      className="mt-2"
                      placeholder="Número de documento de identidad"
                    />
                  </div>

                  {/* Información de contacto */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email" className="text-base font-medium">
                        Correo electrónico *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-2"
                        placeholder="ejemplo@correo.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-base font-medium">
                        Teléfono *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-2"
                        placeholder="300 123 4567"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="address" className="text-base font-medium">
                      Dirección física
                    </Label>
                    <Input
                      id="address"
                      name="address"
                      type="text"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="mt-2"
                      placeholder="Dirección completa (opcional)"
                    />
                  </div>

                  {/* Preferencias de contacto */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="notificationMethod" className="text-base font-medium">
                        Medio preferido de notificación *
                      </Label>
                      <select
                        id="notificationMethod"
                        name="notificationMethod"
                        required
                        value={formData.notificationMethod}
                        onChange={handleInputChange}
                        className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Selecciona</option>
                        <option value="correo">Correo electrónico</option>
                        <option value="direccion">Dirección física</option>
                        <option value="telefono">Teléfono</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="contactTime" className="text-base font-medium">
                        Horario de contacto preferido *
                      </Label>
                      <select
                        id="contactTime"
                        name="contactTime"
                        required
                        value={formData.contactTime}
                        onChange={handleInputChange}
                        className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Selecciona</option>
                        <option value="am">AM (6:00 - 12:00)</option>
                        <option value="pm">PM (12:00 - 18:00)</option>
                        <option value="cualquiera">Cualquier horario</option>
                      </select>
                    </div>
                  </div>

                  {/* Detalles de la solicitud */}
                  <div>
                    <Label htmlFor="details" className="text-base font-medium">
                      Detalles de la solicitud *
                    </Label>
                    <textarea
                      id="details"
                      name="details"
                      required
                      value={formData.details}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      placeholder="Describe detalladamente tu petición, queja o reclamo..."
                    />
                  </div>

                  {/* Adjuntos */}
                  <div>
                    <Label className="text-base font-medium">
                      Adjuntos (imagen, documento, PDF)
                    </Label>
                    <div className="mt-2">
                      <input
                        type="file"
                        multiple
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                        onChange={handleFileChange}
                        className="hidden"
                        id="file-upload"
                      />
                      <Label
                        htmlFor="file-upload"
                        className="flex items-center justify-center w-full p-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors"
                      >
                        <Upload className="w-8 h-8 text-gray-400 mr-3" />
                        <span className="text-gray-600">
                          Haz clic para seleccionar archivos o arrastra aquí
                        </span>
                      </Label>
                      {attachments.length > 0 && (
                        <div className="mt-3 space-y-2">
                          {attachments.map((file, index) => (
                            <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                              <span className="text-sm text-gray-600">{file.name}</span>
                              <button
                                type="button"
                                onClick={() => removeAttachment(index)}
                                className="text-red-500 hover:text-red-700"
                              >
                                ×
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Consentimiento */}
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      required
                      checked={formData.consent}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                    <Label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed">
                      Acepto el tratamiento de mis datos personales conforme a la política de privacidad de {COMPANY_INFO.name} y autorizo el uso de la información suministrada para dar respuesta a mi solicitud. *
                    </Label>
                  </div>

                  {/* Botón de envío */}
                  <div className="pt-4">
                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-lg font-medium gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Enviar solicitud PQRS
                    </Button>
                  </div>

                </form>
              </CardContent>
            </Card>
          </div>

        </div>

        {/* Información Legal y Marco Normativo */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="bg-blue-600 text-white mb-4">⚖️ Marco Legal y Regulatorio</Badge>
              <h2 className="text-3xl font-bold text-primary mb-4">
                Tus Derechos y Garantías
              </h2>
              <p className="text-lg text-muted-foreground">
                En {COMPANY_INFO.name} respetamos y cumplimos con toda la normatividad vigente para proteger tus derechos como usuario.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Régimen de Protección */}
              <Card className="border-l-4 border-l-blue-500 bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg text-blue-700">
                    <Scale className="w-5 h-5" />
                    Régimen de Protección al Usuario
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-blue-800 mb-2">
                      Resolución 3066 de 2011 - Artículo 42, Inciso 4
                    </p>
                    <p className="text-sm text-blue-700">
                      <span className="font-semibold">Importante:</span> Las peticiones o quejas relacionadas con facturación 
                      pueden presentarse máximo dentro de los <span className="font-bold">6 meses siguientes</span> contados 
                      desde el vencimiento del pago oportuno de la factura.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Derecho de Apelación */}
              <Card className="border-l-4 border-l-green-500 bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg text-green-700">
                    <FileText className="w-5 h-5" />
                    Derecho de Recurso y Apelación
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-green-800 mb-2">
                      Tienes <span className="font-bold">10 días hábiles</span> después de recibir nuestra respuesta
                    </p>
                    <p className="text-sm text-green-700">
                      Puedes presentar <span className="font-semibold">recurso de reposición</span> si no estás conforme 
                      con nuestra decisión, y solicitar que tu caso sea revisado por la 
                      <span className="font-bold"> Superintendencia de Industria y Comercio (SIC)</span>.
                    </p>
                  </div>
                </CardContent>
              </Card>

            </div>

            {/* Información detallada */}
            <Card className="mt-8 bg-white/70 backdrop-blur-sm border-2 border-indigo-200">
              <CardHeader>
                <CardTitle className="text-xl text-center text-indigo-700">
                  Compromiso con la Transparencia
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-indigo-800 mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Proceso de Recurso de Apelación
                  </h3>
                  <div className="text-sm text-indigo-700 space-y-2">
                    <p>
                      <span className="font-medium">📝 Presentación:</span> Puedes manifestar tu inconformidad de forma verbal o escrita 
                      a través de nuestras oficinas físicas o líneas de atención.
                    </p>
                    <p>
                      <span className="font-medium">🔄 Doble recurso:</span> Recurso de reposición (revisión interna) y en subsidio 
                      de apelación (revisión por la autoridad competente).
                    </p>
                    <p>
                      <span className="font-medium">⚖️ Autoridad competente:</span> La SIC revisará y resolverá tu caso si confirman 
                      o modifican nuestra decisión de manera desfavorable.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg border border-indigo-200">
                    <h4 className="font-semibold text-primary mb-2">📞 Contacto SIC</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p><span className="font-medium">Web:</span> sic.gov.co</p>
                      <p><span className="font-medium">Email:</span> info@sic.gov.co</p>
                      <p><span className="font-medium">Oficinas físicas:</span> Disponibles nacionalmente</p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-indigo-200">
                    <h4 className="font-semibold text-primary mb-2">🛡️ Nuestro Compromiso</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>✓ Respuesta oportuna y clara</p>
                      <p>✓ Cumplimiento normativo total</p>
                      <p>✓ Protección de tus derechos</p>
                      <p>✓ Atención personalizada y transparente</p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-sm text-muted-foreground italic">
                    "En {COMPANY_INFO.name} creemos que la transparencia y el cumplimiento normativo 
                    son fundamentales para construir relaciones de confianza con nuestros usuarios."
                  </p>
                </div>

              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PQRSForm; 