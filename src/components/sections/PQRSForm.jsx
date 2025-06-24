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

      </div>
    </div>
  );
};

export default PQRSForm; 