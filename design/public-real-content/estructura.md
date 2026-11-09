# Sitio público: empezar por los recorridos y el trato directo

**Se recomienda revisar primero [01-catalogo.html](01-catalogo.html).** Mantiene la continuidad del catálogo, permite consultar información real de tres recorridos y conduce a una cotización personalizada. [02-editorial.html](02-editorial.html) prioriza la historia y la identidad; [03-acompanamiento.html](03-acompanamiento.html), la planeación a la medida. Son alternativas para revisión, no decisiones aprobadas ni páginas de producción.

Fuente de contenido y condiciones: [referencia consolidada](../../docs/alcance-consolidado.md). Los hechos declarados no sustituyen la autorización final de publicación de Linda Armas.

## Recorrido de revisión

1. Comparar las tres portadas y el orden de sus secciones.
2. Abrir las fichas desplegables de los recorridos y comprobar horarios, inclusiones, condiciones y pendientes.
3. Seguir los enlaces al contacto: son navegación local, no abren WhatsApp ni envían solicitudes.

## Mapa propuesto, todavía no implementado

Las rutas siguientes son una propuesta de organización. Ninguna existe como página de producción en esta entrega.

| Página y ruta en español | Contenido y siguiente paso | Presencia en las propuestas |
| --- | --- | --- |
| Inicio `/es/` | Posicionamiento, recorridos, viajes a medida, historia, proceso y contacto. CTA: solicitar cotización. | Página completa ilustrativa en los tres archivos. |
| Recorridos `/es/recorridos/` | Comparar los tres recorridos, salida y regreso a San Cristóbal de Las Casas. CTA: consultar ficha. | Sección en cada archivo; índice independiente futuro. |
| Sumidero `/es/recorridos/canon-del-sumidero-chiapa-de-corzo/` | 1 día, 9:00 a 18:30 h aproximadamente; itinerario, inclusiones, exclusiones, miradores condicionados, movilidad y cotización. | Ficha desplegable; página independiente futura. |
| El Chiflón `/es/recorridos/el-chiflon-lagos-de-montebello/` | 1 día, 8:00 a 20:00 h; transportación y entradas. Completar ficha sin extrapolar el Sumidero. CTA: solicitar cotización. | Ficha desplegable con pendientes; página futura. |
| Palenque `/es/recorridos/palenque-agua-azul-misol-ha/` | 1 día, 4:00 a 23:00 h; transportación y entradas. Completar ficha. CTA: solicitar cotización. | Ficha desplegable con pendientes; página futura. |
| Viajes a medida `/es/viajes-a-medida/` | Viajeros, intereses, servicios terrestres, información para cotizar y proceso. CTA: conversar por WhatsApp. | Secciones de servicios y proceso, sin formulario; página futura. |
| Nosotros `/es/nosotros/` | Agencia fundada en 2015; trayectoria profesional de Linda desde 1978; formación y trato directo. CTA: conversar sobre el viaje. | Sección en cada archivo; página futura. |
| Historias `/es/historias/` | Índice futuro de artículos aprobados y publicados; no mostrar borradores como publicaciones. | Solo adelanto editorial explícitamente no publicado. |
| Primera historia `/es/historias/el-sueno-comenzo-en-la-puerta-de-una-oficina/` | Propuesta de Linda Armas sobre su vocación; pieza final, imágenes y créditos pendientes. CTA futuro: explorar recorridos o consultar. | Sinopsis, no artículo terminado ni fecha inventada; ruta por aprobar. |
| Contacto `/es/contacto/` | WhatsApp principal, teléfono, correo, redes y dirección autorizados. Oficina exclusivamente con cita; respuesta según disponibilidad. | Datos en texto y destino de CTA internos; sin enlaces externos ni envío. |

## Idiomas y comportamiento futuro

- Se conserva el requisito de sitio público en **español e inglés**. `/es/` y `/en/` distinguirían las versiones, con rutas equivalentes y enlaces entre traducciones revisadas. Los segmentos ingleses quedan pendientes de traducción y aprobación; no se simula un selector funcional.
- Las tres propuestas están en español. La atención del personal es en español con apoyo de traducción; no se anuncia atención bilingüe fluida.
- En producción, “Solicitar cotización” conduciría al WhatsApp comercial, no a inventario ni reserva instantánea. La disponibilidad se confirma con proveedores; una reserva requiere pago acordado recibido y confirmación emitida.
- Las maquetas usan anclas y controles nativos `details`/`summary`, incluyendo menú móvil. Son archivos autónomos sin dependencias ni captura de datos. No representan páginas ya desplegadas.

## Bloqueos antes de publicar

| Pendiente | Límite en esta entrega |
| --- | --- |
| Marca e imágenes | Nombre como marca tipográfica, no sustituto del logotipo oficial. Obtener archivos originales, variantes y autorizaciones. Ilustraciones conceptuales etiquetadas; sin fotos de viajes ni testimonios inventados. Respetar permisos de personas y comunidades. |
| Tarifas y fichas | Se muestra “Solicitar cotización”. Resolver discrepancia entre resumen y tarifa detallada del Sumidero, impuestos y exhibición; aprobar precio final. Completar itinerario, encuentro, exclusiones y movilidad de El Chiflón y Palenque. |
| Condiciones y legal | Formalizar cambios, cancelaciones, reembolsos y plazos. Preparar Aviso de Privacidad y Términos y Condiciones con revisión jurídica. Vigencia RNT pendiente de verificar; no se dibujan sellos ni números. |
| Editorial y traducción | Linda Armas debe revisar y autorizar textos, historia, servicios, horarios, precios e imágenes. Completar primera historia, fotos y créditos; traducción inglesa revisada antes de habilitarla. |
| Validación visual | Revisión humana en canvas y posterior prueba real en navegadores, móvil de 390 px, escritorio de 1440 px y teclado. La comprobación estructural no acredita desbordamiento visual ni contraste medido en navegador. |

## Decisiones visuales propuestas, no identidad oficial

| Alternativa | Paleta de trabajo | Tipografía del sistema |
| --- | --- | --- |
| Catálogo | Papel `#f7f3e9`, verde `#233e36`, terracota `#94442c`, salvia `#e5e9dc`; ilustración `#d7a378`, `#758b73`; texto secundario `#526158`, líneas `#bbc4b6`, blanco cálido `#fffdf8`. | Georgia/Times New Roman para títulos; system-ui, -apple-system, Segoe UI para lectura. |
| Editorial | Papel `#faf4ec`, tinta `#482f30`, tierra `#874533`, arena `#eddfcf`; ilustración `#c89875`, `#a57e64`; texto secundario `#695454`, líneas `#c9b6a7`, blanco cálido `#fffdfa`. | Georgia/Times New Roman para títulos; system-ui, -apple-system, Segoe UI para lectura. |
| Acompañamiento | Papel `#f5f1e6`, verde `#263d3b`, tierra `#8d452d`, salvia `#e2e8df`, arena `#e9c89c`; ilustración `#8ca09a`; texto secundario `#536562`, líneas `#b6c1b9`, blanco cálido `#fffdf6`. | Georgia/Times New Roman para títulos; system-ui, -apple-system, Segoe UI para lectura. |

No se creó un sistema de diseño oficial. Cada HTML contiene todo su CSS y SVG; no usa imágenes, fuentes ni scripts externos. Las dimensiones del manifiesto (1440 × 1600) son ventanas de revisión, no el alto total de las páginas.

## Fuera de esta entrega

No se instala Django ni otra plataforma. Sin backend, administración, autenticación, registros internos, cálculos financieros, PDF, pagos, envío de formularios o reservas. La gestión interna retenida en la referencia no se elimina del alcance futuro: simplemente no se diseña ni implementa ahora. Sin automatización de WhatsApp, inventario en vivo ni portal de clientes.

**Siguiente decisión:** revisar las alternativas en canvas, confirmar la dirección y reunir los contenidos pendientes antes de planear la implementación pública.
